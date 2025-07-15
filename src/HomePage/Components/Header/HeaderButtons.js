import React from 'react'
import './HeaderStyles/HeaderButtons.css'

function HeaderButtons() {
    return (
        <>
            <div className='header-buttons'>
                <button className='header-button-reg'>cтворити акаунт та почати!</button>
                <button className='header-button-catalog'>каталог<img src='/HeaderCompImg/BtnVector.png' /></button>
            </div>
        </>
    )
}

export default HeaderButtons
