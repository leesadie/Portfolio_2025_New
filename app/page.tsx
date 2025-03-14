import Hero from "./components/hero/Hero";
import Hero_Sm from "./components/hero/Hero_Sm";

export default function Home() {
  return (
    <div>
      <div className="hidden lg:block">
        <Hero />
      </div>
      <div className="lg:hidden">
        <Hero_Sm />
      </div>
    </div>
  );
}
