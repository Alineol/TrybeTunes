import React from 'react';
import PropTypes from 'prop-types';
import Charging from '../components/Charging';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class Album extends React.Component {
  state = {
    album: undefined,
    musicsList: '',
    loading: false,
    checked: [],
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getList(id);
  }

  getList = async (id) => {
    const favoriteSongs = await getFavoriteSongs();
    const favIds = favoriteSongs.map((songs) => songs.trackId);
    const musics = await getMusics(id);
    const onlymusics = musics.filter((item) => item.kind === 'song');
    this.setState({
      album: musics[0],
      musicsList: onlymusics,
      checked: [...favIds],
    });
    return favoriteSongs;
  }

  onCheck = async ({ target }) => {
    const { musicsList, checked } = this.state;
    const nId = Number.parseInt(target.id, 10);
    if (!target.checked) {
      const selected = musicsList.find(({ trackId }) => trackId === nId);
      const newState = checked.filter((music) => music !== nId);
      this.setState(({
        checked: newState,
        loading: true,
      }));
      await removeSong(selected);
      this.setState({
        loading: false,
      });
    } else {
      this.setState((prevState) => ({
        checked: [...prevState.checked, nId],
        loading: true,
      }));
      const favorite = musicsList.find(({ trackId }) => trackId === nId);
      await addSong(favorite);
      this.setState({ loading: false });
    }
  }

  isCheked = (id, state) => {
    const check = state.includes(id);
    return check;
  }

  createCards = () => {
    const { musicsList, checked } = this.state;
    return (
      <section>
        {musicsList.map((music) => (
          <MusicCard
            key={ music.trackName }
            music={ music }
            musics={ musicsList }
            onClick={ this.onCheck }
            checked={ this.isCheked(music.trackId, checked) }
          />
        ))}
      </section>
    );
  }

  renderPage = () => {
    const { album, loading } = this.state;
    // musicsList.shift();
    const { artistName, artworkUrl100, collectionName } = album;
    return (
      <>
        <div className="musics">
          <div className="musicsList">
            {loading ? <Charging /> : this.createCards()}
          </div>
        </div>
        <div className="album-info">
          <p data-testid="album-name">{ collectionName }</p>
          <p data-testid="artist-name">{ artistName }</p>
          <img
            className="album-img"
            src={ artworkUrl100 }
            alt="imagem do album"
          />
        </div>
      </>
    );
  }

  render() {
    const { album } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <section className="musics-album">
          { !album ? <Charging /> : this.renderPage() }
        </section>
      </div>

    );
  }
}
Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
