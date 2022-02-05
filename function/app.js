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

// function bmi(weight,height){
//     let bmi = 0
//     bmi = weight/(height*height)
//     if(bmi <= 18.5)
//     return "Underweight";
//     else if(bmi <= 25.0 && bmi >= 18.5)
//     return "Normal";
//     else if(bmi <= 30.0 && bmi >= 25.0)
//     return "Overweight";
//     else
//     return "Obese";
// }

// console.log(bmi(74,1.85));

// function boolToWord(bool){return bool ? "yes" : "no"}

// console.log(boolToWord(false));

// function makeUpperCase(str){return str.toUpperCase()}

// console.log(makeUpperCase("tarik"));

// function even_of_odd(num){return num%2===0 ? "even" : "odd" }

// console.log(even_of_odd(2));

// function between(a,b){
//     let niz = []
//     for (let i = a; i <= b; i++) {
//         niz.push(i);
//     }
//     return niz
// }

// console.log(between(2,10));

// let otac = 45;
// let sin = 20;

// function twiceAsOld(dadYearsOld,sonYearsOld){
//    let pom =  dadYearsOld - sonYearsOld * 2;
//    let datum = new Date()
//    datum = datum.getFullYear()
//    if(pom > 0){
//        return datum += Math.abs(pom)
//    }
//    else{
//        return datum -= pom
//    }
// }
// console.log(twiceAsOld(otac,sin));

// let niz = [1,4,5,6,7,8,9,2];

// function nadji (niz){

//         let i
//         let key
//         let j;
//     for (i = 1; i < niz.length; i++)
//     {
//         key = niz[i];
//         j = i - 1;

//         {
//             niz[j + 1] = niz[j];
//             j = j - 1;
//         }
//         niz[j + 1] = key;
//     }
//         return niz;
//     }

// let pom = nadji(niz);

// console.log(pom[0]);
// console.log(pom[1]);

// let niz = [2,3,10,-135235,23523];

// function element(niz){
//     let max = 0;
//     for(let i = 0; i < niz.lenght; i++){
//         if(max<Math.abs(niz[i])){
//             // max = Math.abs(niz[i]);
//         }
//         console.log(Math.abs(niz[i]));
//     }
//     // return max;
// }

// // console.log(element(niz));
// element(niz)

// let niz = [3, 0, 24, 54, 0, 123, 0, 32, 63];
// function nesto(niz) {
//   for (let i = 0; i < niz.length; i++) {
//     if (niz[i] === 0) {
//       niz.splice(i, 1);
//       niz.push(0);
//     }
//   }
//   return niz;
// }

// console.log(nesto(niz));

// function avg(){
//     let suma = 0
//     for (let i = 0; i < niz.length; i++) {
//         suma+=niz[i];
//     }
//     return suma/niz.length;
// }

// console.log(avg(niz));

// data = [2,5,34,65,43,52,98,23,66];
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// data = data.map((el) => {
//   if(el % 2 == 1)
//   return 0;
//   else{
//     return el;
//   }
// })

// data = data.every((el) => {
//   return el > 11;
// })

// data = data.some((el) => {
//   return el>90;
// })

// niz = [];

// sum = 0;
// count = 0
// for (let i = 0; i < data.length; i++) {
//   if(data[i]<0){
//     sum+=data[i];
//   }
//   else{
//     count++;
//   }
// }
// niz.push(count);
// niz.push(sum);

// console.log(niz);

// function nesto (n){
//   pomArr = [];
//   for (let i = n; i >0 ; i--) {
//     pomArr.push(i);
//   }
//   return pomArr;
// }

// console.log(nesto(7));

// let n = [10]*2

// console.log(n);

// function pillars(brStub, dist, debljina) {
//   if (brStub === 1) {
//     return 0;
//   }
//   return dist * (brStub - 1) * 100 + debljina * (brStub - 2);
// }
// console.log(pillars(1, 15, 30));

// function iceBrickVolume(radius, bottleLength, rimLength) {
//   let visina = bottleLength - rimLength;
//   let stranica = radius * Math.sqrt(2);
//   return Math.round(stranica * stranica * visina);
// }

// console.log(iceBrickVolume(5, 30, 7));

// let niz1 = [1, 1, 1, 5, 1, 1];
// function stray(niz) {
//   // let brojac = 0;
//   // // debugger
//   // niz.sort((a,b) => a - b);
//   // for (let i = 0; i < niz.length; i++) {
//   //   brojac = 0;
//   //   for (let j = 0; j < niz.length; j++) {
//   //     if (niz[i] === niz[j]) {
//   //       brojac++;
//   //     }
//   //   }
//   //   if(brojac <= 1){
//   //     return niz[i];
//   //   }
//   // }
//   num = 0;
//   if (niz[0] !== niz[1] && niz[0] !== niz[2]) {
//     num = niz[0];
//   }
//   if (
//     niz[niz.length - 1] !== niz[niz.length - 2] &&
//     niz[niz.length - 1] !== niz[niz.length - 3]
//   ) {
//     num = niz[niz.length - 1];
//   }
//   for (let i = 1; i < niz.length - 1; i++) {
//     if (niz[i] != niz[i - 1] && niz[i] !== niz[i + 1]) {
//       num = niz[i];
//       break;
//     }
//   }
//   return num;
// }
// console.log(stray(niz1));

// niz = [12, 14, 63, 72, 55, 24];
// function inverseSlice(niz, a, b) {
//   let pomNiz = [];
//   // for (let i = 0; i < niz.length; i++) {
//   //   if(i<a ||  i>=b){
//   //     pomNiz.push(niz[i]);
//   //   }
//   // }
//   // pomNiz = niz.slice(0, a);
//   // pomNiz = pomNiz.concat(niz.slice(b));

//   // return pomNiz;

//   return pomNiz.slice(0,a).concat(pomNiz.slice(b));
// }

// console.log(inverseSlice(niz, 2, 4));

// let recenica =
// "alpha beta beta gama gama gama delta alpha beta beta gama gama delta";

// console.log(recenica.split(" "));

// function nesto(recenica) {
//   let recenicaPom = "";
//   for (let i = 0; i < recenica.split(" ").length; i++) {
//     pom1 = recenica.split(" ")[i];
//     pom2 = recenica.split(" ")[i + 1];
//     if (pom1 !== pom2) {
//       recenicaPom += pom1 + " ";
//     }
//   }
//   return recenicaPom;
// }

// console.log(nesto(recenica));
// console.log(recenica.split(" ").length);

// let niz = [2, 3, 12, 45, 76, 98, 99];

// function largestPairSum(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[arr.length - 1] + arr[arr.length - 2];
// }
// console.log(largestPairSum(niz));

// let niz = [5, 2, 1, 7, 4, 9, 23, 645, 867, 32];

// for (let i = 0; i < niz.length; i++) {
//   for (let j = 0; j < niz.length; j++) {
//     if (niz[i] < niz[j]) {
//       let pom = niz[i];
//       niz[i] = niz[j];
//       niz[j] = pom;
//     }
//   }
// }

// console.log(niz);

// function nbYear(po,precent,aug,p){
//   let n = 0;
//   while(po<p){
//     po+=(po*precent)/100+aug;
//     n++;
//   }
//   return n;
// }
// console.log(nbYear(1500, 5, 100, 5000));

// let podaci = [[75,12],[23,9],[36,5],[83,7],[39,24]];

// function openOrSenior(matrica) {
//   let rez = [];
//   for (let i = 0; i < matrica.length; i++) {
//     if (matrica[i][0] < 55 || matrica[i][1] < 7) {
//       rez.push("Open");
//     } else if(matrica[i][0] >= 55 && matrica[i][1] > 7) {
//       rez.push("Senior");
//     }
//   }
//   return rez;
// }

// console.log(openOrSenior(podaci));

