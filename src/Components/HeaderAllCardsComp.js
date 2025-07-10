import React from 'react'
import HeaderCards from './HeaderCards'
import '../Styles/HeaderAllCards.css'

function HeaderAllCardsComp() {
    return (
        <>
            <div className='header-cards-cont'>
                <HeaderCards img = '/HeaderCompImg/HeaderCardsImg/Card1.png' name = 'подушки' price = '12$'/>
                <HeaderCards img = '/HeaderCompImg/HeaderCardsImg/Card2.png' name = 'ковдра' price = '30$'/>
                <HeaderCards img = '/HeaderCompImg/HeaderCardsImg/Card3.png' name = 'лiжко' price = '414$'/>
            </div>
        </>
    )
}

export default HeaderAllCardsComp
