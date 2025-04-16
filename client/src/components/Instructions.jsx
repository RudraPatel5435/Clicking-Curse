import React from 'react'
import '../instructions.css'
import { Link } from 'react-router'

const Instructions = () => {
    return(
        <div className='bg-[url(/dungeon-bg.jpeg)] bg-no-repeat bg-cover bg-center h-screen flex items-center justify-center'>
            <div className='container bg-zinc-800/80 rounded-lg p-10'>
                <div className='mb-10'>
                    <Link to="/" className='bg-orange-600 px-4 py-2 text-2xl rounded-md'>{"< Back"}</Link> 
                </div>
                <h1>📜 How to Play</h1>
                <div className="span">
                    Welcome to Clicking Curse – a fast-paced tapping adventure where every tap brings you closer to victory!
                </div>
                <h1>🎮 Game Objective</h1>
                <div className="span">
                    Defeat waves of monsters and bosses by clicking the screen. Earn coins, upgrade your power, and recruit allies to help you slay even faster!
                </div>
                <h1>🕹️ Controls</h1>
                <div className="span">
                    <li>Tap anywhere on the screen to attack enemies.</li>
                    <li>Earn coins by defeating enemies.</li>
                    <li>Use Special Abilities for powerful attacks (when unlocked).</li>
                    <li>Recruit heroes to fight automatically alongside you.</li>
                </div>
                <h1>Upgrades</h1>
                <div className="span">
                    <li>Increases damage per tap.</li>         
                    <li>Allies – Automatically attack enemies over time.</li>
                    <li>Abilities – Unlock and level up special powers like Frenzy Tap, Poison Cloud, or Time Freeze.</li>
                </div>
                <h1>Enemies and Bosses</h1>
                <div className="span">
                    <li>Normal Monsters – Defeat them quickly to progress.</li>
                    <li>Kings – After 9 normal monsters, a king will appear. It will be tougher and require fast tapping or ability use.</li>
                </div>
            </div>
        </div>
    )
}

export default Instructions
