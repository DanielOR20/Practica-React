import { useState, useEffect } from 'react';
import { getEstudiantes } from '../services/estudiantesService';

export default function FiltroEstudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [verModo, setVerModo] = useState('todos');

  useEffect(() => {
    getEstudiantes().then((data) => setEstudiantes(data));
  }, []);

  // Filtramos la lista usando condiciones ternarias anidadas según verModo
  const listaFiltrada = estudiantes.filter((e) =>
    verModo === 'todos'
      ? true
      : verModo === 'aprobados'
      ? e.nota >= 60
      : e.nota < 60
  );

  // Helper visual para botones con ternario según el botón activo
  const obtenerEstiloBoton = (modo) => ({
    padding: '8px 14px',
    marginRight: '8px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #0284c7',
    backgroundColor: verModo === modo ? '#0284c7' : '#ffffff',
    color: verModo === modo ? '#ffffff' : '#0284c7',
    fontWeight: verModo === modo ? 'bold' : 'normal',
  });

  return (
    <section style={{ padding: '16px', border: '1px solid #cbd5e1', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>4. Filtro con Botones</h2>

      {/* Botones selectores con onClick y estilos dinámicos por ternario */}
      <div style={{ marginTop: '12px', marginBottom: '16px' }}>
        <button style={obtenerEstiloBoton('todos')} onClick={() => setVerModo('todos')}>
          Todos
        </button>
        <button style={obtenerEstiloBoton('aprobados')} onClick={() => setVerModo('aprobados')}>
          Aprobados
        </button>
        <button style={obtenerEstiloBoton('reprobados')} onClick={() => setVerModo('reprobados')}>
          Reprobados
        </button>
      </div>

      {/* Ternario principal: evalúa si hay elementos o muestra "Sin resultados" */}
      {listaFiltrada.length === 0 ? (
        <p style={{ color: '#64748b', fontStyle: 'italic' }}>Sin resultados</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {/* Justificación: Se usa un ternario para renderizado condicional de la vista completa (mostrar 'Sin resultados' o la lista mapeada) según la longitud del arreglo */}
          {listaFiltrada.map((e) => (
            <li
              key={e.id}
              style={{
                padding: '8px 12px',
                borderBottom: '1px solid #f1f5f9',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span><strong>{e.nombre}</strong></span>
              <span style={{ color: e.nota >= 60 ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
                Nota: {e.nota} ({e.nota >= 60 ? 'Aprobado' : 'Reprobado'})
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}