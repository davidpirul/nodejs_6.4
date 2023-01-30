const client = require('../database/conexion.js')

const addPost = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts (titulo, img, descripcion) values ($1, $2, $3)";
  const valores = [titulo, img, descripcion];
  const resultado = await client.query(consulta, valores);
  return (resultado);
};

const showPost = async () => {
  const { rows } = await client.query("SELECT * FROM posts")
  return rows
};



module.exports = { addPost, showPost };