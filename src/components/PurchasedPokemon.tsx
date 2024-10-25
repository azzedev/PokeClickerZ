"use client"
import { BonbonContext } from "@/context/BonbonContext"
import { useContext } from "react"

const PurchasedPokemon = () => {
    const { purchasedPokemons } = useContext(BonbonContext)
    return(

        // padding shadow nouvelle couleur
            <div className="text-center h-full flex flex-col">
                <p className="h-10 text-red-950">Purchased Pokemons</p>
                <div className="grid grid-cols-4 text-center gap-4 min-h-40 px-2 text-white overflow-y-auto">
                    {purchasedPokemons.map((item) =>
                    <div key={item.purchaseId}>
                        <div className="flex flex-col justify-center items-center rounded-lg p-5 bg-white text-gray-900 shadow-md">
                            <div className="w-20 h-20">
                                <img src={item.image} alt="Pokemon" className="w-full h-full object-contain" />
                            </div>
                        
                            <p className="font-bold">{item.label}</p>
                            <p>bps : {item.bps}</p>
                        </div>
                        </div>
                    )}
                    
                </div>
            </div>

    )
}

export default PurchasedPokemon