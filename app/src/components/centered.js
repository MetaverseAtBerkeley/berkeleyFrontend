import React from 'react'

import './centered.scss';

function Centered({ className, ...props }) {
  return (
    <div className={"centered" + (className == null ? "" : " " + className)} {...props}></div>
  )
}

export default Centered