import { useState } from 'react'
// import emailjs from 'emailjs-com'

// const initialState = {
//   name: '',
//   email: '',
//   message: '',
// }

export const Contact = (props) => {
  const [email, setEmail] = useState()
  

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setState((prevState) => ({ ...prevState, [name]: value }))
  // }

  // const clearState = () => setState({ ...initialState })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
    
  //   emailjs
  //     .sendForm(
  //       // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
  //       'landing_page', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         clearState()
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>The Ownership Economy</h2>
                <p>
                  We empower people to be Sovereign self.
                  {/* We are the new way to build a direct relationships with your community. */}

                Sign up to receive the latest updates about new releases, drops and protocol development.
                </p>
              </div>
              <form name='sentMessage' validate>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                    
                    <input
                        style={{padding: '2rem', border: 'none', borderBottom: '1px solid #a9a9a9', marginBottom: '2rem'}}
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email address'
                        required
                        onChange={(e) => {
                            setEmail(e.target.value)
                          }}
                      
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      
                      <p className='help-block text-danger'></p>
                      
                    </div>
                  </div>
                </div>
                {/* <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div> */}
          
                <a className='btn btn-custom btn-lg' href={`https://tbdfuture.xyz/signup`} onClick={() => {
                  window.analytics.track('Get Started Btn CTA', 'click');
                }}>
                  GET STARTED
                </a>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {/* {props.data ? props.data.address : 'loading'} */}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {/* {props.data ? props.data.phone : 'loading'} */}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {/* {props.data ? props.data.email : 'loading'} */}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
