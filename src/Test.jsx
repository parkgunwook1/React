import React from 'react';

function Test() {

    const name = 'react';
    // JSX가 자바스크립트 기반이니, JSX 내부에서도 자바스크립트 값을 사용할 수 있다.
    // 이때, 자바스크립트 변수를 사용할 때 에는 아래와 같이 {} 대괄호를 사용하여 보여준다.
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정

        // 함수 혹은 클래스 내부에서 css를 적용할 때 적용
        // class를 설정할 때에는 class=가 아닌 className=으로 설정을 해주어야한다.
    }
  return (
    <>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default Test;