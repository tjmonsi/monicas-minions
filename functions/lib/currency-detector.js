module.exports = (detected) => {
  if (detected.labels.findIndex(label => (label.label === 'money' ||
    label.label === 'cash' ||
    label.label === 'currency'
  ) && label.score >= 0.75 ) >= 0) {
    const currency = {
      'twenty': 0,
      'fifty': 0,
      'onehundred': 0,
      'twohundred': 0,
      'fivehundred': 0,
      'onethousand': 0
    };
    
    detected.number.forEach(number => {
      if (number === 20) currency.twenty++
      if (number === 50) currency.fifty++
      if (number === 100) currency.onehundred++
      if (number === 200) currency.twohundred++
      if (number === 500) currency.fivehundred++
      if (number === 1000) currency.onethousand++
    })
    
    detected.text.forEach(text => {
      if (text.indexOf('dalawampung') >= 0) currency.twenty++
      if (text.indexOf('limampung') >= 0) currency.fifty++
      if (text.indexOf('sandaang') >= 0) currency.onehundred++
      if (text.indexOf('dalawangdaang') >= 0) currency.twohundred++
      if (text.indexOf('limandaang') >= 0) currency.fivehundred++
      if (text.indexOf('sanlibong') >= 0) currency.onethousand++  
    })
    
    return currency;
  }
}