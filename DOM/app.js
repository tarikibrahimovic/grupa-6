// let mojDiv = document.querySelector("#mdiv");
//       mojDiv.style.fontSize = "50px";
//       let div2 = document.createElement("div");
//       div2.style.width = "300px";
//       div2.style.height = "100px";
//       div2.style.border = '2px solid black';
//       mojDiv.appendChild(div2)

// let a = () => {
//     let mojDiv = document.querySelector("#mdiv");
//       mojDiv.style.fontSize = "50px";
//       let div2 = document.createElement("div");
//       div2.style.width = "300px";
//       div2.style.height = "100px";
//       div2.style.border = '2px solid black';
//       mojDiv.appendChild(div2)
//     }

//     a();
//     a();
//     a();
//     a();
//     a();

let mojDiv = document.querySelector("#mdiv");
// mojDiv.style.fontSize = "50px";
function a(value) {
  let div2 = document.createElement("div");
  div2.style.width = "300px";
  div2.style.height = "100px";
  div2.style.border = "2px solid black";
  div2.innerHTML = value.fact;
//   mojDiv.appendChild(div2);
return div2
}

fetch("https://catfact.ninja/facts")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (let i = 0; i < data.data.length; i++) {
        mojDiv.appendChild(a(data.data[i]));
    }
    for (let i = 0; i < data.links.length; i++) {
      nav.appendChild()      
    }
  });

let nav = document.querySelector('.nav');


function pageNav(vals){
  let navigacija = document.createElement('a');
  navigacija.href = vals.url;
  navigacija.innerHTML = vals.label;
  if(vals.active) {
    navigacija.style.background = 'white';
  }
  return navigacija
}

// var e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4));

// ime = "Tarik";

// function hello() {
//   console.log("Hello ", ime);
// }

// hello()

