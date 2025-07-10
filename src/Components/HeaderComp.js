import React from 'react'
import Header from './Header'
import HeaderInput from './HeaderInput'
import '../Styles/HeaderComp.css'
import HeaderAllCardsComp from './HeaderAllCardsComp'
import HeaderButtons from './HeaderButtons'
import HeaderAllForHome from './HeaderAllForHome'

function HeaderComp() {
    return (
        <div className='header-page'>
            <div className='top-slider-cont'>
                <div className='top-slider'>
                    <p>#вседлядому</p>
                    <p>#швидкотазручно</p>
                    <p>#buy now</p>
                    <p>#вседлядому</p>
                    <p>#швидкотазручно</p>
                    <p>#buy now</p>
                    <p>#вседлядому</p>
                    <p>#швидкотазручно</p>
                    <p>#buy now</p>
                    <p>#вседлядому</p>
                    <p>#швидкотазручно</p>
                    <p>#buy now</p>
                    <p>#вседлядому</p>
                    <p>#швидкотазручно</p>
                    <p>#buy now</p>
                    <p>#вседлядому</p>
                    <p>#швидкотазручно</p>
                    <p>#buy now</p>
                    <p>#вседлядому</p>
                    <p>#швидкотазручно</p>
                    <p>#buy now</p>
                    <p>#вседлядому</p>
                    <p>#швидкотазручно</p>
                    <p>#buy now</p>
                </div>
            </div>
            <Header />
            <div className='header-page-cont'>
                <HeaderInput />
            </div>
            <div className='header-text-cont'>
                <HeaderAllForHome />
            </div>
            <div className='header-cont'>
                <HeaderButtons />
                <HeaderAllCardsComp />
                <p>ЛОВИ МОМЕНТ | Знижки до 60% на вибрані категорії товарів!</p>
            </div>
        </div>
    )
}

export default HeaderComp
