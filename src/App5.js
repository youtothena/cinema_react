import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends Component {
  state = {
    isLoading: true,
    movies: [], 
  };

  render() {
    const {isLoading, movies} = this.state
    return (
      <div>
        {isLoading? ('Loading...'): movies.map((movie)=>{
          console.log(movie);
          return(
            <Movie 
            key = {movie.id}
            id = {movie.id} 
            year = {movie.year} 
            title = {movie.title} 
            summary = {movie.summary} 
            poster = {movie.medium_cover_image}
            rating = {movie.rating}/>
          );
        })}
      </div>
    );
  }


  getMovies = async() => {
    const {
      data: { 
        data: {movies}, 
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    console.log(movies);
    console.log(this.state);
  }

  componentDidMount(){
    setTimeout(()=>{
      this.getMovies();
    },3000);
  }

}
export default App;

// 결론
// 1. 영화 API를 통해 사용할 데이터들을 불러옴
// 2. API를 가져올 때 axios.get()함수 사용 = 데이터 가져올 시간이 필요하므로 비동기작업 async await 사용
// 3. state에 API 데이터가 저장 or 업데이트 된 후 -> Movie 컴포넌트가 렌더링되도록 코딩