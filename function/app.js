// let rec = window.prompt("Unesite recenicu: ")

// const capitaliseString = (drugo) => {
//     drugo = drugo.split(' ');
//     for(let i = 0; i < drugo.length; i++){
//         let pom = drugo[i]
//         pom = pom.split('')
//         pom[0] = pom[0].toUpperCase()
//         pom = pom.join("")
//         drugo[i] = pom
//     }
//     return drugo;
// }

// console.log(capitaliseString(rec));

// let nekaF = (n) =>{
//     console.log("Nesto", n);
// }

// unos = prompt("Unesite vase ime: ");
// nekaF(unos);

function bmi(weight,height){
    let bmi = 0
    bmi = weight/(height*height)
    if(bmi <= 18.5)
    return "Underweight";
    else if(bmi <= 25.0 && bmi >= 18.5)
    return "Normal";
    else if(bmi <= 30.0 && bmi >= 25.0)
    return "Overweight";
    else
    return "Obese";
}

console.log(bmi(74,1.85));



function boolToWord(bool){return bool ? "yes" : "no"}
 
console.log(boolToWord(false));

function makeUpperCase(str){return str.toUpperCase()}

console.log(makeUpperCase("tarik"));

function even_of_odd(num){return num%2===0 ? "even" : "odd" }

console.log(even_of_odd(2));

function between(a,b){
    let niz = []
    for (let i = a; i <= b; i++) {
        niz.push(i);
    }
    return niz
}

console.log(between(2,10));