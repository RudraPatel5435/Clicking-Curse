import { all_king_villians, all_king_villians_name } from "../ImgList/king_villains_det"

const KingVillian= ({gameLevel}) => {
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
