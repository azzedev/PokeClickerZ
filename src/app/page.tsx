import PokemonClicker from "@/components/PokemonClicker";
import PurchasedPokemon from "@/components/PurchasedPokemon";
import Shop from "@/components/Shop";
import { BonbonProvider } from "@/context/BonbonContext";

export default function Home() {
  return (
    <BonbonProvider>
      <div className="flex h-screen bg-indigo-500">
        <div className="w-1/3 bg-sky-950 flex justify-center items-center text-center"><PokemonClicker/></div>
        <div className="w-1/3 bg-gray-100"><PurchasedPokemon/></div>
        <div className="w-1/3 bg-rose-950"><Shop/></div>
      </div>
    </BonbonProvider>
  );
}
