import { useState } from 'react';

export default function InterruptorTema() {
  // Estado inicial sugerido por la práctica
  const [oscuro, setOscuro] = useState(false);

  // Estilos visuales resueltos con operador ternario
  const estiloCaja = {
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: oscuro ? '#1e293b' : '#f1f5f9',
    color: oscuro ? '#f8fafc' : '#0f172a',
    marginBottom: '20px'
  };

  return (
    <section style={estiloCaja}>
      <h2>1. Interruptor de Tema</h2>

      {/* Justificación: Se usa operador ternario porque dentro del JSX no se permite 'if'; el ternario retorna una expresión directamente para alternar el texto del botón y el tema */}
      <button
        onClick={() => setOscuro(!oscuro)}
        style={{ padding: '8px 16px', cursor: 'pointer', marginTop: '10px' }}
      >
        {oscuro ? 'Modo claro' : 'Modo oscuro'}
      </button>

      {/* Párrafo con el tema actual resuelto mediante operador ternario */}
      <p style={{ marginTop: '10px' }}>
        Tema actual: {oscuro ? 'Oscuro' : 'Claro'}
      </p>
    </section>
  );
}