import { useState } from "react";

export default function BoardUpdate({모든데이터}){
    //상세보기 , 배열
    let {게시글배열, 게시글배열변경함수, 상세보기, 상세보기변경} = 모든데이터;

    let [입력값, 입력값변경] = useState (상세보기);


    function 게시글수정(){
       // 값이 입력 안됐을 때 작성 안되게 if문 작성
       let {글제목, 글내용, 작성자} = 입력값;
       if ( !글제목 || !글내용 || !작성자){
        alert("뭐든 입력하세요");
        return;
       }
        // for(let i = 0; i < 게시글배열.length; i++){
        //     if(게시글배열[i].글번호 == 입력값.글번호){
        //         게시글배열[i] = 입력값;
        //     }
        // }

       const 변경된게시글배열 = 게시글배열.map(function(게시글){
            if(게시글.글번호 == 입력값.글번호) return 입력값;
            return 게시글;
       })
        게시글배열변경함수([...변경된게시글배열]);
        상세보기변경(입력값);
    }


    function onInputHandler(e){
        let {name , value} = e.target
        입력값변경({...입력값, [name] : value});
      }
    return (
        <div className='outer'>
        <br />
        <h2>수정</h2>
        <table className='enroll-table'>
          <tr>
            <th>제목</th>
            <td colSpan={3}>
              <input type='text' name='글제목'
              onChange={onInputHandler}
              value={입력값.글제목}
              />
            </td>
          </tr>
          <tr>
            <th>작성자</th>
            <td colSpan={3}>
              <input type='text' name='작성자'
              onChange={{onInputHandler}
                // 대괄호 사용이유
                // let name = "글제목";
                //{name : e.target.value} => {name: 'zzz'}
                // { [name] : e,target.value} => {글제목 : 'ㅋㅋㅋ'}
    }
              value={입력값.작성자}
              />
            </td>
          </tr>
          <tr>
            <th>글내용</th>
            <td colSpan={3} style={ { height: "200px" }  }>
              <textarea name='글내용'
              onChange={onInputHandler}
              value={입력값.글내용}
              ></textarea>
            </td>
          </tr>
          <tr>
          <td><button onClick={(e) => {
                    e.stopPropagation();
                    게시글수정(상세보기.글번호)
                    }}>수정</button></td>
                </tr>
        </table>
    </div>
  )
}