// HOW IT WORKS

import { useState, useEffect } from 'react'

export const HowItWorksTalents = (props) => {
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
              
              Talents</h2>
          
              
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
                     
                       <h3>✨ Talent</h3>
                       
                        Talents mint their NFTs by 3 steps: KYC, upload information, and set their price. The resume will be NFTlized by TalenTale for 500 amount in total.

                        Once others––companies, talents, or connectors––unlock their NFTs through tokens, they get tokens directly. Also, they can expand their social circles by purchasing resumes from anyone without feeling embarrassing.

                        When you need to apply a job by youself:

                        They can receive your NFT and unlock it for free.

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
