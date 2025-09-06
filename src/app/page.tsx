import { SocialMediaDock } from "@/components/FloatingDock";
import HeroMain from "@/components/hero-section/HeroMain";
import { PixelatedCanvasComp } from "@/components/hero-section/ImagePixelate";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return <>
  <div data-theme="light" className="bg-light"> 
  <Navbar />

  <main className="h-screen">

    <div><HeroMain /></div>

  </main>
  </div>

<SocialMediaDock/>
  </>
}
