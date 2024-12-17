// Importa las dependencias necesarias
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButton } from './auth-button-client';

// Componente AuthButtonServer que se ejecuta en el servidor
export async function AuthButtonServer() {
    // Crea una instancia del cliente de Supabase para el servidor
    const supabase = createServerComponentClient({ cookies });

    // Obtiene la sesión actual del usuario
    const { data: { session } } = await supabase.auth.getSession();



    // Renderiza el componente AuthButton pasando la sesión como prop
    return <AuthButton session={session} />;
}