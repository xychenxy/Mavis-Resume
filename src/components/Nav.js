import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Nav extends Component {
    render() {
        const { isNavAnimation } = this.props;
        return (
            <>
                <nav
                    className={`navbar navbar-expand-lg ${
                        isNavAnimation ? "fixed-top py-1" : "py-3"
                    }`}
                    id="navbar"
                >
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="collapsibleNavId"
                    >
                        <ul className="navbar-nav mx-auto mt-2 mt-lg-0 text-white">
                            <li className="nav-item">
                                <Link
                                    className="nav-link m-2 text-capitalize nav-active"
                                    activeClass="nav-active"
                                    to="root"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link m-2 text-capitalize"
                                    activeClass="nav-active"
                                    to="profile"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link m-2 text-capitalize"
                                        activeClass="nav-active"
                                        to="experiences"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={1000}
                                    >
                                        Experiences
                                    </Link>
                                </li>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link m-2 text-capitalize"
                                    activeClass="nav-active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link m-2 text-capitalize"
                                    activeClass="nav-active"
                                    to="abilities"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Abilities
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link m-2 text-capitalize"
                                    activeClass="nav-active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}
