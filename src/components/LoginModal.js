import { useState } from "react"
import { useDispatch } from "react-redux";
import {로그인} from "../store";

export default function LoginModal({모달창닫기}){


    let [유저정보, 유저정보변경] = useState({
        email : '',
        nickname : '',
        profile : '/images/user1.jpg'
    });
// 입력값이 있으면 state 방식으로 관리해야한다.

    let 유저정보변경핸들러 = (e) => {
        유저정보변경({...유저정보 , [e.target.name] : e.target.value});
    }

    const 전송 = useDispatch();

    return(
        <div className="modal">
            <div className="modal-content">
            <span className="close" onClick={모달창닫기} >&times;</span>
            <div className="login-form">
                <label>
                    이메일:
                    <input
                    type="text"
                    name="email"
                    onChange={유저정보변경핸들러}
                    value={유저정보.email}
                        />
                    </label>
                    <label>
                        닉네임:
                        <input
                        type="text"
                        name="nickname"
                        onChange={유저정보변경핸들러}
                        value={유저정보.nickname}
                        />
                    </label>
                    <button onClick={() => {
                        //로그인정보 store에 전달
                        전송(로그인(유저정보))    
                        //전달완료 후 모달창 닫기
                        모달창닫기();
                    }}>로그인</button>
                </div>
                </div>
                </div>
    )
}