import "./App.css";
import { useState, useEffect } from "react";


function App() {
  const [joke, setJoke] = useState('')
  // const [jokes, setJokes] = useState("");

  const fetchJoke = async () => {
    const url = "https://api.icndb.com/jokes/random";
    const res = await fetch(url);
    const data = await res.json();
    setJoke(data.value.joke);
  };
    useEffect(() => {
    let handle=setInterval(fetchJoke,5000);    
    return ()=>{
      clearInterval(handle);
    }
    });

  
  return (
    <>
      <div className="App">
        <h1>Jokes to light up Your Day</h1>
        <div>{joke}</div>
      </div>
    </>
  );
}

export default App;
