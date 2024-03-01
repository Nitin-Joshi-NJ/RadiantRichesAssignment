import React from 'react'
import Navbar from './components/Navbar'
import tickIcon from '../src/img/IMAGE.png'
import iIcon from '../src/img/IMAGE (1).png'
import arrow from '../src/img/IMAGE (2).png'
import WixPro from './components/WixPro'
import SiteCraft from './components/SiteCraft'
import WixPro1 from './components/WixPro1'
import CdkBuilder1 from './components/CdkBuilder'
import WebBuilder1 from './components/WebBuilder1'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h6 className="heading text-center mt-4">
          Best Website builders in the US
        </h6>
        <hr />
        <div className="main_div">
          <div>
            <span className="left_span">
              <img src={tickIcon} alt="" /> Last Updated - February 22, 2020{" "}
            </span>
            <span className="left_span">
              <img src={iIcon} alt="" /> Advertising Disclosure
            </span>
          </div>
          <div className="right_span">
            <span>Top Relevant</span>
            <img src={arrow} alt="" />
          </div>
        </div>
        <hr />
        <div className="options">
          <span>Tools</span>
          <span>AWS Builder</span>
          <span>Start Build</span>
          <span>Build Supplies</span>
          <span>Tooling</span>
          <span>Blue Hosting</span>
        </div>
        <ul class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Hosting for all</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Hosting</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Hosting6</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Hosting 5</a>
          </li>
        </ul>

        <WixPro />
        <SiteCraft />
        <WixPro1 />
        <CdkBuilder1 />
        <h6 className="related_deals">Related Deals you might like for</h6>
        <div className="WebBuilder1">
          <div>
            <WebBuilder1 />
          </div>
          <div>
            <WebBuilder1 />
          </div>
          <div>
            <WebBuilder1 />
          </div>
        </div>
        <div className="signup" >
          <div className='special_deals'>Sign up and get exclusive special deals</div>
          <div >
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
