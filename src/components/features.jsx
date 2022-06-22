export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>TRENDING NOW</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  { i === 0 && <img style={{width: '10rem', height: '10rem', borderRadius: '10rem'}} src={d.src}/>}
                  { i !== 0 && <i className={d.icon}></i>}
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
    </div>
    </div>
  )
}
