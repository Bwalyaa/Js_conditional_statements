
function greaterThan(){
    event.preventDefault();

    let age = document.getElementById("input").value 
    console.log(age);
    const message = document.querySelector(".message");

    if (age >= 18){
        message.innerHTML = "Ja, du kannst Shisha rauchen.";
    } else {
        message.innerHTML = "Du darfst noch nicht Shisha rauchen.";
    }
}