import logo from '../../../images/icons/logo.svg';
import './Logo.css';

const Logo = () => {
    return(
        <div className="logo">
            <img src={logo}/>
        </div>
    );
}

export default Logo;