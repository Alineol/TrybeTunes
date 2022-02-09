import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Charging from '../components/Charging';

export default class Favorites extends React.Component {
  state = {
    loading: true,
    favorites: [],
  }

  componentDidMount() {
    this.getList();
  }

  getList = async () => {
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      loading: false,
      favorites: favoriteSongs,
    });
  }

  onCheck = async ({ target }) => {
    const { favorites } = this.state;
    const nId = Number.parseInt(target.id, 10);
    const selected = favorites.find(({ trackId }) => trackId === nId);
    this.setState({ loading: true });
    await removeSong(selected);
    await this.getList();
  }

  toRender() {
    const { favorites } = this.state;
    const check = true;
    return (
      <>
        <div className="musics">
          <section className="musicsList">
            {favorites.map((music) => (
              <MusicCard
                key={ music.trackName }
                music={ music }
                onClick={ this.onCheck }
                checked={ check }
              />
            ))}
          </section>
        </div>
        <span className="favorits-text">Minhas musicas favoritas</span>
      </>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-favorites" className="page-favorites">
        <Header />
        <section className="favorites-sec">
          {loading ? <Charging /> : this.toRender()}
        </section>
      </div>
    );
  }
}
