import React from 'react'

import Menu from '../menu'

import './Header.css'

const Header = () => {

  const logo = 'img/logo192.png'

  return (
    <header className='app-header'>
        <div className='app-header__menu'>
          <img src={logo} />
          <Menu />
        </div>
    </header>
  )
}

export default Header