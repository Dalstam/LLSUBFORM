// var subscribed = localStorage.getItem.subscribed


console.log(localStorage.getItem.subscribed)

if (localStorage.getItem('subscribed')) {
    // $("#inschrijfform")[0].reset();
    document.getElementById("#inschrijfform").reset();
    $('#inschrijfform').show();

}else{
    $('#inschrijfform').show();
}
