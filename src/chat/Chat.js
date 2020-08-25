import React, {useState,useEffect} from 'react';
import {Avatar, IconButton} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFile from '@material-ui/icons/AttachFileOutlined';
import MoreVert from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticon from '@material-ui/icons/InsertEmoticonOutlined';
import MicIcon from '@material-ui/icons/MicNoneOutlined';
import InputBase from '@material-ui/core/InputBase';
import "./chat.css";


const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
     
      flex: 1,
      borderRadius:'30px',
      padding:'10px',
      backgroundColor:'white',
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
  

export default function Chat(props) {
    const classes = useStyles();
    const [images, setImages] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        setImages(Math.floor(Math.random()*5000));
    },[])
     const sendMessage=(e)=>{
        e.preventDefault();
        setInput("");
     }
     const handleChange=(e)=>{
         setInput(e.target.value)
     }
    return (
        <React.Fragment>
            <div className="chat">
                <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${images}.svg`}/>
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last seen at...</p>

            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
            </div>
                <div className="chat__body">
                    <p className={`chat__message ${true &&  "chat__receiver" }`}>
                    <span className="chat__name">IreAyo</span>
                        
                        hey
                        <span className="chat__timestamp">
                            3:00a.m
                        </span>
                    </p>
                </div>
        <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
              {/* <input placeholder="search or start new chat" type="text"/> */}
              <InputBase value={input} onChange={handleChange}
        className={classes.input}
        placeholder="type a message"
        inputProps={{ 'aria-label': 'search or start new chat' }}
      />
      <button onClick={sendMessage} type="submit">Send message</button>
        </form>
        <MicIcon />
        </div>
            </div>
        </React.Fragment>
    );
}
