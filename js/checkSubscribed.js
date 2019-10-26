// var subscribed = localStorage.getItem.subscribed

    console.log(sessionStorage.getItem('subscribed'));
    if (sessionStorage.getItem('subscribed')) {
        $('#Iform')[0].reset();
sessionStorage.setItem("subscribed", false);

    } else {
        sessionStorage.setItem("subscribed", false);
    }
