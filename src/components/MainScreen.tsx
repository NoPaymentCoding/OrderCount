import { useState } from "react";
import { userService } from "../services/userService";
import * as React from "react";
import {useNavigate} from "react-router-dom";

const MainScreen = () => {
    const us = new userService();
    const navigate = useNavigate();

    const logout = async () => {
       const logoutInfo = await us.deleteInfo();
       if(logoutInfo === true) {
        alert("성공적으로 로그아웃 됐습니다.");
        navigate('/');
       }
    }

    return (
        <div className="Container">
            <div className="Wrapper">
            <img className ="logoImg" src='img/logo.png'/>
            <button type='button' onClick={logout}>로그아웃하기</button>
            </div>
        </div>
    )
}

export default MainScreen;