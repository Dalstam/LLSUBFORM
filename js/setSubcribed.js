$(document).ready(function () {
    sessionStorage.setItem("subscribed", true);
    console.log(sessionStorage.getItem('subscribed'));
    setTimeout(() => {
        document.getElementById("logNK").style.display = "none";
        document.getElementById("bedankt").style.display = "block";
    }, 1500);
})