import React from "react";
import HeroSection from "../Newcomps/HeroSection";
import Services from "../Newcomps/Services";
import Trusted from "../Newcomps/Trusted";


const Home = () => {
 
const data = {
    name : " Nike store",
    paragraph : " The world's largest athletic apparel company, Nike is best known for its footwear, apparel, and equipment. Founded in 1964 as Blue Ribbon Sports, the company became Nike in 1971 after the Greek goddess of victory. One of the most valuable brands among sport businesses, Nike employs over 76,000 people worldwide.",
}

    return (
        <>
       <HeroSection myData={data}/>
       <Services/>
       <Trusted/>
       
       </>
    );
}

export default Home;