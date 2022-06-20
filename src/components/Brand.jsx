export const Brand2 = (props) => {
    return (
      <div className='text-center' style={{
          margin: '15rem',
      }}>
        <div className='container'>
          <div className='row'>
            {<>
                <div className='col-xs-6 col-md-3' style={{
                    verticalAlign: 'middle',
                    marginTop:'5rem'
                }}>
              
         
                    <a 
                        href="https://www.producthunt.com/posts/futurelab-world?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-futurelab&#0045;world" 
                        target="_blank">
                            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=348876&theme=light" alt="futurelab&#0046;world - Web3&#0032;and&#0032;Passion&#0032;Economy | Product Hunt" style={{
                                width: "250px",
                                height: "54px"
                            }} width="250" height="54" />
                    </a>           
                  </div>
                   <div className='col-xs-6 col-md-3'>
                   <a 
                    
                       target="_blank">
                           <img src="img/ondeck.png" alt="futurelab&#0046;world - Web3&#0032;and&#0032;Passion&#0032;Economy | Product Hunt" style={{
                               width: "150px",
                               height: "150px"
                           }} width="250" height="54" />
                   </a>
                 </div>
                 <div className='col-xs-6 col-md-3'>
                   <a 
                    
                       target="_blank">
                           <img src="img/founderUni.png" alt="futurelab&#0046;world - Web3&#0032;and&#0032;Passion&#0032;Economy | Product Hunt" style={{
                               width: "150px",
                               height: "150px",
                               borderRadius: '150px'

                           }} width="250" height="54" />
                   </a>
                 </div>
                 <div className='col-xs-6 col-md-3'>
                  <a 
                   
                      target="_blank">
                          <img src="img/Ystartupschool.jpeg" alt="futurelab&#0046;world - Web3&#0032;and&#0032;Passion&#0032;Economy | Product Hunt" style={{
                              width: "150px",
                              height: "150px",
                              borderRadius: '150px'

                          }} width="250" height="54" />
                  </a>
                </div>
                </>
              }
          </div>
        </div>
      </div>
    )
  }
  

  export const Brand = () => {

    const data = [
        {
        title: 'ondeck',
        src: 'img/ondeck.png'
        },
        {
            title: 'launch',
            src: 'img/founderUni.png'
        },
        {
            title: 'yc',
            src: 'img/Ystartupschool.jpeg'
        },
        {
            title: 'product hunt',
            src: 'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=348876&theme=light'
        }

    ]
    return (
      <div  className='text-center' style={{margin: '15rem 0rem'}}>
        <div className='container'>

          <div className='row'>
            { data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                    {' '}
                    {/* <i className={d.icon}></i> */}
                    <img src={d.src} alt="YC" style={{
                              width: `${i === 3 ? '250px' : '150px'}`,
                              height: `${i === 3 ? '150' : '150px'}`,
                              borderRadius: '150px'

                          }} width="250" height="54" />

                  </div>
                ))
              }
          </div>
        </div>
      </div>
    )
  }
  