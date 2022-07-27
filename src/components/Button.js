import React from 'react'

const Button = (props) => {
  return (
    <a {...props} href={props.href} className={props.className}>{props.buttonText}</a>
  )
}

export default Button