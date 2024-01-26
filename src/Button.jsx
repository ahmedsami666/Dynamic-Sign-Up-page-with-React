import React from "react";

const Button = (props) => {
  const [isMouseOver, setMouseOver] = React.useState(false)

  const handleMouseOver = () => {
    setMouseOver(true)
  }

  const handleMouseOut = () => {
    setMouseOver(false)
  }
  
  return (
    <button 
      type="submit" 
      style={{backgroundColor: isMouseOver ? "black" : "white"}} 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {props.name}
    </button>
  )
}

export default Button;