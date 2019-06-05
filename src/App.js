import React from 'react';
import HomeScreen from "./components/functional_components/HomeScreen";
import RequestScreen from "./components/functional_components/RequestScreen"
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import Navigation from './components/functional_components/Navbar/Navbar'; 


function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path ="/" component={HomeScreen} /> 
          <Route exact path ="/request" component={RequestScreen} /> 
        </Switch>
    </BrowserRouter>
  );
}

export default App;
