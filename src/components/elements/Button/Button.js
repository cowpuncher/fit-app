import React from 'react';
import './Button.css';

const Button = props => {
    return(
        <button onClick={props.onclick} className={props.class}>{props.title}</button>
    );
}

export default Button;