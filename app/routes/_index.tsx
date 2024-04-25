import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Command } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { ThemeToggle } from "./resources.theme-toggle";
import { Hero3DCard } from "~/components/hero-3d-card";
import { Card2 } from "~/components/card2";
import { SparklesCore } from "~/components/ui/sparkles";
import { TextGenerateEffect } from "~/components/ui/text-generate-effect";
import { LampDemo } from "~/components/ui/lamp";
import { CardStack } from "~/components/ui/card-stack"; 
import { VortexDemo } from "~/components/VortexDemo"; 

import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "~/components/ui/text-reveal-card";
import { AnimatedTooltipPreview } from "~/components/animated-preview";
import { HeroParallax } from "~/components/ui/hero-parallax";  // Corrected import path
import { AnimatedPinDemo } from "~/components/animated-3d-pin";


const stackCards = [
  {
    id: 1,

    content: (
<div>
  <h3 className="text-lg text-center font-bold pb-8">Bewitched🩸</h3>

  <ul className="list-disc list-inside text-left">

    <li>Skull</li>
    <li>Blood clot</li>
    <li>Thick Blood of degen </li>
    <li>Garlic</li>
    <li>Silver Spoon</li>
  </ul>
</div>

    )
  }
];
// Sample product data for HeroParallax
const sampleProducts = [
  { title: "", link: "/product-1", thumbnail: "https://i.ibb.co/wJy00Bd/Tweet1.gif" },
  { title: "", link: "/product-2", thumbnail: "https://i.ibb.co/zQZMZbv/Tweet3.png" },
  
  { title: "", link: "/product-3", thumbnail: "https://i.ibb.co/N9LPRtY/Tweet4.png" },
  { title: "", link: "/product-4", thumbnail: "https://i.ibb.co/CPBTGkf/Tweet5.png" },
  { title: "", link: "/product-5", thumbnail: "https://i.ibb.co/qJBPQtv/Tweet5.png" },
  { title: "", link: "/product-6", thumbnail: "https://i.ibb.co/6nV0m5Y/Tweet6.png" },
  { title: "", link: "/product-7", thumbnail: "https://i.ibb.co/HG7ncML/Tweet7.png" },
  { title: "", link: "/product-8", thumbnail: "https://i.ibb.co/28f50Jt/Tweet8.png" },
  { title: "", link: "/product-9", thumbnail: "https://i.ibb.co/gRdzgqT/Tweet9.png" },
  { title: "", link: "/product-10", thumbnail: "https://i.ibb.co/1fpGgND/Tweet10.png" },
  { title: "", link: "/product-5", thumbnail: "https://i.ibb.co/qJBPQtv/Tweet5.png" },

  { title: "", link: "/product-4", thumbnail: "https://i.ibb.co/CPBTGkf/Tweet5.png" },
  { title: "", link: "/product-3", thumbnail: "https://i.ibb.co/N9LPRtY/Tweet4.png" },
  { title: "", link: "/product-1", thumbnail: "https://i.ibb.co/wJy00Bd/Tweet1.gif" },
  { title: "", link: "/product-2", thumbnail: "https://i.ibb.co/zQZMZbv/Tweet3.png" },
];

export default function Index() {
  return (
    <section className="w-full min-h-screen flex flex-col">
<nav className="flex items-center justify-between p-4 w-full">

</nav>







   


  {/* <div className="flex items-center justify-center space-x-4"> 
  <div className="flex items-center justify-center  w-full">
    <TextRevealCard
      text="Hover to reveal"
      revealText="Radium is coming!"
      className="cursor-pointer md:w-full"
    />
  </div>
</div> */}


<div className="relative min-h-screen w-full">
      {/* Vortex as full-screen background */}
      <VortexDemo
        className="absolute top-0 left-0 min-h-screen min-w-full z-[-1]" // Combined the necessary styles into `className`
        backgroundColor="rgba(0,0,0,0.85)"  // Optional: Adjust the background color
        particleCount={700}
        baseSpeed={0.1}
        rangeSpeed={1.0}
        baseRadius={1}
        rangeRadius={2}
        rangeY={50}
        baseHue={220}
      />

      <section className="relative w-full min-h-screen flex flex-col z-10">
        {/* Navigation and content here, ensuring they are positioned relatively or absolutely as needed */}
        <nav className="flex items-center justify-between p-4 w-full">
          {/* Navigation Content */}
        </nav>

        <div className="flex items-center justify-center w-full">
          {/* Components like Hero3DCard and CardStack are hypothetical. Replace or define them as needed. */}
          <Hero3DCard />
          <CardStack items={stackCards} offset={30} scaleFactor={0.95} />
        </div>

      </section>
    </div>
          
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
<Link to="/" className="flex items-center space-x-2">
    <img src="https://i.ibb.co/Mg2n71t/logo.gif" alt="Logo" className="h-20 w-20 mr-2"/> {/* Logo Image */}
    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-extrabold bg-gradient-to-r from-red-800 via-red-300 to-red-50 text-transparent bg-clip-text bg-300% animate-gradient">$Bewitched</h1>
  </Link>
  </div>
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>

<h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-200">
            The{" "}
            <span className="font-extrabold bg-gradient-to-r from-pink-400 via-pink-300 to-pink-50 text-transparent bg-clip-text bg-300% animate-gradient">
            $Bewitched
            </span>{" "}
            Token PreSale is now live on {" "}
            <Link
              to="https://pump.fun/board"
              className="font-extrabold bg-gradient-to-r from-red-800 via-red-300 to-red-50 text-transparent bg-clip-text bg-300% animate-gradient hover:text-emerald-500"
            >
              Pump.fun
            </Link>
          </h1>



  
          <SparklesCore
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        particleColor="#FFC0CB"  // White particles
        particleDensity={10}     // Moderate density
        speed={3}                // Medium speed
        minSize={1}              // Minimum size of particles
        maxSize={3}              // Maximum size of particles
      />
          </div>


          <div className="flex items-center justify-center  w-full ">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
        <TextGenerateEffect words={"Bring Thick Blood, Clot of a jeet, Silver Spoon and ask yourself,You Degenrative lil punk are you prepared to be Bewitched, to surrender your soul and your SOL to the Solana Most Evil sinister Charms? "} />
     
        </div>

          </div>

          <div className="flex items-center justify-center  w-full ">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">


          

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <Card className="relative group overflow-hidden rounded-lg">

    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-300 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <Link to="https://twitter.com/bewitchedtoken">
        Twitter
        </Link>
        </div>
      </button>

  </Card>
  <Card className="relative group overflow-hidden rounded-lg">

    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-300 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <Link to="https://pump.fun/board">
          Pump.Fun
        </Link>
        </div>
      </button>

  </Card>
  <Card className="relative group overflow-hidden rounded-lg">

    <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-300 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <Link to="https://t.me/Bewitchedsol">
        Telegram
        </Link>
        </div>
      </button>

  </Card>
</div>



          </div>
          {/* <LampDemo />  */}
        </div>
        
<div className="flex items-center justify-between p-4 w-full">          <HeroParallax products={sampleProducts} />  {/* Full-width HeroParallax component */}</div>
    </section>
  );
}
