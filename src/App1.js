import React, { Component } from 'react';

class App extends Component {
  state = {
    isLoading: true,
    // 영화데이터
    movie: [], // 배열로 사용하려고 함
  };

  //render()함수
  render() {
    // 구조분해할당 : this.state에 있는 데이터 isLoading 키값을 가져옴
    const {isLoading} = this.state // true
    return (
      <div>
        {/* 초기값이 true = 문자열 Loading이 브라우저에 렌더링 */}
        {isLoading? ('Loading...'):('Not yet...')}
      </div>
    );
  }

  // render() 함수 실행 후 componentDidMount() 함수 호출(생명주기함수)
  // (중요) 시네마앱 로딩하는 역할을 하는 함수
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading: false});
    },3000);
  }

}
export default App;