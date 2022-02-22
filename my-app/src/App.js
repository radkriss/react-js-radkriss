import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import PoemList from './components/PoemList'
import { useEffect, useState } from 'react';

function App() {

  const [poems, setPoems] = useState([])
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)

  const fetchPoems = () => {
    setLoading(true)
    setShow(true)
    axios.get('https://poetrydb.org/random/20').then((response) => {
      console.log(response.data)
      setLoading(false)
      setPoems(response.data)
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
    })
  }

  const onDropdownSelect = (value) => {
    let sortedData = sortPoems(value)
    console.log("After sort", sortedData)
    setPoems([...sortedData])
  }
  
  const compare = (basedOn) => {
    console.log("In compare" + basedOn)
    return (a, b) => {
      if ( a[basedOn] < b[basedOn] ){
        return -1;
      }
      if ( a[basedOn] > b[basedOn] ){
        return 1;
      }
      return 0;
    }
  }

  const sortPoems = (basedOn) => {
    console.log("In sorted poems")
    return poems.sort(compare(basedOn))
  }

  return (
    <div className="App">
      <div id='btn_cont'>
        <input type='button' id='fetch_btn' onClick={() => fetchPoems()} value='Fetch poems' />
        <select id="mySelect" onChange={(e) => onDropdownSelect(e.target.value)}>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
      </div>
      {!loading && show && <PoemList poems={poems}/>}
      {loading && 'Loading'}
    </div>
  );
}

export default App;
