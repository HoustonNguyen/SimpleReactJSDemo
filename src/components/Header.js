//Functional Component
import React from "react";

function Header() {

    

    return (
        <header style={headerStyle}>
            <h1>ToDo List</h1>
            <h2>A simple demonstration of ReactJS</h2>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  }
  
export default Header;