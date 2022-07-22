import { useState, useEffect } from 'react'
import SmoothScroll from 'smooth-scroll'
import { Navigation } from '../../components/navigation'

import { Footer } from '../../components/footer'
import { Contact } from '../../components/contact'

import JsonData from '../../data/data.json'
import { HowItWorksTalents } from './HowItWorksTalent'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})


export const HowItWorks = () => {
    const [landingPageData, setLandingPageData] = useState({})
  
    window.analytics.track('landing page', 'impression');
  
  
    useEffect(() => {
      setLandingPageData(JsonData)
    }, [])
  
    return (
      <div>
        <Navigation />


        <HowItWorksTalents />
        <HowItWorksTalents />
        <HowItWorksTalents />
   
        <Contact />
        <Footer />
      </div>
    )
  
  }