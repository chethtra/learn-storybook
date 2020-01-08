import React from 'react';
const baseStyle = {
    width: '50vw',
    fontSize: '100%',
    border: 'none',
    color: 'white',
    padding: '10px',
    borderRadius: '3px'
}

export const Button = (props) => {

const buttonStyle = {
    ...baseStyle,
    backgroundColor: props.bgColor,
    color: props.textColor
}
return (<button onClick={props.click} style={buttonStyle}>{props.text}</button>)
}