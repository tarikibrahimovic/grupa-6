// setInterval(() => {
//     document.body.style.backgroundColor = 'red';
// },1000)

// setInterval(() => {
//     document.body.style.backgroundColor = 'yellow';
//     },2000)

// generic changing colors
// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = newColor;
//       doNext();
//     }, delay);
//   };

//   delayedColorChange("olive", 1000, () => {
//     delayedColorChange("teal", 1000);
//   });

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// delayedColorChange("red", 1000).then(() => {
//   delayedColorChange("orange", 1000);
// });

//async function() - vraca uvek promis!
// const sing = async () => {
//   //  throw "LA LA LA PROBLEM";
//   return "AAAAAA OK";
// };

// sing()
//   .then((data) => {
//     console.log("Promise resolved with: ", data);
//   })
//   .catch((data) => {
//     console.log("Oh no, there was a problem");
//     console.log(data);
//   });

// //cesto async sa login dugmicima
// const login = async (username, password) => {
//   if (!username || !password) throw "Missing Creditials";
//   if (password === "blabla") return "Bravo";
//   throw "invalid password";
// };

// login(bla)
//   .then((msg) => {
//     console.log("Ulogovan si");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("error");
//     console.log(err);
//   });

// await : radi uvek samo u async,

// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// delayedColorChange("red", 1000).then(() => {
//   delayedColorChange("orange", 1000);
// });

// async function rainbow() {
//   await delayedColorChange("red", 1000);
//   await delayedColorChange("olive", 1000);
//   delayedColorChange("indigo", 1000);
//   return "kraj";
// }
// rainbow().then((data) => {
//   console.log(data);
// });

async function nesto() {
  try {
    let data1 = await fakeRequest("/page1");
    let data2 = await fakeRequest("/page2");
    console.log(data1);
  } catch (e) {
    console.log("Greska!");
    console.log(e);
  }
}
nesto();

// try i catch je kad je await koji je u data1 i data2 rejected!
