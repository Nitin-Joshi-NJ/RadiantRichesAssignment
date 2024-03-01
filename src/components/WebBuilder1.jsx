import React from 'react'
import builder1 from '../img/download 1.png'

export default function WebBuilder1() {
  return (
    <div className='builder1_deals'>
      <div className="builder1_img">
        <img src={builder1} alt="" />
        <br />
      </div>
      <div>
        <div className="builder1_offer">
          <span> 20% off</span>
          <span> Limited time</span>
        </div>
        <h6 className="text-center" style={{ color: "#626E79"}}>
          Webbuilder 1
        </h6>
        <span className="builder1_support">
        Computer Modern classic with wix support
        </span>
        <br />
        <span className='builder1_price'>$39.96</span>
        <span className='builder1_originalPrice'> $49.96</span>
        <span className='builder1_discount'> (20% off)</span>
      </div><br />
      <button className="btn btn-primary">View Deal</button>
    </div>
  );
}
