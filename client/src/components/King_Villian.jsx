import React from 'react'
import behemoth_executioner from "../assets/king-villians-bg/king-behemoth_Executioner-removebg.png"
import chimera from "../assets/king-villians-bg/king-chimera-removebg.png"
import cursed_knight from "../assets/king-villians-bg/king-cursed-knight-removebg.png"
import demon_blacksmith from "../assets/king-villians-bg/king-demon-blacksmith-removebg.png"
import serpent_warlock from "../assets/king-villians-bg/king-serpent-warlock-removebg.png"
import stone_guardian from "../assets/king-villians-bg/king-stone-guardian-removebg.png"

const King_Villian= () => {
    const all_king_villians = [
        behemoth_executioner,
        chimera,
        cursed_knight,
        demon_blacksmith,
        serpent_warlock,
        stone_guardian
    ]
    return(
        <div>
        {all_king_villians.map((e, idx)=> (
            <img src={e} key={idx}/>
            ))}
        </div>
    )
}

export default King_Villian 
