import React from 'react'
import Search from './Search'

const Header = () => (
  <div className='header'>
    <div className='header__logo-box'>
      <svg className='header__logo'>
        <use xlinkHref='images/sprite.svg#icon-food'/>
      </svg>
      <h1 className='header__title'>Welcome to Foodie, home of the world's best recipes</h1>
    </div>

    <Search />
  </div>
)

export default Header
