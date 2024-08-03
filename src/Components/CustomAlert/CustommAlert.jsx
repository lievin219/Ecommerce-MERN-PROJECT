import React from 'react'

const CustommAlert = () => {
  return (
    <div className={`custom-alert custom-alert-${type}`}>
    <span>{message}</span>
    <button onClick={onClose}>&times;</button>
  </div>
  )
}

export default CustommAlert
