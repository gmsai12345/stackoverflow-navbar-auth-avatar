import React, { useState } from 'react';
import Routes from 'react-router-dom'
const Auth = () => {
  const [isSignup , setIsSignup] = useState(false)
  return (
    <div>
      <section class = "auth-section">
      <div className = "auth-container">
        {!isSignup && <imgsrc src = {icon} alt = 'stack overflow' className = "login-logo"/>
      <form>

      </form>
      </div>
      </section>



  )
}
export default Auth;
