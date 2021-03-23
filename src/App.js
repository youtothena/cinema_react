import React from "react";
import './App.css';
import { HashRouter, Route} from "react-router-dom";
import Home from'./routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
// Detail 컴포넌트 추가
import Detail from './routes/Detail';

function App(){
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      {/* 링크될 컴포넌트 라우터 추가 */}
      <Route path="/movie-detail" component={Detail} />
      {/* Movie 컴포넌트에 Link to로 경로와 넘길 props값 지정 */}
     </HashRouter>
  );
}
export default App;

// 제이쿼리에서 load(); 의 기능과 같은 것이 App.js 임
// load(); 는 외부에 header 를 만들고 불러오는 것
// 해당 앱에 사용할 모든 컴포넌트를 불러놓고 시작함 (컴포넌트 추가 시 여기다 같이 추가해줘야함)
// 