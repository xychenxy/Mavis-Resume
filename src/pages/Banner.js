import React  from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Banner(){
    return (
        <>
            <div className='container-fluid banner-wrapper' id='banner'>
                <div className="row justify-content-center align-items-center banner">
                    <div className="col-10 col-md-6 mx-auto text-center text-white banner-container">
                        <h1 className='font-italic banner-pre'>Hey, I am</h1>
                        <h1 className='display-3 banner-name '><strong>Mavis Chen</strong></h1>
                    </div>
                </div>

                <Link
                    className="btn header-link primary-color"
                    activeClass="active"
                    to="navbar"
                    spy={true}
                    smooth={true}
                    // offset={}
                    duration= {1000}
                >
                    <span><i className="fas fa-arrow-down"></i></span>
                </Link>
            </div>

        </>


)
}