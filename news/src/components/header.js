import { useState, createContext, useEffect } from "react";
import ReactDOM from "react-dom";

const UserContext = createContext();

function Title() {
  return (
    <>
      <title style="font-family: 'Monoton', cursive">
        A collection of our favourite jokes
      </title>
    </>
  );
}

function Jokes() {
  const [jokes, setJokes] = useState([
    {
      setup: "Why are vampires unpopular?",
      punchline: "They're a pain in the neck",
    },
    {
      setup: "What goes tick-tock woof woof?",
      punchline: "A watchdog",
    },
    {
      setup: "What do you call cheese that doesn't belong to you?",
      punchline: "Nacho cheese",
    },
  ]);
  const renderjokes = () =>
    jokes.map((p) => (
      <>
        <h3>p.setup</h3>
        <h3>p.punchline</h3>
      </>
    ));
  return <>{renderjokes()}</>;
}

export default { Title, jokes };
