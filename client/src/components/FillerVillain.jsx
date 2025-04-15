import bone_herald from "../assets/filler-villians-bg/bone-herald-removebg.png"
import cursed_knight from "../assets/filler-villians-bg/cursed-knight-removebg.png"
import flame_cultist from "../assets/filler-villians-bg/flame-cultist-removebg.png"
import ghoul_archer from "../assets/filler-villians-bg/ghoul-archer-removebg.png"
import plague_alchemist from "../assets/filler-villians-bg/plague-alchemist-removebg.png"
import puppet_jesser from "../assets/filler-villians-bg/puppet-jesser-removebg.png"
import shadow_rogue from "../assets/filler-villians-bg/shadow-rogue-removebg.png"
import swamp_witch from "../assets/filler-villians-bg/swamp-witch-removebg.png"
import ashen_monk from "../assets/filler-villians-bg/ashen-monk-removebg.png"

const FillerVillian = ({ gameLevel }) => {
    const all_filler_villians = [
        bone_herald,
        ashen_monk,
        cursed_knight,
        flame_cultist,
        ghoul_archer,
        plague_alchemist,
        puppet_jesser,
        shadow_rogue,
        swamp_witch
    ]
    const all_filler_villians_name = [
        "Bone Herald",
        "Ashen Monk",
        "Cursed Knight",
        "Flame Cultist",
        "Ghoul Archer",
        "Plague Alchemist",
        "Pupper Jesser",
        "Shadow Rogue",
        "Swamp Witch"
    ]
    return (
        <>
            <div className='text-5xl'>
                {all_filler_villians_name[Math.floor((gameLevel % 10) - 1)]}
            </div>
            <div className='mt-[150px]'>
                <img src={all_filler_villians[Math.floor((gameLevel % 10) - 1)]} />
            </div>
        </>
    )
}

export default FillerVillian 
