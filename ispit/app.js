let tabela = document.createElement("table");
let theader = document.createElement("thead");
let tr = document.createElement("tr");
let elem1 = document.createElement("td");
let elem2 = document.createElement("td");
let tr2 = document.createElement("tr");
elem1.innerHTML = "Ime i Prezime";
elem2.innerHTML = "Godine";

tr.appendChild(elem1);
tr.appendChild(elem2);

document.body.appendChild(tabela);
tabela.appendChild(theader);
theader.appendChild(tr);
tabela.classList.toggle("table");

let elem3 = document.createElement("td");
elem3.innerHTML = "Marko Markovic";
let elem4 = document.createElement("td");
elem4.innerHTML = "56";
let elem5 = document.createElement("td");
elem5.innerHTML = "Petar Petrovic";
let elem6 = document.createElement("td");
elem6.innerHTML = "78";
let elem7 = document.createElement("td");
elem7.innerHTML = "Hasan Hasavovic";
let elem8 = document.createElement("td");
elem8.innerHTML = "36";
let elem9 = document.createElement("td");
elem9.innerHTML = "Halko Halkovic";
let elem10 = document.createElement("td");
elem10.innerHTML = "45";

let tr3 = document.createElement("tr");
let tr4 = document.createElement("tr");
let tr5 = document.createElement("tr");

tr2.appendChild(elem3);
tr2.appendChild(elem4);
tr3.appendChild(elem5);
tr3.appendChild(elem6);
tr4.appendChild(elem7);
tr4.appendChild(elem8);
tr5.appendChild(elem9);
tr5.appendChild(elem10);
let tbody = document.createElement("tbody");
tabela.appendChild(tbody);
tbody.appendChild(tr2);
tbody.appendChild(tr3);
tbody.appendChild(tr4);
tbody.appendChild(tr5);

let dugme = document.createElement("button");
dugme.innerHTML = "Sort";

let podaci = [
  { ime: "Marko Markovic", godine: 56 },
  {
    ime: "Petar Petrovic",
    godine: 78,
  },
  {
    ime: "Hasan Hasanovic",
    godine: 36,
  },
  {
    ime: "Halko Halkovic",
    godine: 45,
  },
];

let niz = [];
dugme.addEventListener("click", () => {
  for (let i = 0; i < podaci.length; i++) {
    niz.push(podaci[i].godine);
  }
  niz.sort((x, y) => x - y);

  for (let i = 0; i < niz.length; i++) {
    elem4.innerHTML = niz[0];
    elem6.innerHTML = niz[1];
    elem8.innerHTML = niz[2];
    elem10.innerHTML = niz[3];
    if (niz[0] == podaci[i].godine) {
      elem3.innerHTML = podaci[i].ime;
    } else if (niz[1] === podaci[i].godine) {
      elem5.innerHTML = podaci[i].ime;
    } else if (niz[2] === podaci[i].godine) {
      elem7.innerHTML = podaci[i].ime;
    } else if (niz[3] === podaci[i].godine) {
      elem9.innerHTML = podaci[i].ime;
    }
  }
});

document.body.appendChild(dugme);
