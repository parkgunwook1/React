import { useState } from "react";

// 함수형 컴포넌트


// 내보낼게 하나밖에 없으면 함수명 왼쪽에 export 사용.
export default function BoardInsert({게시글배열, 게시글배열변경함수}){
    console.log(props);

    // let 게시글배열 = props.게시글배열;
    // let 게시글배열변경함수 = props.게시글배열변경함수;
    // let {게시글배열, 게시글배열변경함수} = props;

        /*
            컴포넌트 작성규칙
            1) 작명시 첫글자는 대문자로.
            2) 다른 컴포넌트의 외부에 작성해야한다.

            컴포넌트로 만들면 좋은 요소
            1) 반복적으로 출현하는 html 요소
            2) 애플리케이션의 각 페이지들
            3) 자주 변경되는 html요소

            컴포넌트 많이 만들면 안좋은점. 
            1) 컴포넌트 많이 만들면 유지보수가 힘들다. 프록스 관리도 힘들어진다.
            2) 설계를 잘못하면, 렌더링 하는데 시간이 오래 걸린다.

        */ 
        // let 글제목; 
     let [글제목, 글제목변경함수] = useState(''); //초기값으로 빈 문자열 선언해둠
     let [글내용, 글내용변경함수] = useState('');
     let [작성자, 작성자변경함수] = useState('');
     
     // function 게시글등록(){ }
     const 게시글등록 = () => {
     
      /*
        게시글 등록 작업순서
        1) 내가 입력한 값 가져오기
        2) 가져온 데이터를 바탕으로 게시글 객체 생성하기
        3) 생성한 게시글 객체를 게시글 배열에 추가한 후, 게시글 배열 변경함수 호출하기 (랜더링)
      */

        // 1) 내가 입력한 값 가져오기
        // js방식 : document.querySelector(선택자).value
        // react 방식 : state(글제목,글내용,작성자)
        console.log(글내용,글제목,작성자);
        // ** => false, "dasdsa" => true
        if(!글내용  || !글제목  || !작성자  ){
          alert("뭐든 하십쇼");
          return;
        }

      
        //2) 가져온 데이터를 바탕으로 게시글 객체 생성하기
        let 게시글 = {
          //글번호는 게시글 배열에서 고유해야 함 , 게시글 배열에서 가장 큰 글번호값을 찾은 후 +1해서 반환해줄 예정
          글번호: Math.max( ...게시글배열.map(function(게시글,인덱스){ return 게시글.글번호 })  ) +1, 
                //map함수를 이용해서 반복문을 돌리며 게시글의 글번호를 배열 형태로 반환 [1,2,3,4,5,6,7,8,9,10]
          글제목 , // key,value값에 들어가는 변수명이 동일한 경우 속성명 단축구문을 제공
          글내용 , 
          작성자 , 
          작성일 : new Date().toLocaleDateString() // 2024. 01. 15 
        }

        // 3) 생성한 게시글 객체를 게시글 배열에 추가한 후, 게시글 배열 변경함수 호출하기 (랜더링)
        게시글배열.push(게시글);
        // 게시글배열변경함수(게시글배열); // 이렇게하면 주소값을 넣는것이어서 안됨
        게시글배열변경함수([...게시글배열]); // 전개되면 배열이 아니기 때문에 [] 를 넣어주는 것

      // 입력값 초기화(state)초기화
      글제목변경함수('');
      글내용변경함수('');
      작성자변경함수('');
      
     }

        
    return (
        <div className='outer'>
        <br/><h2>등록</h2>
        <table className='enroll-table'>
            <tr>
              <th>제목</th>
              <td colSpan={3}>
                <input type='text' name='글제목' 
                onChange={ function(e){ //input태그에 들어있는 값이 바뀔 때 실행됨
                  글제목변경함수(e.target.value) // 현재 이벤트가 발생한 객체의 value값
                }}
                // 입력값 초기화
                value={글제목} 
                />
              </td>
            </tr>
            <tr>
              <th>작성자</th>
              <td colSpan={3}>
                <input type='text' name='작성자' 
                onChange={ function(e){ //input태그에 들어있는 값이 바뀔 때 실행됨
                  작성자변경함수(e.target.value) // 현재 이벤트가 발생한 객체의 value값
                }} 
                value={작성자} 
                />
              </td>
            </tr>
            <tr>
              <th>글내용</th>
              <td colSpan={3} style={{height : "200px"} }>
                <textarea name='글내용'
                 onChange={ function(e){ //input태그에 들어있는 값이 바뀔 때 실행됨
                  글내용변경함수(e.target.value) // 현재 이벤트가 발생한 객체의 value값
                }} 
                value={글내용} 
                ></textarea>
              </td>
            </tr>
            <tr>
              <th colSpan={4}><button onClick={ 게시글등록 }>등록</button></th>
            </tr>
        </table>
      </div>
    ) 
}
// export default BoardInsert; // 내보내기.





