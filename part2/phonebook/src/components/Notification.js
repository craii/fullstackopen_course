import React from "react"

const Notification = ({ message, isShow, className }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={className}>
        {message}
      </div>
    )
  }

export default Notification;