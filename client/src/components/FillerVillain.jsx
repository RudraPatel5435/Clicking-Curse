import { all_filler_villians, all_filler_villians_name } from "../ImgList/filler_villains_det"

const FillerVillian = ({ gameLevel }) => {
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
