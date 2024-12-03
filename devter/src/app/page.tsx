import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import AuthButton from './components/auth-button-client';

export default async function Home() {
  // Crear el cliente de Supabase con las cookies de Next.js
  const supabase = createServerComponentClient({ cookies });

  

  // Realizar la consulta a la tabla 'posts'
  const { data: posts, error } = await supabase.from('posts').select();

  // Manejar errores si ocurre alguno
  if (error) {
    console.error('Error fetching posts:', error.message);
    return (
      <main className="text-center items-center">
        <h1>Error cargando posts</h1>
        <p>{error.message}</p>
      </main>
    );
  }

  // Mostrar los datos si la consulta es exitosa
  return (
    <main className="text-center items-center">
    
      <AuthButton />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
}

