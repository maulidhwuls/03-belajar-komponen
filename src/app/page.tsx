import { Gallery } from "@/components/gallery";
import Profile from "@/components/profile";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1>Ilmuwan Luar Biasa</h1>
        <div className= "mt-4 flex flex-row justify-between">
          <Gallery/>
        </div>
      </div>

    </main>
  );
}
