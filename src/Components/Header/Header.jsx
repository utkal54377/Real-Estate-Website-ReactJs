import React from 'react';
import './Header.css';
// import { Link } from "react-router-dom";
// import { BiMenuAltRight } from 'react-icons/bi';

const Header = () =>{
    return (
        <section className="h-wrapper">
            <div className="h-container">
                {/* <img src="/homyz2.logo" alt="Image Not Found" width={100} /> */}
                <h1>Homyz</h1>

                <div className="flexcenter h-menu">
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button>
                    <a href="">Contact</a>
                    </button>
                </div>
            </div>
{/* 
            <div className='menu-icon'>
                <BiMenuAltRight size={30}/>

            </div> */}
        </section>
    )
}
export default Header;