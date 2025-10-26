

import React from 'react'

const Button = () => {
  return (
    <div>
      
    </div>
  )
}

export default Button

import './index.jsx';




const STYLES = ['btn--primary', 'btn--outline'];
const SIZES  = ['btn--medium'];


export const button = ({buttonStyle, buttonSize, onClick, type, children

}) => {
 const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
 const checkButtonSize  = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    
}