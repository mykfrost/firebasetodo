import { useState } from 'react';
import {Button , FormControl , Input , InputLabel} from '@material-ui/core';
import './App.css';

function App() {
  const [todos , setTodos] = useState(['Make a react firebase project' , 'Record a coding video']);
  const [input , setInput] = useState(['']);
  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos ,input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>ToDo App by Mike Frost</h1>
        <form>
          <FormControl>
            <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}></Input>
          <Button type='submit' onClick={addTodo} variant='contained'
          color='primary' disabled={!input}>Add Todo</Button>
        </FormControl>
        </form>

        <ul>
          {todos.map(todo => <li>{todo}</li>)}
        </ul>
    </div>
  );
}

export default App;
