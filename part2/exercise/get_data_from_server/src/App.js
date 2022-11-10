import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


// const Button = (props) =>{

//   return(
//     <button onClick={props.onClick}>{props.name}</button>
//   );
// }

const App = () => {
  const [notes, setNotes] = useState([]);
  // const [words, setWords] = useState(0);
  // const [char, setChar] = useState(0);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  // useEffect(() => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/notes')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setNotes(response.data)
  //     })
  // }, [words])
  // console.log('render', notes.length, 'notes')

  // ...
  // const w = ()=>{
  //   console.log("words !!");
  //   setWords(words+1);
  // };
  
  // const c = ()=>{
  //   console.log("char !!");
  //   setChar(char+1);
  // };
  // return(
  //   <div>
  //     <Button onClick={w} name={'words'}/>
  //     <Button onClick={c} name={'chars'}/>
  //   </div>
  // )
}





export default App;