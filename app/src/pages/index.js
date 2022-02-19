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
          <div className="title"><Fade up>Metaverse @ Berkeley</Fade></div>
          <div className="subtitle"><Fade delay={400} up>Constructing a metaverse since 2022</Fade></div>
          <Fade delay={800} up><div className="buttonParent"><Blob>
            <div className="button">Join!</div>
          </Blob></div></Fade> 
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
      <Wave color="#336ee2"/>
      <Slide style={{backgroundColor: "#336ee2", paddingTop: "50px", paddingBottom: "50px"}}>
        <div className="title">OUR MISSION</div>
        <div className="clubDescription"><Fade>
        Upon arriving at Berkeley, students are all faced with the same problem. Many often struggle to form communities beyond their roommates. This leads people to join frats or clubs, further cementing people into communities within their comfort zone. People will likely not explore further during their undergraduate experience. Many people are left feeling like they are not a part of any real community within Berkeley, which can have disastrous effects on mental health. The problem is that students aren’t incentivesed to explore and talk to people that are outside their niche. What we need to be doing is laying down a structure to create new genuine, close-knit communities for as many people  as possible.
        </Fade></div>
        <div className="threeBoxes">
          <Fade up><div className="box">
            <div className="icon"><img src={communitySVG}></img></div>
            <div className="heading">Community</div>
            <div className="description">The psychology of communities is clear. If you give people a good enough excuse, they will meet. Give them similar interests, beliefs, values, personalities or goals and they will talk, bond and form deep relationships far into the future.</div>
          </div></Fade>
          <Fade delay={400} up><div className="box">
            <div className="icon"><img src={communitySVG}></img></div>
            <div className="heading">Create</div>
            <div className="description">Creating, deploying and testing metaverses to improve and redefine social life at Berkeley. By employing strategies of gamification, we aim to encourage students to meet and form smaller communities within the larger student body.</div>
          </div></Fade>
          <Fade delay={800} up><div className="box">
            <div className="icon"><img src={communitySVG}></img></div>
            <div className="heading">Exploration</div>
            <div className="description">People will be grouped up in small groups of 5, called loops, and larger groups of 20, called houses (these numbers aren’t final). The loops and houses will attend fun events with each other, healthily compete and form communities.</div>
          </div></Fade>
        </div>
      </Slide>
      <Wave color="#336ee2" end/>
    </div>
  )

}

const JoinSlide = () => {

  return (
    <Slide>
      <div className="js" id="join">
        <div className="option">
          <Fade right><div className="link">Go to main site</div></Fade>
          <div className="header">INTERESTED IN JOINING?</div>
          <div className="subheader">Open to undergraduate students at UC Berkeley.</div>
          <div className="text">Find a community at Berkeley, and have fun while doing so, by joining Metaverse@Berkeley. Membership is a right of every UC Berkeley student and thus joining is as simple as signing up. Find a community at Berkeley, and have fun while doing so, by joining Metaverse@Berkeley. Membership is a right of every UC Berkeley student and thus joining is as simple as signing up.</div>
        </div>
        <div className="option">
        <Fade right><div className="link">Go to officer site</div></Fade>
          <div className="header">INTERESTED IN HELPING?</div>
          <div className="subheader">Apply to become an officer through the officer site.</div>
          <div className="text">Find a community at Berkeley, and have fun while doing so, by joining Metaverse@Berkeley. Membership is a right of every UC Berkeley student and thus joining is as simple as signing up. Find a community at Berkeley, and have fun while doing so, by joining Metaverse@Berkeley. Membership is a right of every UC Berkeley student and thus joining is as simple as signing up.</div>
        </div>
      </div>
    </Slide>
  )

}

const ContactSlide = () => {
  return (
    <Slide style={{backgroundColor: "#336ee2"}} id="contact">
      <div className="cs">
        <div className="title">Contact us</div>
        <div className="text">For all and any queries, contact <b>thecalmetaverse@gmail.com</b>.</div>
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
