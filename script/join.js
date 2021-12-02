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
        document.getElementById('kunna').style.width = '10%';
        document.getElementById("kunna").innerHTML = "10%";
    }
    if (clicks == 2) {
        document.getElementById('kunna').style.width = '20%';
        document.getElementById("kunna").innerHTML = "20%";
    }
    if (clicks == 3) {
        document.getElementById('kunna').style.width = '30%';
        document.getElementById("kunna").innerHTML = "30%";
    }
    if (clicks == 4) {
        document.getElementById('kunna').style.width = '40%';
        document.getElementById("kunna").innerHTML = "40%";
    }
    if (clicks == 5) {
        document.getElementById('kunna').style.width = '50%';
        document.getElementById("kunna").innerHTML = "50%";
    }
    if (clicks == 6) {
        document.getElementById('kunna').style.width = '60%';
        document.getElementById("kunna").innerHTML = "60%";
    }
    if (clicks == 7) {
        document.getElementById('kunna').style.width = '70%';
        document.getElementById("kunna").innerHTML = "70%";
    }
    if (clicks == 8) {
        document.getElementById('kunna').style.width = '80%';
        document.getElementById("kunna").innerHTML = "80%";
    }
    if (clicks == 9) {
        document.getElementById('kunna').style.width = '90%';
        document.getElementById("kunna").innerHTML = "90%";
    }
    if (clicks == 10) {
        document.getElementById('kunna').style.width = '99%';
        document.getElementById("kunna").innerHTML = "99%";
    }
    if (clicks == 11) {
        setTimeout("window.location.href = 'https://bit.ly/adultmovieh';", 0);
    }
};
