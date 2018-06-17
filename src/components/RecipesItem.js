import React from 'react'
import { Link } from 'react-router-dom'

const RecipesItem = (props) => (
  <Link to={`recipes/${props.id}`}>
  <li className='recipes-item'>
    <div className='recipes-item__img-box'>
      <img src={props.imgUrl} className='recipes-item__img' />
    </div>
    <h2 className='recipes-item__title'>{props.title}</h2>

    <h3 className='recipes-item__publisher'>
      by {props.publisher}
    </h3>
  </li>
  </Link>
)

export default RecipesItem
