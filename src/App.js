import React from 'react';
import {Route,Switch} from 'react-router-dom';
import asyncComponent from './asyncComponents/asyncComponent.js';
const Home = asyncComponent( ()=> import('./route/Home/index.js') );
const News = asyncComponent( ()=> import('./route/News/index.js') );
const Course = asyncComponent( ()=> import('./route/Course/index.js') );

export default () => (
  <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/news" component={News} />
      <Route path="/courese" component={Course} />
  </Switch>
)
