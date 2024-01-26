import React from "react";
import Form from "./Form"
import IsRegisteredForm from "./IsRegisteredForm";

const App = () => {
  const [userName, setUserName] = React.useState({
    fristName: "",
    lastName: ""
  })
  const [userIsRegistered, setIsRegistered] = React.useState(null)
  console.log(userIsRegistered)
  return (
    <div className="container">
      <h1 className="heading"> Dynamic Sign Up page with React. </h1>
      {userIsRegistered === null ? 
        <IsRegisteredForm userIsRegistered={userIsRegistered} setIsRegistered={setIsRegistered}/>
      :
      <div className="container">
      <h1>Hello, {userName.fristName} {userName.lastName}</h1>
      <Form 
        userIsRegistered={userIsRegistered}
        fristName={userName.fristName}
        lastName={userName.lastName}
        setUserName={setUserName}
      />
      </div>
    }
    </div>
  );
}

export default App
