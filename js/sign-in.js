document.getElementById("sign_in").addEventListener("click", function() {
    window.open("../html/trang-chu.html", '_top');
});

document.getElementById("sign_in_2").addEventListener("click", function() {
    window.open("../html/trang-chu.html", '_top');
});

document.getElementById("sign_up").addEventListener("click", function() {
    window.open("../html/sign-up.html", '_top');
});

document.getElementById("index").addEventListener("click", function() {
    window.open("../index.html", '_top');
});

document.getElementById("forgot_pass").addEventListener("click", function() {
    document.getElementById("sign-in-frame").style.display = "none";
    document.getElementById("forgot_pass-1-frame").style.display = "flex";
});

document.getElementById("forgot_pass-button").addEventListener("click", function() {
    document.getElementById("forgot_pass-1-frame").style.display = "none";
    document.getElementById("forgot_pass-2-frame").style.display = "flex";
});

document.getElementById("sign-in-back").addEventListener("click", function() {
    document.getElementById("sign-in-frame").style.display = "flex";
    document.getElementById("forgot_pass-1-frame").style.display = "none";
});

document.getElementById("forgot_pass-1-back").addEventListener("click", function() {
    document.getElementById("forgot_pass-1-frame").style.display = "flex";
    document.getElementById("forgot_pass-2-frame").style.display = "none";
});

