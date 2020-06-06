import React, {Component} from 'react';
import Title from "../components/Title";
export default class Experiences extends Component{
    render(){
        return(
            <>
                <div className="container mt-5" id='experiences'>
                    <Title title={'Experiences'} subtitle={"“Protons give an atom its identity, electrons its personality.”"}/>


                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mr-md-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h2>Career</h2>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mx-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h4>Startselect | Online Prepaid Services</h4>
                                <h6>May 2016 - current</h6>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-7 mx-auto">
                            <h6>Fulltime - Senior Web Developer</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus ea eum hic, ipsum iusto minus molestiae non, possimus provident quod ut veritatis? Aliquam aperiam, aspernatur ea eum exercitationem illum inventore iure labore magnam maxime omnis repellat ullam veritatis vero?</p>
                            <span><i className="fas fa-map-marker-alt"></i></span> RMIT |
                            <span> <i className="fas fa-link"></i></span> <a href="">https://app</a>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mx-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h4>Startselect | Online Prepaid Services</h4>
                                <h6>May 2016 - current</h6>
                            </div>
                        </div>
                        <div className="col-10 col-md-7 mx-auto">
                            <h6>Fulltime - Senior Web Developer</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus ea eum
                                hic, ipsum iusto minus molestiae non, possimus provident quod ut veritatis? Aliquam
                                aperiam, aspernatur ea eum exercitationem illum inventore iure labore magnam maxime
                                omnis repellat ullam veritatis vero?</p>
                            <span><i className="fas fa-map-marker-alt"></i></span> RMIT |
                            <span> <i className="fas fa-link"></i></span> <a href="">https://app</a>
                        </div>
                    </div>



                </div>
            </>
        )
    }
}