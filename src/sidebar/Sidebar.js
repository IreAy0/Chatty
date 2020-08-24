import React from 'react';
import {Avatar, IconButton} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InputBase from '@material-ui/core/InputBase';
import './Sidebar.css';
import SidebarChat from "./SidebarChat";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
  
export default function Sidebar(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
           <div className="sidebar">
              <div className="sidebar__header">
                    <Avatar />
                    <div className="sidebar__headerRight">
                        <IconButton>
                        <DonutLargeIcon />
                         </IconButton>
                         <IconButton>
                         <ChatIcon />
                         </IconButton>
                        <IconButton>
                        <MoreVertIcon />
                        </IconButton>
                      
                        
                    </div>
              </div>
              <div className="sidebar__search">
                  <div className="sidebar__searchContainer">
                      <IconButton >
                      <SearchOutlinedIcon/>
                      </IconButton>
                  
                    {/* <input placeholder="search or start new chat" type="text"/> */}
                    <InputBase
        className={classes.input}
        placeholder="search or start new chat"
        inputProps={{ 'aria-label': 'search or start new chat' }}
      />
                  </div>
                   
              </div>
              <div className="sidebar__chats">
              
              <SidebarChat addNewChat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
              
              </div>
           </div>
        </React.Fragment>
    );
}
