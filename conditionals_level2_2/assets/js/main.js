
function changeColor(){
    let grad = document.querySelector("#vol").value
    const message = document.querySelector(".message");

    if(grad <= 50){
        message.innerHTML = "Level of health concern: Unhealthy for sensitive groups <br> Level of health effect: Generable publics not likely affected";
        document.querySelector("body").style.backgroundColor = "green";
    } else if (grad > 50 && grad <= 100){
        message.innerHTML = "Level of health concern: Moderate <br> Level of Health effect: Acceptable quality";
        document.querySelector("body").style.backgroundColor = "yellow";
    } else {
        message.innerHTML = "Level of health concern: Unhealthy for sensitive groups <br> Level of health effect: Generable publics not likely affected";
        document.querySelector("body").style.backgroundColor = "red";
    }
}
