import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*
   index.html에 존재하는 root 노드를 선택한 후, 최상위 요소로 만든다.
   루트앨리먼트는 화면을 그려주는 "render()"함수를 가지고 있으며 매개변수로
   "리액트요소"를 추가했을 때 화면을 그려준다.

   일반 html 요소 => <div>, <p>...
   리액트요소 => <App/>
*/ 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*
  App : 리액트요소
  root 앨리먼트 내부에 App 컴포넌트를 렌더링해줌
  리액트 요소는 반드시 대문자로 시작해야함.
*/ 

    <App />
);
