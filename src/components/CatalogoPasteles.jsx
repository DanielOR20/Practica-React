export default function CatalogoPasteles({ productos, verCategoria, setVerCategoria, toggleFavorito, oscuro }) {
  // Justificación: .filter() genera un nuevo arreglo según la categoría seleccionada con condiciones ternarias
  const productosFiltrados = productos.filter((p) =>
    verCategoria === 'todos'
      ? true
      : verCategoria === 'pasteles'
      ? p.categoria === 'pasteles'
      : p.categoria === 'postres'
  );

  // Helper de estilos para botones de filtro usando ternarios
  const botonEstilo = (cat) => ({
    padding: '8px 16px',
    marginRight: '8px',
    cursor: 'pointer',
    borderRadius: '8px',
    border: '1px solid #f43f5e',
    backgroundColor: verCategoria === cat ? '#f43f5e' : 'transparent',
    color: verCategoria === cat ? '#ffffff' : (oscuro ? '#fbcfe8' : '#be185d'),
    fontWeight: verCategoria === cat ? 'bold' : 'normal',
    transition: 'all 0.2s ease'
  });

  return (
    <section>
      {/* Botones de filtro de categorías con onClick y ternario */}
      <div style={{ marginBottom: '20px' }}>
        <button style={botonEstilo('todos')} onClick={() => setVerCategoria('todos')}>
          Todos los antojos
        </button>
        <button style={botonEstilo('pasteles')} onClick={() => setVerCategoria('pasteles')}>
          Pasteles
        </button>
        <button style={botonEstilo('postres')} onClick={() => setVerCategoria('postres')}>
          Postres individuales
        </button>
      </div>

      {/* Justificación: Ternario para mostrar mensaje vacío si no hay resultados en el filtro */}
      {productosFiltrados.length === 0 ? (
        <p style={{ color: '#888', fontStyle: 'italic', padding: '20px' }}>
          No hay opciones disponibles en esta categoría.
        </p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
          {/* Justificación: .map() transforma cada producto en una tarjeta JSX con su id único como key */}
          {productosFiltrados.map((item) => (
            <article
              key={item.id}
              style={{
                border: oscuro ? '1px solid #3d2d2a' : '1px solid #fce7f3',
                borderRadius: '12px',
                padding: '16px',
                backgroundColor: oscuro ? '#291e1b' : '#ffffff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.1rem', color: oscuro ? '#fbcfe8' : '#881337', marginBottom: '8px' }}>
                  {item.nombre}
                </h3>
                <p style={{ fontWeight: 'bold', fontSize: '1rem', color: oscuro ? '#f9a8d4' : '#be185d' }}>
                  ₡{item.precio.toLocaleString()}
                </p>

                {/* Justificación: Ternarios para indicar disponibilidad y recomendación del chef */}
                <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>
                  Estado:{' '}
                  <span style={{ color: item.disponible ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
                    {item.disponible ? 'Disponible para hoy' : 'Por encargo previo'}
                  </span>
                </p>
                <p style={{ fontSize: '0.8rem', color: item.calificacion >= 60 ? '#d97706' : '#64748b' }}>
                  {item.calificacion >= 60 ? '⭐ Especialidad de Yaha' : '🥣 Receta artesanal estándar'}
                </p>
              </div>

              {/* Justificación: onClick ejecuta la alternancia del estado y el ternario define texto y color */}
              <button
                onClick={() => toggleFavorito(item.id, item.favorito)}
                style={{
                  marginTop: '16px',
                  padding: '8px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  backgroundColor: item.favorito ? '#fb7185' : '#e2e8f0',
                  color: item.favorito ? '#ffffff' : '#334155',
                  transition: 'background-color 0.2s'
                }}
              >
                {item.favorito ? '❤️ Quitar de favoritos' : '🤍 Añadir a favoritos'}
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}