import React from 'react'

const Header = () => (
  <div className='header'>
    <div className='header__logo-box'>
      <svg className='header__logo'>
        <use xlinkHref='/images/sprite.svg#icon-food'/>
      </svg>
      <h1 className='header__title'>Welcome to Foodie, home of the world's best recipes</h1>
    </div>
  </div>
)

export default Header
