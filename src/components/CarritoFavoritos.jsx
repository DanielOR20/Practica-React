import { useState, useEffect } from 'react';
import { getProductos, updateProductoFavorito } from '../services/productosService';

export default function CarritoFavoritos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((data) => setProductos(data));
  }, []);

  const toggleFavorito = (id, estadoActual) => {
    const nuevoEstado = !estadoActual;
    
    // Actualizamos localmente sin mutar el arreglo original usando .map()
    setProductos(
      productos.map((p) =>
        p.id === id ? { ...p, favorito: nuevoEstado } : p
      )
    );

    // Sincronizamos con db.json
    updateProductoFavorito(id, nuevoEstado);
  };

  // Filtramos solo los que tienen favorito en true
  const listaFavoritos = productos.filter((p) => p.favorito);

  return (
    <section style={{ padding: '16px', border: '1px solid #cbd5e1', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>5. Carrito de Favoritos (Reto Integrador)</h2>

      {/* Catálogo general de productos */}
      <h3 style={{ marginTop: '16px', fontSize: '1.1rem' }}>Catálogo de Productos</h3>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '8px' }}>
        {productos.map((prod) => (
          <li
            key={prod.id}
            style={{
              padding: '8px 12px',
              borderBottom: '1px solid #f1f5f9',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{prod.nombre}</span>
            {/* Ternario para texto y color del botón */}
            <button
              onClick={() => toggleFavorito(prod.id, prod.favorito)}
              style={{
                padding: '6px 12px',
                cursor: 'pointer',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: prod.favorito ? '#ef4444' : '#0284c7',
                color: '#ffffff',
              }}
            >
              {prod.favorito ? 'Quitar favorito' : 'Añadir favorito'}
            </button>
          </li>
        ))}
      </ul>

      {/* Sección exclusiva de favoritos */}
      <h3 style={{ marginTop: '20px', fontSize: '1.1rem' }}>
        Mis Favoritos ({listaFavoritos.length})
      </h3>

      {/* Ternario: si el contador es 0 muestra el mensaje vacío, sino renderiza la lista */}
      {listaFavoritos.length === 0 ? (
        <p style={{ color: '#64748b', fontStyle: 'italic', marginTop: '8px' }}>
          Aún no tienes favoritos
        </p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '8px' }}>
          {listaFavoritos.map((fav) => (
            <li
              key={fav.id}
              style={{
                padding: '6px 12px',
                backgroundColor: '#f8fafc',
                marginBottom: '4px',
                borderRadius: '4px',
              }}
            >
              ⭐ {fav.nombre}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}