import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "@/app/components/auth-button-server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session === null) {
    redirect("/login");
  }

  const { data: posts } = await supabase
  .from("posts")
  .select("*, auth.users(email");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-20">
      <main className="mt-4 items-center justify-between">
        <AuthButtonServer />
        
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </main>
    </main>
  );
}
