import React from 'react'
import builder1 from '../img/download 1.png'
import fiveStar from '../img/IMAGE (4).png'
import arrow from '../img/IMAGE (2).png'


export default function WixPro1() {
  return (
    <div className="content_container1">
      {/* <span>
        <img src={trophy} alt="" />
        <span>Best Choice</span>
      </span> */}
      <div className="builder1_container">
        <div className="builder1_img">
          <img src={builder1} alt="" />
        </div>
        <div className="builder1_text">
          <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive
          Digital Platform Creation Tool, Streamlined Design Interface for
          Professional Websites and Online Stores (Black/Blue) <br />
          <b>Main Highlights</b>
          <p>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <p>
            Show more
            <img src={arrow} alt="" />
          </p>
        </div>

        <div>
          <div className="text-center rating">
            <b>9.3</b> <br />
            Exceptional <br />
            <img src={fiveStar} alt="" />
          </div><br /><br />
          <button className='btn btn-primary'>View</button>
        </div>
      </div>
    </div>
  );
}
