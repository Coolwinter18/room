import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const Header = () => {
    const { data } = useContext(MyContext);

    return (
        <header>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </header>
    );
};

export default Header;