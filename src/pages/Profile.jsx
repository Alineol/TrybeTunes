import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Charging from '../components/Charging';

export default class Profile extends React.Component {
  state={
    user: [],
    loading: true,
  }

  componentDidMount() {
    this.callGetUser();
  }

  callGetUser = async () => {
    const user = await getUser();
    this.setState({
      user,
      loading: false,
    });
  }

  toRender = () => {
    const { user: { description, email, image, name } } = this.state;
    return (
      <section className="user-sec">
        <div>
          <img
            src={ image }
            alt="Imagem do usuario"
            data-testid="profile-image"
          />
          <Link to="/profile/edit">
            <button type="button">Editar perfil</button>
          </Link>
        </div>
        <p>
          Nome:
          {name}
        </p>
        <p>
          Email:
          {email}
        </p>
        <p>
          Descrição:
          {description}
        </p>
        <div />
      </section>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {loading ? <Charging /> : this.toRender()}
      </div>
    );
  }
}
