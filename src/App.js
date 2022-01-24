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
      <h2>오늘 일정</h2>
      <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={insect} 
        type="text"
        placeholder="일정 추가"
      />
      </form>
      <hr />
      {toDos.map((item, index)=>(
        <li key={index}>{item}</li>
      )) }
      <div className="toDoList"></div>
    </div>
  );
}

export default App;
