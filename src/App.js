/* eslint-disable */ 
//콘솔창에 불필요한 에러를 지우는 코드

import './App.css';
import {useState} from 'react';

//import data from './data'; 
import 초기게시글 from './data';  //default옵션으로 export한 경우 변수명을 다르게 가져올 수 있음
import {a,b,c} from './data'; //a,b,c의 값을 가지고 옴
import BoardInsert from './pages/BoardInsert';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import BoardUpdate from './pages/BoardUpdate';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  
  // state 문법
  let [제목2, 제목변경함수]  = useState('KH E CLASS'); 
  // let [title, setTitle]  관례
  //usestate는 길이 2짜리 배열 [ 'KH E CLASS', function ]

  /*
    비구조화할당문법 : 배열이나 객체에 들어가 있는 값을 "쉽게" 변수로 할당하는 문법
  
     let arr=[1,2];
     let a = arr[0];
     let b = arr[1];
    >>  let [a,b] = arr;

     useState()함수의 반환값은 길이 2짜리 배열[]이며,
     배열 비구조화할당문법을 통해 쉽게 배열에 있는 값을 변수로 할당한 것
     
     반환된 배열의 0번 인덱스에 있는 값을 제목2 변수에, 
     1번 인덱스에 있는 값을 제목변경함수에 각각 할당한 것
  */

  
  /* 
    ui 상태 관리하는법
    1) 전환할 컴포넌트 준비하기(BoardInsert, BoardList)
    2) 레이아웃 상태를 state로 저장시키기
    3) state 변경 함수를 버튼등의 요소에 부여
    4) state의 변경에 따른 레이아웃 지정 
  */ 

  // 2) 레이아웃 상태를 state로 저장시키기
  let [레이아웃, 레이아웃변경] = useState(0);

  let [게시글배열, 게시글배열변경함수] = useState(초기게시글);
     

  function 제목2변경 (){
    // 제목2 = "KH C CLASS"; // 단순 대입연산자를 활용하는 경우 state값의 변경점을 reactDom이 알지못함
    // console.log(제목2);
    제목변경함수("KH C CLASS"); //useState의 두번째 매개변수로 전달받은 함수를 통해 변경 시 화면이 재랜더링됨
  }

  let [상세보기, 상세보기변경] = useState(null);
  let 등록페이지url = "/insert";

  let 모든데이터 = {
      게시글배열 ,
      게시글배열변경함수 ,
      상세보기 ,
      상세보기변경
  }

  return (
    <div className="App">
      { /* jsx문법 내부에서의 주석

          JSX문법)
          js문법 내부에 html코드를 작성할 수 있는 문법을 jsx문법이라고 함
          리액트에서 ui를 구성할 때 보편적으로 사용되는 방법으로 복잡한 코드를 짤 필요 없이,
          동적으로 추가되는 dom요소를 단순 코드선언으로 생성할 수 있게 도와줌
      */ }

      <div className="header">
        <h3 style={ {fontWeight : "bolder"} }>  {제목2}  </h3>
      </div>

      <div className='nav'>
        {/* 
          react방식 event부여
          onClick={함수}
          * 주의점 : 무조건 함수 자료형 값만 넣어줘야함. 함수 호출한 결과값 넣으면 의미 없음
        */}

        <Link to="/list">게시판</Link>
        <Link to={등록페이지url}>등록</Link>
      </div>
        <Routes>

          <Route path='/' element={<BoardList 모든데이터={모든데이터}/> } />
          <Route path='/list' element={ <BoardList 모든데이터={모든데이터} />} />
          <Route path='/insert' element={ <BoardInsert  모든데이터={모든데이터}/> } />
          <Route path='/detail' element={  <BoardDetail 모든데이터={모든데이터} /> } />
          <Route path='/update' element={  <BoardUpdate  모든데이터={모든데이터} /> } />
          
          <Route path='*' element={
              <div>
                <h1 style={{color : "red"}}>존재하지 않는 페이지입니다.</h1>
                <Link too="/">사이트로돌아가기</Link>
              </div> 
          }/> 
          {/* 위에서 안걸린 페이지를 모든페이지(*) 에러페이지로 넘김. */}
        </Routes>
    </div>
  );
}

export default App;