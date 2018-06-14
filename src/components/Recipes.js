import React from 'react'
import { connect } from 'react-redux'
import RecipesItem from './RecipesItem'

const dummyRecipes = [
  {
    publisher: '101 Cookbooks',
    f2f_url: 'http://food2fork.com/view/47746',
    title: 'Best Pizza Dough Ever',
    source_url: 'http://www.101cookbooks.com/archives/001199.html',
    recipe_id: '47746',
    image_url: 'http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg',
    social_rank: 100,
    publisher_url: 'http://www.101cookbooks.com'
  },
  {
    publisher: 'The Pioneer Woman',
    f2f_url: 'http://food2fork.com/view/46956',
    title: 'Deep Dish Fruit Pizza',
    source_url: 'http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/',
    recipe_id: '46956',
    image_url: 'http://static.food2fork.com/fruitpizza9a19.jpg',
    social_rank: 100,
    publisher_url: 'http://thepioneerwoman.com'
  },
  {
    publisher: 'Closet Cooking',
    f2f_url: 'http://food2fork.com/view/35477',
    title: 'Pizza Dip',
    source_url: 'http://www.closetcooking.com/2011/03/pizza-dip.html',
    recipe_id: '35477',
    image_url: 'http://static.food2fork.com/Pizza2BDip2B12B500c4c0a26c.jpg',
    social_rank: 99.99999999999994,
    publisher_url: 'http://closetcooking.com'
  },
  {
    publisher: 'Closet Cooking',
    f2f_url: 'http://food2fork.com/view/41470',
    title: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
    source_url: 'http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html',
    recipe_id: '41470',
    image_url: 'http://static.food2fork.com/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
    social_rank: 99.9999999999994,
    publisher_url: 'http://closetcooking.com'
  },
  {
    publisher: 'Closet Cooking',
    f2f_url: 'http://food2fork.com/view/35478',
    title: 'Pizza Quesadillas (aka Pizzadillas)',
    source_url: 'http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html',
    recipe_id: '35478',
    image_url: 'http://static.food2fork.com/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg',
    social_rank: 99.99999999999835,
    publisher_url: 'http://closetcooking.com'
  },
  {
    publisher: 'Two Peas and Their Pod',
    f2f_url: 'http://food2fork.com/view/54454',
    title: 'Sweet Potato Kale Pizza with Rosemary & Red Onion',
    source_url: 'http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion/',
    recipe_id: '54454',
    image_url: 'http://static.food2fork.com/sweetpotatokalepizza2c6db.jpg',
    social_rank: 99.9999999991673,
    publisher_url: 'http://www.twopeasandtheirpod.com'
  },
  {
    publisher: 'My Baking Addiction',
    f2f_url: 'http://food2fork.com/view/2ec050',
    title: 'Pizza Dip',
    source_url: 'http://www.mybakingaddiction.com/pizza-dip/',
    recipe_id: '2ec050',
    image_url: 'http://static.food2fork.com/PizzaDip21of14f05.jpg',
    social_rank: 99.99999999826605,
    publisher_url: 'http://www.mybakingaddiction.com'
  },
  {
    publisher: 'The Pioneer Woman',
    f2f_url: 'http://food2fork.com/view/6fab1c',
    title: 'Pizza Potato Skins',
    source_url: 'http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/',
    recipe_id: '6fab1c',
    image_url: 'http://static.food2fork.com/pizza3464.jpg',
    social_rank: 99.99999999760887,
    publisher_url: 'http://thepioneerwoman.com'
  },
  {
    publisher: 'Bon Appetit',
    f2f_url: 'http://food2fork.com/view/49346',
    title: 'No-Knead Pizza Dough',
    source_url: 'http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough',
    recipe_id: '49346',
    image_url: 'http://static.food2fork.com/nokneadpizzadoughlahey6461467.jpg',
    social_rank: 99.99999999743466,
    publisher_url: 'http://www.bonappetit.com'
  },
  {
    publisher: 'Simply Recipes',
    f2f_url: 'http://food2fork.com/view/36453',
    title: 'Homemade Pizza',
    source_url: 'http://www.simplyrecipes.com/recipes/homemade_pizza/',
    recipe_id: '36453',
    image_url: 'http://static.food2fork.com/pizza292x2007a259a79.jpg',
    social_rank: 99.99999998833789,
    publisher_url: 'http://simplyrecipes.com'
  },
  {
    publisher: 'Closet Cooking',
    f2f_url: 'http://food2fork.com/view/35626',
    title: 'Taco Quesadilla Pizzas',
    source_url: 'http://www.closetcooking.com/2012/08/taco-quesadilla-pizza.html',
    recipe_id: '35626',
    image_url: 'http://static.food2fork.com/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg',
    social_rank: 99.99999998319973,
    publisher_url: 'http://closetcooking.com'
  },
  {
    publisher: 'All Recipes',
    f2f_url: 'http://food2fork.com/view/17796',
    title: 'Jay’s Signature Pizza Crust',
    source_url: 'http://allrecipes.com/Recipe/Jays-Signature-Pizza-Crust/Detail.aspx',
    recipe_id: '17796',
    image_url: 'http://static.food2fork.com/237891b5e4.jpg',
    social_rank: 99.99999997246182,
    publisher_url: 'http://allrecipes.com'
  }
]

const Recipes = ({ recipes }) => (
  <ul className='recipes'>
    {dummyRecipes.map((recipe) => (
      <RecipesItem
        key={recipe.recipe_id}
        title={recipe.title}
        imgUrl={recipe.image_url}
        publisher={recipe.publisher}
        srcUrl={recipe.source_url}
      />
    ))}
  </ul>
)

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Recipes)
