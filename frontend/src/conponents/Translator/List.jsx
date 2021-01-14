const List = (props) => {
    
    console.log(props.translatedSentence);
    return (
        <div>
            <p>{props.translatedSentence}</p>
        </div>
    )
}

export default List;
