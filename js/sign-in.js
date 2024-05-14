//Trong trang ddkii sau khi ng dùng đăng nhập thì về trang chủ
document.getElementById("sign_in").addEventListener("click", function() {
    window.open("#", '_top');
});

document.getElementById("sign_up").addEventListener("click", function() {
    window.open("../html/sign-up.html", '_top');
});