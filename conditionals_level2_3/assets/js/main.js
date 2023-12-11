// function calculate(){
//     let number1 = 27;
//     let number2 = ("Gib eine zahl ein");
//     let theDifference = number1 - number2;

//     if(theDifference > number1){
//         console.log(theDifference * 2);
//     } 
// }

// console.log(calculate(35));
// console.log(calculate(74));
// console.log(calculate(123));

function calculate(num){
    let theDifference = num - 27;
    
    if(theDifference > 27){
        console.log((num - 27) * 2);
    } else {
        console.log("alles andere");
    }
}

calculate(35)
calculate(74)
calculate(123)