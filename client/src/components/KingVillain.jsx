import React from 'react'
import behemoth_executioner from "../assets/king-villians-bg/king-behemoth_Executioner-removebg.png"
import chimera from "../assets/king-villians-bg/king-chimera-removebg.png"
import cursed_knight from "../assets/king-villians-bg/king-cursed-knight-removebg.png"
import demon_blacksmith from "../assets/king-villians-bg/king-demon-blacksmith-removebg.png"
import serpent_warlock from "../assets/king-villians-bg/king-serpent-warlock-removebg.png"
import stone_guardian from "../assets/king-villians-bg/king-stone-guardian-removebg.png"

const KingVillian= ({gameLevel}) => {
    const all_king_villians = [
        behemoth_executioner,
        chimera,
        cursed_knight,
        demon_blacksmith,
        serpent_warlock,
        stone_guardian
    ]

    const all_king_villians_name = [
        'Behemoth Executioner',
        "King Chimera",
        "King Cursed Knight",
        "Demon Blacksmith",
        "Serpent Warlock",
        "Stone Guardian"
    ]
    return(
        <>
        <div className='bg-red-500 text-5xl'>
            {all_king_villians_name[Math.floor((gameLevel/10)-1)]}
        </div>
        <div className='img'>
            <img src={all_king_villians[Math.floor((gameLevel/10)-1)]} />
        </div>

        </>
    )
}

export default KingVillian 
