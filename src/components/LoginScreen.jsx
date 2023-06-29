import React from "react";
import { useState } from "react";

const LoginScreen = () => {
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "id") setUserID(e.target.value);
    if (e.target.name === "pw") setUserPW(e.target.value);
  };

  return (
    <div className="Container">
      <h1>Login</h1>
      <h4>지그재그 파트너센터와 동일한 아이디, 비밀번호를 입력해 주세요.</h4>
      <form>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={userID}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pw"
          value={userPW}
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default LoginScreen;
