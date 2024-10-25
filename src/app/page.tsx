import PokemonClicker from "@/components/PokemonClicker";
import { BonbonProvider } from "@/context/BonbonContext";

export default function Home() {
  return (
    <BonbonProvider>
      <div className="flex h-screen bg-indigo-500">
        <div className="w-1/3 bg-sky-950 flex justify-center items-center text-center"><PokemonClicker/></div>
        <div className="w-1/3 bg-violet-50"></div>
        <div className="w-1/3 bg-rose-950"></div>
      </div>
    </BonbonProvider>
  );
}
