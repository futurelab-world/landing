// HOW IT WORKS

import { useState, useEffect } from 'react'

export const About = (props) => {
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
              
              Do you know you have transferrable skills in web3 and can get paid to engage with web3 recruiters?</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              
              <h3>Thrive in the Ownership and Passion Economy</h3>
              <div className='list-style'>
                <div className='col-lg-12 col-sm-6 col-xs-12'>
                  <ul style={{
                    padding: '1rem'
                  }}>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                       <li
                        style={{
                          padding: '1rem 0rem'
                        }}
                       >
                     
                       <h3>✨ Own</h3>
                       Turn your resume into NFT, your resume would be a unique NFT that you own, and list in our marketplace where recruiters, businesses, and Human Resources would be able to access your unique NFT (your resume) to reach out to you about opportunities.</li>
                       <li
                       style={{
                        padding: '1rem 0rem'
                      }}

                       > 
                       
                       {/* Own your careers and let recuiters pay to talk to you */}

                        
                       {/* Have ownership of their careers */}

                       {/* The Resume NFT Project would be a */}

                       {/* Recruiters will be paying you or splitting with a type of money or crypto to be able to access your information and reach out. */}
                    
                       <h3>🚀 Earn</h3>
                       You also earn $Talent Token for every time they access your NFT resume/Contact information to reach out to you. The more companies that reach out to you the more $Talent you collect.
                       </li>
                       <li
                       style={{
                        padding: '1rem 0rem'
                      }}
                       > 
                       {/* Rent out your NFT Resumes for recruiters to show interest in your background and skillsets.   */}
                       
                       <h3>📈 Reward</h3>
                       
                       Every member will receive a % of each transaction fee distributed from every transaction from a recruiter, HR, business accessing the marketplace platform it will be automatically redistributed automatically without the need for gas fees.
                       
                       </li>

                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
