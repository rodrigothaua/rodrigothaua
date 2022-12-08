import React, { useEffect, useState } from 'react'
import Menu from '../menu'
import git_api from '../services/git_api'

import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

  const [user, setUser] = useState()

  useEffect(() => {
    git_api
      .get('/users/rodrigothaua')
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err)
      })
  }, [])

  return (
    <header className='app-header'>
        <Link to='/'>
          <div className='avatar'>
            <img src={user?.avatar_url} />
          </div>
        </Link>
        
        <div className='app-header__menu'>
          <Menu />
        </div>
    </header>
  )
}

export default Header