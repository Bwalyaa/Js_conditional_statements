
function check(){
    let age = document.querySelector("#inputField").value;
    const message = document.querySelector(".message");

    if (age >= 18){
        message.innerHTML = "Volljährig"
    } else if (age < 18){
        message.innerHTML = "Minderjährig"
    }
}