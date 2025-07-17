import React from 'react'
import './../../MainStyles/MainCard.css'


function FirstCard(props) {
    return (
        <>
            <div className='main-fgrid-card'>
                <img src={props.img} />
                <div className='collection-comp'>
                    <span></span>
                    <p>наша нова коллекцiя</p>
                    <img className='collection-comp-img' src={'/MainCompImg/Straight.png'}></img>
                </div>
            </div>
        </>
    )
}

export default FirstCard
