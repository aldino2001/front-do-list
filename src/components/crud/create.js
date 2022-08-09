import React,{useState} from "react";
import {
     Grid,
     Dialog,
     DialogContent,
     DialogContentText,
     Typography,
     Box
     
} from "@mui/material";
import { CustomButton, CustomTextField,Multiline } from "../forms/forms";
import "../../styles/styles.css";
import {useLocation} from "react-router-dom";
import axios from "axios";


export default function Create(props) {
     const location  = new useLocation();
     const [title,settitle] =useState("");
     const [note,setnote] = useState("");
     const [user_id,setuser_id] = useState("");
     const user_user_id = location.state.user_id;
     const newsNote = async (e) =>{
          e.preventDefault();
          await axios.post('http://localhost:8080/createnote/'+user_user_id,{
               note_title :title,
               note_comment:note,
          })
          window.location.reload(false);
     };

     return (
          <Box>
          <Dialog

               open={props.open}
               onClose={props.handleClose}
               aria-describedby="dialogue"
          >
               <DialogContent>
                    <DialogContentText id="dialogue">
                       
                         <Grid
                              container
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                              spacing={2}
                         >
                              <Grid item md={12} xs={12}>
                                   
                              </Grid>
                              <Grid item md={12} xs={12}>
                                   <CustomTextField
                                        type={"text"}
                                        label="Titre de vos notes"
                                        onChange={(e) => settitle(e.target.value)}
                                        value={title}
                                   />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                   <Multiline
                                        type={"text"}
                                        labelm="Votre notes"
                                        onChange={(e) => setnote(e.target.value)}
                                        value ={note}
                                   />
                              </Grid>
                              
                              <Grid item md={12} xs={12}>
                                   <CustomButton
                                        fullWidth
                                        name={"Ajouter"}
                                        color={"primary"}
                                        clickAction = {newsNote}
                                        //onChange ={(e)=>setuser_id(e.location.state.user_id)}
                                   />
                              </Grid>
                         </Grid>
                    </DialogContentText>
               </DialogContent>
          </Dialog>
          </Box>
     );
}
