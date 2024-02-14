import React from 'react'
import './css/Alert.css'
const Alert = (props) => {
  return (
    <>
      {props.alert && <div className="alert-box" style={{ backgroundColor: props.alert.success == 'true' ? "green" : "red" }}>
        {props.alert.success == 'true' ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-exclamation"></i>
        }
        <p>
          {props.alert.message}
        </p>
      </div>}
    </>
  )
}

export default Alert