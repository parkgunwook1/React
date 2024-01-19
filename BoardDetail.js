export default function BoardDetail(props){

const BoardDetail = ({ post }) => {
    return(
      <div className='outer'>
          <br/>
          <h2>게시판상세보기</h2>
          <table className='detail-table'>
              <tr>
              <th colSpan={4}>{post.글제목}</th>
              </tr>
              <tr>
              <th>작성자</th>
              <td>{post.작성자}</td>
              <th>작성일</th>
              <td>{post.작성일}</td>
              </tr>
              <tr>
              <th>글내용</th>
              <td colSpan={3} style={{ height: "200px" }}>{post.글내용}</td>
              </tr>
          </table>
          {/* <div className='btn-area'>
              <button onClick={ () => { 레이아웃변경(3) } }>수정</button>
          </div> */}
      </div>
    );
};
  }