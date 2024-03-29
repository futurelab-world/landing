import ParticlesBg from "particles-bg";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPixel from 'react-facebook-pixel';

export const Header_old = (props) => {
  const HighlightedText = styled.div`
    color: 'linear-gradient(84.06deg, #0088FF -28.62%, #A033FF 36.39%, #FF5C87 98.74%)'
  `

  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'} 
                  <span></span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


export const Header = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  // const [email, setEmail] = useState()

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

 
  let position
  const watchID = navigator.geolocation.watchPosition((position) => {
    // doSomething(position.coords.latitude, position.coords.longitude);
    position = position

  });

  window.analytics.track('Web3 Talents Landing Page Viewed');

  return (
    <div id='about' style={{
      padding: `${isMobile ? '20px': '50px'}`,
      paddingBottom: '20px',
      background: 'linear-gradient(to bottom right, #fb7185, #d946ef, #6366f1)',
      textAlign: 'center'

    
    }}>
      <div className='container'>
        <div className='row_'>
          <div className='col-xs-12_ col-md-12_'>
            <div className='about-text'>

           
                <h3 style={{marginTop: '10rem', color: '#fff', fontSize:  `${isMobile ? '16px': '24px'}`}}> 
                {/* Your resume will soon be an NFT! */}
                NFT primitives for your professional on-chain identity
                </h3>
              <h1 style={{
                fontSize: `${isMobile ? '32px': '64px'}`,
                marginTop: '50px',
                color: '#000',
                textAlign: 'center',
                color: '#fff'
              }}>
                {/* Earn by becoming web3 talents, get paid by talking to web3 recruiters. */}
                Join <span style={{fontWeight: '700'}}>Websan</span> a decentralized talent nation.

                {/* Get paid switching to web3 */}
                {/*  */}
              
              </h1>


              {/* <p>{props.data ? props.data.paragraph : 'loading...'}</p> */}
            
              {/* <h3>Reclaim Self-Sovereignty</h3> */}
              

              <div className='list-style' style={{margin: `${isMobile ? '0px': '16px'}`}}>
                <h3  style={{margin: '4rem', color: '#fff'}}>

                {/* Demand for Web3 talent surges as internet moves to next stage */}
                We are a community of people that believe in life-long learning and humility “三人行，必有吾师”.

                </h3>
                {/* your token gated community and social capital */}
                
                <div className='col-lg-12 col-sm-12 col-xs-12' style={{margin: '50px'}}>
                  {' '}
                  <form name='sentMessage' validate>
                    {/* <input
                      style={{ 
                          marginTop: '5rem', border: 'none', marginBottom: '2rem', alignItems: 'center', width: '200px', margin: '0 auto',
                          height: '35px'
                      }}
                      type='email'
                      id='email'
                      name='email'
                      className='form-control'
                      placeholder='Email address'
                      required
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    /> */}
                    <a
                      
                      style={{marginTop: '5rem', color: '#000', fontWeight: '600'}}
                      className="rainbow-button" 
                      
                      href={`https://airtable.com/shruzrfhjEwz5GXB8`}
                      // className='btn btn-custom btn-lg page-scroll'
                      onClick={() => {
                        window.analytics.track('Web3 Talents Join Beta Clicked', {
                          userAgent: window.navigator.userAgent,
                          url: window.location.href,
                          geolocation: position,
                        });

                        ReactPixel.track('Web3 Talents Join Beta Clicked', {
                          userAgent: window.navigator.userAgent,
                          url: window.location.href,
                          geolocation: position,
                        }); 
                        
                      }}
                    >
                      Join Beta Waitlist
                    </a>{' '}
                    {/* <a
                      
                      style={{marginTop: '2rem'}}
                      href={`https://tbdfuture.xyz`}
                      className='btn btn-custom btn-lg page-scroll'
                      onClick={() => {
                        window.analytics.track('EXPLORE FIRST  Btn CTA @ Header', 'click');
                      }}
                    >
                      EXPLORE FIRST
                    </a>{' '} */}
                    {/* <a
                      style={{marginTop: '2rem'}}
                      href={`https://tbdfuture.xyz/music-home`}
                      className='btn btn-custom btn-lg page-scroll'
                      onClick={() => {
                        window.analytics.track('GSNEAK PEAK MUSIC NFTs Btn CTA @ Header', 'click');
                      }}
                    >
                      SNEAK PEAK MUSIC NFTs
                    </a>{' '} */}
                  </form>
            
                </div>
              </div>
            </div>
          </div>
          {/* { !isMobile && <div className='col-xs-12 col-md-6'>
            <div className='about-text' style={{width: '350px', marginLeft: '100px', marginTop: '25px'}}>
            {' '}
              <img src='img/demo-yenifer-381.png' className='img-responsive' alt='' />{' '}
            </div>
          </div>
          } */}
        </div>
      </div>
    </div>
  )
}