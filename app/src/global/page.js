import React from 'react'
import Footer from '../components/footer'
import Navbar from './navbar'
import { Helmet } from "react-helmet"

import logo from '../images/logo.png';

function Page(props) {
  return (
    <div>
      <Helmet>
        <meta name="icon" href={logo} />
        <link rel="shortcut icon" type="image/png" href={logo} />
      </Helmet>
      <Navbar></Navbar>
      <main {...props}></main>
      <Footer></Footer>
    </div>
  )
}

export default Page