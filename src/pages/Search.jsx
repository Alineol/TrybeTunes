import React from 'react';
import { Link } from 'react-router-dom';
import Charging from '../components/Charging';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      searchInput: '',
      loading: false,
      searcResult: '',
      resultNotFound: 0,
      searchName: '',
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

  onClickButton = async (event) => {
    event.preventDefault();
    const { searchInput } = this.state;
    this.setState({
      searchName: searchInput,
      loading: true,
      searchInput: '',
    });
    const resultSearch = await searchAlbumsAPI(searchInput);
    if (resultSearch.length > 0) {
      this.setState({
        loading: false,
        searcResult: resultSearch,
      });
    }
    if (resultSearch.length === 0) {
      this.setState({
        loading: false,
        resultNotFound: true,
      });
    }
  }

  checkResult = () => {
    const { loading, resultNotFound } = this.state;
    if (loading === false && resultNotFound === true) {
      return true;
    }
  }

  results = () => {
    const { searcResult, searchName } = this.state;
    return (
      <>
        <p>
          {`Resultado de álbuns de: ${searchName}`}
        </p>
        {searcResult.map((album) => (
          <Link
            key={ album.collectionId }
            data-testid={ `link-to-album-${album.collectionId}` }
            to={ `album/${album.collectionId}` }
          >
            <div className="div-album">
              <p>{`Álbum:${album.collectionName}`}</p>
              <img
                src={ album.artworkUrl100 }
                alt={ `Imagem do ${album.collectionName}` }
              />
            </div>
          </Link>
        ))}
      </>
    );
  }

  render() {
    const {
      disabled, searchInput, loading, searcResult,
    } = this.state;
    const messenger = (<h1>Nenhum álbum foi encontrado</h1>);
    const noResult = this.checkResult();
    const form = (
      <>
        <form onSubmit={ this.onClickButton }>
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
        <section className="searchResult" />
        {noResult && messenger}
        {searcResult.length > 0 && this.results()}
      </>
    );
    return (
      <div data-testid="page-search">
        <Header />
        {loading ? <Charging /> : form }
      </div>
    );
  }
}
