"use client"
import React, { createContext, ReactNode, useState } from "react";

interface BonbonContextType {
    bonbons:number,
    setBonbons: React.Dispatch<React.SetStateAction<number>>;
}

export const BonbonContext = createContext<BonbonContextType>({
    bonbons:0,
    setBonbons: () => {},
})

interface BonbonProviderProps {
    children: ReactNode;
}

export const BonbonProvider  = ({ children }: BonbonProviderProps ) => {
    const [bonbons, setBonbons] = useState<number>(0)

    return <BonbonContext.Provider value={{bonbons,setBonbons}}>
        { children } {/* permet de fournir le provider a l'ensemble de ses enfants */}
    </BonbonContext.Provider>
}