// var subscribed = localStorage.getItem.subscribed
$(document).ready(function () {
    console.log(sessionStorage.getItem('subscribed'));
    if (sessionStorage.getItem('subscribed')) {
        $('.inschrijfformulier')[0].reset;
        localStorage.setItem("subscribed", false);
    } else {
        localStorage.setItem("subscribed", false);
    }
})