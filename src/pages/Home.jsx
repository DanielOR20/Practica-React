import { useState, useEffect } from 'react';
import { getProductos, updateProductoFavorito } from '../services/pasteleriaService';
import Navbar from '../components/Navbar';
import CatalogoPasteles from '../components/CatalogoPasteles';
import FavoritosPanel from '../components/FavoritosPanel';

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [oscuro, setOscuro] = useState(false);
  const [verCategoria, setVerCategoria] = useState('todos');

  useEffect(() => {
    getProductos().then((data) => setProductos(data));
  }, []);

  const toggleFavorito = (id, estadoActual) => {
    const nuevoEstado = !estadoActual;

    // Justificación: .map() para generar un nuevo arreglo inmutable con el item actualizado
    setProductos(
      productos.map((p) =>
        p.id === id ? { ...p, favorito: nuevoEstado } : p
      )
    );

    // Actualización asíncrona en db.json
    updateProductoFavorito(id, nuevoEstado);
  };

  const estiloContenedor = {
    minHeight: '100vh',
    backgroundColor: oscuro ? '#120d0b' : '#fafafa',
    color: oscuro ? '#f5f5f4' : '#1c1917',
    padding: '24px',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };

  return (
    <div style={estiloContenedor}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Encabezado con Interruptor de tema */}
        <Navbar oscuro={oscuro} setOscuro={setOscuro} />

        {/* Catálogo con filtros de categorías, tarjetas map y ternarios */}
        <CatalogoPasteles
          productos={productos}
          verCategoria={verCategoria}
          setVerCategoria={setVerCategoria}
          toggleFavorito={toggleFavorito}
          oscuro={oscuro}
        />

        {/* Panel de favoritos con filter + map y contador ternario */}
        <FavoritosPanel
          productos={productos}
          toggleFavorito={toggleFavorito}
          oscuro={oscuro}
        />
      </div>
    </div>
  );
}