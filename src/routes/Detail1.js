// 상세페이지 콘텐츠 링크 컴포넌트
// 함수형 Detail 컴포넌트
import React from 'react';

// Movie.js에서 보낸 데이터 = state
// 반드시, route props (default props) 를 이해해야 함
// route props : 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props 가 있음
// 기본 props : (console.log(props)
// {history: {…}, location: {…}, match: {…}, staticContext: undefined}
// route -> 네트워트(console network)
// 즉, route 컴포넌트가 렌더링 할 컴포넌트에 전달한 기본 props
function Detail(props) {
    // 콘솔로 state 값 확인 : 
    // 영화카드 클릭해서 링크로 안 들어가고, (브라우저)/movie-detail 입력하여 접속할 경우 (혹은 새로고침)
    console.log(props);
    // state : undefined 로 나옴 -> Movie 컴포넌트의 state 값이 안 넘어오기 때문
    // 그래서 아래 'Detail 페이지' 문자열만 출력
    return (
        <div>
            Detail 페이지
        </div>
    );
    // 사용자가 이렇게 접근할 것에 대비해, 리다이렉트 기능으로 강제로 Home 컴포넌트로 [리다이렉트] 해야 함
    // route props 에 있는 history 이용
    // history -> go, goBack, goForward,push 등 중에서 push()함수를 사용하여 지정한 URL로 보낼 것
}

export default Detail;