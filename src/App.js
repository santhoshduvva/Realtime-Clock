// src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setTime(message.data);
    };

    return () => socket.close();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-Time Clock</h1>
        <p>{time}</p>
      </header>
    </div>
  );
}

export default App;
