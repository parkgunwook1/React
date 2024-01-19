import React, { useState } from 'react';
import './css/BoardInsert.css'; // BoardInsert 스타일 파일 임포트
import { Link } from 'react-router-dom';

const BoardInsert = ({ onInsert }) => {
  const [글번호, set글번호] = useState('');
  const [글제목, set글제목] = useState('');
  const [작성자, set작성자] = useState('');

  const handleInsert = () => {
    // 등록 버튼 클릭 시 상위 컴포넌트에서 전달받은 콜백 함수 호출
    onInsert({
      // 수정된 부분: 번호와 제목에 대한 데이터도 추가
      글번호: 글번호,
      글제목: 글제목,
      작성자: 작성자,
      작성일: new Date().toLocaleDateString(),
    });

    // 등록 후 입력 필드 초기화
    set글번호('');
    set글제목('');
    set작성자('');
  };

  return (
    <div className='board-insert'>
      <h2>게시글 등록</h2>
      <div className='input'>
        <label>
          번호:
          <input
            type='text'
            value={글번호}
            onChange={(e) => set글번호(e.target.value)}
          />
        </label>
        <label>
          제목:
          <input
            type='text'
            value={글제목}
            onChange={(e) => set글제목(e.target.value)}
          />
        </label>
        <label>
          작성자:
          <input
            type='text'
            value={작성자}
            onChange={(e) => set작성자(e.target.value)}
          />
        </label>
        <button onClick={handleInsert}>등록</button>
      </div>

    </div>
  );
};

export default BoardInsert;
