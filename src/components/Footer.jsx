import React from 'react'
import arrow from '../img/IMAGE (2).png'

export default function Footer() {
  return (
    <div className='container_footer'>

      <div className='categories'>
        <h6>Categories</h6><br />
        <div>Web builders</div><br />
        <div>Hosting</div><br />
        <div>data Center</div><br />
        <div>Robotic-Automation</div>
      </div>
      <div className='categories'>
        <h6>Contact</h6><br />
        <div>Contact</div><br />
        <div>Privacy Policy</div><br />
        <div>Terms of Service</div><br />
        <div>Categories</div><br />
        <div>About</div>
      </div>
      <div className='country'>United States <img src={arrow} alt="" /></div>
    </div>
  )
}
