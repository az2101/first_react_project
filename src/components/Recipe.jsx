const Recipe = (props) => {
    return(
        <div id="recipe">
            <h1 data-testid="title" id="title">{props.title}</h1>
            <p data-testid="type" id="type">{props.type}</p>
            <p data-testid="duration" id="duration">{props.duration}mins</p>
        </div>
    )
}

export default Recipe;
