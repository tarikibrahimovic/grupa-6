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
  });