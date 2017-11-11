const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.resolve(__dirname, './builder/tasks'));

files.forEach((task) => {
  require(`${__dirname}/builder/tasks/${task}`);
});
