import React from 'react'
import AboutUs from '../components/AboutUsSection';
import Hero from '../components/Hero.jsx';
import ProductTabs from '../components/ProductTabs.jsx';
import ContactUs from '../components/ContactUsSection.jsx';
import Footer from '../components/FooterSection.jsx';

const HomePage = () => {
  return (
    <>
    <Hero />
    <ProductTabs/>
    <AboutUs />
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default HomePage
