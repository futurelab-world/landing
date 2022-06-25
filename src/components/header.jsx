import ParticlesBg from "particles-bg";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

  const [email, setEmail] = useState()

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
    <div id='about' style={{padding: '-10rem'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2 style={{
                fontSizze: '32px'
              }}>Democratize Digital Asset Investment and Participation for ALL</h2>
              {/* <p>{props.data ? props.data.paragraph : 'loading...'}</p> */}
            
              {/* <h3>Reclaim Self-Sovereignty</h3> */}
              

              <div className='list-style' style={{marginTop: '10rem'}}>
                <h3>Unlock your ticket to digital owernship as little as $1 </h3>
                {/* your token gated community and social capital */}
                
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  {' '}
                  <form name='sentMessage' validate>
                    {/* <input
                      style={{ marginTop: '5rem', border: 'none', borderBottom: '1px solid #a9a9a9', marginBottom: '2rem'}}
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
                      
                      style={{marginTop: '2rem'}}
               
                      
                      href={`https://tbdfuture.xyz/signup`}
                      className='btn btn-custom btn-lg page-scroll'
                    >
                      GET STARTED
                    </a>{' '}
                    <a
                      style={{marginTop: '2rem'}}
                      href={`https://tbdfuture.xyz/explore`}
                      className='btn btn-custom btn-lg page-scroll'
                    >
                      EXPLORE
                    </a>{' '}
                    <a
                      style={{marginTop: '2rem'}}
                      href={`https://tbdfuture.xyz/music-home`}
                      className='btn btn-custom btn-lg page-scroll'
                    >
                      SNEAK PEAK MUSIC NFTs
                    </a>{' '}
                  </form>
            
                </div>
              </div>
            </div>
          </div>
          { !isMobile && <div className='col-xs-12 col-md-6'>
            <div className='about-text' style={{width: '350px', marginLeft: '100px', marginTop: '25px'}}>
            {' '}
              <img src='img/demo-yenifer-381.png' className='img-responsive' alt='' />{' '}
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  )
}