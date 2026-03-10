import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Treatments from "@/components/Treatments";
// import Prices from "@/components/Prices"; // Desactivado por ahora
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Treatments />
      {/* <Prices /> */}
      <Team />
      <Reviews />
      <Location />
      <FAQ />
    </main>
  );
}
