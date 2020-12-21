import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import { UserGuide, Welcome } from './components/pages';

// import 'bebop/dist/index.css'
// import './theme.less'
// import 'antd/dist/antd.less'

const App = () => {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/user-guide">
        <UserGuide />
      </Route>
      {/* <Route path="/catalog">
        <Catalog />
      </Route> */}

    </Switch>
  </Router>
}

export default App
