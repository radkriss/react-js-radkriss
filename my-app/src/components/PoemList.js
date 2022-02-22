import { useState } from 'react'
import PoemDetails from './PoemDetails'

const PoemList = (props) => {

    const [poemToDisplay, setPoemToDisplay] = useState({})
    const [favPoems, setFavPoems] = useState([])

    const onShowPoemDetails = (poem) => {
        console.log(poem)
        setPoemToDisplay({...poem})
    }

    const onAddRemoveFav = (poem, ops) => {
        if (ops == 'add') {
            setFavPoems([...favPoems, poem])
        } else {
            let newArray = [...favPoems]
            let index = newArray.indexOf(poem)
            newArray.splice(index, 1)
            setFavPoems([...newArray])
        }
        
    }

    return (
        <>
        {console.log('Render poem List')}
        {props.poems.length > 0 && <div id='tab'>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.poems && props.poems.map(item => {
                        return (
                        <tr key={item.title}>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td><input type='button' value='Show Poem' onClick={() => onShowPoemDetails(item)} /></td>
                        </tr>
                        )
                    })}
                    {!props.poems && <tr><td></td><td></td></tr>}
                </tbody>
            </table>
            {favPoems.length > 0 && <div id='favSection'>
                <div id='favHead'> Favourite Books</div>
                {favPoems.map(i => {
                    return (
                        <div class='favListItem' key={i}>{i}</div>
                    )
                })}
            </div>}
        </div>}
        
        {poemToDisplay.title && <PoemDetails favourites={favPoems} click={onAddRemoveFav} poem={poemToDisplay} /> }
        </>
    )
}

export default PoemList;