export default function Navbar({ oscuro, setOscuro }) {
  // Justificación: Se utiliza operador ternario para alternar estilos de color según el modo activo
  const estiloNav = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: oscuro ? '#1e1614' : '#fff5f7',
    borderBottom: oscuro ? '1px solid #3d2d2a' : '1px solid #fecdd3',
    borderRadius: '12px',
    marginBottom: '24px'
  };

  return (
    <header style={estiloNav}>
      <div>
        <h1 style={{ fontSize: '1.5rem', color: oscuro ? '#fbcfe8' : '#be185d' }}>
          🍰 Yaha Pastry Studio
        </h1>
        {/* Justificación: Ternario para resolver el texto descriptivo del tema actual */}
        <p style={{ fontSize: '0.85rem', color: oscuro ? '#d6d3d1' : '#78716c' }}>
          Ambiente actual: {oscuro ? 'Modo Velada (Noche)' : 'Modo Dulce (Día)'}
        </p>
      </div>

      {/* Justificación: onClick invierte el booleano y el ternario define el texto y estilo del botón */}
      <button
        onClick={() => setOscuro(!oscuro)}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          borderRadius: '20px',
          border: 'none',
          fontWeight: 'bold',
          backgroundColor: oscuro ? '#fbcfe8' : '#be185d',
          color: oscuro ? '#1e1614' : '#ffffff',
          transition: 'all 0.2s ease'
        }}
      >
        {oscuro ? '☀️ Cambiar a Modo Día' : '🌙 Cambiar a Modo Noche'}
      </button>
    </header>
  );
}