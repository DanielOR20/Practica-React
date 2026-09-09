const API_URL = 'http://localhost:3001/productos';

export const getProductos = async () => {
  const respuesta = await fetch(API_URL);
  if (!respuesta.ok) {
    throw new Error('Error al obtener productos');
  }
  return await respuesta.json();
};

export const updateProductoFavorito = async (id, favorito) => {
  const respuesta = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ favorito }),
  });
  return await respuesta.json();
};