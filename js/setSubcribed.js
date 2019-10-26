$(document).ready(function () {
    localStorage.setItem("subscribed", true);
    console.log(localStorage.getItem('subscribed'));
    setTimeout(() => {
        document.getElementById("logNK").style.display = "none";
        document.getElementById("bedankt").style.display = "block";
    }, 1500);
})