import React from 'react'
import '../Styles/HeaderInput.css'

function HeaderInput() {
    return (
        <>
            <div className='header-input-search'>
                <img src='/HeaderCompImg/Search-icon.png'></img>
                <input type='text' placeholder='Пошук'></input>
            </div>
        </>
    )
}

export default HeaderInput
