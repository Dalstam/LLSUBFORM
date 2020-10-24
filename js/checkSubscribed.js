// Check voor dubbele inschrijvingen
console.log(sessionStorage.getItem('subscribed'));
if (sessionStorage.getItem('subscribed') == 'true') {
    document.querySelector('#Iform').style.display = 'none';
    let newSub = confirm("Je hebt al een inschrijving gedaan. Wil je nog een inschrijving doen?");
    if (newSub) {
        document.querySelector('#Iform').reset();
        sessionStorage.setItem("subscribed", false);
        document.querySelector('#Iform').style.display = 'block';
    } else {
        window.location = "https://nklittleleague.nl/";
    }
} else {
    sessionStorage.setItem("subscribed", false);
}
