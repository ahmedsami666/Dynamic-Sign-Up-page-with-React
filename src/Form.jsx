import React from "react";
import Input from "./Input";
import Button from "./Button";
import Name from "./Name";

const Form = (props) => {
    return (
      <form className="form">
        <Name 
          name="fristName" 
          type="text" 
          placeholder="Frist Name" 
          setUserName={props.setUserName}
          value={props.fristName}
        />
        <Name 
          name="lastName" 
          type="text" 
          placeholder="Last Name" 
          setUserName={props.setUserName}
          value={props.lastName}
        />
        <Input type="password" placeholder="Password" />
        {props.userIsRegistered ? null : <Input type="password" placeholder="Confirm password"/>}
        {props.userIsRegistered ? <Button name="Login"/> : <Button name="Register"/>}
      </form>
    )
}

export default Form