import React, {Component} from 'react';
import Title from "../components/Title";
import RestaurantImg from '../images/restaurant-cover.png'
import CardealershipImg from '../images/cardealership-cover.png'
import TechshopImg from '../images/techshop-cover.png'
import ResortImg from '../images/resort-cover.png'
import ProductSystemImg from '../images/productsysmte-cover.png'

export default class Projects extends Component{
    render(){
        return(
            <section id='projects' className='my-5 pb-5'>
                <div className="container-fluid mt-5 pt-5">
                    <Title
                        title='Projects'
                        subtitle='“I currently learned these projects."'/>
                </div>


                <div className="container my-5 pb-5" id='projects-container'>

                    {/* https://melbourne-tech-shop.netlify.app/ */}
                    <div className="row mb-5 py-5 justify-content-center align-items-center project-item-first">

                        {/* left img */}
                        <div className="col-10 col-md-5 mx-auto align-self-start mb-3">
                            <div className="row">
                                <div className="col-md-4 d-none d-md-block align-self-center text-right">
                                    <span className='point-project-icon mr-3'>
                                        <i className="far fa-hand-point-right"></i>
                                    </span>
                                </div>
                                <div className="col-md-8 ml-md-auto img">

                                    <a className="img-container" href='https://melbourne-tech-shop.netlify.app/' target='_blank'>
                                        <img src={TechshopImg} className="img-fluid img-container-bg" alt="..."/>
                                        <span className='img-container-link'><i className="fas fa-external-link-alt"></i></span>
                                        <h4 className='img-container-title'>
                                            Tech Shop
                                        </h4>
                                        <div className="img-container-underline"></div>
                                        <div className="img-container-text">
                                            <p>React & Bootstrap 4</p>
                                            <p>Contentful</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* right project detail */}
                        <div className="col-10 col-md-7 mx-auto projects-info">
                            <div className="row">
                                <div className="col col-md-10">

                                    <h3 className='projects-title'>Tech Shop</h3>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Project : </strong>
                                        </p>
                                        <div>
                                            <p>
                                                Tech Shop is an e-commerce company which sells electronic products.
                                            </p>
                                            <ul className='project-function'>
                                                <li>Deploy with Netlify with GitHub</li>
                                                <li>Products data is stored in Contentful</li>
                                                <li>Customers can add products into Cart</li>
                                                <li>Customers can use PayPal to pay for their products</li>
                                                <li>Customers can browse all products details</li>
                                                <li>Customers can sort products by names, companies, prices and shipping</li>
                                                <li><a href="https://melbourne-tech-shop.netlify.app">https://melbourne-tech-shop.netlify.app</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Type : </strong>
                                        </p>
                                        <p>
                                            Self-learning, thanks for John Smilga who is Udemy tutor.
                                        </p>

                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Tag : </strong>
                                        </p>
                                        <p>
                                            <span className="badge badge-primary">React</span>
                                            <span className="badge badge-secondary">ContextAPI</span>
                                            <span className="badge badge-success">Contentful</span>
                                            <span className="badge badge-warning">React-Paypal-Express-Checkout</span>
                                            <span className="badge badge-info">Bootstrap</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* http://www.xystudio.space/ */}
                    <div className="row mb-5 py-5 justify-content-center align-items-center project-item">

                        {/* left img */}
                        <div className="col-10 col-md-5 mx-auto align-self-start mb-3">
                            <div className="row">
                                <div className="col-md-4 d-none d-md-block align-self-center text-right">
                                    <span className='point-project-icon mr-3'>
                                        <i className="far fa-hand-point-right"></i>
                                    </span>
                                </div>
                                <div className="col-md-8 ml-md-auto img">

                                    <a className="img-container" href='http://www.xystudio.space/' target='_blank'>
                                        <img src={ProductSystemImg} className="img-fluid img-container-bg" alt="..."/>
                                        <span className='img-container-link'><i className="fas fa-external-link-alt"></i></span>
                                        <h4 className='img-container-title'>
                                            Products System
                                        </h4>
                                        <div className="img-container-underline"></div>
                                        <div className="img-container-text">
                                            <p>React/Redux & Ant Design</p>
                                            <p>Express & MongoDB & AWS</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* right project detail */}
                        <div className="col-10 col-md-7 mx-auto projects-info">
                            <div className="row">
                                <div className="col col-md-10">

                                    <h3 className='projects-title'>Products System</h3>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Project : </strong>
                                        </p>
                                        <div>
                                            <p>
                                                Products System provides company with products category and management,
                                                users and roles management.
                                            </p>
                                            <ul className='project-function'>
                                                <li>Deploy with AWS with GitHub</li>
                                                <li>Products data is stored in MongoDB</li>
                                                <li>Staff can update or add category</li>
                                                <li>Staff can update or add new products and control its status</li>
                                                <li>Manager can create, update or delete users</li>
                                                <li>Manager can create new role and set up authority</li>
                                                <li><a href="http://www.xystudio.space/">http://www.xystudio.space/</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Type : </strong>
                                        </p>
                                        <p>
                                            Self-learning, thanks for Atguigu.
                                        </p>

                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Tag : </strong>
                                        </p>
                                        <p>
                                            <span className="badge badge-primary">React</span>
                                            <span className="badge badge-secondary">Redux</span>
                                            <span className="badge badge-success">AWS</span>
                                            <span className="badge badge-info">Nginx</span>
                                            <span className="badge badge-light">WeatherApi</span>
                                            <span className="badge badge-danger">React-EChart</span>
                                            <span className="badge badge-warning">Postman</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* https://melbourne-resort.netlify.app/ */}
                    <div className="row mb-5 py-5 justify-content-center align-items-center project-item">

                        {/* left img */}
                        <div className="col-10 col-md-5 mx-auto align-self-start mb-3">
                            <div className="row">
                                <div className="col-md-4 d-none d-md-block align-self-center text-right">
                                    <span className='point-project-icon mr-3'>
                                        <i className="far fa-hand-point-right"></i>
                                    </span>
                                </div>
                                <div className="col-md-8 ml-md-auto img">

                                    <a className="img-container" href='https://melbourne-resort.netlify.app/' target='_blank'>
                                        <img src={ResortImg} className="img-fluid img-container-bg" alt="..."/>
                                        <span className='img-container-link'><i className="fas fa-external-link-alt"></i></span>
                                        <h4 className='img-container-title'>
                                            Resort
                                        </h4>
                                        <div className="img-container-underline"></div>
                                        <div className="img-container-text">
                                            <p>React & Bootstrap 4</p>
                                            <p>Contentful</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* right project detail */}
                        <div className="col-10 col-md-7 mx-auto projects-info">
                            <div className="row">
                                <div className="col col-md-10">

                                    <h3 className='projects-title'>Resort</h3>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Project : </strong>
                                        </p>
                                        <div>
                                            <p>
                                                The resort provides travelers with browsing and booking rooms.
                                            </p>
                                            <ul className='project-function'>
                                                <li>Deploy with Netlify with GitHub</li>
                                                <li>Rooms data is stored in Contentful</li>
                                                <li>Customers can browse all rooms' details</li>
                                                <li>Customers can sort products by room types, guests, prices and other specific options</li>
                                                <li><a href="https://melbourne-resort.netlify.app">https://melbourne-resort.netlify.app</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Type : </strong>
                                        </p>
                                        <p>
                                            Self-learning, thanks for John Smilga who is Udemy tutor.
                                        </p>

                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Tag : </strong>
                                        </p>
                                        <p>
                                            <span className="badge badge-primary">React</span>
                                            <span className="badge badge-secondary">ContextAPI</span>
                                            <span className="badge badge-success">Contentful</span>
                                            <span className="badge badge-info">Bootstrap</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* https://car-dealership-web.netlify.app/ */}
                    <div className="row mb-5 py-5 justify-content-center align-items-center project-item">

                        {/* left img */}
                        <div className="col-10 col-md-5 mx-auto align-self-start mb-3">
                            <div className="row">
                                <div className="col-md-4 d-none d-md-block align-self-center text-right">
                                    <span className='point-project-icon mr-3'>
                                        <i className="far fa-hand-point-right"></i>
                                    </span>
                                </div>
                                <div className="col-md-8 ml-md-auto img">

                                    <a className="img-container" href='https://car-dealership-web.netlify.app/' target='_blank'>
                                        <img src={CardealershipImg} className="img-fluid img-container-bg" alt="..."/>
                                        <span className='img-container-link'><i className="fas fa-external-link-alt"></i></span>
                                        <h4 className='img-container-title'>
                                            Car Dealership
                                        </h4>
                                        <div className="img-container-underline"></div>
                                        <div className="img-container-text">
                                            <p>Bootstrap</p>
                                            <p>Responsive web design</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* right project detail */}
                        <div className="col-10 col-md-7 mx-auto projects-info">
                            <div className="row">
                                <div className="col col-md-10">

                                    <h3 className='projects-title'>Car Dealership</h3>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Project : </strong>
                                        </p>
                                        <div>
                                            <p>
                                                This is a static website for car dealership.
                                            </p>
                                            <ul className='project-function'>
                                                <li>Deploy with Netlify with GitHub</li>
                                                <li><a href="https://car-dealership-web.netlify.app/">https://car-dealership-web.netlify.app/</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Type : </strong>
                                        </p>
                                        <p>
                                            Self-learning, thanks for John Smilga who is Udemy tutor.
                                        </p>

                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Tag : </strong>
                                        </p>
                                        <p>
                                            <span className="badge badge-info">Bootstrap</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* https://melbourne-restaurant.netlify.app/ */}
                    <div className="row mb-5 py-5 justify-content-center align-items-center project-item">

                        {/* left img */}
                        <div className="col-10 col-md-5 mx-auto align-self-start mb-3">
                            <div className="row">
                                <div className="col-md-4 d-none d-md-block align-self-center text-right">
                                    <span className='point-project-icon mr-3'>
                                        <i className="far fa-hand-point-right"></i>
                                    </span>
                                </div>
                                <div className="col-md-8 ml-md-auto img">

                                    <a className="img-container" href='https://melbourne-restaurant.netlify.app/' target='_blank'>
                                        <img src={RestaurantImg} className="img-fluid img-container-bg" alt="..."/>
                                        <span className='img-container-link'><i className="fas fa-external-link-alt"></i></span>
                                        <h4 className='img-container-title'>
                                            restaurant
                                        </h4>
                                        <div className="img-container-underline"></div>
                                        <div className="img-container-text">
                                            <p>Bootstrap</p>
                                            <p>Responsive web design</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* right project detail */}
                        <div className="col-10 col-md-7 mx-auto projects-info">
                            <div className="row">
                                <div className="col col-md-10">

                                    <h3 className='projects-title'>restaurant</h3>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Project : </strong>
                                        </p>
                                        <div>
                                            <p>
                                                This is a static website for restaurant.
                                            </p>
                                            <ul className='project-function'>
                                                <li>Deploy with Netlify with GitHub</li>
                                                <li><a href="https://melbourne-restaurant.netlify.app/">https://melbourne-restaurant.netlify.app/</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Type : </strong>
                                        </p>
                                        <p>
                                            Self-learning, thanks for John Smilga who is Udemy tutor.
                                        </p>

                                    </div>

                                    <div className="d-flex justify-content-start">
                                        <p className='project-introduction'>
                                            <strong>Tag : </strong>
                                        </p>
                                        <p>
                                            <span className="badge badge-info">Bootstrap</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            
            </section>
        )
    }
}