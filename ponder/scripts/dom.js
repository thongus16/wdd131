let selectElem = document.getElementById('webdevlist');
let headerhtml = document.querySelector("#html");
let headercss = document.querySelector("#css");
let headerjs = document.querySelector("#js");
selectElem.addEventListener('change', function(){
    headerhtml.style.color = "purple";
    headercss.style.color = "purple";
    headerjs.style.color = "purple";
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = "red";
});

let title = document.querySelector("h1");

title.textContent = "Web Page Components";

const topics = document.querySelector("#topics");

topics.style.color = "purple";

const wrapper = document.getElementById("content");

wrapper.style.backgroundColor = "lightblue";

let list = document.querySelector(".list");

list.style.border = "3px solid black";

let para = document.querySelector("p");

para.style.fontSize = "3em";

para.classList.add("background");

