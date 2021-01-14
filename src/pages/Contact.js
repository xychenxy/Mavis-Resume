import React, { Component } from "react";
import Title from "../components/Title";
import UnderLine from "../components/Underline";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Contact extends Component {
    render() {
        const { isBackToTop } = this.props;

        return (
            <>
                <div className="container-fluid contact pt-5 mt-5" id="contact">
                    <Title
                        title="Contact"
                        subtitle="“If I had asked people what they wanted, they would have said faster horses. ”- Henry Ford"
                    />

                    <div className="row text-white">
                        <div className="col-10 col-md-6 mx-auto contact-items">
                            <span>
                                <i className="fab fa-github"></i>{" "}
                            </span>
                            https://github.com/xychenxy
                        </div>
                    </div>
                    <UnderLine />
                </div>

                <div
                    className={`back-to-top ${
                        isBackToTop ? "back-to-top-show" : "back-to-top-hidden"
                    } `}
                >
                    <Link
                        activeClass="active"
                        to="root"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                        <span>
                            <i className="fas fa-arrow-up"></i>
                        </span>
                    </Link>
                </div>
            </>
        );
    }
}
