import React from 'react'
import "./Hero.css";

function Hero() {

  return (
    <div className='hero'>
        <img alt ="HeroImg" src='https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg'/>
         <div className='hero-text'>
            <h1>Welcome to </h1>PocketSHop
            <p>Explore a world of style, quality, and unbetable value.
                <br/> Start shopping now!</p>
         </div>
    </div>
  )
}

export default Hero;
