import React, { Component } from 'react';
import axios from "axios";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            query:'',
            results: {},
            message: ''
        }
    }

    fetchSearchResults = (query) => {
        const searchUrl = `https://yts-proxy.now.sh/list_movies.json?query_term=${query}`
        // axios.get(searchUrl).then((res)=>{
        //     this.setState({
        //         results: res.data.movies
        //     })
        // })
    }

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState({query, message: ''},()=> {
        this.fetchSearchResults(query);  
        });
    };

    renderSearchResults = () => {
        const {results} = this.state;
        if(Object.keys(results).length&&results.length){
            return (
                <div>
                    {results.map(result => {
                        return(
                            <p key={result.id}></p>
                        )
                    })}
                </div>
            )
        }

    }

    render() {
        const {query} = this.state;
        return (
            <div className="container">
                <input 
                    type="text"
                    name="query"
                    value={query}
                    placeholder="Search.."
                    onChange={this.handleOnInputChange}
                />
            </div>
        );
    }
}

export default SearchBar;