import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NotFoundPage from '../components/NotFoundPage'
import Dashboard from '../components/Dashboard'
import Recipes from '../components/Recipes'
import Recipe from '../components/Recipe'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/recipes' component={Recipes} />
        <Route path='/recipes/:id' component={Recipe} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter
