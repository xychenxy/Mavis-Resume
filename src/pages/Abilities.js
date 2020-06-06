import React, {Component} from 'react';
import Title from "../components/Title";
export default class Abilities extends Component{
    render(){
        return(
            <>
                <div className="container-fluid" id='abilities'>
                    <Title title="ability" subtitle='“Life without knowledge is death in disguise.”'/>

                    <div className="row">
                        <div className="col-10 mx-auto col-md-6">
                            <div className="row">
                                <div className="col-10 col-md-8 ml-md-auto d-flex justify-content-between">
                                    <p>Bootstrap Framework</p>
                                    <div className='skills-icons'>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-no'><i className="fas fa-star"></i></span>
                                    </div>
                                </div>
                                <div className="col-10 col-md-8 ml-md-auto d-flex justify-content-between">
                                    <p>Bootstrap Framework</p>
                                    <div className='skills-icons'>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-no'><i className="fas fa-star"></i></span>
                                    </div>
                                </div>
                                <div className="col-10 col-md-8 ml-md-auto d-flex justify-content-between">
                                    <p>Bootstrap Framework</p>
                                    <div className='skills-icons'>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-yes'><i className="fas fa-star"></i></span>
                                        <span className='skills-icon-no'><i className="fas fa-star"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 mx-auto col-md-6">
                            <div className="row">
                                <div className="col-10 col-md-8 mr-md-auto d-flex justify-content-between">
                                    <p>Bootstrap Framework</p>
                                    <div>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="far fa-star"></i></span>
                                    </div>
                                </div>
                                <div className="col-10 col-md-8 mr-md-auto d-flex justify-content-between">
                                    <p>Bootstrap Framework</p>
                                    <div>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="far fa-star"></i></span>
                                    </div>
                                </div>
                                <div className="col-10 col-md-8 mr-md-auto d-flex justify-content-between">
                                    <p>Bootstrap Framework</p>
                                    <div>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="fas fa-star"></i></span>
                                        <span><i className="far fa-star"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </>
        )
    }
}