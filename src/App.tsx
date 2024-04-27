import React, { useEffect } from "react";
import "./App.css";
import TextEditor from "./components/TextEditor";
import Preview from "./components/Preview";
import socket from "./utils/Socket";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("disconnect", () => {});
  }, []);
  return (
    <div className="">
      <div className="flex h-screen">
        <TextEditor />
        <Preview />
      </div>
    </div>
  );
}

export default App;
