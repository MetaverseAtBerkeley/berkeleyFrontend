import * as React from "react"
import { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

import logo from '../images/logo.png';
import communitySVG from '../images/community.svg';

import '../global/global.scss';
import './index.scss';
import Centered from "../components/centered";
import Slide from "../components/slide";
import Wave from "../components/wave";
import Blob from "../components/blob";
import Page from "../global/page";

const LandingComponent = () => {

  const [rotated, setRotated] = useState(0);
  
  useEffect(() => {

    const onScroll = () => {

      setRotated(window.scrollY > 50 ? -20 : 0);

    };
    
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (
    <Slide>
      <div className="lc" id="home">
        <div className="left">
          <div className="title"><Fade up>Green Keys @ UChicago</Fade></div>
          <div className="subtitle"><Fade delay={400} up>Creating Green Keys Finance at UChicago</Fade></div>
          <Fade delay={800} up><div className="buttonParent">
            <a href="https://zubatomic.com/metaverse/redirect" target="_blank">
              <Blob>
              <div className="button">Join!</div>
              </Blob>
            </a>
          </div></Fade> 
        </div>
        <div className="right">
          <Roll right>
            <div>
              <img src={logo} className="logo" style={{transform: `rotate(${rotated}deg)`}}></img>
            </div>
          </Roll>
        </div>
      </div>
    </Slide>
  )

};

const AfterMain = () => {

  return (
    <div className="am" style={{display: "flex", flexDirection: "column"}} id="mission">
      <Wave color="#00784A"/>
      <Slide style={{backgroundColor: "#00784A", paddingTop: "50px", paddingBottom: "50px"}}>
        <div className="title">OUR MISSION</div>
        <div className="clubDescription"><Fade>
        We aim to harness the power of the Finance for positive social good and mental health. Through strategies of Financial Planning, Modeling and Banking, Green Keys @ UChicago will serve as a hotspot for Financial learning inside UChicago's intelligent student population. Students searching to meet people and join a community will find a home at Green Keys. <br />
        </Fade></div>
        <div className="threeBoxes">
          <Fade up><div className="box">
            <div className="icon"><img src={communitySVG}></img></div>
            <div className="heading">Community</div>
            <div className="description">We are a community-first organization. Our principal aim is to provide true tight-knit communities to students at UChicago from all walks of life. The creation of Green Keys thus becomes just a tool to achieve this. </div>
          </div></Fade>
          <Fade delay={400} up><div className="box">
            <div className="icon"><img src={communitySVG}></img></div>
            <div className="heading">Exploration</div>
            <div className="description">Innovation, exploration and creation is at the root of our culture. It is through relentless iteration that we aim to tackle complex phenomena such as capital markets. New ideas are always welcomed.</div>
          </div></Fade>
          <Fade delay={800} up><div className="box">
            <div className="icon"><img src={communitySVG}></img></div>
            <div className="heading">Growth</div>
            <div className="description">We strive to accompany every Berkeley student through the exciting, yet sometimes rocky experience that is entering University for the first time by providing a safe-space for personal growth and community.</div>
          </div></Fade>
        </div>
      </Slide>
      <Wave color="#00784A" end/>
    </div>
  )

}

const JoinSlide = () => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  let currentSemester = "Spring";
  if (currentMonth > 4) currentSemester = "Summer";
  if (currentMonth >= 7) currentSemester = "Fall";

  return (
    <Slide>
      <div className="js" id="join">
        {currentSemester != "Summer" && 
          <div className="option">
            <Fade right><a href="https://zubatomic.com/metaverse/redirect" target="_blank"><div className="link">Go to main site</div></a></Fade>
            <div className="header">INTERESTED IN JOINING?</div>
            <div className="subheader">Open to undergraduate students this <b>{currentSemester} {currentYear}</b>.</div>
            <div className="text">Membership is open for {currentSemester.toLowerCase()}! Find a community at Berkeley, and have fun while doing so, by joining Green Keys@Uchicago. Membership is a right of every UC Berkeley student and thus joining is as simple as signing up. We will be holding our kickoff meeting soon, so be sure to sign up soon!</div>
          </div>
        }
        {currentSemester == "Summer" && 
          <div className="option">
            <Fade right><a href="https://zubatomic.com/metaverse/redirect" target="_blank"><div className="link">Go to main site</div></a></Fade>
            <div className="header">INTERESTED IN JOINING?</div>
            <div className="subheader">Open to undergraduate students during <b>{currentYear}</b>.</div>
            <div className="text">Membership will open during fall later this year. Find a community at Berkeley, and have fun while doing so, by joining Green Keys@UChicago. Membership is a right of every UC Berkeley student and thus joining is as simple as signing up.</div>
          </div>
        }
        <div className="option">
        <Fade right><a href="https://road-message-514.notion.site/Become-an-officer-1ec0173227154930b79700ad7e3e14f2" target="_blank"><div className="link">Go to officer site</div></a></Fade>
          <div className="header">INTERESTED IN HELPING?</div>
          <div className="subheader">Apply to become an officer through the officer site.</div>
          <div className="text">We are always looking for extra hands to help us out constructing and running the metaverse. Officers are given limitless creative freedom, and have the opportunity to get hands-on experience running a real-world project. </div>
        </div>
      </div>
    </Slide>
  )

}

const ContactSlide = () => {
  return (
    <Slide style={{backgroundColor: "#00784A"}} id="contact">
      <div className="cs">
        <div className="title">Contact us</div>
        <div className="text">For all and any queries, contact <b>GreenKeysChicago@outlook.com</b>.</div>
      </div>
    </Slide>
  )
}

// markup
const IndexPage = () => {
  return (
    <Page>
      <LandingComponent />
      <AfterMain />
      <JoinSlide />
      <ContactSlide />
    </Page>
  )
}

export default IndexPage
