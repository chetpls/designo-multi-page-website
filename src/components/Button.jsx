function Button({type="button",text, backgroundColor, color, onClick}){
    return(
        <button className="btn" type={type}onClick={onClick} style={{"--background-color":backgroundColor,"--text-color": color}}>
            {text}
        </button>
    )
}

export default Button;