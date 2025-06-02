const idStr = localStorage.getItem("vo");
let idArr = JSON.parse(idStr);
if (idArr === null) {
    idArr = [];
}
let vo = null;
const idInput = document.querySelector("input[id=userId]");
const pwdInput = document.querySelector("input[id=userPwd]");

function checkId() {
    const id = idInput.value;
    const pwd = idInput.value;

    if (id.trim() === "") {
        alert("아이디를 입력해주세요");
        return
    }
    for (let vo of idArr) {
        if (vo.id === id) {
            alert("이미 존재하는 아이디입니다.");
            idInput.value = "";
            pwdInput.value = "";
            return;
        }
    }
    alert("사용 가능한 아이디입니다");
    vo = {
        id,
        pwd
    };
}


function enter() {
    const id = idInput.value;
    const pwd = pwdInput.value;
    if (id.trim() === "" || pwd.trim() === "") {
        alert("아이디와 비밀번호를 모두 입력해주세요")
        return
    }
    if (vo === null) {
        alert("아이디 중복 확인을 먼저 해주세요");
        return;
    }
    idArr.push(vo);
    localStorage.setItem("vo", JSON.stringify(idArr));
    alert("회원가입이 완료되었습니다");
    idInput.value = "";
    pwdInput.value = "";
    vo = null;
    window.location.href = "../Login/login.html";
    
}