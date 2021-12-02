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
        document.getElementById('progressbar').style.width = '10%';
        document.getElementById("progressbar").innerHTML = "10%";
    }
    if (clicks == 2) {
        document.getElementById('progressbar').style.width = '20%';
        document.getElementById("progressbar").innerHTML = "20%";
    }
    if (clicks == 3) {
        document.getElementById('progressbar').style.width = '30%';
        document.getElementById("progressbar").innerHTML = "30%";
    }
    if (clicks == 4) {
        document.getElementById('progressbar').style.width = '40%';
        document.getElementById("progressbar").innerHTML = "40%";
    }
    if (clicks == 5) {
        document.getElementById('progressbar').style.width = '50%';
        document.getElementById("progressbar").innerHTML = "50%";
    }
    if (clicks == 6) {
        document.getElementById('progressbar').style.width = '60%';
        document.getElementById("progressbar").innerHTML = "60%";
    }
    if (clicks == 7) {
        document.getElementById('progressbar').style.width = '70%';
        document.getElementById("progressbar").innerHTML = "70%";
    }
    if (clicks == 8) {
        document.getElementById('progressbar').style.width = '80%';
        document.getElementById("progressbar").innerHTML = "80%";
    }
    if (clicks == 9) {
        document.getElementById('progressbar').style.width = '90%';
        document.getElementById("progressbar").innerHTML = "90%";
    }
    if (clicks == 10) {
        setTimeout("window.location.href = 'https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=github&si2=whatsapp';", 1);
    }
};

function Link() {
location.href = 'https://cqwajn.com/gosl/InNpZCI6MTA3NDQ4Nywic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjEwMjg3Nzcs?si1=github&si2=whatsapp';
}
