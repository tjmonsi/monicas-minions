const imageToText = require('./storage/image-to-text');

exports.imageToText = imageToText;

// exports.imageToTextHttp = functions.https.onRequest((req, res) => {
//   const opts = {
//     projectId: 'monicas-minions',
//     keyFilename: './key.json'
//   };
//   const visionHttp = visionApi(opts)
//   const translateHttp = translateApi(opts)
//   const languageHttp = new languageApi(opts)
  
//   const image = {
//     image: {
//       source: {
//         // imageUri: 'gs://monicas-minions.appspot.com/image-to-text/23484861_10210780079718698_145909062_o.jpg'
//         // imageUri: 'gs://monicas-minions.appspot.com/image-to-text/23484867_10210780083278787_1233100132_o (1).jpg'
//         imageUri: 'gs://monicas-minions.appspot.com/image-to-text/23516029_10210781114544568_704545868_o.jpg'
//         // imageUri: 'gs://monicas-minions.appspot.com/image-to-text/23546948_10210781204986829_815769503_o.jpg'
//       }  
//     },
//     features: [
//       {
//         type: visionApi.v1.types.Feature.Type.TEXT_DETECTION
//       },
//       {
//         type: visionApi.v1.types.Feature.Type.DOCUMENT_TEXT_DETECTION
//       },
//       {
//         type: visionApi.v1.types.Feature.Type.FACE_DETECTION
//       },
//       {
//         type: visionApi.v1.types.Feature.Type.LABEL_DETECTION
//       },
//       {
//         type: visionApi.v1.types.Feature.Type.LOGO_DETECTION
//       },
//       {
//         type: visionApi.v1.types.Feature.Type.IMAGE_PROPERTIES
//       }
//     ]
//   }
  
//   var detected = {}
//   visionHttp
//     .annotateImage(image)
//     .then(data => {
//       const ocrData = ocr(data);
//       // console.log(ocrData.length)
//       detected = Object.assign({}, ocrData[0]);
//       const cur = currency(detected);
//       console.log(cur);
//       // console.log(detected.text.join(' '))
    
//       // return translateHttp.translate(detected.text.join(', '), 'en')
//       // data.forEach(da
//       //   console.log(datum)
//       //   // console.log(datum.textAnnotations)
//       //   // // console.log(datum.imagePropertiesAnnotation)
//       //   // datum.imagePropertiesAnnotation.dominantColors.colors.forEach(color => {
//       //   //   console.log(color)
//       //   // })
//       // })
//     })
//     // .then(data => {
//     //   console.log(data)
//     //   let translations = data[0];
//     //     translations = Array.isArray(translations)
//     //       ? translations.join(' ')
//     //       : translations;
//     //   const document = {
//     //     content: translations,
//     //     type: 'PLAIN_TEXT',
//     //     language: 'en'
//     //   };
      
//     //   return language.analyzeEntities({document})
//     // })
//     // .then(data => {
//     //   // console.log(data)
//     //   data.forEach(entity => {
//     //     entity.entities.forEach(item => {
//     //       item.mentions.forEach(mention => {
//     //         // console.log(mention)
//     //       })
//     //       // console.log(item)
          
//     //     })
//     //   })
      
//     // })
  
//   res.send('hello world');
// })



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
