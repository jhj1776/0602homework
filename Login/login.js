function login() {
    const loginStr = localStorage.getItem("vo");
    let loginArr = JSON.parse(loginStr);
    if (loginArr === null) {
        loginArr = [];
    }

    const loginId = document.querySelector("input[name=loginId]");
    const id = loginId.value;

    const loginPwd = document.querySelector("input[name=loginPwd]");
    const pwd = loginPwd.value;
    
    loginId.value = "";
    loginPwd.value = "";
    for (let vo of loginArr) {
        if (vo.id === id && vo.pwd === pwd) {
            alert("로그인 성공!")
            window.location.href = "../Login/loginSucess.html";
            return;
        }

    }
    alert("ID나 PASSWORD를 확인해주세요");

}

