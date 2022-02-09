import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Charging from './Charging';
import './css/header.css';
import svgImg from './css/simbolo.svg';

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
        <header className="header" data-testid="header-component">
          <div className="title">
            TrybeTunes
            <img src={ svgImg } alt="simbolo musical" />
          </div>

          <div className="name-links">
            <span className="name" data-testid="header-user-name">{userName}</span>
            <div className="links">
              <Link
                className="link"
                to="/search"
                data-testid="link-to-search"
              >
                Pesquisar
              </Link>
              <Link
                to="/favorites"
                data-testid="link-to-favorites"
                className="link"
              >
                Favoritas

              </Link>
              <Link
                to="/profile"
                data-testid="link-to-profile"
                className="link"
              >
                Perfil

              </Link>
              {/* </button> */}
            </div>
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
