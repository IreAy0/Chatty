import React, {useEffect, useState}from 'react';
import {Avatar, IconButton} from "@material-ui/core";
import './sidebarchat.css';


export default function SidebarChat({addNewChat}) {
    const [example, setExample] = useState("");
    
    useEffect(() => {
   setExample(Math.floor(Math.random()* 5000));
   },[]);

   const createChat = () =>{
    const roomName = prompt("Please enter name for chat");
    if (roomName){
        // db stuff
    }
   }

    return !addNewChat ? (
        <React.Fragment>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${example}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>Chat name</h2>
                    <p>mess.....</p>
                </div>
            </div>
        </React.Fragment>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}