import React from 'react';
import { connect } from 'react-redux';
import { getMovieList, getGenresList, getSelectedGenre, getLikedList, changeLikedMovies } from '../thunks';
import Card from './Card';
import GenreList from './GenreList'
import { getImageUrl } from '../config';

class App extends React.Component {

  componentDidMount() {
    this.props.onGetMovieList();
    this.props.onGetGenresList();
  }

  filterMoviesByGenre = (id) => {
    this.props.onGetSelectedGenres(id);
  }

  render() {
    return (
      <div>
        <GenreList 
          genres={this.props.genresList}
          filterMoviesByGenre={this.filterMoviesByGenre} 
        />
        <div className="cards">
          {this.props.movieList.map((card) => (
            <Card
              id={card.id}
              key={card.original_title}
              backgroundImage={getImageUrl(card.backdrop_path)}
              date={card.release_date}
              rating={card.vote_average}
              votes={card.vote_count}
              description={card.overview}
              title={card.original_title}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.moviesReducer.list,
  genresList: state.genresReducer.list,
  likedList: state.likedMoviesReducer.list
});

const mapDispatchToProps = dispatch => ({
  onGetMovieList: () => dispatch(getMovieList()),
  onGetGenresList: () => dispatch(getGenresList()),
  onGetSelectedGenres: (id) => dispatch(getSelectedGenre(id)),
  onGetLikedList: () => dispatch(getLikedList()),
  onChangeLikedMovies: (id) => dispatch(changeLikedMovies(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);