let para = document.querySelector("#intro");
para.style.backgroundColor = "yellow";

let paraEM = document.querySelector("#intro em");
paraEM.style.backgroundColor = "#abcfcc";
paraEM.textContent = "USS Voyager Starship";

let starshipDIV = document.querySelector("#starship");
let starshipIMG = document.createElement("img");
starshipIMG.setAttribute("src", "https://bit.ly/3RfG4sY");
starshipDIV.appendChild(starshipIMG);
starshipIMG.classList.add("rounded");