import React from 'react'
import './css/Loader.css'
const Loader = () => {
  return (
    <div className='loader'>
      <img src={require('../Image/loader.gif')} alt="" />
    </div>
  )
}

export default Loader