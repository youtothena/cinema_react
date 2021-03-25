import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  render() {
    const { isLoading, movies } = this.state
    return (
      <section className="container">
        <h1>Moive List</h1>
        { isLoading ? (
          <div className="loader">
            <h1 className="loader">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            </h1>
          </div>
          ) : (
            <div className="movies">
              { movies.map(movie => (
                <Movie 
                  key = {movie.id}
                  id = {movie.id}
                  year = {movie.year}
                  title = {movie.title}
                  summary = {movie.summary}
                  poster = {movie.large_cover_image}
                  genres = {movie.genres}
                />
              )) }
            </div>
            ) }
      </section>
    );
  };

  getMovies = async () =>{
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState( {movies: movies, isLoading: false} );
  }

  componentDidMount(){
    this.getMovies();
  }
}
export default Home;