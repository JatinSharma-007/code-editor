import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState("");
    const [username, setUsername] = useState("");

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        toast.success("New Room Created");
    };
    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error("Enter Room Id & Username");
            return;
        }

        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };
    const handleInputEnter = (e) => {
        if (e.code === "Enter") {
            joinRoom();
        }
    };
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className="homePageLogo" src="/logo.png" alt="code-editor-logo" />
                <h4 className="mainLabel">CREATE OR JOIN ROOM</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        value={roomId}
                        onChange={(e) => {
                            setRoomId(e.target.value);
                        }}
                        onKeyUp={handleInputEnter}
                        className="inputBox"
                        placeholder="ENTER ROOM ID"
                    />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        onKeyUp={handleInputEnter}
                        className="inputBox"
                        placeholder="USERNAME"
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        If you don't have an invite then create
                        <a onClick={createNewRoom} href="" className="createNewBtn">
                            {" "}
                            new room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Built with ❤️ By{" "}
                    <a href="https://github.com/JatinSharma-007"> Jatin Sharma </a>{" "}
                </h4>
            </footer>
        </div>
    );
};

export default Home;
