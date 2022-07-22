// import { useState, useEffect } from 'react'
import { Routes, Route  } from "react-router-dom"
import SmoothScroll from 'smooth-scroll'
// import { Navigation } from './components/navigation'
// import { Header } from './components/header'
// // import { Features } from './components/features'
// import { About } from './components/about'
// // import { Services } from './components/services'
// // import { Gallery } from './components/gallery'
// // import { Testimonials } from './components/testimonials'
// import { Footer } from './components/footer'
// import { Contact } from './components/contact'
// // import { Brand } from './components/Brand'
// import JsonData from './data/data.json'

import MintResume from './pages/MintResume/index'
import { Home } from './pages/Home/index'
import { Roadmap } from './pages/Roadmap/index'
import { About } from './pages/About/index'
import { HowItWorks } from './pages/HowItWorks/index'
import { Talents } from './pages/Talents/index'


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

// const Home = () => {
//   const [landingPageData, setLandingPageData] = useState({})

//   window.analytics.track('landing page', 'impression');


//   useEffect(() => {
//     setLandingPageData(JsonData)
//   }, [])

//   return (
//     <div>
//       <Navigation />
//       <Header data={landingPageData.Header} />
//       {/* <Features data={landingPageData.Features} /> */}
//       {/* <Brand/> */}
//       <About data={landingPageData.About} />
//       {/* <Services data={landingPageData.Services} /> */}
//       <Contact />

//       {/* <Testimonials data={landingPageData.Testimonials} /> */}
//       <Footer />
//     </div>
//   )

// }


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/talents" element={<Talents />} />
      <Route path="/mint-resume" element={<MintResume />} />
      <Route path="/roadmap" element={<Roadmap />} />
   
    </Routes>
  )
}

export default App
