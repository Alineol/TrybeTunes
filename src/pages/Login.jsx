import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Charging from '../components/Charging';
import Imgmusic from './images/giphy.gif';

class Login extends React.Component {
  constructor() {
    super();
    this.state = ({
      userName: '',
      disabled: true,
      loading: false,
      redirect: false,
    });
  }

  onChange = ({ target }) => {
    const { value } = target;
    this.setState({
      userName: value,
      disabled: this.checkName(value),
    });
  }

  checkName = (value) => {
    if (value.length > 2) {
      return false;
    } return true;
  }

  onClick = async (event) => {
    event.preventDefault();
    const { userName } = this.state;
    this.setState({ loading: true });
    await createUser({ name: userName });
    this.setState({
      loading: false,
      redirect: true,
    });
  }

  render() {
    const { disabled, loading, redirect } = this.state;
    if (loading === false && redirect === false) {
      return (
        <div className="login-pg" data-testid="page-login">
          <form className="loginPageForm" onSubmit={ this.onClick }>
            <h1 className="titleLogin">TrybeTunes</h1>
            <label htmlFor="nameId">
              <input
                data-testid="login-name-input"
                type="text"
                id="nameId"
                onChange={ this.onChange }
                placeholder="insira um nome de usuario"
              />
              <button
                type="submit"
                data-testid="login-submit-button"
                disabled={ disabled }
              >
                Entrar
              </button>
            </label>
            <img src={ Imgmusic } alt="violão" className="musicImg" />
          </form>
        </div>
      );
    }
    if (loading === true) { return <Charging />; }
    if (loading === false && redirect === true) { return <Redirect to="/search" />; }
  }
}

export default Login;
