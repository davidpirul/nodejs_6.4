const control = {}
const { addPost, showPost } = require('../consultas/consulta.js')

control.index = () => {
  res.sendFile(__dirname, '../index.html');
};

control.get = async (req, res) => {
  const posts = await showPost();
  res.json(posts);
};

control.post = async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  const posts = await addPost(titulo, url, descripcion);
  res.json(posts);
};


module.exports = control;
