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
let func = async function () {
  try {
    let res = await axios.get("https://catfact.ninja/facts");
    if (t === 0) {
      t++;
      dugmici(res);
    }
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

