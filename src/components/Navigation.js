import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="nav">
            {/* <a href="/">Home</a> &nbsp;&nbsp;&nbsp;
            <a href="/about">About</a> */}
             <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Navigation;