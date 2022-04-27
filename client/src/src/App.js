import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/layout/Navbar';

//Pages
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Home from './components/pages/home';
import Events from './components/pages/events';
import Speakers from './components/pages/Speakers';
import Schedule from './components/pages/Schedule';
import Info from './components/pages/info';
import Profile from './components/profile/Profile';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import ViewProfile from './components/profile/ViewProfile';
import PrivateRoute from './components/routing/PrivateRoute';

//REDUX
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';


if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/speakers" component={Speakers} />
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/info" component={Info} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              <PrivateRoute exact path="/view-profile" component={ViewProfile} />
            </Switch>
          </section>
        </Fragment>
      </Router>
      </Provider> 
    )};

export default App;