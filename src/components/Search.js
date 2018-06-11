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
  }

  render() {
    return (
      <form onSubmit={this.onSearchSubmit}>
        <input
          type="text"
          placeholder="Type the food here"
          value={this.state.searchTerm}
          onChange={this.onSearchTermChange}
        />
        <button>
          Search
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchRecipes: (query) => dispatch(startSearchRecipesAction(query))
})

export default connect(undefined, mapDispatchToProps)(Search)