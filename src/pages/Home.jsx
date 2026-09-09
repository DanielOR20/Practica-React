import InterruptorTema from '../components/InterruptorTema';
import ListaEstudiantes from '../components/ListaEstudiantes';
import AprobadosEstudiantes from '../components/AprobadosEstudiantes';
import FiltroEstudiantes from '../components/FiltroEstudiantes';

export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
      <h1>Práctica React: Control de Flujo</h1>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>
        Ternarios, .map(), .filter() y onClick
      </p>

      {/* Ejercicio 1 */}
      <InterruptorTema />

      {/* Ejercicio 2 */}
      <ListaEstudiantes />

      {/* Ejercicio 3 */}
      <AprobadosEstudiantes />

      {/* Ejercicio 4 */}
      <FiltroEstudiantes />
    </main>
  );
}