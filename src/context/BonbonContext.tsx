    "use client"
    import React, { createContext, ReactNode, useEffect, useState } from "react";


    interface BonbonContextType {
        bonbons: number;
        setBonbons: React.Dispatch<React.SetStateAction<number>>;
        purchasedPokemons: PurchasedPokemonType[];
        setPurchasedPokemons: React.Dispatch<React.SetStateAction<PurchasedPokemonType[]>>; 
        totalBps: number;
        setTotalBps: React.Dispatch<React.SetStateAction<number>>;
    }

    export const BonbonContext = createContext<BonbonContextType>({
        bonbons:0,
        setBonbons: () => {},
        purchasedPokemons: [],
        setPurchasedPokemons: () => {},
        totalBps:0,
        setTotalBps: () => {},
    })

    interface BonbonProviderProps {
        children: ReactNode;
    }


    export interface ShopPokemonType {
        id: number;
        label: string;
        price: number;
        bps: number;
        image: string; 
    }
    export interface PurchasedPokemonType extends ShopPokemonType {
        purchaseId: string;
    }
    

        

    export const BonbonProvider  = ({ children }: BonbonProviderProps ) => {
        const [bonbons, setBonbons] = useState<number>(0)
        const [purchasedPokemons, setPurchasedPokemons] = useState<PurchasedPokemonType[]>([]);
        const [totalBps, setTotalBps] = useState<number>(0)
        useEffect(() => {
            const interval = setInterval(() => {
                setBonbons((prevBonbons) => prevBonbons + (totalBps / 10));
            }, 100);    
            return () => clearInterval(interval);
        }, [totalBps]);

        return <BonbonContext.Provider value={{bonbons,setBonbons,purchasedPokemons, setPurchasedPokemons,totalBps, setTotalBps}}>
            { children } {/* permet de fournir le provider a l'ensemble de ses enfants */}
        </BonbonContext.Provider>
    }