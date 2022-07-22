// HOW IT WORKS

import { useState, useEffect } from 'react'

export const Company = (props) => {
  const [width, setWidth] = useState(window.innerWidth);


  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  return (
    <div id='how' style={{margin: '5rem'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6' style={{
              marginTop: `${isMobile ? '0px': '100px'}`,
              paddingBottom: '20px',
            }}>
            {' '}
            <img src='img/how.png' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text' style={{
              padding: `${isMobile ? '0px': '10px'}`,
              paddingBottom: '20px',
            }}>
             <h2 style={{
                fontSize: `${isMobile ? '24px': '32px'}`,
                marginTop: '50px',
                color: '#000',
          
              }}>
              
              ✨ Company</h2>
          
              
              <h3></h3>
              <div className='list-style'>
                <div className='col-lg-12 col-sm-6 col-xs-12'>
                  <ul style={{
                    padding: '1rem'
                  }}>
                   
                       <li
                        style={{
                          padding: '1rem 0rem'
                        }}
                       >
                     
                       <h3></h3>
                       
                       Hiring top talent is expensive. While the traditional recruit platform markups talent by up to 70%, we charge a flat rate of 2.5% based on each talent's NFT resume mint fee. Without high markups, you can make your budget go 20-30x further.


                        Because of our "match2earn" system, numerous people will stay active on our platform to discover talents as connectors. Now, those people would become sharing HR to help you analyze and find the most matched talents according to your job description and company culture.

                      </li>
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
