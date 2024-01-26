import React from "react";

const IsRegisteredForm = (props) => {
    const handleRegister = () => {
        props.setIsRegistered(false)
    }
    const handleSignIn = () => {
        props.setIsRegistered(true)
    }
    return (
      <div className="container">
        <h1>Join Us</h1>
        <button onClick={handleRegister}> Register </button>
        <button onClick={handleSignIn}> Already have an account </button>
      </div>
    )
}

export default IsRegisteredForm