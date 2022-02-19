
import React from 'react'

import './footer.scss';
import Slide from './slide';

import logo from '../images/logo.png';

import facebook from '../images/social/facebook.png';
import instagram from '../images/social/instagram.png';

function Footer() {
  return (
    <Slide style={{backgroundColor: "#eee"}}>
      <div className="footer">
        <div className="main">
          <div className="left">
            <div className="icon">
              <img className="iconImg" src={logo}></img>
            </div>
            <div className="orgName">
              Metaverse @ Berkeley
            </div>
          </div>
          <div className="right">
            <a href="https://www.facebook.com/" target="_blank"><img src={facebook}></img></a>
            <a href="https://www.instagram.com/" target="_blank"><img src={instagram}></img></a>
          </div>
        </div>
        <div className="data">
          <div className="left">
            © Metaverse@Berkeley {(new Date()).getFullYear()}. We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.
          </div>
          <div className="right">
            <a href="https://www.ocf.berkeley.edu">
                <img src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
                    alt="Hosted by the OCF" style={{border: 0}} />
            </a>
          </div>
        </div>
      </div>
    </Slide>
  )
}

export default Footer
