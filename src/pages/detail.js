import React, { useState,useEffect,useCallback } from "react";
import {
     Typography,
     Box,
     Card,
     CardHeader,
     CardActions,
     CardContent,
     Grid,
     IconButton,
     Divider,
     MenuItem,
     ListItemIcon,
     ListItemText,
     Avatar,
     Drawer,
     Toolbar,
     List,
     ListItem,
     Paper,
     IconButtonProps,
     TextField,
     FormControlLabel,
     Button,
     FormControl,
    
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import "../styles/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuAction from "../components/forms/menu";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { Container } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { PostComment } from "../components/forms/forms";
import SideBar from "../components/sideBar";
import { red } from '@mui/material/colors';
import {useLocation,useNavigate} from "react-router-dom";
import axios from "axios";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import FormGroup from '@mui/material/FormGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ActionButton = [
     { name: "Supprimer", icon: <DeleteOutlineOutlinedIcon /> },
     { name: "Modifier", icon: <DriveFileRenameOutlineOutlinedIcon /> },
];

const Task = [
     {
          titre: "Test de titre",
          content: "Conténu du tache Conténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tacheConténu du tache",
          date: "21/26/2019",
          favorite: false,
          shared: true,
          sharedUser: "userList",
     },
];
interface ExpandMoreProps extends IconButtonProps {
     expand: boolean;
   }
const ExpandMore = styled((props: ExpandMoreProps) => {
     const { expand, ...other } = props;
     return <IconButton {...other} />;
   })(({ theme, expand }) => ({
     transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
     marginLeft: "auto",
     transition: theme.transitions.create("transform", {
       duration: theme.transitions.duration.shortest
     })
   }));
export default function Detail() {
     const location = new useLocation();
     const note_note_id = location.state.note_not_id;
     const [anchorEl, setAnchorEl] = useState(null);
     const [Note,setNote] = useState([]);
     const [prt_id,setprt_id] = useState([])
     const [taskdescription,settaskdescription] = useState("");
     const [taskname,settaskname] = useState("");
     const [tasks,settasks] = useState("");
     
     var prtid=1;
     const openMenu = (e) => {
          setAnchorEl(e.currentTarget);
     };
     const closeMenu = () => {
          setAnchorEl(null);
     };
     const openMenue = Boolean(anchorEl);
     
     
     const nombre_personne = 100;
     const [expanded, setExpanded] = React.useState(false);
     
     const handleExpandClick = () => {
     setExpanded(!expanded);
     };
     const [selectedValue, setSelectedValue] = React.useState('a');

     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setSelectedValue(event.target.value);
     };
     const GetRadioValue = useCallback((note_id) =>()=>{
          
          prtid = note_id;
          console.log("id : ",prtid);

          //navigate("/detail",{state:{note_not_id:note_id}});
          //navigate("/detail");
     })
     const Console = ()=>{
          console.log("inputed : ")
     }
     useEffect(() => {
          getNotedetail();
          
      },[]);
     const getNotedetail = async () =>{
          const Note = await axios.get('http://localhost:8080/shownotedetail/'+note_note_id);
          setNote(Note.data);
          
     }
     const settask = async (e) =>{
          e.preventDefault();
          if (taskname!==""){
          const log = await axios.post('http://localhost:8080/settask/'+note_note_id+'/'+prtid+'/null',{
               task_name:taskname,
               task_description:taskdescription,
          })}
          window.location.reload(false);
     }
    
    
     const controlProps = (item: string) => ({
     checked: selectedValue === item,
     onChange: handleChange,
     value: item,
     name: 'color-radio-button-demo',
     inputProps: { 'aria-label': item },
     });
     
     //Action atao amin'ny j'aime
     const drawerWidth = 300;
     const CommentBar = () => (
          <div>
               <Drawer
                    variant="permanent"
                    sx={{
                         width: drawerWidth,
                         flexShrink: 0,
                         [`& .MuiDrawer-paper`]: {
                              width: drawerWidth,
                              boxSizing: "border-box",
                              border: 0,
                         },
                    }}
                    anchor={"right"}
               >
                    <br />
                    <Toolbar />
                    <List>
                         <ListItem>
                              
                         </ListItem>
                         
                    </List>
                    <Paper
                         variant={"outlined"}
                         sx={{ borderRadius: 2, padding: 1, margin: 1 }}
                    >
                         <div>
                              <div
                                   style={{
                                       
                                        margin:0,
                                        display: "flex",
                                        justifyContent: "start",
                                        alignItems: "center",
                                        
                                   }}
                              >
                                   <Avatar sx={{ marginRight: 1 }}>A</Avatar>
                                   {"    "}
                                   <Typography variant="h9">
                                        <b>Andry Michel</b>
                                   </Typography>
                              </div>
                              <Typography variant="subtitle2" paragraph align="left">
                                   Mety tsara ka bla bla bla bla, Mety tsara ka
                                   bla bla bla bla
                              </Typography>
                         </div>
                    </Paper>
               </Drawer>
          </div>
     );

     return (
          
          <Box sx={{ display: "flex" }}>
          <SideBar />
          
          <Box component="main" sx={{ flexGrow: 1, p: 1, mt: 7 }}>
          <Box sx={{ display: "flex" }}>
               <div>
                    <Grid
                         container
                         direction="row"
                         justifyContent="start"
                         alignItems="center"
                         spacing={2}
                    >
                         {Note.slice(0,1).map((item, key) => (
                              <Grid key={key} item width={655}  md={12} sm={9} xs={12}>
                                   <Card
                                        variant="outlined"
                                        className="card_task"
                                        sx={{borderRadius: 6}}
                                   >
                                        <CardHeader
                                             title={<Typography>{item.note_title}</Typography>}
                                             subheader={item.createdat}
                                             avatar={
                                                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                    R
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
                                        <Divider sx={{ margin: 0 }} />
                                        <CardContent>
                                             <Typography align="left" paragraph>
                                                  {item.note_comment}

                                             </Typography>
                                        <Divider sx={{ margin: -2,mt:2 }} /> 
                                             <FormControl sx={{ m: 1,mt:2 }} component="fieldset" variant="standard">
                                                 
                                        
                                        
                                        
                                        { Note[1].map((items)=>(
                                             <React.Fragment>
                                             <FormGroup>
                                              <FormControlLabel
                                                       labelPlacement="end" 
                                                       label={items.task_name}
                                                       control={
                                                       <Checkbox  align="left"/>
                                                  }
                                                  />
                                             </FormGroup>
                                             </React.Fragment>
                                             ))}
                                             
                                             </FormControl>
                                             <FormControl required
                                                  label="statu"
                                                  component="fieldset"
                                                  sx={{ m: 3,marginLeft:20 }}
                                                  variant="standart">
                                             {Note[1].map((items)=>(
                                              <React.Fragment>    
                                                  <Button>test 2</Button>
                                             </React.Fragment>
                                             ))}
                                             </FormControl>
                                        </CardContent>
                                        
                                    
                                        
                                        <Divider sx={{ margin: 0 }} />
                                        
                                   
                                        <CardActions>
                                             
                                             <CardContent >
                                                  <Box>
                                                  </Box>
                                             </CardContent>
                                            
                                        </CardActions>
                                        
                                   </Card>
                                   
                              </Grid>
                         ))}
                    </Grid>
                    <br />
                    <MenuAction
                         anchorEl={anchorEl}
                         open={openMenue}
                         closeMenu={closeMenu}
                         content={ActionButton.map((item, key) => (
                              <MenuItem key={key}>
                                   <ListItemIcon>{item.icon}</ListItemIcon>
                                   <ListItemText>{item.name}</ListItemText>
                              </MenuItem>

                         ))}
                    />
               </div>
               <CommentBar />
          </Box>
          </Box></Box>
     );
}
