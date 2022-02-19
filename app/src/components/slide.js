import React from 'react'
import Centered from './centered'
import PageWidth from './pageWidth'

function Slide({ children, ...props }) {
  return (
    <Centered {...props}>
      <PageWidth> {children} </PageWidth>
    </Centered>
  )
}

export default Slide