import React from 'react';
import {Switch , Route} from 'react-router-dom'

function App() {
  return (
    <Switch>

      <Route exact path = "/">This is home page </Route>

      <Route  exact path = "/starred">This is home starred </Route>

      <Route> This is error page </Route>



    </Switch>
  );
}

export default App;
