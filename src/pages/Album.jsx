import React from 'react';
import PropTypes from 'prop-types';
import Charging from '../components/Charging';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default class Album extends React.Component {
  state = {
    album: undefined,
    musicsList: '',
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.getList(id);
  }

  getList = async (id) => {
    const musics = await getMusics(id);
    const onlymusics = musics.filter((item) => item.kind === 'song');
    this.setState({
      album: musics[0],
      musicsList: onlymusics,
    });
  }

  renderPage = () => {
    const { album, musicsList } = this.state;
    // musicsList.shift();
    const { artistName, artworkUrl100, collectionName } = album;
    return (
      <>
        <div className="Informations">
          <p data-testid="album-name">{ collectionName }</p>
          <p data-testid="artist-name">{ artistName }</p>
          <img
            src={ artworkUrl100 }
            alt="imagem do album"
          />
        </div>
        <section className="musics">
          {musicsList.map((music) => (
            <MusicCard key={ music.trackName } music={ music } />
          ))}
        </section>
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
