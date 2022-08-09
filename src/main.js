import React,{Component} from "react";
import "./styles/styles.css";
import { Box } from "@mui/material";

import Login from "./pages/login";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Inscription from "./pages/inscription";
import Admin from "./pages/admin/admin";
import SideBar from "./components/sideBar";
import MainPage from "./pages/mainPage";
import Detail from "./pages/detail";
import Share from "./components/crud/share"

export default function Main() {
     return (
          <Box sx ={{margin:5}}>
                    <Routes>
                         <Route index path="/" element={<Login />} />
                         <Route path="/signup" element={<Inscription />} />
                         <Route path="/task" element={<MainPage />} />
                         <Route path="/admin" element={<Admin />} />
                         <Route path="/detail" element={<Detail />} />
                         <Route path="/share" element={<Share />} />

                    </Routes>
               </Box>
          
     );
}
