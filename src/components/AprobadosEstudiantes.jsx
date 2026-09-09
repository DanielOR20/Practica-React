import { useState, useEffect } from 'react';
import { getEstudiantes } from '../services/estudiantesService';

export default function AprobadosEstudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    getEstudiantes().then(data => setEstudiantes(data));
  }, []);

// Justificación: Se usa .filter() para crear un nuevo arreglo inmutable con los registros que cumplen la condición booleana (nota >= 60) antes del renderizado
const aprobados = estudiantes.filter((e) => e.nota >= 60);

  return (
    <section style={{ padding: '16px', border: '1px solid #cbd5e1', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>3. Solo los Aprobados</h2>
      <p style={{ marginTop: '8px', color: '#334155' }}>
        Total de estudiantes aprobados: <strong>{aprobados.length}</strong>
      </p>

      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '12px' }}>
        {aprobados.map((e) => (
          <li 
            key={e.id}
            style={{ 
              padding: '8px 12px', 
              borderBottom: '1px solid #f1f5f9',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span><strong>{e.nombre}</strong></span>
            <span style={{ color: '#16a34a', fontWeight: 'bold' }}>
              Nota: {e.nota} (Aprobado)
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}