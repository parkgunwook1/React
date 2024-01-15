/* eslint-disable */ 
//콘솔창에 불필요한 에러를 지우는 코드

import './App.css';
import {useState} from 'react';

//import data from './data'; 
import 초기게시글 from './data';  //default옵션으로 export한 경우 변수명을 다르게 가져올 수 있음
import {a,b,c} from './data'; //a,b,c의 값을 가지고 옴
import BoardInsert from './components/BoardInsert';


function App() {

  let 제목 = "KH C CLASS";

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

    let [게시글배열, 게시글배열변경함수] = useState(초기게시글);
     

    function 제목2변경 (){

      // 제목2 = "KH C CLASS"; // 단순 대입연산자를 활용하는 경우 state값의 변경점을 reactDom이 알지못함
      // console.log(제목2);

      제목변경함수("KH C CLASS"); //useState의 두번째 매개변수로 전달받은 함수를 통해 변경 시 화면이 재랜더링됨
    }

    // function 게시글삭제(삭제할글번호){ } 랑 똑같음
    const 게시글삭제 = (삭제할글번호) => {

      // 1) 배열에서 삭제를 담당하는 메서드 Array.splice(인덱스위치, 삭제할개수)
      // for(let i = 0; i<게시글배열.length; i++){
      //   if(게시글배열[i].글번호 == 삭제할글번호){
      //     게시글배열.splice(i, 1);
      //     break;
      //   }
      // }

      // ...전개연산자 (값들을 쭉 펼친다)  - 깊은복사를 할 때 사용함
      // ...[a,b,c] -> a,b,c // ...{key : value, key : value} -> key : value, key : value  
      // Array.from(게시글배열), 게시글배열.slice(), concat함수 등...

      게시글배열변경함수([...게시글배열]); // 값이 제거된 배열을 넣어줬음에도 랜더링이 이루어지지 않음
      // 주솟값 자체는 변하지 않아서 랜더링이 이루어지지 않음

      // 2) 게시글 배열에서 글번호와 일치하지 않는 게시글만 필터링하기 (filter함수 이용)
      let 필터링배열 = 게시글배열.filter( (게시글) => 게시글.글번호 !== 삭제할글번호  ) // 지금 게시글번호와, 삭제할글번호가 일치하지 않을 때만 반환
      게시글배열변경함수(필터링배열);  //필터함수가 깊은복사함수임, 그래서 이렇게만 써도 됨

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

        {/* <button onClick={ () => console.log(1) }>제목변경테스트</button> */}
        <button onClick={ 제목2변경 }>제목변경테스트</button>
        <button>게시판</button>
        <button>등록</button>
      </div>

      <div className='outer'>
        <br/>
        <h2>일반게시판</h2>

        <table className='list-table'>
          <thead>
            { /* 번호, 제목, 작성자, 작성일, 삭제에 
            각각 크기 10% , 40%, 20%, 20%, 10% 인라인으로 스타일 부여해주기*/ }
            <tr>
              <th style={ {width : "10%"}}>번호</th>
              <th style={ {width : "40%"}}>제목</th>
              <th style={ {width : "20%"}}>작성자</th>
              <th style={ {width : "20%"}}>작성일</th>
              <th style={ {width : 7 }}>삭제</th>
            </tr>
          </thead>
          <tbody>
            {
              /*
                Array내부의 map함수 사용 예정 
                [1,2,3].forEach(함수) - forEach :  배열의 길이만큼 반복해줌 
                [1,2,3].map(function() {return 1} )  => [1,1,1] - map : 배열의 길이만큼 반복하면서 return 되는 값을 배열에 담아서 반환해줌
              */
              
              게시글배열.map(function(게시글, 인덱스) {
                return (
                  <tr key={인덱스}>
                      <td>{게시글.글번호}</td>
                      <td>{게시글.글제목}</td>
                      <td>{게시글.작성자}</td>
                      <td>{게시글.작성일}</td>
                      <td> <button onClick={() => {게시글삭제(게시글.글번호)} }>삭제</button> </td>
                      {/*
                        게시글 삭제 기능
                        1. 삭제하고자 하는 게시글을 특정할 수 있어야 함
                        2. 게시글 배열에서 삭제하고자 하는 게시글을 없애준다.
                        3. 내가 선택한 게시글이 제거된 게시글 배열로 화면이 랜더링 되어야 함
                      */}
                  </tr>
                  )
              })
            }
          </tbody>
        </table>
      </div>

      
          <BoardInsert 게시글배열={게시글배열} 게시글배열변경함수={게시글배열변경함수}/>
    </div>
  );
}

export default App;