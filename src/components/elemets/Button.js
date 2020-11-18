import React from 'react';

const Button = props => {
    return(
        <button onClick={props.onclick} className={props.class}>{props.title}</button>
    );
}

export default Button;