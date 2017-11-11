const functions = require('firebase-functions');
const admin = require('firebase-admin');
const visionApi = require('@google-cloud/vision');
// const languageApi = require('@google-cloud/language').LanguageServiceClient;
// const translateApi = require('@google-cloud/translate');
// const translate = translateApi();
// const language = new languageApi();
const vision = visionApi();
const ocr = require('../lib/ocr');
const currency = require('../lib/currency-detector');
admin.initializeApp(functions.config().firebase);

module.exports = functions.storage.object().onChange(event => {
  const object = event.data;
  // const file = gcs.bucket(object.bucket).file(object.name);

  // Exit if this is triggered on a file that is not an image.
  if (!object.contentType.startsWith('image/')) {
    console.log('This is not an image.');
    return Promise.resolve();
  }

  // Exit if this is a move or deletion event.
  if (object.resourceState === 'not_exists') {
    console.log('This is a deletion event.');
    return Promise.resolve();
  }
  
  if (!object.name.startsWith('image-to-text/')) {
    console.log('Not uploaded to image to text');
    return Promise.resolve();
  }
  
  const image = {
    source: {imageUri: `gs://${object.bucket}/${object.name}`}
  }
  
  const file = {
    image,
    features: [
      {
        type: visionApi.v1.types.Feature.Type.TEXT_DETECTION
      },
      {
        type: visionApi.v1.types.Feature.Type.DOCUMENT_TEXT_DETECTION
      },
      {
        type: visionApi.v1.types.Feature.Type.LABEL_DETECTION
      },
      {
        type: visionApi.v1.types.Feature.Type.LOGO_DETECTION
      },
      {
        type: visionApi.v1.types.Feature.Type.IMAGE_PROPERTIES
      }
    ]
  }
  
  return vision
    .annotateImage(file)
    .then(data => {
      const ocrData = ocr(data);
      const detected = Object.assign({}, ocrData[0]);
      const cur = currency(detected);
      
      const updates = {}
      
      const name = object.name.replace('.', '-')
      
      updates[`${name}/path`] = object.name
      updates[`${name}/imageUri`] = `gs://${object.bucket}/${object.name}`
      updates[`${name}/currency`] = cur
      // = detected.labels
      
      detected.labels.forEach(label => {
        updates[`${name}/labels/${label.label}`] = parseInt(label.score * 100, 10)
        if (parseInt(label.score * 100, 10) < 50) {
          updates[`typeNames/${label.label}`] = true;
          updates[`types/${label.label}/${name.replace('image-to-text/','')}`] = parseInt(label.score * 100, 10)  
        }
      })
      
      if (cur) {
        var max = 0;
        var maxElement = null;
        for (var i in cur) {
          if (cur[i]) {
            if (cur[i] > max) {
              max = cur[i];
              maxElement = i;
            }
            updates[`typeNames/philippine-currency-${i}`] = true;
            updates[`types/philippine-currency-${i}/${name.replace('image-to-text/','')}`] = cur[i]  
          }
        }      
        
        var text = ''
        if (maxElement === 'twenty') text += '20 Philippine Pesos'
        if (maxElement === 'fifty') text += '50 Philippine Pesos'
        if (maxElement === 'onehundred') text += '100 Philippine Pesos'
        if (maxElement === 'twohundred') text += '200 Philippine Pesos'
        if (maxElement === 'fivehundred') text += '500 Philippine Pesos'
        if (maxElement === 'onethousand') text += '1000 Philippine Pesos'
        
        updates[`${name}/text`] = text + ', detected.';  
      }
      
      // console.log('hey')
      return admin.database().ref().update(updates);
    })
    .catch(e => {
      console.log(e)
      return Promise.reject();
    })
});