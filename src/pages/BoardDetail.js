
 {/* 게시판상세보기 페이지 만들기 실습 */}
 export default function BoardDetail({모든데이터}) {
    
  let {상세보기} = 모든데이터;
  return (

    
    <div className='outer'>
            <br />
            <h2>게시판상세보기</h2>
            
            <table className='detail-table'>
              <tr>
               게시글배열.글번호
                <th colSpan={4}>{상세보기.글제목}</th>
              </tr>
              <tr>
                <th>작성자</th>
                <td>{상세보기.작성자}</td>
                <th>작성일</th>
                <td>{상세보기.작성일}</td>
              </tr>
              <tr>
                <th>글내용</th>
                <td colSpan={3} style={{ height: "200px" }}>{상세보기.글내용}</td>
              </tr>
            </table>
            <div className='btn-area'>
              <button>수정</button>
            </div>
          </div>
    )
}
