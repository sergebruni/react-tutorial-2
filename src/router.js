import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './List'
import Create from './Create'
import Update from './Update'

const Router = () => {

  const routes = [
    {path: '/', component: List},
    {path: '/character/:id', component: Update},
    {path: '/character', component: Create},
  ]

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => 
          <Route key={index} exact path={route.path} component={route.component} />)}
      </Switch>
    </BrowserRouter>
  )
}

export default Router