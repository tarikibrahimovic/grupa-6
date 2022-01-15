// let broj = prompt("Unesite broj ucenika: ")
// let niz = []
// for(let i = 0; i < broj ; i++){
//     niz.push(prompt("Unesite visinu ucenika: "))
// }
// // console.log(Math.max(...niz));
// // console.log(Math.min(...niz));

// let max = 0

// niz.sort()
// console.log(niz[0]);
// console.log(niz[niz.length-1]);
// console.log(niz);

// let niz = []
// let suma = 0
// for(let i = 0; i < 10; i++){
//     niz[i] = Number(prompt("Unesite broj: "))
//     if(niz[i] % 2 === 0){
//         suma += niz[i]
//     }
// }
// console.log(suma);

// let niz2= [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0; i < 10; i++){
//     niz2[i] *= 3
// }
// console.log(niz2);

// let a = (niz1,niz2) => {
//     let niz3 = []
//     for(let i = 0; i < niz1.length; i++){
//             if(!niz2.includes(niz1[i])){
//                 niz3.push(niz1[i])
//             }
//     } 
//     for(let i = 0; i < niz2.length; i++){
//         if(!niz1.includes(niz2[i])){
//             niz3.push(niz2[i])
//         }
// } 
//     return niz3;
// }

// niz1 = [1,2,3];
// niz2 = [100,2,1,10];
// console.log(a(niz1,niz2));

let arr1 = [1,2,3];
let arr2 = [2,30,1];

res = [...new Set([...arr1, ...arr2])]

arr3 = arr2 + arr1
// console.log(res);

// for(let i = 0; i<arr1.length;i++){
//     for(let j = i; j<arr1.length;j++){
//         if(arr3[i]===arr3[j]){
//             arr3.pop()
//         }
//     }
// }        ne radi resenje
console.log(arr3); 