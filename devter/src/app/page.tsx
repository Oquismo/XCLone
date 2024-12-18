import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "@/app/components/auth-button-server";
import { redirect } from "next/navigation";
import PostCard from "./components/post-card";


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
  .select("*, user:users(name, avatar_url, user_name)");

  return (
    
  
    <main className="flex min-h-screen flex-col items-center justify-between mt-20">
      <main className="mt-4 items-center justify-between">
        <AuthButtonServer />
        {
          posts?.map(post =>{
            const{
              id,
              user,
              content,
            } = post
            const{
              user_name: userName,
              name: userFullName,
              avatar_url: avatarUrl,
             
            } = user
            return(

            <PostCard 
            content={content}
            key={id} 
            userName={userName} 
            userFullName={userFullName} 
            avatar_url={avatarUrl}
            />
          ) 
          })
        }
        
        {/* <pre>
          {JSON.stringify(posts, null, 2)}
        </pre> */}
      </main>
    </main>
  
  );
}
