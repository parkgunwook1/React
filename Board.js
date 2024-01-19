import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Board.css'; // CSS 파일 임포트
import 초기게시글 from './data';
import BoardInsert from './BoardInsert'; // BoardInsert 컴포넌트 임포트

const Board = () => {
  const [게시글배열, 게시글배열변경함수] = useState(초기게시글);
  const [showBoardInsert, setShowBoardInsert] = useState(false);

  const 게시글삭제 = (삭제할글번호) => {
    const 필터링배열 = 게시글배열.filter((게시글) => 게시글.글번호 !== 삭제할글번호);
    게시글배열변경함수(필터링배열);
  };

  const handleInsert = (newPost) => {
    // BoardInsert에서 전달한 onInsert 콜백 함수
    // 새로운 게시글을 배열에 추가합니다.
    게시글배열변경함수([...게시글배열, newPost]);

    // 숨김 상태로 변경
    setShowBoardInsert(false);
  };

  let[상세보기,상세보기변경] = useState(null); // 게시글 정보 담아줄 예정.

  function 게시글상세조회(조회할글번호){
    let 상세게시글 = 게시글배열.find(function(게시글){
        return 게시글.글번호 == 조회할글번호;
    });
    상세보기변경(상세게시글);
  }

  return (
    <div>
      <div className='outer'>
        <h2>게시판</h2>
        <table className='list-table'>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>번호</th>
              <th style={{ width: '40%' }}>제목</th>
              <th style={{ width: '20%' }}>작성자</th>
              <th style={{ width: '20%' }}>작성일</th>
              <th style={{ width: '10%' }}>삭제</th>
            </tr>
          </thead>
          <tbody>
            {게시글배열.map(function (게시글, 인덱스) {
              return (
                <tr key={인덱스} onClick={ () => 게시글상세조회(게시글.글번호)}>
                  <td>{게시글.글번호}</td>
                  <td>{게시글.글제목}</td>
                  <td>{게시글.작성자}</td>
                  <td>{게시글.작성일}</td>
                  <td>
                    <button onClick={() => 게시글삭제(게시글.글번호)}>삭제</button>
                  </td>
                </tr>
              );
            })}
            {/* 조건에 따라 BoardInsert를 렌더링 */}
            {showBoardInsert && (
              <tr>
                <td colSpan="5">
                  <div className='input'>
                    {/* BoardInsert 컴포넌트를 추가하고 onInsert 콜백 함수 전달 */}
                    <BoardInsert onInsert={handleInsert} />
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className='input'>
          {/* BoardInsert를 토글하기 위한 버튼 */}
          <button onClick={() => setShowBoardInsert(!showBoardInsert)}>등록</button>
        </div>
      </div>
      <footer className='footer'>
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Board;