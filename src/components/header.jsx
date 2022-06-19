import ParticlesBg from "particles-bg";
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
                {/* <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
{/*                     
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email address'
                        required
                        onChange={() => {

                        }}
                      />
                      <p className='help-block text-danger'></p> */}
                      {/* <a
                        href='#features'
                        className='btn btn-custom btn-lg page-scroll'
                      >
                        GET STARTED
                      </a>{' '}
                */}
         
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


export const Header = (props) => {
  return (
    <div id='about' style={{margin: '10rem'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Turn your service into shares</h2>
              {/* <p>{props.data ? props.data.paragraph : 'loading...'}</p> */}
              <h3>Reclaim Self-Sovereignty</h3>
              <input
                  type='email'
                  id='email'
                  name='email'
                  className='form-control'
                  placeholder='Email address'
                  required
                  onChange={() => {

                  }}
                />
                <a
                  href='https://futurelab.world'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  GET STARTED
                </a>{' '}

              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                {' '}
                </div>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              {' '}
              <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}