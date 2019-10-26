// var subscribed = localStorage.getItem.subscribed

    console.log(localStorage.getItem('subscribed'));
    if (localStorage.getItem('subscribed')) {

        localStorage.setItem("subscribed", false);
        location.reload();
    } else {
        localStorage.setItem("subscribed", false);
    }
