const client = require('../database/conexion.js')

const addPost = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, DEFAULT)";
  const valores = [titulo, img, descripcion];
  const resultado = await client.query(consulta, valores);
  return (resultado);
};

const showPost = async () => {
  const { rows } = await client.query("SELECT * FROM posts")
  return rows
};

const updateLikes = async (id) => {
  const command = "UPDATE posts SET likes=likes+1 WHERE id=$1";
  const values = [id]
  const resultado = await client.query(command, values);
  return (resultado)
};

const deletePost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id=$1";
  const resultado = await client.query(consulta, [id]);
  return (resultado)
};


module.exports = { addPost, showPost, updateLikes, deletePost };