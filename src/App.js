import { useEffect, useState } from "react";


function App() {
  const [insect, setInsect]=useState("");
  const [toDos, setToDos] = useState(
    () => JSON.parse(window.localStorage.getItem("todoList")) || []
  );
  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(toDos));
  }, [toDos]);
  const onChange =(event)=>{
    setInsect(event.target.value)
  }
  const onSubmit =(event)=>{
    event.preventDefault();
    if (insect === "")
    {
      return;
    }
    const newToDo = insect;
    setInsect("");
    setToDos(currentArray => [newToDo, ...currentArray])
  }
  return (
    <div className="App">
      <h2 id="head">2022 민호가 할 일들</h2>
      <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={insect} 
        type="text"
        placeholder="일정 추가"
      />
      </form>
      <hr />
      {
      toDos.map((item, index)=>(
        <li className="list" key={index}>{item}</li>
      )) 
      }
      <div className="toDoList"></div>
    </div>
  );
}

export default App;
