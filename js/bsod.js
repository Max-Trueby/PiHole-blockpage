var percentage = 0;

function process() {
    var percentageElement = document.getElementById("progress");
    percentage += parseInt(Math.random() * 5);
    if (percentage > 100) {
        percentage = 100;
        location.replace("https://www.google.com");
    }
    percentageElement.innerText = percentage;
    processInterval();
}

function processInterval() {
    setTimeout(process, Math.random() * (1000 - 500) + 500);
}
process();

function animateEmoji() {
    var emojiElement = document.getElementById("emotion");

    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }
    var items = [":/", ":P", ":0", ":|", ":("];
    emojiElement.innerText = random_item(items);
}

setInterval(function() {
    animateEmoji();
}, 2000);

var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "http://pihole/admin/groups-domains.php",
    width: 110,
    height: 110,
    colorDark: "#B41B0D",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
});

document.getElementById(
    "domain"
).innerHTML = `The domain ${window.location.hostname} (${window.location.href}) was blocked by Pi-hole.`;