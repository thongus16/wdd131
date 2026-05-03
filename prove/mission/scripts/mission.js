let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let h1Text = document.querySelector('h1');
let pText = document.querySelector('#topics');
let liText = document.querySelector('ol');
let h2Text = document.querySelector('h2');
let hrBord = document.querySelector('hr');
let contentB = document.querySelector('#content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.src = "images/byui-logo-white.png";
        document.body.style.backgroundColor = "#181818";
        h1Text.style.color = "white";
        pText.style.color = "white";
        h2Text.style.color = "#adc2fc";
        hrBord.style.border = "1px solid white";
        contentB.style.border = "1px solid lightgray";
    } else {
        logo.src = "images/byui-logo-blue.webp";
        document.body.style.backgroundColor = "white";
        h1Text.style.color = "black";
        pText.style.color = "black";
        h2Text.style.color = "#035f9c";
        hrBord.style.border = "1px solid lightgray";
        contentB.style.border = "1px solid darkgray";
    }
}