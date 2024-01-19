import React, { useState } from 'react';
import axios from 'axios';
import './css/Login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://endpoint/login', {
        username,
        password,
      });

      console.log('로그인 성공:', response.data);
    } catch (error) {
      console.error('로그인 실패:', error.message);
    }
  };

  return (
    <div>
      <br /> <br /> <br />
      <div className="login-form">
        <h2>로그인</h2>
        <form onSubmit={handleLogin}>
          <label>
            아이디:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            비밀번호:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">로그인</button>
        </form>
      </div>
   
  
    </div>
  );
};

export default LoginForm;
