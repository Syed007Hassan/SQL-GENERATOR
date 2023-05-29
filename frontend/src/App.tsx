// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "./App.css";
import MessageDisplay from "./components/MessageDisplay";
import MessagesDisplay from "./components/MessagesDisplay";
import axios from "axios";

import CodeDisplay from "./components/CodeDisplay";

function App() {
  const getQuery = async () => {
    try {
      const message = "Create a procedure with name Student;";
      const response = await axios.post(
        "http://localhost:5000/api/sql/completions",
        { message }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="app">
        <MessagesDisplay />
        <input />
        <CodeDisplay />
        <div className="button-container">
          <button id="get" onClick={getQuery}>
            Get Query
          </button>
          <button id="copy">Copy Query</button>
          <button id="clear">Clear</button>
        </div>
      </div>
    </>
  );
}

export default App;
