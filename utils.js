const fs = require('fs');

function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', err => {
    if (err) {
      console.log(erro);
    }
  });
}
module.exports = {
  writeDataToFile,
};
