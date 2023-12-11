
function tellWeather(){
let grad = document.querySelector("#inputField").value;
const message = document.querySelector(".message");

if (grad >= 8 && grad <= 10) {
    message.innerHTML = "super";
} else if (grad >= 6 && grad <= 7){
    message.innerHTML = "gut";
} else if (grad >= 3 && grad <= 5){
    message.innerHTML = "okay";
} else if (grad >= 0 && grad <= 2){
    message.innerHTML = "schlecht";
} 
}