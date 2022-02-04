import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Charging from './Charging';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      getUserName: false,
      userName: '',
    };
  }

  componentDidMount() {
    this.onOpen();
  }

  onOpen = async () => {
    this.setState({ loading: true });
    const user = await getUser();
    this.setState({
      userName: user.name,
      loading: false,
      getUserName: true,
    });
    return user.name;
  }

  render() {
    const { loading, getUserName, userName } = this.state;
    if (loading === false && getUserName === true) {
      return (
        <header data-testid="header-component">
          <div data-testid="header-user-name">{userName}</div>
          <div className="links">
            <button type="button">
              <Link to="/search" data-testid="link-to-search">Voltar para pesquisa</Link>
            </button>
            <button type="button">
              <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
            </button>
            <button type="button">
              <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
            </button>
          </div>
        </header>
      );
    }
    if (loading === true && getUserName === false) {
      return (<Charging />);
    }
    return (<Charging />);
  }
}
