import React from 'react'
import '../Styles/HeaderCards.css'

function HeaderCards(props) {
    return (
        <>
            <div className='header-card'>
                <div className='top-circle'>
                    <h3 className='h3-top'>TOP</h3>
                </div>
                <img src={props.img}></img>
                <div className='about-card'>
                    <h3>{props.name}</h3>
                    <p>спальна кiмната...</p>
                    <h2>{props.price}</h2>
                </div>
            </div>
        </>
    )
}

export default HeaderCards
