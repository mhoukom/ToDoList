import React, {useState} from "react";
import './App.css';
import ToDo from "./components/ToDo";

function App() {

  const [newToDoName, setNewToDoName] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addNewToDo = (event) => {
    event.preventDefault();

    if(newToDoName.length == 0)
      return;

  const toDoItem = {
    name: newToDoName,
    isDone: false
  }

    setToDoList([...toDoList, toDoItem]);
    setNewToDoName("");
  }

  const toggleIsDone = (index) => {
    const updatedToDoList = toDoList.map((toDoItem, i) => {
      if(i == index)
        toDoItem.isDone = !toDoItem.isDone;

      return toDoItem;
    });

    setToDoList(updatedToDoList);
  }

  const deleteToDo = (index) => {
    const filteredToDoList = toDoList.filter((toDoItem, i) => {
      if(i == index)
        return false;

      return true;
    });

    setToDoList(filteredToDoList);
  }

  return (
    <div className="App">
      <form onSubmit={(event) => {addNewToDo(event);}}>
        <input onChange={(event) => {setNewToDoName(event.target.value);}} type="text" value={newToDoName}/>
        <div>
          <button>Add</button>
        </div>
      </form>
      {
        toDoList.map((toDoItem, i) => {
          if(toDoItem.isDone) {
            let toDoItemStyle = "text-decoration: line-through"; 
          }

          return (
            <ToDo 
            key = {i} 
            toDoItem = {toDoItem} 
            i = {i} 
            toggleIsDone = {toggleIsDone} 
            deleteToDo = {deleteToDo}/>
          );
        })
      }
    </div>
  );
}

export default App;