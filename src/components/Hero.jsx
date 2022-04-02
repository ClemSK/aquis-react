import React from 'react'
import KeyInfo from './KeyInfo'

const Hero = () => {
    return (
        <section className='hero-section'> 
            <div className='hero-container'>
                <div>
                    <h1>Black Sea Properties</h1>
                    <h3>AQSE Growth Market - AXS </h3>
                    <button>Watch Video</button>
                </div>
                <div className='bsp-link'>
                    <a href="https://www.blackseapropertyplc.com" target="_blank">blackseapropertyplc.com</a>
                </div>
                <div className='bsp-logo'>
                    <img src="https://aqse-logos.s3.eu-west-2.amazonaws.com/prod/BSP.png" alt="Black Sea Properties Logo" />
                </div>
                <div>
                    <KeyInfo />
                </div>
            </div>
        </section>
    )
}

export default Hero