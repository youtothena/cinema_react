import React, { Component, } from 'react';

class Self extends Component {
    constructor(props){
        super(props);
        this.state={
            query: '',
            movies: []
        }
    }

    handleOnInputChange= (e) => {
        this.setState({
            query: e.target.value
        });
    };

    render() {
        const {query} = this.state;
        const { movies } = this.state;
        const filteredMovies = this.state.movies.filter((movies) => {
            return movies.title.toLowerCase().includes(this.state.query);
        });
        return (
            <div>
                <input type="text"
                name="query"
                value={query}
                placeholder="Search..."
                onChange={this.handleOnInputChange}/>

            { movies.map(movie => (
               <div>
                    <p>{movie.title}</p>
                      <p>{movie.medium_cover_image}</p>
                      <p>genres = {movie.genres}</p>
                      {filteredMovies}
               </div>
              ))}  

            </div>
        );
    }
}


export default Self;