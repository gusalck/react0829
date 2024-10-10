// 기본적인 클릭 이벤트 처리
// 버튼을 클릭하면 알림창이 표시되게 합니다.

import {useState} from "react";

function ClickButton() {

    function handleClick() {
        alert("버튼 클릭");
    }

    return (
        <button onClick={handleClick}>
            클릭
        </button>
    );
}

export default ClickButton