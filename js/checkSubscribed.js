// var subscribed = localStorage.getItem.subscribed

    console.log(localStorage.getItem('subscribed'));
    if (localStorage.getItem('subscribed')) {
        $('#Iform')[0].reset;
        localStorage.setItem("subscribed", false);
    } else {
        localStorage.setItem("subscribed", false);
    }
