import React from 'react';
import Header from '../components/Header';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      searchInput: '',
    };
  }

  onchange = ({ target }) => {
    const { value } = target;
    this.setState({
      searchInput: value,
      disabled: this.checkInput(value),
    });
  }

  checkInput = (value) => {
    if (value.length > 1) {
      return false;
    } return true;
  }

  render() {
    const { disabled, searchInput } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        SearchPage
        <form>
          <div>
            <input
              type="text"
              data-testid="search-artist-input"
              onChange={ this.onchange }
              value={ searchInput }
            />
            <button
              data-testid="search-artist-button"
              type="submit"
              disabled={ disabled }
            >
              Pesquisar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
