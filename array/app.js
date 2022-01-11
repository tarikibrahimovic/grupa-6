let broj = prompt("Unesite broj ucenika: ")
let niz = []
for(let i = 0; i < broj ; i++){
    niz.push(prompt("Unesite visinu ucenika: "))
}
// console.log(Math.max(...niz));
// console.log(Math.min(...niz));

let max = 0

niz.sort()
console.log(niz[0]);
console.log(niz[niz.length-1]);
console.log(niz);
