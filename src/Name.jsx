import React from "react";

const Name = (props) => {
    const handleChange = (e) => {
      const { name: inputName, value: inputValue } = e.target
      //console.log(inputName + ' ' + inputValue)
      props.setUserName((preValue) => {
        return {
          ...preValue,
          [inputName] : inputValue
        }
      })
    }
    return (
      <input 
      onChange={handleChange} 
      type={props.type} 
      placeholder={props.placeholder} 
      name={props.name}
      />)
}

export default Name