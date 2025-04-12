import React from 'react'
import bone_herald from "../assets/filler-villians-bg/bone-herald-removebg.png"
import cursed_knight from "../assets/filler-villians-bg/cursed-knight-removebg.png"
import flame_cultist from "../assets/filler-villians-bg/flame-cultist-removebg.png"
import ghoul_archer from "../assets/filler-villians-bg/ghoul-archer-removebg.png"
import plague_alchemist from "../assets/filler-villians-bg/plague-alchemist-removebg.png"
import puppet_jesser from "../assets/filler-villians-bg/puppet-jesser-removebg.png"
import shadow_rogue from "../assets/filler-villians-bg/shadow-rogue-removebg.png"
import swamp_witch from "../assets/filler-villians-bg/swamp-witch-removebg.png"

const Filler_Villian= () => {
    const all_filler_villians = [
        bone_herald,
        cursed_knight,
        flame_cultist,
        ghoul_archer,
        plague_alchemist,
        puppet_jesser,
        shadow_rogue,
        swamp_witch
    ]
    return(
        <div>
        {all_filler_villians.map((e, idx)=> (
            <img src={e} key={idx}/>
            ))}
        </div>
    )
}

export default Filler_Villian 
