import { useState } from "react";
import { userService } from "../services/userService";
import "./LoginScreenCss.css";
import * as React from "react";

const LoginScreen = () => {
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "id") setUserID(e.target.value);
    if (e.target.name === "pw") setUserPW(e.target.value);
  };

  const successLogin = async () => {
    const us = new userService();
    const response = await us.signIn(userID, userPW);
    if (response === undefined) console.log("통신 불량");
    else {
      if (response.status === 200) {
        //스토리지 만들어서 accesstoken, refreshtoken, id 저장해둬야 함
        setErrorMsg(null);
        console.log(response.data.data.accessToken);
        console.log("Login success");
      } else {
        setErrorMsg(response.response.data.message);
      }
    }
  };

  const successSignUp = async () => {
    const us = new userService();
    const response = await us.signUp(userID, userPW);
    if (response === undefined) console.log("통신 불량");
    else {
      if (response.status === 200) {
        setErrorMsg(null);
        console.log("signup success");
        us.signIn(userID, userPW);
      } else {
        setErrorMsg(response.response.data.message);
      }
    }
  };

  return (
    <div className="Container">
      <div className="Wrapper">
        <h1>Login</h1>
        <h4>지그재그 파트너센터와 동일한 아이디, 비밀번호를 입력해 주세요.</h4>
        <input
          className="input"
          type="text"
          name="id"
          placeholder="아이디"
          value={userID}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="pw"
          value={userPW}
          placeholder="비밀번호"
          onChange={handleChange}
        />
        {errorMsg === null ? null : <span> {errorMsg}</span>}

        <button className="LoginBtn" type="button" onClick={successLogin}>
          로그인
        </button>
        <button className="SignUpBtn" type="button" onClick={successSignUp}>
          회원가입하기
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
