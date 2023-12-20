import "./App.css";
import Counter from "./Counter";
import Users from "./Users";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const handleClick2 = () => {
    alert("Button Clicked 2");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Clicked2</button>
      <button
        onClick={() => {
          alert("clicked 3");
        }}
      >
        Clicked3
      </button>
      <button onClick={() => addToFive(8)}>Four</button>
    </>
  );
}

export default App;
