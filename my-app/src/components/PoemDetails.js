

const PoemDetails = (props) => {
    return (
        <div id='pDetails'>
            {!props.favourites.includes(props.poem.title) && <input type='button' id='add_btn' value='Add to favourites' onClick={() => props.click(props.poem.title, 'add')}/>}
            {props.favourites.includes(props.poem.title) && <input type='button' id='remove_btn' value='Remove from favourites' onClick={() => props.click(props.poem.title, 'remove')}/>}
            <div id='pTitle'>{props.poem.title}</div>
            <div id='pAuthor'>{props.poem.author}</div>
            <div id='pLines'>{props.poem.lines.join(' ')}</div>
        </div>
    )
}

export default PoemDetails;