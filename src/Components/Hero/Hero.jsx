import React from 'react';
import './Hero.css'
import CountUp from 'react-countup'

const Hero = () => {
    return ( 
        <section className='hero-wrapper'>
            <div className='hero-container'>


                <div className='hero-left'>

                    <div className='hero-title'>
                        <div className='orange-circle'/>
                        <h1>Discover <br />
                        Most Suitable <br />
                        Property</h1>
                    </div>

                    <div className='hero-des'>
                        <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className='search-bar'>
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>
                    
                    <div className='stats'>
                        <div className='flexColStart stat'>
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                                </span>
                                <span className='secondaryText'>
                                    Premium Product       
                               </span>
                        </div>

                        <div className='flexColStart stat'>
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                                </span>
                                <span className='secondaryText'>
                                    Happy Customers       
                               </span>
                        </div>

                        <div className='flexColStart stat'>
                            <span>
                                <CountUp end={9000} />
                                <span>+</span>
                                </span>
                                <span className='secondaryText'>
                                    Award Winnings        
                               </span>
                        </div>

                    </div>
                </div>


                <div className='hero-right'>
                    <div className='image-container'>
                        <img src="https://img.freepik.com/free-vector/sticker-template-with-single-house-isolated_1308-64529.jpg" alt="Not Found" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;
