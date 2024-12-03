"use client";

import { type Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";

 

export function AuthButton({ session }: { session: Session | null }) {

  const supabase = createClientComponentClient({});

  const handleSingIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  const handleSingOut = async () => {
    await supabase.auth.signOut();
  };



  return (
    <header>
        {
            session === null ?(
                <button onClick={handleSingIn}
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              > iniciar sesion con Github
              </button>

            )
            : <button onClick={handleSingOut}>Cerrar Sesion</button>
        }

    </header>
  );
}