// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "./App.css";
import MessageDisplay from "./components/MessageDisplay";
import MessagesDisplay from "./components/MessagesDisplay";
import axios from "axios";
import { useState } from "react";

import CodeDisplay from "./components/CodeDisplay";

interface ChatData {
  content: string;
  role: string;
}

function App() {
  const [value, setValue] = useState<string>(""); // message from user
  const [chat, setChat] = useState<ChatData[]>([]);

  const getQuery = async () => {
    try {
      const message = value;
      const response = await axios.post(
        "http://localhost:5000/api/sql/completions",
        { message }
      );
      // console.log(response.data.message);

      const userMessage = {
        content: value,
        role: "user",
      };

      // previous chat + new message from user + new message from server
      setChat((prev) => [...prev, response.data.message, userMessage]);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(chat);

  //filter teh messages to only show the user messages
  const filteredUserMessages = chat.filter(
    (message) => message.role === "user"
  );

  const latestCode = chat
    .filter((message) => message.role === "assistant")
    .pop();

  const clearChat = () => {
    setValue("");
  };

  const copyValue = () => {
    navigator.clipboard.writeText(value);

    //create popup to show that the text has been copied to the button id copy

    const popup = document.getElementById("copy") as HTMLButtonElement;
    popup.innerHTML = "Copied";
    setTimeout(() => {
      popup.innerHTML = "Copy Query";
    }, 1500);
  };

  console.log(value);

  return (
    <>
      <div className="app">
        <MessagesDisplay userMessages={filteredUserMessages} />
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <CodeDisplay text={latestCode?.content || ""} />
        <div className="button-container">
          <button id="get" onClick={getQuery}>
            Get Query
          </button>
          <button id="copy" onClick={copyValue}>
            Copy Query
          </button>
          <button id="clear" onClick={clearChat}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
