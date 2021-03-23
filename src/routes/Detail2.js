// 상세페이지 콘텐츠 링크 컴포넌트
// 클래스형 Detail 컴포넌트
import React, { Component } from 'react';

//componentDidMount() 사용하여 Detail컴포넌트 마운트시 push()함수 쓰기 위해 
class Detail extends Component {
    // a. Detail 컴포넌트가 마운트 되면
    componentDidMount() {
        // b. 구조분해할당으로 location, history 키 값을 얻고 변수에 할당
        const { history,location } = this.props;
        // c. location.state가 없는 경우
        // d. Home 컴포넌트로 자동으로 이동하도록 코딩(localhost:3000/movie-detail 로 직접 접속했을 경우)
       location.state===undefined&&history.push('/');
    }
    // Home 화면에서 링크 영역 클릭시, render()함수로 화면에 렌더링
    render() {
        // Movie props 에서 보낸 키값을 구조분해할당하여 location에 저장
        const {location} = this.props;
        return (
            // 넘어온 데이터 값들 중 원하는 것만 출력
            <ul>
                <li><img src={location.state.poster} alt={location.state.title}/></li>
                <li>{location.state.title}</li>
                <li>{location.state.year}</li>
                <li>{location.state.genres}</li>
                <li>{location.state.rating}</li>
            </ul>
        );
    }
}

export default Detail;