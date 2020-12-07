import './Input.css';

const Input = props => {
    return(
        <input placeholder={props.placeholder} className={props.class}/>
    );
}

export default Input;