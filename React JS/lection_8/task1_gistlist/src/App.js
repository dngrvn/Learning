import React from "react";
import "./App.css";
import GistList from "./components/GistListEx2";
import PublicGists from "./components/PublicGistsEx2";

function App() {
  return (
    <div className="App">
      <GistList />
      <PublicGists />
    </div>
  );
}

export default App;
