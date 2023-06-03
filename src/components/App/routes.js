import React from 'react';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Nav from '../Nav'
import About from '../About'
import Contact from '../Contact'
import Video from '../Video'
// import Page404 from '../page404'

const routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "About",
    path: "/about",
    exact: true,
    component: About,
  },
  {
    name: "Contact",
    path: "/contact",
    exact: true,
    component: Contact,
  },
  // {
  //   name: "Video",
  //   path: "/video",
  //   exact: true,
  //   component: Video,
  // },

  // {
  //   name: "Page404",
  //   component: Page404,
  // },
];

const Routes = () => (
  <Router>
    <Nav />
    <Switch>
      {routes.map(route => (
        <Route
          key={route.name}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
)

export default Routes;
