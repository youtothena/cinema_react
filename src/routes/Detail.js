import React, { Component } from 'react';
import "./Detail.css";

class Detail extends Component {
    componentDidMount() {
        const { history,location } = this.props;
        location.state===undefined && (history.push('/'));
    }
    // (브라우저주소)localhost:3000/#/movie-detail로 접속시 에러남
    // 이유 : render()함수 실행 후 componentDidMount()가 실행되기 때문에 render()값을 못 받아옴
    // 해결방법 : render()함수에도 componentDidMount()에 작성한 리다이렉트 코드 추가해 주면 됨
    render() {
        const { location } = this.props;

        // return(<>{location.state?('aaa'):('bbb')}</>);
        return (
                <div className="detail_box">{ location.state ? (
                           <section className="box">
                                <div className="img_box">
                                    <img src={ location.state.poster } alt={ location.state.title }/>
                                </div>
                                <div className="text_box">
                                    <h1>{ location.state.title }</h1>
                                    <p className="sub_text">{ location.state.year }&nbsp;<span>{ location.state.genres.map((genre,index)=>{
                                        return <span key={index}>{ genre }</span>
                                        }) }</span></p>
                                    <strong>Summary </strong>
                                    <p className="text">{ location.state.summary }</p>
                                </div>
                           </section>
                ) : (null)}
                </div>
        );
    }
}
export default Detail;