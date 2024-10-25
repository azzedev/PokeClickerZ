"use client"
import { BonbonContext, ShopPokemonType } from "@/context/BonbonContext";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

const ShopPokemons: ShopPokemonType[] = [
    {
        id:1,
        label:"charmander",
        price:10,
        bps:1,
        image:"/charmander.png"
    },
    {
        id:2,
        label:"charmelon",
        price:100,
        bps:11,
        image:"/charmeleon.png"
    },
    {
        id:3,
        label:"charizard",
        price:1000,
        bps:110,
        image:"/charizard.png"
    }
]

const Shop = () => {
    const { bonbons, setBonbons, setPurchasedPokemons, setTotalBps} = useContext(BonbonContext);

    const buyPokemon = (item: ShopPokemonType ) => {
        if (bonbons >= item.price) {
            setBonbons(bonbons - item.price)
            setPurchasedPokemons((prevPurchasedPokemons) => [
                ...prevPurchasedPokemons,
                { ...item, purchaseId: uuidv4() },
            ]);
            // Se renseigner sur les useReducer
            setTotalBps(prevTotalBps => prevTotalBps + item.bps);

        } else {
            alert("Tu es pauvre l'ami")
        }
    }

    return(
        
        <div >
            {ShopPokemons.map((item) => (
                <div key={item.id} className="flex items-center space-x-4	">
                    <div>
                    <img src={item.image} alt={item.label} width="100" height="100" />
                    </div>
                    <div className="flex-col">
                        <p>{item.label}</p>
                        <div className="flex">
                            <p>price {item.price} - </p>
                            <p>&nbsp; bps {item.bps}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => buyPokemon(item)}
                        className="ml-auto bg-rose-900 text-white px-4 py-2"
                        >
                            Acheter
                    </button>
                </div>
            )
        )}
        </div>
    )
}

export default Shop;