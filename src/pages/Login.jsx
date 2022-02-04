import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Charging from '../components/Charging';

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

  onClick = async () => {
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
        <div data-testid="page-login">
          <form>
            <label htmlFor="nameId">
              Nome:
              <input
                data-testid="login-name-input"
                type="text"
                id="nameId"
                onChange={ this.onChange }
              />
              <button
                type="button"
                data-testid="login-submit-button"
                disabled={ disabled }
                onClick={ this.onClick }
              >
                Entrar
              </button>
            </label>

          </form>
        </div>
      );
    }
    if (loading === true) { return <Charging />; }
    if (loading === false && redirect === true) { return <Redirect to="/search" />; }
  }
}

export default Login;
