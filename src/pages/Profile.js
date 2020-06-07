import React from 'react';
import Title from "../components/Title";
export default function Profile(){
    return (
        <>
            <div className="container mt-5" id='profile'>

                <Title title={"Profile"} subtitle={'"I am a web developer"'}/>

                <div className="row">
                    <div className="col-10 col-md-6 mb-5 px-5">
                        <div className="row">
                            <div className="col col-md-9 ml-md-auto">
                                <h3 className='about-me-title text-capitalize mt-5'>About me</h3>
                                <p>
                                    I'm a junior programmer with good knowledge of front-end and back-end techniques.
                                </p>
                                <p>
                                    I have a passion for web design and love to create for web and mobile devices.
                                </p>
                                <p>
                                    I like to spend time fixing small details and optimizing web applications.
                                </p>
                                <p>
                                    Enjoy the fun of teamwork, because we can learn from each other and grow.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 my-5">
                        <div className="about-img-container"></div>
                    </div>

                </div>
            </div>
        </>
    )
}