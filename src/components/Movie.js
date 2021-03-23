import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
// 1. 영화 상세페이지 Link컴포넌트 사용을 위한 도구 import
import { Link } from "react-router-dom";

function Movie({year,title,summary,poster,rating,genres}) {
    return (
        <div className="movie">
            {/* 2. 객체를 전달 : <Link to ={{pathname: '/URL', state: {'route props 에 보내줄 데이터'}}} */}
            <Link to={{pathname: "/movie-detail", state: {year,title,poster, genres,rating},}}>
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <span className="movie_rating">평점 : {rating}/10</span>
                    <p className="movie_year">{year}</p>
                    {/* 최종. 시놉시스 180자로 제한 = slice(배열시작인덱스, 배열끝인덱스앞까지) */}
                    <p className="movie_data">{summary.slice(0,180)} ...</p>
                    <ul>
                        {genres.map((genre,index)=>{
                            return <li className="movie_genre" key={index}>{genre}</li>
                        })}
                    </ul>
                </div>
            </Link>
        </div>
    );
}

// propTypes로 데이터 유효성 체크하기
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;