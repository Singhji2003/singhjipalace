import React from 'react'
import './css/CommingSoon.css'
const ComingSoon = (props) => {
  return (
    <div className="comming-soon">
        <h1>This service will available soon...</h1>
        <button onClick={()=>{
          props.commingSoon(false)
        }}>Close</button>
    </div>
  )
}

export default ComingSoon