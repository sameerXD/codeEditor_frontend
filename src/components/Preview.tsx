import React, { useEffect, useState } from "react";
import socket from "../utils/Socket";
import "./preview.css"; // Assuming this contains any additional styles you want

const Preview = () => {
    const [html, setHtml] = useState("");

    useEffect(() => {
        socket.on("preview", (data: any) => {
            console.log("preview markdown", data);
            setHtml(data); // Update the markdown state with the received data
        });

        // Clean up the event listener when the component unmounts
        return () => {
            socket.off("preview");
        };
    }, []);

    // Function to handle downloading HTML content
    const downloadHtml = () => {
        const element = document.createElement("a");
        const file = new Blob([html], { type: "text/html" });
        element.href = URL.createObjectURL(file);
        element.download = "preview.html";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div className="flex-1 flex-col h-full">
                <div
                    className=" overflow-y-auto h-[90%]"
                    dangerouslySetInnerHTML={{ __html: html }}
                ></div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={downloadHtml}
            >
                Download HTML
            </button>
        </div>
    );
};

export default Preview;
