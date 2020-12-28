import React from 'react';
import { connect } from 'react-redux';
import { getLikedList, changeLikedMovies } from '../thunks';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
    };
  }

  handleLike = (id) => {
    this.props.onChangeLikedMovies(id);
    this.forceUpdate();
  }

  render() {
    const { showDescription } = this.state;
    const { 
      title, 
      backgroundImage, 
      date, 
      rating, 
      votes, 
      description, 
      id,
      likedList } = this.props;

    
    return (
      <div className="card">
          <div
            className="card__image"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}/>
      
          <div className="card__title">
              {title}
          </div>
      
          <div className="card__like">
              <i className={`fa ${likedList.indexOf(id) !== -1 ? "fa-heart" : "fa-heart-o"}`} onClick={e => this.handleLike(id)}/>
          </div>
      
          <div className="card__subtitle">
              <span>{date}</span>
              <span>{rating} ({votes} votes)</span>
          </div> 
          <div className="card-info">
            <div className="card-info__header">Summary</div>
            <button className="card-info__toggle-btn" onClick={() => { this.setState({ showDescription: !showDescription })}}>Show</button>
            <div className="card-info__description">
              {showDescription && description}
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  likedList: state.likedMoviesReducer.list
});

const mapDispatchToProps = dispatch => ({
  onGetLikedList: () => dispatch(getLikedList()),
  onChangeLikedMovies: (id) => dispatch(changeLikedMovies(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);