import axios from 'axios'
import { apiKey } from '../../credentials'

// GOOD PROXY SERVER
const proxy = 'https://cors-anywhere.herokuapp.com/'
// SEARCH QUERY
// http://food2fork.com/api/search
// get recipe http://food2fork.com/api/get

export const searchRecipes = async (query) => {
  const result = await axios(`${proxy}http://food2fork.com/api/search?key=${apiKey}&q=${query}&sort=r`)

  return result.data.recipes
}
