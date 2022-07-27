import React from 'react'
import Logo from './Logo'
import MenuList from './MenuList'
import Button from './Button'

const header = () => {
  return (
    <header>
        <Logo />
        <MenuList />
        <Button className="btn-green" buttonText="LET'S PLAY" href="/" />        
    </header>
  )
}

export default header