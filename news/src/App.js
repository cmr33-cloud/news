import logo from "./logo.svg";
import "./App.css";
import { Title, Jokes } from "./components/header.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Title />
      <Jokes />
    </div>
  );
}

export default App;
