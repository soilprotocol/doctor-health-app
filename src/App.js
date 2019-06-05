import React from 'react';
import HomeScreen from "./components/functional_components/HomeScreen";
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import Navigation from './components/functional_components/Navbar/Navbar'; 


function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path ="/" component={HomeScreen} /> 
        </Switch>
    </BrowserRouter>
  );
}

export default App;
