import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    
    render() {
        return (
            <header style={headerStyle}>
                <h1>TodoList</h1> 
                <Link to="/" style={linkStyle}>Home</Link> |  
                <Link to="/about" style={linkStyle}>About</Link>
            </header>
        )
    }
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
const headerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}
export default Header;