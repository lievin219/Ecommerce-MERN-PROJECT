import React from 'react'

const Alert = () => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message} 
      </MuiAlert>   
    </Snackbar>
  )
}

export default Alert
