// HOW IT WORKS


export const About = (props) => {
  return (
    <div id='how' style={{marginBottom: '5rem'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/how.png' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>HOW IT WORKS</h2>
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
                       >✨ Turn your skills into redeemable equity</li>
                       <li
                       style={{
                        padding: '1rem 0rem'
                      }}

                       >🚀 Auction your talents on your social / professional network</li>
                       <li
                       style={{
                        padding: '1rem 0rem'
                      }}
                       >📈 You set the price tag on your talent, influence and work</li>

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
