import React from 'react'
import './HeaderStyles/Header.css'

function Header() {
    return (
        <>
            <div className='header'>
                <div className='header-left-part'>
                    <img src='/HeaderCompImg/Component.png'></img>
                    <img src='/HeaderCompImg/Union.png' alt='logo'></img>
                    <div className='header-nav'>
                        <nav className='header-nav nav'>
                            <p>Товары</p>
                            <p>Кiмнати</p>
                            <p>Дизайн</p>
                        </nav>
                    </div>
                </div>
                <div className='header-right-part'>
                    <div className='header-kiyv'>
                        <img src='/HeaderCompImg/Vector.png'></img>
                        <p>Київ</p>
                    </div>
                    <div className='header-login'>
                        <img src='/HeaderCompImg/Vector-1.png'></img>
                        <p>Привiт! Увiйдiть В Систему</p>
                    </div>
                    <div className='header-icons'>
                        <img src='/HeaderCompImg/Vector-3.png'></img>
                        <img src='/HeaderCompImg/Vector-2.png'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
