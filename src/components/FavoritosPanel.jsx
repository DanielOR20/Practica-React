export default function FavoritosPanel({ productos, toggleFavorito, oscuro }) {
  // Justificación: .filter() aísla únicamente los postres marcados como favoritos
  const favoritos = productos.filter((p) => p.favorito);

  return (
    <aside
      style={{
        marginTop: '32px',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: oscuro ? '#291e1b' : '#fff1f2',
        border: oscuro ? '1px solid #3d2d2a' : '1px solid #fecdd3'
      }}
    >
      <h2 style={{ fontSize: '1.3rem', color: oscuro ? '#fbcfe8' : '#be185d', marginBottom: '12px' }}>
        🛍️ Mis Antojos Favoritos ({favoritos.length})
      </h2>

      {/* Justificación: Ternario para verificar si hay favoritos o mostrar el aviso vacío */}
      {favoritos.length === 0 ? (
        <p style={{ color: oscuro ? '#a8a29e' : '#9f1239', fontStyle: 'italic' }}>
          Aún no tienes postres favoritos. ¡Haz clic en el corazón de cualquier pastel!
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {/* Justificación: .map() encadenado para renderizar la lista de favoritos */}
          {favoritos.map((fav) => (
            <li
              key={fav.id}
              style={{
                backgroundColor: oscuro ? '#1e1614' : '#ffffff',
                padding: '8px 14px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                color: oscuro ? '#fbcfe8' : '#881337',
                fontSize: '0.9rem'
              }}
            >
              <span>🍰 {fav.nombre} (₡{fav.precio.toLocaleString()})</span>
              <button
                onClick={() => toggleFavorito(fav.id, fav.favorito)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#ef4444',
                  fontWeight: 'bold'
                }}
                title="Quitar"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}