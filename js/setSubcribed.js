// Nodig voor Netlify zodat de inschrijvingen afgehandeld wordt
setTimeout(() => {
    sessionStorage.setItem("subscribed", true);
    console.log(sessionStorage.getItem('subscribed'));
    document.getElementById("logNK").style.display = "none";
    document.getElementById("bedankt").style.display = "block";
}, 2000);
