import React, { useState,useEffect,useCallback} from "react";
import {
     Toolbar,
     Typography,
     Box,
     Card,
     CardHeader,
     CardActions,
     CardContent,
     Grid,
     IconButton,
     MenuItem,
     ListItemIcon,
     ListItemText,
     Avatar,
     Chip,
     Stack,
     Dialog,
     TextField,
     List,
     ListItem,
     ListItemAvatar,
     Checkbox,
     Button,
     InputBase,

} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Fab from "@mui/material/Fab";
import { Task } from "./testDB";
import Create from "./../components/crud/create";
import Share from "./../components/crud/share";
import "../styles/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuAction from "../components/forms/menu";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { Container } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useLocation,useNavigate} from "react-router-dom";
import SideBar from "../components/sideBar";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import LinearProgress from '@mui/material/LinearProgress';
import ShareIcon from '@mui/icons-material/Share';
import ShareNote from '../components/crud/share';
import { blue } from '@mui/material/colors';
import { SearchBar } from "../components/forms/forms";
import SearchIcon from "@mui/icons-material/Search";
import { red } from '@mui/material/colors';


const emails = ['username@gmail.com', 'user02@gmail.com'];
export interface SimpleDialogProps {
     open: boolean;
     selectedValue: string;
     onClose: (value: string) => void;
   }
   
function SimpleDialog(props: SimpleDialogProps) {
     const [Email,setEmail] = useState([]);
     const { onClose, selectedValue, open } = props;
     const [opens, setOpens] = React.useState(false);
     const [checked,setChecked] = useState([]);
     const handleClose = () => {
       onClose(selectedValue);
       setOpens(false);
     };
     const handleListItemClick = (value: string) => {
       onClose(value);
     };
     function checkeds() {
          alert("Your file is being uploaded!");
     }
     useEffect(() => {
          getUserEmail();
      },[]);
     const getUserEmail = async () =>{
          const Email = await axios.get('http://localhost:8080/sellectemail/');
          setEmail(Email.data);
     }
     
     useEffect(() => {
          console.log(checked);
        }, [checked]); 
     const handleCheckbox = (event, isChecked, value)=> {
     console.log(isChecked, value); 
     this.res.add(value);
     if (this.res.size === 3) console.log(this.res);
     }
     
     return (
          <Box>
          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
          >
          <Dialog onClose={handleClose} open={open}>
          <Grid item md={12} xs={12} mt={3}>

          <InputBase
               variant='outlined'    
               sx={{ ml: 1, flex: 1 }}
               placeholder="Rechercher"
               inputProps={{ "aria-label": "Recherche" }}
               fullwidth
          />
          <IconButton sx={{ p: "10px" }} aria-label="search">
               <SearchIcon />
          </IconButton>
          
            </Grid>
            <List sx={{ pt: 0 }}>
            <Grid item md={12} xs={12} mt={5}>
              {Email.map((email,index) => (
                <ListItem button onClick={() => handleListItemClick(email)} key={index}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={email.user_email} />
                  <Checkbox
                         /**onChange={() => {
                              setChecked({
                              id:email.user_id
                         });
                         }}  
                         value={checked[email.user_id]}**/
                         key={email.user_id}
                         label ={email.user_id}
                         category={email.user_id}
                         onChange ={handleCheckbox}

                   />
                </ListItem>
              ))}
              </Grid>
            </List>
            <Grid item md={12} xs={12} mt={3}>
            <Button 
              variant="contained" 
              CklicAction={checkeds}
            >
              partager
            </Button>
            </Grid>
          </Dialog>
     </Grid>
     </Box>
        );
}
export default function MainPage() {
     const [NoteId, setNoteId] = useState("");
     const [menuaction,setmenuaction] = useState("");
     const [opens, setOpens] = React.useState(false);
     const [selectedValue, setSelectedValue] = React.useState(emails[1]);
     const location = new useLocation();
     const navigate = new useNavigate();
     const user_user_id = location.state.user_id;
     const user_user_name = location.state.user_name;
     const [anchorEl, setAnchorEl] = useState(null);
     const [open, setOpen] = React.useState(false);
     const [dialOpen, setDialOpen] = useState(false);
     const [Note,setNote] = useState([]);
     const[user,setuser] = useState([]);
     const [progress, setProgress] = React.useState(0);
     //const useEffect = new useEffect();
     const ActionButton = [
          { name: "Supprimer", icon: <DeleteOutlineOutlinedIcon/>, action:"/detail"},
          { name: "Modifier", icon: <DriveFileRenameOutlineOutlinedIcon /> },
          { name: "detaille", icon: <DriveFileRenameOutlineOutlinedIcon /> },
     ];
     const RedirigeDetail = useCallback((note_id) =>()=>{
          console.log("id : ",note_id);
          navigate("/detail",{state:{note_not_id:note_id}});
          
          //navigate("/detail");
     })
     
     const handleClickOpen = () => {
          setOpen(true);
     };
     const handleClickOpens = () => {
          setOpens(true);
          };
     const handleClose = () => {
          setOpen(false);
     };
     const openMenu = (e) => {
          setAnchorEl(e.currentTarget);
     };
     const closeMenu = () => {
          setAnchorEl(null);
     };
     
     const openMenue = Boolean(anchorEl);
     const nombre_personne = 100;
     useEffect(() => {
          getNote();
          //getUser();
          //testdata();
     },[]);
      let testdata =  useCallback((test) =>()=>{
          console.log(test);
     })
     
     const getNote = async () =>{
          const Note = await axios.get('http://localhost:8080/shownote/'+user_user_id);
          setNote(Note.data);
     }
     function none(test){
               console.log(test)
          
     }
     
     Note.map((item,index)=> {
          console.log(item.user_id)
          
     })
     
     let getUser;
     
     
     const getUserSharing = async ()=>{
          const Sharing = await axios.get('http://localhost:8080/getusersharing');
     }
     //Action atao amin'ny j'aime
     return (
          <Box  sx={{ display: "flex" }}>
          <SideBar mt={7} />
          <Box component="main" sx={{ flexGrow: 1, p: 1, mt: 5 }}>
          <Box className="box_pages" >
               <div>
                    <Grid
                         container
                         direction="row"
                         justifyContent="start"
                         alignItems="center"
                         spacing={2}
                    >
                         {Note.map((item, index) => (
                              <Grid key={index}  item md={12} sm={12} xs={12}>
                                   <Card
                                        variant="outlined"
                                        className="card_task"
                                        sx={{borderRadius: 6}}
                                   >
                                        
                                   <CardHeader
                                             title={<Typography variant="body1">{item.user_laste_name}</Typography>}
                                             
                                             subheader={item.createdat}
                                             avatar={
                                                  <Avatar sx={{ bgcolor: "#9c1c1e" }} aria-label="recipe">
                                                    {item.user_name[0]}
                                                  </Avatar>
                                                }
                                             action={
                                                  <IconButton aria-label="settings">
                                                       <MoreVertIcon
                                                            onClick={openMenu}
                                                       />
                                                  </IconButton>
                                             }
                                             
                                             align={"left"}
                                        /> 
                                        <Typography 
                                             align="left"
                                             paragraph 
                                             marginLeft={2}
                                        >
                                             {item.note_title}
                                        </Typography>
                                   <Card
                                   
                                        variant="outlined"
                                        className="card_task"
                                        sx={{borderRadius: 0}}
                                        onClick = {RedirigeDetail(item.note_id)}
                                        //clickAction={}
                                   >
                                        <CardContent maxItems={1} title="Cliqué pour plus de detail">
                                             <Typography align="left" paragraph >
                                                  {item.note_comment}
                                             </Typography>
                                             <Stack direction="row" spacing={1} >
                                                  <Chip label="Chip Filled" onDelete={handleClickOpens} />
                                             </Stack>
                                        </CardContent>
                                        </Card>
                                        <LinearProgress variant="determinate" value={50}/>
                                        <CardActions>
                                             <div className="cardAction_task">
                                                  <Container
                                                       sx={{
                                                            display: "flex",
                                                            justifyContent:
                                                                 "space-between",
                                                            alignContent:
                                                                 "rigth",
                                                       }}
                                                  >
                                                   
                                                       <div>
                                                       <Typography>{item.tasknumber} tache</Typography>
                                                       </div>
                                                       
                                                  </Container>
                                                  
                                             </div>
                                             <IconButton 
                                                                 aria-label="share" 
                                                                 color="primary"
                                                                 
                                                                 onClick={handleClickOpens}
                                                                 sx={{alingContent:"rigth"}}
                                                            >
                                                                 <ShareIcon  />
                                                            </IconButton>
                                        </CardActions>
                                        </Card>
                                   
                              </Grid>
                         ))}
                    </Grid>
                    <br />
               </div>
               <MenuAction
                    anchorEl={anchorEl}
                    open={openMenue}
                    closeMenu={closeMenu}
                    onClick={RedirigeDetail}
                    content={ActionButton.map((item, key) => (
                         
                         <MenuItem 
                              name = {menuaction}
                              key={key}
                              onClick={RedirigeDetail}
                         >
                              <ListItemIcon>{item.icon}</ListItemIcon>
                              <ListItemText>{item.name}</ListItemText>
                              
                         </MenuItem>
                    ))}
               />
               <div
                    style={{
                         display: "flex",
                         alignContent: "center",
                         justifyContent: "end",
                         position: "relative",
                    }}
               >
                    <div
                         style={{
                              position: "fixed",
                              bottom: 20,
                              textTransform: "none",
                         }}
                    >
                         <Fab
                              style={{
                                   textTransform: "none",
                              }}
                              variant="extended"
                              size="large"
                              color="primary"
                              aria-label="add"
                              onClick={handleClickOpen}
                         >
                              <AddIcon sx={{ mr: 1 }} />
                              Nouveau
                         </Fab>
                    </div>
               </div>
               <Toolbar />
               <Create open={open} handleClose={handleClose} />
               <SimpleDialog
                    selectedValue={selectedValue}
                    open={opens}
                    //onClose={handleCloses}
               />
          </Box>
          </Box>
          </Box>
     );
}