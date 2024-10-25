"use client"
import { BonbonContext } from "@/context/BonbonContext";
import Image from "next/image";
import { useContext } from "react";


const PokemonClicker = () => {

    const { bonbons, setBonbons, totalBps } = useContext(BonbonContext)

    const handleClick = () => {
        setBonbons(bonbons + 1)
    }
    
    return(
        <div>
            <p>Bonbons : { Math.floor(bonbons) }</p>
            <p>total Bps : { totalBps }</p>
            <Image
                src="/pokeball.png"
                alt="Pokeball"
                width={300}
                height={300}
                className="cursor-pointer"
                onClick={(handleClick)}
            />
        </div>
    )
}
export default PokemonClicker;