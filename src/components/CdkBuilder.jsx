import React from 'react'
// import trophy from '../img/IMAGE (3).png'
import builder1 from '../img/download 1.png'
import fourStar from '../img/IMAGE (7).png'
import arrow from '../img/IMAGE (2).png'


export default function CdkBuilder1() {
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
         <b> CDK Resposive Builder:</b> An extensive library of widgets and apps, and
          detailed step-by-step guides <br />
          <b>Main Highlights</b>
          <div style={{background:'#FFB6C1', borderRadius:'4px',paddingLeft:'0.8vw'}}>
            <span> 9.9 Building Responsive</span><br />
            <span> 8.9 Cool</span><br />
            <span> 8.9 Docs</span>
          </div>
          <p>
           
          </p>
          <div>
            <span>Why we love it</span>
            <ul>
                <li>Documentation</li>
                <li>Easy Use</li>
                <li>Out of box</li>
            </ul>
          </div>
          <p>
            Show more
            <img src={arrow} alt="" />
          </p>
        </div>

        <div>
          <div className="text-center rating">
            <b>9.1</b> <br />
            Very Good <br />
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
