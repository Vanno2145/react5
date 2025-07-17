import React from 'react'
import FirstCard from './Components/FirstCard'
import SecondCard from './Components/SecondCard'
import ThidCard from './Components/ThidCard'
import './../MainStyles/MainCard.css'

function Grid() {
    return (
        <>


            <div className='main-first-grid-wrap'>
                
                <div className='main-first-grid-container'>
                    <p className='main-first-grid-p'>знайди те, що шукаеш!</p>
                    <div className='main-first-grid'>
                        <div className='first-card'>
                            <FirstCard img='/MainCompImg/MainF.png'></FirstCard>
                        </div>
                        <div className='second-card'>
                            <SecondCard img='/MainCompImg/MainS.png'></SecondCard>
                        </div>
                        <div className='thid-card'>
                            <ThidCard img='/MainCompImg/MainT.png'></ThidCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grid
