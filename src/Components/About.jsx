import React from 'react'
import HeroSection from '../Newcomps/HeroSection'

const About = () => {

  const data ={
    name: "about Nike",
    paragraph: " Nike, Inc. is an American multinational association that is involved in the design, development, manufacturing and worldwide marketing and sales of apparel, footwear, accessories, equipment and services."
  }

  return (
    <HeroSection myData={data}/>
  )
}

export default About