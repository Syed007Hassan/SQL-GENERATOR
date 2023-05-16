// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "./App.css";
import MessageDisplay from "./components/MessageDisplay";
import MessagesDisplay from "./components/MessagesDisplay";

import CodeDisplay from "./components/CodeDisplay";

function App() {
  return (
    <>
      <div className="app">
        <MessageDisplay />
        <input />
        <div className="button-container">
          <button id="get">Get Query</button>
          <button id="clear">Clear</button>
          <button id="copy">Copy Query</button>
        </div>
      </div>
    </>
  );
}

export default App;
