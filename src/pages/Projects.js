import React, {Component} from 'react';
import Title from "../components/Title";
import projectImg from '../images/bg.jpg'
export default class Projects extends Component{
    render(){
        return(
            <>
                <div className="container-fluid mt-5 pt-5" id='projects'>
                    <Title title='Projects' subtitle='“You can do anything you set your mind to.”- Benjamin Franklin'/>


                    <div className="row mb-3">
                        <div className="col-10 col-md-6 mx-auto">
                            <div className="row">
                                <div className="col-7 ml-md-auto img">

                                    <a className="img-container" href='https://google.com' >
                                        <img src={projectImg} className="img-fluid img-container-bg" alt="..."/>
                                        <span className='img-container-link'><i className="fas fa-external-link-alt"></i></span>
                                        <h4 className='img-container-title'>
                                            Car Dealership
                                        </h4>
                                        <div className="img-container-underline"></div>
                                        <div className="img-container-text">
                                            <p>Bootstrap 4</p>
                                            <p>Contentful</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="col-10 col-md-6 mx-auto">
                            <div className="row">
                                <div className="col-7 mr-md-auto img">

                                    <a className="img-container" href='https://google.com' >
                                        <img src={projectImg} className="img-fluid img-container-bg" alt="..."/>
                                        <span className='img-container-link'><i className="fas fa-external-link-alt"></i></span>
                                        <h4 className='img-container-title'>
                                            Car Dealership
                                        </h4>
                                        <div className="img-container-underline"></div>
                                        <div className="img-container-text">
                                            <p>Bootstrap 4</p>
                                            <p>Contentful</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-10 col-md-6 mx-auto">
                            <div className="row">
                                <div className="col-7 ml-md-auto img">

                                    <a className="img-container" href='https://google.com' >
                                        <img src={projectImg} className="img-fluid img-container-bg" alt="..."/>
                                        <span className='img-container-link'><i className="fas fa-external-link-alt"></i></span>
                                        <h4 className='img-container-title'>
                                            Car Dealership
                                        </h4>
                                        <div className="img-container-underline"></div>
                                        <div className="img-container-text">
                                            <p>Bootstrap 4</p>
                                            <p>Contentful</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="col-10 col-md-6 mx-auto">
                            <div className="row">
                                <div className="col-7 mr-md-auto img">

                                    <a className="img-container" href='https://google.com' >
                                        <img src={projectImg} className="img-fluid img-container-bg" alt="..."/>
                                        <span className='img-container-link'><i className="fas fa-external-link-alt"></i></span>
                                        <h4 className='img-container-title'>
                                            Car Dealership
                                        </h4>
                                        <div className="img-container-underline"></div>
                                        <div className="img-container-text">
                                            <p>Bootstrap 4</p>
                                            <p>Contentful</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            
            </>
        )
    }
}