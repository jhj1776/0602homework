function checkAll() {
    const checkbox = document.querySelectorAll("input[name=agree]");

    for (let i = 0; i < checkbox.length; i++) {
        if (!checkbox[i].checked) {
            alert('모두 체크하지 않았습니다.');
            return false;
        }
    }

    alert('모두 체크되었습니다!');
    return true;
}
