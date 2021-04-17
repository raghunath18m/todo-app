import { useState} from 'react';
import { useEffect} from 'react';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import Todo from './Todo';
import { Button } from '@material-ui/core';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');


//to get snapshot of items from database
  useEffect(()=> {
    db.collection('todos').orderBy("timestamp","desc").onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);


//to add input
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input])
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }


  return (
    <div className="App">
      <h1 className= "textStyle">MY TODO LIST</h1>
      <form>
        <input onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} placeholder="write your tasks here..." value = {input} onChange={event => setInput(event.target.value)}/>
        <Button variant="contained" color="primary" disabled={!input} onClick={addTodo}>Add Task</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}></Todo>
        ))}
      </ul>

    </div>
  );
}
export default App;