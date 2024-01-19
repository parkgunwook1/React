import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './css/Header.css';


const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false)
  };

  return (
    <header className="header">
      <div className="logo">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5N1n98X52z3Bn3GSh-Kcx8Ndoo3VsP_hOquaI3O5X0bZR0dNMQExBAkD-AEk9lZvCSGo&usqp=CAU' alt="Logo" />
      </div>
      
      <nav className="navbar">
        {/* 
          react-router-dom 에서 제공하는 Link 컴포넌트
          Link 컴포넌트의 to 속성은 이동할 경로를 지정한다.

          React Router 동작
          React Router는 브라우저의 주소 변화를 감지하고, 주소에 따라 어떤 컴포넌트를
          렌더링할지 결정한다.

          라우팅
          설정된 라우팅에 따라 해당하는 컴포넌트가 렌더링된다.
          예를 들어, '/login'에 대한 라우터가 설정되어 있다면 'Login' 컴포넌트가 렌더링된다.
        */}
        <ul>
        <li><Link className='a' to="/main">홈</Link></li>  
        <li><Link className='a' to="/board">게시판</Link></li>
        <li><Link className='a' to="/login">로그인</Link></li>
        <li><Link className='a' to="/singup">회원가입</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
