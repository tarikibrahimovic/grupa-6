// const cars = ["string", 20, true];

// niz = cars.map((el) => {
//   return el + 2;
// });
// console.log(niz);

// cars.forEach((el) => {
//   console.log(el - 2);
// });

// niz2 = cars.filter((el) => {
//   if (typeof el == "number") {
//     return el;
//   }
// });

// console.log(niz2);
// console.log(cars);

// res = cars.some((el) => {
//   return el > 2;
// });

// console.log(res);

// res2 = cars.every((el) => {
//   return el > 2;
// });

// console.log(res2);

// arr = [1, 2, 3, 4,];
// initial = 5;

// arr = arr.reduce((prevel, currel) => {
//   return prevel + currel;
// }, initial);
// console.log(arr);

// function findMissing(arr1,arr2){
//     arr2.forEach((el) => {
//         if(arr1.includes(el)){
//             arr1.splice(arr1.indexOf(el),1);
//         }
//     })
//     return arr1[0];
// }

// console.log(findMissing([1, 2, 3], [1, 3]));

// const heros = [
//   {
//     name: "Spider-man",
//   },
//   {
//     name: "Thor",
//   },
//   {
//     name: "Black Panther",
//   },
//   {
//     name: "Capetan Marvel",
//   },
//   {
//     name: "silver Surfer",
//   },
// ];

// let heros2 = heros.map((el, index) => {
//   return {
//     id: index,
//     heros: el.name,
//   };
// });

// console.log(heros2);

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;
//   myResolve("OK");
// });

// myPromise
//   .then((value) => {
//     console.log("then: ", value);
//   })
//   .catch((value) => {
//     console.log("catch: ", value);
//   })
//   .finally(() => {
//     console.log("Uvek ce da se izvrsi!!!");
//   });

// setTimeout(function job(){
//   let obecanje = new Promise(function (resolve,reject) {
//     resolve()
//   });
//   obecanje.then(() => {
//     console.log("Hello world");
//   });
// },2000);

// function job(){
//   let obecanje = new Promise(function(resolve,reject) {
//     setTimeout(resolve(),2000);
//   })

//   obecanje.then(() => {
//         console.log("Hello world");
//       });
// }

// function job() {
//   return "Hello world";
// }

// let obecanje = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(job())},
//    2000);
// });

// obecanje.then((value) => {
//   console.log(value);
// });

// niz = [1,2,23,34,4];
// console.log(niz.slice(1));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// fetch("https://catfact.ninja/facts").then((res) => {
//     return res.json();
// }).then((odg) => {
//     const nesto = odg.data
//     console.log(nesto);
// })

// let func = async () => {
//   try {
//     const pom = await fetch("https://catfact.ninja/facts");
//     let a = await pom.json();
//     console.log(a.data);
//   } catch {
//     console.log("Greska");
//   }
// };
// func();

let func = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    let res2 = await res.json();
    let niz = res2.map((user) => {
      return user.name;
    });
    console.log(niz);
  } catch {
    console.log("greska");
  }
};
func();
