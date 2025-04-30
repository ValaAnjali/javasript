import { useState } from 'react';
import './App.css';

function App() {
  //state
  const [todolist, settodolist] = useState([]);

  //Save ToDo
  const savetodolist = (event) => {
    event.preventDefault();
    const todoname = event.target.todoname.value.trim();

    if (!todoname) {
      alert("Please enter a todo name.");
      return;
    }

    if (!todolist.includes(todoname)) {
      settodolist([...todolist, todoname]);
    } else {
      alert("Todo name already exists...");
    }

    event.target.reset(); // Clear the input
  };

  //Render list items
  const list = todolist.map((value, index) => (
    <TodoListItem
      value={value}
      key={index}
      indexnumber={index}
      todolist={todolist}
      settodolist={settodolist}
    />
  ));

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={savetodolist}>
        <input type="text" name="todoname" />
        <button type="submit">Save</button>
      </form>

      <div id="inner">
        <ul>{list}</ul>
      </div>
    </div>
    
  
  );
}

function TodoListItem({ value, indexnumber, todolist, settodolist }) {
  const deleteRaw = () => {
    const finaldata = todolist.filter((_, i) => i !== indexnumber);
    settodolist(finaldata);
  };

  return (
    <li>
      {value} <button onClick={deleteRaw} id='delete'>Delete</button>
    </li>
  );
}

export default App;
