const API_URL = 'http://localhost:3001/estudiantes';

export const getEstudiantes = async () => {
  const respuesta = await fetch(API_URL);
  if (!respuesta.ok) {
    throw new Error('Error al obtener los estudiantes');
  }
  return await respuesta.json();
};