
const johnGröße = 170;
let johnAge = 22;

const meikeGröße = 168;
let meikeAge = 34;

const pointsByJohn = johnAge * 5 + johnGröße
const pointsByMeike = meikeAge * 5 + meikeGröße

console.log(johnAge * 5 + johnGröße);

console.log(meikeAge * 5 + meikeGröße);

function winner(){
    if(pointsByJohn > pointsByMeike){
        console.log(`john gewinnt mit ${pointsByJohn} Punkten.`);
    } else if(pointsByJohn < pointsByMeike){
        console.log(`Meike gewinnt mit ${pointsByMeike} Punkten.`);
    } else if(pointsByJohn = pointsByMeike)
    console.log("unentschieden");
}

winner()

