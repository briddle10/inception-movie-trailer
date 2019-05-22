$(document).ready(function() {
    $("#title").lettering();
});

const player = new Plyr('#player', {

 controls : ['play-large', 'play', 'progress', 'mute', 'volume', 'settings', 'fullscreen'],


});

player.poster = 'https://i.imgur.com/SwkPGtU.jpg';

let date = new Date();
let currentYear = date.getFullYear();

console.log( currentYear );
console.log( date);

$('footer p span').text(currentYear);




const limit = 10;
const randNum = Math.floor(Math.random() * limit);

console.log( randNum );

// Background Colors
$('#totem').addClass('color' + randNum);