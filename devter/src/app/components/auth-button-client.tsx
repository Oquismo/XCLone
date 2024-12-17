"use client";

// Importa las dependencias necesarias
import { type Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

// Componente AuthButton que recibe una sesión como prop
export function AuthButton({ session }: { session: Session | null }) {

  // Crea una instancia del cliente de Supabase
  const supabase = createClientComponentClient({});
  // Hook de Next.js para la navegación
  const router = useRouter();

  // Función para manejar el inicio de sesión con OAuth (GitHub)
  const handleSingIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback", // URL de redirección después del inicio de sesión
      },
    });
  };

  // Función para manejar el cierre de sesión
  const handleSingOut = async () => {
    await supabase.auth.signOut();
    router.push('/'); // Redirecciona al home después de cerrar sesión
  };

  // Renderiza el componente
  return (
    <header className="flex flex-col items-center">
        {
            // Si no hay sesión, muestra el botón de iniciar sesión
            session === null ? (
                <button onClick={handleSingIn}
                type="button"
                className="mt-11 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              > iniciar sesion con Github
              </button>
            )
            // Si hay sesión, muestra el botón de cerrar sesión
            : <button onClick={handleSingOut} className="mt-18 text-center">Cerrar Sesion</button>
        }
    </header>
  );
}
