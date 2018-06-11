import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentPage from '../components/ContentPage'
import NotFoundPage from '../components/NotFoundPage'
import Dashboard from '../components/Dashboard'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter
