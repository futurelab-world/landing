import { useState, useEffect } from 'react'
import SmoothScroll from 'smooth-scroll'
import ReactPixel from 'react-facebook-pixel';

import { Navigation } from '../../components/navigation'
import { Header } from '../../components/header'
import { Features } from '../../components/features'
import { About } from '../../components/about'
// import { Services } from './components/services'
// import { Gallery } from './components/gallery'
import { Testimonials } from '../../components/testimonials'
import { Footer } from '../../components/footer'
import { Contact } from '../../components/contact'
// import { Brand } from './components/Brand'
import JsonData from '../../data/data.json'

const PixelId = '4403233213134549'

// const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init(PixelId, {}, options);

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})




export const Home = () => {
    const [landingPageData, setLandingPageData] = useState({})
  

    let position
  const watchID = navigator.geolocation.watchPosition((position) => {
    // doSomething(position.coords.latitude, position.coords.longitude);
    position = position

  });



    ReactPixel.pageView(); // For tracking page view
    ReactPixel.track('page view ', {
      geolocation: position,
      userAgent: window.navigator.userAgent,
      url: window.location.href,

    }); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
    // ReactPixel.trackSingle(PixelId, event, data); // For tracking default events.
    // ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
    // ReactPixel.trackSingleCustom(PixelId, event, data); // For tracking custom events.


  
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

  
        <Testimonials data={landingPageData.Testimonials} />
        <Contact />
        <Footer />
      </div>
    )
  
  }