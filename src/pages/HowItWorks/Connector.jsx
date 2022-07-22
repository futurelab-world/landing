// HOW IT WORKS

import { useState, useEffect } from 'react'

export const Connector = (props) => {
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
            <img src='https://hbr.org/resources/images/article_assets/2021/11/Nov21_22_3820920_559572321.jpg' className='img-responsive' alt='' />{' '}
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
              
              </h2>
          
              
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

                      <h2 style={{
                        fontSize: `${isMobile ? '24px': '32px'}`,
                        marginTop: '50px',
                        color: '#000',
                  
                      }}>
                        ✨ Connector
                      </h2>
                      <p>
                      With Web3talents, connectors can make full use of their expertise to "connect2earn". Each match(recommend) would cost the connector 10% of the NFT price and receive double tokens when the company accepts the resume.
                      </p>
                     

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
