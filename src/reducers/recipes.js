export default (state = [], action) => {
  switch (action.type) {
    case 'GET_RECIPES':
      return action.recipes.slice(0, 12) // I want to show only 12 recipes out of 30
    default:
      return state
  }
}
