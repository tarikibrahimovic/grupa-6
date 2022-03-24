//"https://catfact.ninja/facts"
// PITAJ KAKO SE DINAMICKI KREIRAJU ELEMENTI

let glavni = document.createElement("div");
let kartica1 = document.createElement("div");
let kartica2 = document.createElement("div");
let kartica3 = document.createElement("div");
let kartica4 = document.createElement("div");

glavni.classList.add("glavni");
kartica1.classList.add("kartica");
kartica2.classList.add("kartica");
kartica3.classList.add("kartica");
kartica4.classList.add("kartica");

document.body.appendChild(glavni);
glavni.append(kartica1, kartica2, kartica3, kartica4);

let nizImena = [kartica1, kartica2, kartica3, kartica4];

let t = 0;
let fetchlink = "https://catfact.ninja/facts";
let func = async function () {
  try {
    let res = await axios.get(fetchlink);
    console.log(res);
    if (t === 0) {
      t++;
      dugmici(res);
    }
    // for (let i = 0; i < res.data.links.length; i++) {
    //   navigacija.appendChild(pageNav(res.data.links[i]));
    // }
    nizImena.forEach((e, i) => {
      return (e.innerHTML = res.data.data[i].fact);
    });
  } catch {
    console.log("ERROR!");
  }
};
func();

let navigacija = document.createElement("div");
navigacija.classList.add("nav");
document.body.append(navigacija);

function dugmici(res) {
  for (let i = 0; i < res.data.links.length; i++) {
    let dugme = document.createElement("button");
    dugme.innerHTML = res.data.links[i].label;
    navigacija.appendChild(dugme);
    dugme.addEventListener("click", (e) => {
      e.preventDefault();
      func();
    });
  }
}

// function pageNav(vals) {
//   let nav = document.createElement("button");
//   nav.innerHTML = "";

//   if (vals.active) {
//     nav.style.background = "tan";
//   }

//   nav.onclick = function (el) {
//     el.preventDefault();
//     fetchlink = vals.url;
//     func();
//   };
//   return nav;
// }
