import React from 'react'
import builder1 from '../img/download 1.png'
import fourStar from '../img/IMAGE (5).png'
import diamond from '../img/IMAGE (6).png'
import arrow from '../img/IMAGE (2).png'


export default function SiteCraft() {
  return (
    <div className="content_container1">
      <span className='best_price'>
        <img src={diamond} alt="" />
        <span> Best Value</span>
      </span>
      <div className="builder1_container">
        <div className="builder1_img">
          <img src={builder1} alt="" />
        </div>
        <div className="builder1_text">
          <b>SiteCraft 68-Inch Ultimate Web Design Studio</b>- Advanced Site
          Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites
          and E-commerce Platforms (Green/White) <br />
          <b>Main Highlights</b>
          <p>
            [What You Get]: Gain access to the SiteCraft design studio,
            featuring a robust selection of design elements, SEO optimization
            tools, and e-commerce integrations.
          </p>
          <p>
            Show more
            <img src={arrow} alt="" />
          </p>
        </div>

        <div>
          <div className="text-center rating">
            <b>9.5</b> <br />
            Exceptional <br />
            <img src={fourStar} alt="" />
          </div>
          <br />
          <br />
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
}
