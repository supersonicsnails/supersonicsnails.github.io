const snail = document.getElementById('snail');
var i = 0;
const SNAIL_COUNT = 575;
setInterval(() => {
    snail.style.left = `${(i += 0.25)}vw`;
    if (i >= 100) {
        i = 0;
        snail.src = `snails/snail${Math.floor(Math.random() * SNAIL_COUNT)}.png`;
    }
}, 10);