import { AppBar,Avatar, Toolbar, IconButton } from "@mui/material";
import React,{useState} from "react";
import "../styles/styles.css";
import logoSmall from "../icons/LOGO/nomerikia_logo_small.png";
import logo from '../icons/ICON/nomerikia_icon_large.png';
import { SearchBar } from "./forms/forms";
//import {logo} from "../icons/ICON/nomerikia_icon_small.png";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";


import {useLocation} from "react-router-dom";

export default function NavigationConnected() {
     const [Note,setNote] = useState("");
     const getNote = async () =>{
          const Note = await axios.get('http://localhost:8080/shownote/');
          setNote(Note.data);
     }
     
     return (
          <AppBar
               color="inherit"
               position="fixed"
               sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
               <Toolbar className="navbar_nav_connected">
                    <img src={logoSmall} alt="Logo du site" />
                    <SearchBar/>
                    <div>
                         <IconButton
                              color="primary"
                              sx={{
                                   border: "2px solid",
                                   borderRadius: "10px",
                                   margin: 1,
                              }}
                         >
                              <SettingsIcon/>
                         </IconButton>
                         <IconButton >
                              <Avatar
                              sx={{
                                   marginLeft: 1,
                              }}
                         >
                             <img src={logo} width={37}/>
                             
                         </Avatar>
                         </IconButton>
                    </div>
               </Toolbar>
          </AppBar>
     );
}
