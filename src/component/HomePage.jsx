import React from 'react'
import Home from './Home';
import HomeServices from './HomeServices';
import HomeAbout from './HomeAbout';
import HomeVision from './HomeVision';
import ContactHome from './ContactHome';
import ScrollToTop from './ScrollToTop';

const HomePage = (props) => {
  return (
    <>
    <ScrollToTop/>
            <Home />
            <HomeServices commingSoon= {props.commingSoon}/>
            <HomeVision/>
            <HomeAbout/>
            <ContactHome/>
        </>
  )
}

export default HomePage