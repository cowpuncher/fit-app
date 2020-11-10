const Link = props => {
    return(
        <button className={props.class}>
            <img src={props.image}/>
        </button>
    );
}

export default Link;