import { useState, useEffect } from 'react';
import { getEstudiantes } from '../services/estudiantesService';

export default function ListaEstudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    getEstudiantes().then(data => setEstudiantes(data));
  }, []);

  return (
    <section style={{ padding: '16px', border: '1px solid #cbd5e1', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>2. Lista de Estudiantes</h2>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '12px' }}>
        {estudiantes.map((e) => (
          <li 
            key={e.id} 
            style={{ 
              padding: '8px 12px', 
              borderBottom: '1px solid #f1f5f9',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span><strong>{e.nombre}</strong> — Nota: {e.nota}</span>
            <span style={{ color: e.nota >= 60 ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
              {e.nota >= 60 ? 'Aprobado' : 'Reprobado'}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}