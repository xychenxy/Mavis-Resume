import React, { Component } from "react";
import Title from "../components/Title";
import UnderLine from "../components/Underline";
export default class Experiences extends Component {
    render() {
        return (
            <section id="experiences" className="mt-5 pt-5">
                <div
                    className="container-fluid my-5 py-5"
                    id="experiences-container"
                >
                    <Title
                        title={"Experiences"}
                        subtitle={
                            "“Protons give an atom its identity, electrons its personality.”"
                        }
                    />

                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mr-md-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h2 className="career-header">Career</h2>
                            </div>
                        </div>
                    </div>

                    {/* Palette */}
                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mx-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h4>Palette</h4>
                                <h6>Aug 2020 - Current</h6>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-7 mx-auto">
                            <h6>Fulltime - Full-stack Developer</h6>
                            <p>
                                <strong>Project : </strong>
                                Developing and mantaining automating warehouse
                                and Analytics dashboard
                            </p>
                            <p>
                                <strong>Accomplishments :</strong>
                            </p>
                            <ul>
                                <li>Develop and maintain web applications </li>
                                <li>
                                    Developing and maintaing automating
                                    warehouse and Analytics Dashboard projects
                                </li>
                                <li>
                                    Creating REST API for tracking orders
                                    delivery status, auto-printing labels and
                                    auto-email daily reports etc.
                                </li>
                                <li>Integrating Uber API</li>
                                <li>
                                    Caching database queries and API responses
                                    for better performance
                                </li>
                                <li>Understanding CI/CD</li>
                            </ul>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                            </span>{" "}
                            Palette |
                            <span>
                                {" "}
                                <i className="fas fa-link"></i>
                            </span>
                            <a href="https://tintpaint.com.au/" target="_blank">
                                {" "}
                                Compnay Website
                            </a>
                        </div>
                    </div>

                    {/* Foodifox */}
                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mx-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h4>Foodifox</h4>
                                <h6>Dec 2020 - Jan 2021</h6>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-7 mx-auto">
                            <h6>Freelancer - Full-stack Developer</h6>
                            <p>
                                <strong>Project : </strong>
                                Singlehandedly built the Foodifox offical
                                website
                            </p>
                            <p>
                                <strong>Accomplishments :</strong>
                            </p>
                            <ul>
                                <li>
                                    Responsible for the whole website by using
                                    React, HTML and CSS{" "}
                                </li>
                                <li>
                                    Creating five responsive pages and deploying
                                    in Netlify temporarily
                                </li>
                            </ul>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                            </span>{" "}
                            Foodifox |
                            <span>
                                {" "}
                                <i className="fas fa-link"></i>
                            </span>
                            <a
                                href="https://foodifox.netlify.app/"
                                target="_blank"
                            >
                                {" "}
                                Compnay Website
                            </a>
                        </div>
                    </div>

                    {/* RMIT */}
                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mx-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h4>RMIT University</h4>
                                <h6>Oct 2019 - Jan 2020</h6>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-7 mx-auto">
                            <h6>Casual - Junior Web Developer</h6>
                            <p>
                                <strong>Project : </strong>
                                Represent RMIT to maintain OTDF’s web
                                applications.
                            </p>
                            <p>
                                <strong>Accomplishments :</strong>
                            </p>
                            <ul>
                                <li>Develop and maintain web applications </li>
                                <li>
                                    Add notification email function via SendGrid
                                    Plugin
                                </li>
                                <li>Fix SSL expired problem</li>
                                <li>
                                    Experience of Azure deployment by using
                                    hosting control panel
                                </li>
                            </ul>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                            </span>{" "}
                            RMIT |
                            <span>
                                {" "}
                                <i className="fas fa-link"></i>
                            </span>
                            <a
                                href="https://app.openingthedoors.org.au/"
                                target="_blank"
                            >
                                {" "}
                                Production Environment
                            </a>
                        </div>
                    </div>

                    {/* Opening the Door Foundation */}
                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mx-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h4>Opening the Door Foundation</h4>
                                <h6>Jul 2019 - Oct 2020</h6>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-7 mx-auto">
                            <h6>Intern - Junior Web Developer</h6>
                            <p>
                                <strong>Project : </strong>
                                Opening the Door Foundation (OTDF) supports
                                Aboriginal and Torres strait islander families
                                in Victoria with educational funding. Applicants
                                can apply for funding online, instead of mailing
                                forms via Post. It aims to handles 700+
                                applicants information each years.
                            </p>
                            <p>
                                <strong>Accomplishments :</strong>
                            </p>
                            <ul>
                                <li>
                                    Working in an agile environment, develop
                                    backlogs and user stories
                                </li>
                                <li>
                                    Design and complete data collection on
                                    frontend side
                                </li>
                                <li>
                                    Complete data verification and insertion on
                                    backend side
                                </li>
                                <li>
                                    Tech stacks include Bootstrap, jQuery,
                                    MySQL, PHP, Symfony, GitHub, AWS
                                </li>
                            </ul>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                            </span>{" "}
                            OTDF |
                            <span>
                                {" "}
                                <i className="fas fa-link"></i>
                            </span>
                            <a
                                href="https://test.openingthedoors.org.au/"
                                target="_blank"
                            >
                                {" "}
                                Testing Environment
                            </a>
                            <span>
                                {" "}
                                <i className="fas fa-link"></i>
                            </span>
                            <a
                                href="https://test.openingthedoors.org.au/"
                                target="_blank"
                            >
                                {" "}
                                Production Environment
                            </a>
                        </div>
                    </div>

                    {/* AIU */}
                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mx-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h4>AIU Group</h4>
                                <h6>Jan 2019 - Apr 2020</h6>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-7 mx-auto">
                            <h6>Contract - Full stack developer</h6>
                            <p>
                                <strong>Project : </strong>
                                AIU Group is a one-stop service that provide for
                                property investment, and this website is for
                                investors to follow and track their projects,
                                such as building processing and expenditure.
                            </p>
                            <p>
                                <strong>Accomplishments :</strong>
                            </p>
                            <ul>
                                <li>
                                    Collaborate with business stakeholders to
                                    identify project objective, requirement,
                                    scope and timeline estimation
                                </li>
                                <li>Design web application style</li>
                                <li>
                                    Choose tech stacks from frontend to backend
                                </li>
                                <li>
                                    Complete login, pdf download, analyze
                                    finance statements functions
                                </li>
                                <li>Purchase domain and deploy code to AWS</li>
                                <li>
                                    Tech stacks include Bootstrap, MySQL,
                                    WordPress, PHP, GitHub, AWS
                                </li>
                            </ul>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                            </span>{" "}
                            Melbourne |
                            <span>
                                {" "}
                                <i className="fas fa-link"></i>
                            </span>
                            <a
                                href="https://www.easydeveloper.com.au"
                                target="_blank"
                            >
                                {" "}
                                Production Environment
                            </a>
                        </div>
                    </div>

                    {/* Tokheim */}
                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mx-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h4>Tokheim Technology Co., Ltd.,</h4>
                                <h6>Dec 2010 - Feb 2016</h6>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-7 mx-auto">
                            <h6>Fulltime - Software Testing Engineer</h6>
                            <p>
                                <strong>Project : </strong>
                                Provide Fuel Dispensers equipment for 30% of gas
                                stations and Fuel POS for 10% of gas stations in
                                China.
                            </p>
                            <p>
                                <strong>Accomplishments :</strong>
                            </p>
                            <ul>
                                <li>
                                    Design and Execute 2000 test cases for Fuel
                                    POS and Fuel Dispensers{" "}
                                </li>
                                <li>
                                    Develop automatic testing tools for fuel
                                    encoder to save up to 80% time
                                </li>
                                <li>
                                    Participating in the Internal and External
                                    Audit of IOS90001
                                </li>
                            </ul>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                            </span>{" "}
                            Guangzhou |
                            <span>
                                {" "}
                                <i className="fas fa-link"></i>
                            </span>
                            <a
                                href="http://www.tokheim.com.cn/"
                                target="_blank"
                            >
                                {" "}
                                Tokheim
                            </a>
                        </div>
                    </div>

                    <UnderLine />

                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mr-md-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h2 className="education-header">Education</h2>
                            </div>
                        </div>
                    </div>

                    {/* RMIT */}
                    <div className="row mt-5">
                        <div className="col-10 col-md-5 mx-auto">
                            <div className="col-10 col-md-6 ml-md-auto ">
                                <h4>RMIT University</h4>
                                <h6>Feb 2018 - Dec 2019</h6>
                            </div>
                        </div>
                        <div className="d-none d-lg-block col-md-7 mx-auto">
                            <h6>Fulltime - Master of Information Technology</h6>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                            </span>{" "}
                            Melbourne |
                            <span>
                                {" "}
                                <i className="fas fa-link"></i>
                            </span>
                            <a href="https://www.rmit.edu.au" target="_blank">
                                {" "}
                                RMIT
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
