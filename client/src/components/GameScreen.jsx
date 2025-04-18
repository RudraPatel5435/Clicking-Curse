import React, { useRef, useState } from 'react'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import KingVillian from './KingVillain'
import FillerVillian from './FillerVillain'

const GameScreen = () => {
    const healthRef = useRef()

    const [gameLevel, setGameLevel] = useState(1)
    // const [heroDamages, setHeroDamages] useState()
    const [currClickDamage, setCurrClickDamage] = useState(upgradeClickDamage(gameLevel))
    const [villianHealth, setVillianHealth] = useState(increaseVillainHealth(gameLevel))
    const [totalVillianHealth, setTotalVillianHealth] = useState(increaseVillainHealth(gameLevel))

    function increaseVillainHealth(fightNumber) {
        const baseHealth = 500;
        const scalingFactor = 1.15;

        if (fightNumber == 1) return baseHealth
        const scaledHealth = baseHealth * (scalingFactor ** fightNumber)
        return  Math.floor(fightNumber % 10 === 0 ? scaledHealth * 1.5 : scaledHealth)
    }


    const attackingEnemy = () => {
        const newHealth = villianHealth - currClickDamage;
        setVillianHealth(newHealth);

        if (newHealth <= 0) {
            const nextLevel = gameLevel + 1;
            setGameLevel(nextLevel);
            setVillianHealth(increaseVillainHealth(nextLevel));
            setTotalVillianHealth(increaseVillainHealth(nextLevel));
        }
    }


    function upgradeClickDamage(upgradeLevel) {
        const baseClickDamage = 50;
        if (upgradeLevel == 1) return baseClickDamage
        return Math.floor(baseClickDamage * (1.5 ** (upgradeLevel - 1)));
    }


    useGSAP(() => {
        gsap.to(healthRef.current, {
            width: `${(villianHealth / totalVillianHealth) * 500}px`,
        })
    }, [villianHealth])

    return (
        <div onClick={attackingEnemy} className='bg-[url(/scene-1.jpeg)] bg-cover bg-no-repeat min-h-screen '>
            <div>
                <div className='h-[24px] w-[504px] border-2 border-green-700'><div ref={healthRef} className='h-[20px] w-[500px] bg-green-500'></div></div>
                <div className='text-3xl'>{villianHealth}</div>
            </div>
            {
                gameLevel % 10 == 0 ?
                    (
                        <KingVillian gameLevel={gameLevel} />
                    ) :
                    (
                        <FillerVillian gameLevel={gameLevel} />
                    )
            }
        </div>
    )
}

export default GameScreen
