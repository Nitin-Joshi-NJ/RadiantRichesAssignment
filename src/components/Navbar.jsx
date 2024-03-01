import React from 'react'
import Icon from './img/IMAGE.jpg'

export default function Navbar() {
  return (
    <>
    <div className='container-fluid'>
        <h6 className='nav_font'>Website Builders</h6>
        <h6 className='nav_font'>Today's Deals</h6>
        <h6 className='nav_font'>Categories</h6>
        <div>
        <input type="search" name="" id=""/> <img src={Icon} alt="search_icon" className='search_icon'/>
        </div>
    </div>
    
    </>
  );
}


