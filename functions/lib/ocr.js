module.exports = (data) => {
  var text = '';
  const objectsDetected = []
  
  data.forEach(object => {
    const detected = {
      labels: [],
      text: [],
      number: [],
      logo: []
    };
    // console.log()
    // object.imagePropertiesAnnotation.dominantColors.colors.forEach(color => {
    //   console.log(color)
    // })
    object.logoAnnotations.forEach(logo => {
      if (detected.logo.findIndex(element => element.logo === logo.description) < 0) detected.logo.push({
        logo: logo.description,
        score: logo.score
      })
    })
    object.labelAnnotations.forEach(label => {
      // console.log(label)
      if (detected.labels.findIndex(element => element.label === label.description) < 0) detected.labels.push({
        label: label.description,
        score: label.score
      })
    })
    object.textAnnotations.forEach(text => {
      // console.log(text)
      if (text.description && text.description.trim()) {
        if (text.description.indexOf('\n') >= 0) {
          text.description.split('\n').forEach(snippet => {
            snippet = snippet.toLowerCase();
            if (snippet.trim()) {
              detected.text.push(snippet.trim())
              const number = parseFloat(snippet)
              if (!isNaN(number)) detected.number.push(number)
            }
          });
        } else {
          const desc = text.description.toLowerCase().trim()
          detected.text.push(desc)
          const number = parseFloat(text.description)
          if (!isNaN(number)) detected.number.push(number)
        }  
      }
    })
    object.fullTextAnnotation.text.split('\n').forEach(snippet => {
      snippet = snippet.toLowerCase();
      if (snippet.trim()) detected.text.push(snippet.trim())
      const number = parseFloat(snippet)
      if (!isNaN(number)) detected.number.push(number)
    })
    
    // console.log(detected);
    objectsDetected.push(detected);
  })
  return objectsDetected;
}