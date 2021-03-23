import React, { Component } from 'react';
import './Detail.css';


class Detail extends Component {
    componentDidMount() {
        const { history,location } = this.props;
        location.state===undefined&&history.push('/');
    }
    // (브라우저주소)locahost:3000/#/movie-detail 로 접속시 에러 발생
    // 이유 : render()함수 실행 후 componentDidMount()함수가 실행되기 때문에 render()값을 받아올 수 없기 때문
    // 따라서, render()함수에도 componentDidMount()함수에 작성한 리다이렉트 코드를 추가
    render() {
        const {location} = this.props;
        return (
               <div>
                   {location.state ? (
                    <ul>
                        <li><img src={location.state.poster} alt={location.state.title}/></li>
                        <li>{location.state.title}</li>
                        <li>{location.state.year}</li>
                        <li>{location.state.genres}</li>
                        <li>{location.state.rating}</li>
                    </ul>) : (null)
                    }
               </div>
        );
    }
}

export default Detail;