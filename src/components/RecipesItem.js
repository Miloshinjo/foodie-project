import React from 'react'

const RecipesItem = (props) => (
  <li className='recipes-item'>
    <div className='recipes-item__img-box'>
      <img src={props.imgUrl} className='recipes-item__img' />
    </div>
    <h2 className='recipes-item__title'>{props.title}</h2>

    <h3 className='recipes-item__publisher'>
      by <a className='recipes-item__publisher--link' href={props.publisherUrl} target='_blank'>
      {props.publisher}
    </a>
    </h3>
  </li>
)

export default RecipesItem
