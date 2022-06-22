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
            Future 
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                TRENDING NOW
              </a>
            </li>
            <li>
              <a href='#how' className='page-scroll'>
                HOW IT WORKS
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                BLOGS
              </a>
            </li>
            <li>
              <a href='https://alysia-wu.gitbook.io/product-docs/' className='page-scroll'>
                WIKI
              </a>
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
