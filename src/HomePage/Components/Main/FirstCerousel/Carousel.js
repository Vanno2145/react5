import React from 'react'
import './../MainStyles/MainCarousel.css'
import { CarouselCaption } from 'react-bootstrap'

function Carousel() {
    
    return (
        <>
            <CarouselCaption>
                <div className='main-first-carousel'>
                    <img className='main-img-carousel' src='/MainCompImg/FirstCarousel/1.png'></img>
                    <img className='main-img-carousel' src='/MainCompImg/FirstCarousel/2.png'></img>
                    <img className='main-img-carousel' src='/MainCompImg/FirstCarousel/3.png'></img>
                    <img className='main-img-carousel' src='/MainCompImg/FirstCarousel/4.png'></img>
                    <img className='main-img-carousel' src='/MainCompImg/FirstCarousel/5.png'></img>
                    <img className='main-img-carousel' src='/MainCompImg/FirstCarousel/6.png'></img>
                    <img className='main-img-carousel' src='/MainCompImg/FirstCarousel/7.png'></img>
                </div>
            </CarouselCaption>
        </>
    )
}

export default Carousel
