import React from 'react'
import './pageWidth.scss';

function PageWidth({ className, ...props }) {
  return (
    <div className={"pageWidth" + (className == null ? "" : " " + className)} {...props}></div>
  )
}

export default PageWidth