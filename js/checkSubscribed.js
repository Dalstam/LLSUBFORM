// var subscribed = localStorage.getItem.subscribed


console.log(localStorage.getItem.subscribed)
function check() {
    if (localStorage.getItem('subscribed')) {
        // $("#inschrijfform")[0].reset();
        // document.getElementById("#inschrijfform").reset();
        $('#inschrijfform')[0].reset();
        $('#inschrijfform').show();

    }else{
        $('#inschrijfform').show();
    }

}
