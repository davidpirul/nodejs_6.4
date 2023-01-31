const control = {}
const { addPost, showPost, updateLikes, deletePost } = require('../consultas/consulta.js')

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

control.put = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await updateLikes(id);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500);
  }
};

control.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePost(id);
    res.send(`Post ${req.params.id} eliminado`);
  } catch (error) {
    res.status(500).send(`Reintenta eliminar POST:${req.params.id}`);
  }
};

module.exports = control;
