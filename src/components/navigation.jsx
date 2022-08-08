// import logo from 'img/logo'
export const Navigation = (props) => {

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            {/* Web3 Talents */}
            <img src='img/logo-full.png' height='50px' />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/' className='page-scroll'>
               Home
              </a>
            </li>
            <li>
              <a href='/how-it-works' className='page-scroll'>
                HOW IT WORKS
              </a>
            </li>
            <li>
              <a href={'https://www.notion.so/web3talents/About-06143b2162a24d46a0a68658f74d798f'} className='page-scroll'>
                ABOUT US
              </a>
            </li>
            <li>
              {/* <a href='#services' className='page-scroll'>
                BLOGS
              </a> */}
            </li>
            <li>
              {/* <a href='https://alysia-wu.gitbook.io/product-docs/' className='page-scroll'>
                WIKI
              </a> */}
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
