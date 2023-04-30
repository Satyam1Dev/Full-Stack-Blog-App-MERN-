import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register';
import {UserContextProvider} from '../Context/UserContext'
import Createpost from '../page/Createpost';
import PostPage  from '../page/PostPage';
import EditPost from '../page/EditPost';
function AllRoutes() {
    return (
        <UserContextProvider>          
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/createpost" element={<Createpost/>}></Route>
            <Route path="post/:id" element={<PostPage/>}></Route>
            <Route path="edit/:id" element={<EditPost/>}></Route>
          </Routes>            
        </UserContextProvider>
    );
}

export default AllRoutes;