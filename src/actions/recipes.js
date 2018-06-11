import { searchRecipes } from '../utils/api'

const GET_RECIPES = 'GET_RECIPES' // TODO: learn to leverage constants accross files
// ACTION
export const SearchRecipesAction = (recipes) => ({
  type: GET_RECIPES,
  recipes
})

// ASYNC ACTION (used with redux-thunk)
export const startSearchRecipesAction = (query) => {
  return (dispatch) => {

    return searchRecipes(query).then((recipes) => {
        dispatch(SearchRecipesAction(recipes))
    })
  }
}