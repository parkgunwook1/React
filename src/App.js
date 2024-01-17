/* eslint-disable */ 
//콘솔창에 불필요한 에러를 지우는 코드

import './App.css';
import {createContext, useEffect, useState} from 'react';

//import data from './data'; 
import 초기게시글 from './data';  //default옵션으로 export한 경우 변수명을 다르게 가져올 수 있음
import {a,b,c} from './data'; //a,b,c의 값을 가지고 옴
import BoardInsert from './pages/BoardInsert';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import BoardUpdate from './pages/BoardUpdate';
import { Route, Routes, Link } from 'react-router-dom';
import Outer from './components/Outer';
import axios from 'axios';

export let Context = createContext(); // state저장소


function App() {

  /*
    useEffect : 컴포넌트가 렌더링될 때를 감지하여 렌더링된 "이후" 실행할 코드를 기술하는 함수
    컴포넌트에는 기본적으로 lifeCycle이라는 개념이 있는데,
    컴포넌트가 처음 로딩되는 시기를 monut
    state 변경에 의해 컴포넌트가 재 렌더링 될때는 update 컴포넌트가 교체/소멸 될때는 umount라고 부름
    useEffect는 mount, update, unmount되는 시점에 각각 끼어들어서 내가 실행하고자 하는 코드를 추가할 수 있다.

    사용방법
    useEffect( function() => {
      렌더링이 완료된 후!!! 실행할 코드

      return 컴포넌트가 재렌더링되거나, 소멸할 때 실행할 "함수"
    } , [의존성 목록]) //state값들을 배열형태로 넣어줌. 의존성목록에 들어간 state 변수의 값이 바뀌면(update)
      useEffect내부의 함수가 다시 호출한다.
  */

   
  /*
    ContextApi : 복잡한 컴포넌트구조에서 state상태를 손쉽게 전달하도록 도와주는 문법.
    ex) App의 자식 BoardDetail의 자식 BoardDetail에 데이터를 전달해줘야한다?
    props를 중첩으로 전달, 또 전달, 또 전달해주는 코드를 짜줘야함.
  */

    let [게시글배열, 게시글배열변경함수] = useState([]); 

  useEffect(function(){

    /*
        axios => react에서 가장 많이 사용되는 비동기함수를 지원하는 라이브러리

        axios.get/post('url경로', {전달한데이터})
        .then( function (result) {
          // 요청 성공시 실행할 코드
        })
        .then
        .then..
        .catch(function(error){
          // 요청 실패시 실행할 코드
        })
    */
   // axios는 json 파싱 알아서 해준다.
   // axios.get('https://my-json-server.typicode.com/alsrudals2013/react/board')
      axios.get("/data/data.json",{data: "필요한데이터 아무거나 key:value 형태로 넣어주기"})
    .then(
        function(result){
          게시글배열변경함수(result.data);
            // console.log(result.data);
        }
    ).catch((error) => console.log(error.response))

    // console.log('useEffect함수 내부'); // 렌더링이 완료된 후 실행. 
  },[]);
  /*
    의존성 목록을 빈배열로 두는경우 첫 로딩시에만 useEffect함수 내부의 내용이 실행됨
    의존성 목록에 내가 원하는 데이터만 지정하는경우 해당 데이터가 바뀔때만 useEffect 함수 내부의 내용이 실행됨.
  */

   console.log('useEffect함수 외부');
  
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

  
     

  function 제목2변경 (){
    // 제목2 = "KH C CLASS"; // 단순 대입연산자를 활용하는 경우 state값의 변경점을 reactDom이 알지못함
    // console.log(제목2);
    제목변경함수("KH C CLASS"); //useState의 두번째 매개변수로 전달받은 함수를 통해 변경 시 화면이 재랜더링됨
  }

  // let [상세보기, 상세보기변경] = useState(null);
  let 등록페이지url = "/insert";

  let 모든데이터 = {
      게시글배열 ,
      게시글배열변경함수 
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

        <Link to="board/list">게시판</Link>
        <Link to={"/board" + 등록페이지url}>등록</Link>
      </div>
        <Context.Provider value={ {모든데이터} }>  
          <Routes>
            <Route path='/' element={<BoardList 모든데이터={모든데이터}/> } />
            <Route path="/board" element= {<Outer />} >

              {/* /board/list */}
            <Route path='list' element={ <BoardList 모든데이터={모든데이터} />} />
            <Route path='insert' element={ <BoardInsert  모든데이터={모든데이터}/> } />
            <Route path='detail/:bno' element={  <BoardDetail 모든데이터={모든데이터} /> } />

            {/* 
                라우터 파라미터 문법
                /:매개변수명
                중첩으로 여러개 작성도 가능
                detail/:bno => REST하게 게시글 1,2,3.. 정보제공 해줄 수 있다.
            */}
            <Route path='update/:bno' element={  <BoardUpdate  모든데이터={모든데이터} /> } />
            </Route>

            <Route path='*' element={
                <div>
                  <h1 style={{color : "red"}}>존재하지 않는 페이지입니다.</h1>
                  <Link too="/">사이트로돌아가기</Link>
                </div> 
            }/> 
            {/* 위에서 안걸린 페이지를 모든페이지(*) 에러페이지로 넘김. */}
          </Routes>
        </Context.Provider>
    </div>
  );
}

export default App;