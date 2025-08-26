import React from 'react';

const RandomComponent = () => {
    return (
        // random numvber between 1 and 100
        <p>Random number: {Math.floor(Math.random() * 100) + 1}</p>
    );
}


const Header = () => {
    return (
        <header>
        <h1>Aliar</h1>
        <RandomComponent />
        </header>
    );
}

export default Header;
