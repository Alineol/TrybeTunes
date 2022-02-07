import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import Charging from '../components/Charging';
import { getUser, updateUser } from '../services/userAPI';

export default class ProfileEdit extends React.Component {
  state= {
    loading: true,
    redirect: false,
  }

  componentDidMount() {
    this.callGetUser();
  }

  callGetUser = async () => {
    const user = await getUser();
    const { description, email, image, name } = user;
    this.setState({
      loading: false,
      name,
      description,
      email,
      image,

    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  // checkimage = () => {
  //   const { image } = this.state;
  //   if (image.length === 0) {
  //     return (
  //       <img
  //         src="./images/perfil-image.png"
  //         alt="foto de perfil"
  //       />
  //     );
  //   }
  //   if (image.length > 5) {
  //     return (
  //       <img src={ URL.createObjectURL(image) } alt="lala" width="150" height="150" />
  //     );
  //   }
  // }
  checkform = () => {
    const { description, email, image, name } = this.state;
    if (description && email && image && name) {
      return false;
    } return true;
  }

  onClickSave = async (event) => {
    event.preventDefault();
    const { description, email, image, name } = this.state;
    const newData = {
      name,
      email,
      image,
      description,
    };
    this.setState({ loading: true });
    await updateUser(newData);
    this.setState({
      loading: false,
      redirect: true });
  }

  toRender = () => {
    const { description, email, image, name, redirect } = this.state;
    return (
      <section className="user-sec">
        <form>
          <label htmlFor="name-input">
            Nome:
            <input
              name="name"
              type="text"
              data-testid="edit-input-name"
              required
              id="name-input"
              value={ name }
              onChange={ this.handleChange }

            />
          </label>
          <label htmlFor="email-input">
            Email:
            <input
              name="email"
              type="email"
              data-testid="edit-input-email"
              required
              id="email-input"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              data-testid="edit-input-description"
              id="description"
              onChange={ this.handleChange }
              value={ description }
            />
          </label>
          <label htmlFor="image-input">
            Imagem:
            <input
              name="image"
              type="text"
              data-testid="edit-input-image"
              required
              id='"image-input"'
              onChange={ this.handleChange }
              value={ image }
            />
          </label>
          <button
            type="button"
            data-testid="edit-button-save"
            disabled={ this.checkform() }
            onClick={ this.onClickSave }
          >
            Salvar

          </button>
        </form>
        {redirect ? (<Redirect to="/profile" />) : null}
      </section>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {loading ? <Charging /> : this.toRender()}
      </div>
    );
  }
}
