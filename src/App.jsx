import { useState, useEffect } from 'react'
import SmoothScroll from 'smooth-scroll'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import { Contact } from './components/contact'
import { Brand } from './components/Brand'
import JsonData from './data/data.json'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})

  window.analytics.track('landing page', 'impression');


  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Brand/> */}
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      <Contact />

      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Footer />
    </div>
  )
}

export default App
