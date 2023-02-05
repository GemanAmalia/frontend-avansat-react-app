import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export const Home = () => {
    
    return (
        <div className="">
            <Navbar></Navbar>
            <h1>Home</h1>
        </div>
    );
}