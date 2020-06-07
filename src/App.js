import React, {Component} from 'react';import './App.css';
import Banner from "./pages/Banner";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Abilities from "./pages/Abilities";
import Contact from "./pages/Contact";


export default class App extends Component{

  state = {
    isNavAnimation: false,
    isBackToTop:false,
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  handleScroll = () =>{
    const scrollTop = document.documentElement.scrollTop
    if(scrollTop>768){
      this.setState({isNavAnimation:true,isBackToTop:true})
    }else {
      this.setState({isNavAnimation:false,isBackToTop:false})
    }

  }



  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  render() {

    const {isNavAnimation,isBackToTop} = this.state

    return(
        <>
          <Banner />
          <Nav isNavAnimation={isNavAnimation}/>
          <Profile/>
          <Projects/>
          <Experiences/>
          <Abilities/>
          <Contact isBackToTop={isBackToTop}/>
        </>
    )
  }

}

