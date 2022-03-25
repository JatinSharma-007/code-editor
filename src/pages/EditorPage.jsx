import React, { useState } from "react";
import Client from "../component/Client";
import Editor from "../component/Editor";
const EditorPage = () => {
    const [clients, setClients] = useState([
        {
            socketId: 1,
            username: "James M",
        },
        {
            socketId: 2,
            username: "Jatin S",
        },
        {
            socketId: 3,
            username: "Vivek S",
        },
    ]);

    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img className="logoImage" src="/logo.png" alt="" />
                    </div>
                    <h3 >Connected</h3>
                    <div className="clientList">
                        {clients.map((client) => {
                            return (
                                <Client key={client.socketId} username={client.username} />
                            )
                        })}
                    </div>
                </div>
                <button className="btn copyBtn">Copy Room Id</button>
                <button className="btn leaveBtn">Leave</button>
            </div>
            <div className="editorWrapper">
                <Editor />
            </div>
        </div>
    );
};

export default EditorPage;
