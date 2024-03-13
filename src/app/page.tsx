import Bio from "@/components/bio";
import { Gallery } from "@/components/gallery";
import MyGallery from "@/components/mygallery";
import MyProfile from "@/components/myprofile";
import Profile from "@/components/profile";
import TodoList from "@/components/todolist";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan Luar Biasa</h1>
        <div className= "mt-4 flex flex-row justify-between">
          <Gallery/>
        </div>
        <div>
          <TodoList/>
        </div>
        <div>
          <br /> <MyProfile/>
        </div>
        
      </div>

    </main>
  );
}
