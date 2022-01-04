// //prvi zadatak
// for(let i = 0;i <= 15;i++){
//     if(i % 2 === 0){
//         console.log(`${i} je paran`);
//     }
//     else{
//         console.log(`${i} je neparan`);
//     }
// }

// //drugi zadatak
// let niz = [1, 5, 7, 10, 18, 26, 30];
// let zbir = 0;
// let pom = 0
// for(let i=0;i<niz.length;i++){
//     zbir += niz[i];
//     pom += 1;
// }
// console.log(`${zbir/pom} je srednja vrednost`);

// for (let i = 1; i <= 10; i++) {
//   if (i === 7) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 6; i++) {
//   if (i < 3) {
//     console.log("python");
//   } else {
//     console.log("je super");
//   }
// }

// broj = 162;
// let dani = 0
// switch (true) {
//   case broj <= 30:
//     console.log("Januar");
//     dani=6
//     break;
//   case broj > 30 && broj <= 60:
//     console.log("Februar");
//     dani=1
//     break;
//   case broj > 60 && broj <= 90:
//     console.log("Mart");
//     dani=3
//     break;
//   case broj > 90 && broj <= 120:
//     console.log("April");
//     dani=5
//     break;
//   case broj > 120 && broj <= 150:
//     console.log("Maj");
//     dani=7
//     break;
//   case (broj > 150 && broj <= 180):
//     console.log("Jun");
//     dani=2
//     break;
//   case broj > 180 && broj <= 210:
//     console.log("Jul");
//     dani=4
//     break;
//   case broj > 210 && broj <= 240:
//     console.log("Avgust");
//     dani=6
//     break;
//   case broj > 240 && broj <= 270:
//     console.log("Septembar");
//     dani=1
//     break;
//   case broj > 270 && broj <= 300:
//     console.log("Oktobar");
//     dani=3
//     break;
//   case broj > 300 && broj <= 330:
//     console.log("Novembar");
//     dani=5
//     break;
//   case broj > 330:
//     console.log("Decembar");
//     dani=7
//     break;
//   default:
//     console.log("Greska");
//     break;
// }
// let ostatak = broj % 7
// dani+=ostatak
// dani%=7
// switch(dani){
//     case 1:
//         console.log("Ponedeljak");
//     break;
//     case 2:
//         console.log("Utorak");
//     break;
//     case 3:
//         console.log("Utorak");
//     break;
//     case 4:
//         console.log("Utorak");
//     break;
//     case 5:
//         console.log("Utorak");
//     break;
//     case 6:
//         console.log("Utorak");
//     break;
//     case 7:
//         console.log("Utorak");
//     break;
// }

// let pokusaji = Number(window.prompt("Unesite proizvoljan broj brojeva: "))
// let parni=0
// let neparni = 0
// for(let i = 0; i<pokusaji;i++){
//     let pom = Number(window.prompt("Unesite broj: "))
//     if(pom%2===0){
//         parni+=1
//     }
//     else{
//         neparni+=1
//     }
// }

// console.log(`Ima ${neparni} neparnih brojeva i ima ${parni} parnih brojeva`);

// let suma = 0

// for(let i = 0;i<1000;i++){
//     if(i%3===0 && i%5===0){
//         suma+=i
//     }
// }
// console.log(suma);

// for(let i = 0;i<50;i++){
//     if(i%3===0){
//         console.log("fizz");
//     if(i%5===0)
//     console.log("buzz");
//     }
// else if(i%5===0){
//     console.log("buzz");
// }
// else
// console.log(i);
// }

// let broj = Number(window.prompt("Unesite broj: "));

// let suma = 0;
// let faktorijel = (n) => {
//   let fakt = 1;
//   for (let i = 1; i <= n; i++) {
//     fakt *= i;
//   }
//   return fakt;
// };
// for (let i = 1; i <= broj; i++) {
//   suma += faktorijel(i);
// }
// console.log(suma);

let broj = Number(window.prompt("Unesite broj:"));
let pom1 = 1
let pom2 = 1
let pom3 = 0
for (let i = 0; i < broj; i++) {
    pom3=pom2+pom1
    console.log(pom3);
    pom1=pom2
    pom2=pom3
}
