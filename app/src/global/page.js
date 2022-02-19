import React from 'react'
import Footer from '../components/footer'
import Navbar from './navbar'

function Page(props) {
  return (
    <div>
      <Navbar></Navbar>
      <main {...props}></main>
      <Footer></Footer>
    </div>
  )
}

export default Page