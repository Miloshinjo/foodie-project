import React from 'react'
import { connect } from 'react-redux'
import { startSearchRecipesAction } from '../actions/recipes'

class Search extends React.Component {
  state = {
    searchTerm: ''
  }

  onSearchTermChange = (e) => {
    const searchTerm = e.target.value
    this.setState(() => ({ searchTerm }))
  }

  onSearchSubmit = (e) => {
    e.preventDefault()

    this.props.searchRecipes(this.state.searchTerm)

    this.setState(() => ({ searchTerm: '' }))

  }

  render () {
    return (
      <form className='search' onSubmit={this.onSearchSubmit}>
        <input
          className='search__input'
          type='text'
          placeholder='Search for some amazing recipes'
          value={this.state.searchTerm}
          onChange={this.onSearchTermChange}
        />
        <button className='search__button'>
          <svg className='search__icon'>
            <use xlinkHref='images/sprite.svg#icon-search2'/>
          </svg>
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchRecipes: (query) => dispatch(startSearchRecipesAction(query))
})

export default connect(undefined, mapDispatchToProps)(Search)
