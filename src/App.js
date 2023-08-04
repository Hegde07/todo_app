import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Task from "./components/Task";

function App() {
  const [list, setList] = useState([]);

  let addList = (inputText) => {
    setList([...list, inputText]);
  };

  const handleDelete = (key) => {
    let newList = [...list];
    newList.splice(key, 1);
    setList(newList);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <Search addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr></hr>
        {list.map((listItem, i) => {
          return (
            <Task
              key={i}
              index={i}
              list={listItem}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
