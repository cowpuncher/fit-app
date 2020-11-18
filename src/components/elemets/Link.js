import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const LoginLink = props => {
    return(
        <Router>
            <Link to={props.adressLink}  className={props.class}>
                <img src={props.image}/>
            </Link>
        </Router>
    );
}

export default LoginLink;