import React from 'react';
import HomeScreen from "./components/functional_components/HomeScreen";
import RequestScreen from "./components/functional_components/RequestScreen"
import PatientDetails from './components/functional_components/PatientDetails/PatientDetails'; 
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import Navigation from './components/functional_components/Navbar/Navbar'; 
import auth from 'solid-auth-client'; 
import LoggedOut from './components/functional_components/LoggedOut/LoggedOut'; 


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webId: undefined
    }
  }

  async login() {
    const session = await auth.currentSession(); 
    if(!session) {
      await auth.login("https://solid.community"); 
    } else {
      this.setState({
        webId: session.webId
      });
    }
  }

  logout() {
    auth.logout().then(() => {
      this.setState({
        webId: undefined
      });
    }); 
  }

  componentDidMount () {
    auth.trackSession(session => {
      if(!session) {
        console.log("You are logged out"); 
      } else {
        console.log("You are logged in, fetching data now");
        this.setState({
          webId: session.webId
        }); 
        console.log(this.state.webId); 
        }
      });
  }

  render () {
    return (
      <BrowserRouter>
          <Navigation onClick={
              this.state.webId ? this.logout.bind(this) : this.login.bind(this)
            }
          webId={this.state.webId}/>
          <Switch>
            <Route exact path ="/" component={this.state.webId? HomeScreen : LoggedOut} /> 
            <Route exact path ="/request" component={RequestScreen} /> 
            <Route exact path="/patient" component={PatientDetails} /> 
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
