import React, { useEffect, useState } from "react";
import "./App.css";
import TextEditor from "./components/TextEditor";
import Preview from "./components/Preview";
import socket from "./utils/Socket";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server");
      setLoading(false);
    });

    socket.on("disconnect", () => {});
  }, []);
  return (
    <div className="">
      {
        loading?<LoadingSpinner/>:<div className="flex h-screen">
        <TextEditor />
        <Preview />
      </div>
      }
    </div>
  );
}

export default App;
