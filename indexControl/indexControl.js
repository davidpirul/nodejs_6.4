const path = require('path');

const controlador = {
  show: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
  },
}

module.exports = controlador;