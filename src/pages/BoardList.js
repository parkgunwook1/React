import { useNavigate } from "react-router-dom";

export default function BoardList(props){

    let {게시글배열, 게시글배열변경함수} = props.모든데이터;

    const navigate = useNavigate();

    function 게시글삭제(삭제할글번호) {
        //1) 배열에서 삭제를 담당하는 메서드 Array.splice(인덱스위치, 삭제할숫자)
        // let arr = [];
        // for(let i = 0; i<게시글배열.length; i++){
        //   if(게시글배열[i].글번호 == 삭제할글번호){
        //     게시글배열.splice(i, 1);
        //     break;
        //   }
        // }
        // ...전개연산자 ...[a,b,c] -> a,b,c  // ...{key : value, key: value} -> key : value, key: value
        // Array.from(게시글배열), 게시글배열.slice() , concat함수등..
        //게시글배열변경함수([...게시글배열]);// 값이 제거된 배열을 넣어줬음에도 랜더링이 이루어지지 않는다.
        // 주솟값 자체는 변하지 않아서 랜더링이 이루어지지 않음.
        //2) 게시글배열에서 글번호와 일치하지 않는 게시글만 필터링하기. (filter함수 이용)
        let 필터링배열 = 게시글배열.filter( function(게시글) {
          return 게시글.글번호 !== 삭제할글번호;
        });
        게시글배열변경함수(필터링배열);
        
      }
      /*
          REST(Represntational State Transfer) : URL과 전송방법(Method)을 활용하여 작업내용을
          url창에 표현하고, 필요한 상태를 전달하는 모든 행위를 의미한다.
          /board/detail -> /board/detail/5(get)

          프론트와 백엔드가 나뉘어져 있는 회사면 REST한 방식으로 개발한다.
      */ 

    return (
       <>
        <h2>일반게시판</h2>
        <table className='list-table'>
          <thead>
            <tr>
              <th style={ {width : "10%" } }>번호</th>
              <th style={ {width : "30%" } }>제목</th>
              <th style={ {width : "20%" } }>작성자</th>
              <th style={ {width : "15%" } }>작성일</th>
              <th style={ {width : "10%" } }>삭제</th>
            </tr>
          </thead>
          <tbody>
            {/*
              Array내부의 map함수 사용 예정
              [1,2,3].map(function () { return 1}) ==> [1,1,1]
            */
             게시글배열.map(function( 게시글, 인덱스) {
              return (
                <tr key={인덱스} onClick={() => {
                    navigate('/board/detail/'+게시글.글번호);
                    // 상세보기변경(게시글);
                    
                }}>
                  <td>{게시글.글번호}</td>
                  <td>{게시글.글제목}</td>
                  <td>{게시글.작성자}</td>
                  <td>{게시글.작성일}</td>
                  {/*
                    게시글 삭제 기능
                    1. 삭제하고자하는 게시글을 특정할수 있어야한다.
                    2. 게시글배열에서 삭제하고자하는 게시글을 없애준다.
                    3. 내가선택한 게시글이 제거된 게시글배열로 화면이 랜더링 되어야 한다.
                  */}
                  <td><button onClick={(e) => {
                    e.stopPropagation();
                    게시글삭제(게시글.글번호)}}>삭제</button></td>
                </tr>
                )
             })
            }
          </tbody>
        </table>
        </>
    )
}