import React, { useState } from "react";
import socket from "../utils/Socket";

const TextEditor = () => {
  const [code, setCode] = useState("**Preview:**");
  socket.emit("code", code);

  const handleChange = (e: any) => {
    setCode(e.target.value);

    socket.emit("code", e.target.value);
  };
  return (
    <textarea
      className="flex-1 p-4 text-sm font-mono bg-gray-900 text-white outline-none"
      placeholder="Type your code here..."
      value={code}
      onChange={handleChange}
    ></textarea>
  );
};

export default TextEditor;
