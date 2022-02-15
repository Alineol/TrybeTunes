import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProfileEdit from './pages/ProfileEdit';
import './app.css';
import backImg from './backImg.png';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Switch>
          <Route
            exact
            path="/"
            component={ (props) => (<Login
              { ...props }
            />) }
          />
          <Route
            path="/search"
            component={ () => <Search /> }
          />

          <Route
            path="/album/:id"
            component={ (props) => <Album { ...props } /> }
          />
          <Route
            path="/favorites"
            component={ () => <Favorites /> }
          />
          <Route
            exact
            path="/profile"
            component={ () => <Profile /> }
          />
          <Route
            exact
            path="/profile/edit"
            component={ () => <ProfileEdit /> }
          />
          <Route exact path="*" component={ () => <NotFound /> } />
        </Switch>
        <img src={ backImg } alt="imagem de fundo" className="handsImg" />
      </BrowserRouter>

    );
  }
}

export default App;
