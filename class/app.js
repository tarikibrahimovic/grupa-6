// function makeColor (r,g,b) {
//     const color = {}
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const {r,g,b} = this;
//         return `rgb(${r},${g},${g})`;
//     };
//     // color.hex = function () {
//     //     const {r,g,b} = this
//     // }
//     console.log(this);
// }

// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function (){
//     const {r,g,b} = this;
//     return `rgb(${r},${g},${g})`;
// };

// const color1 = new Color(40,50,60)
// const color2 = new Color(0,0,0)

// Color.prototype.rgba = function(a = 1.0){
//     const {r,g,b} = this;
//     return `rgba(${r},${g},${g},${a})`;
// }

// class Color{
//     constructor(r,g,b,){
//         this.r = r;
//         this.b = b;
//         this.g = g;
//     }
//     innerRGB(){
//         const{r,g,b} = this
//         return `${r}, ${g}, ${b}`;
//     }
//     rgb(){
//         return `rgb(${this.innerRGB()})`
//     }
//     rgba(a=1.0){
//         return `rgba(${this.innerRGB()},${a})`;
//     }
//     rgb2hsl() {
//         let {r,g,b} = this;
//             r /= 255, g /= 255, b /= 255;
//             var max = Math.max(r, g, b), min = Math.min(r, g, b);
//             var h, s, l = (max + min) / 2;

//             if(max == min){
//                 h = s = 0; // achromatic
//             }else{
//                 var d = max - min;
//                 s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//                 switch(max){
//                     case r: h = (g - b) / d + (g < b ? 6 : 0); break;
//                     case g: h = (b - r) / d + 2; break;
//                     case b: h = (r - g) / d + 4; break;
//                 }
//                 h /= 6;
//             }
//             h = Math.floor(h * 360)
//             s = Math.floor(s * 100)
//             l = Math.floor(l * 100)
//             return `hsl(${h}, ${s}, ${l})`;
//     }
// }

// const c1 = new Color(255,255,255);
// const boja = new Color(200,100,150);

// let text = document.querySelector("#text");
// let dugme = document.querySelector("#dugme");
// // function provera() {
// //   if (text.innerHTML.length === 0) {
// //     return "nema";
// //   } else {
// //     return "ima";
// //   }
// // }
// // console.log(provera());
// dugme.addEventListener("click", () => {
//   if (text.value.length < 1) {
//     console.log("Nema");
//   } else {
//     console.log("Ima");
//   }
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////

// let content = document.querySelector("#content");
// let container = document.querySelector("#container");

// class Student {
//   constructor(
//     redniBroj,
//     ime,
//     indeks,
//     studijskiProgram,
//     nazivDepartmana,
//     godinaStudija,
//     brojPolozenih,
//     prosecnaOcena,
//     url
//   ) {
//     this.redniBroj = redniBroj;
//     this.ime = ime;
//     this.indeks = indeks;
//     this.studijskiProgram = studijskiProgram;
//     this.nazivDepartmana = nazivDepartmana;
//     this.godinaStudija = godinaStudija;
//     this.brojPolozenih = brojPolozenih;
//     this.prosecnaOcena = prosecnaOcena;
//     this.url = url;
//     this.validate();
//   }

//   validate() {
//     if (this.brojPolozenih == "") {
//       this.brojPolozenih = 0;
//     }
//     if (this.prosecnaOcena == "") {
//       this.prosecnaOcena = 0;
//     }
//   }

//   view() {
//     let ul = document.createElement("ul");
//     let li1 = document.createElement("li");
//     let li2 = document.createElement("li");
//     let li3 = document.createElement("li");
//     let li4 = document.createElement("li");
//     let li5 = document.createElement("li");
//     let li6 = document.createElement("li");
//     let li7 = document.createElement("li");
//     let li8 = document.createElement("li");
//     li1.innerHTML = `Redni broj:${this.redniBroj}`;
//     li2.innerHTML = `Ime: ${this.ime}`;
//     li3.innerHTML = `indeks:${this.indeks}`;
//     li4.innerHTML = `studijskiProgram:${this.studijskiProgram}`;
//     li5.innerHTML = `nazivDepartmana:${this.nazivDepartmana}`;
//     li6.innerHTML = `godinaStudija:${this.godinaStudija}`;
//     li7.innerHTML = `Broj polozenih ispita:${this.brojPolozenih}`;
//     li8.innerHTML = `Prosecna ocena:${this.prosecnaOcena}`;

//     let imgDiv = document.createElement("div");
//     let img = document.createElement("img");
//     img.src = this.url;

//     imgDiv.appendChild(img);
//     ul.appendChild(li1);
//     ul.appendChild(li2);
//     ul.appendChild(li3);
//     ul.appendChild(li4);
//     ul.appendChild(li5);
//     ul.appendChild(li6);
//     ul.appendChild(li7);
//     ul.appendChild(li8);
//     content.appendChild(imgDiv);
//     content.appendChild(ul);
//   }
// }

// let studenti = [
//   new Student(
//     10,
//     "aldin",
//     "022009",
//     "AVT",
//     "Tehnicke nauke",
//     "4",
//     "34",
//     "",
//     "https://i.pravatar.cc/150?img=3"
//   ),
//   new Student(
//     8,
//     "ismail",
//     "022007",
//     "RT",
//     "Tehnicke nauke",
//     "5",
//     "",
//     "6.5",
//     "https://i.pravatar.cc/150?img=5"
//   ),
//   new Student(
//     4,
//     "leonardo",
//     "022010",
//     "SI",
//     "Tehnicke nauke",
//     "5",
//     "21",
//     "6.5",
//     "https://i.pravatar.cc/150?img=4"
//   ),
// ];

// let previousBtn = document.createElement("button");
// let nextBtn = document.createElement("button");
// let i = 0;
// studenti[0].view();

// previousBtn.addEventListener("click", (e) => {
//   content.innerHTML = "";
//   i == 0 ? (i = studenti.length - 1) : (i -= 1);
//   studenti[i].view();
// });

// nextBtn.addEventListener("click", (e) => {
//   content.innerHTML = "";
//   i = (i + 1) % studenti.length;
//   studenti[i].view();
// });

// let btnDiv = document.createElement("div");
// previousBtn.innerHTML = "< previous";
// nextBtn.innerHTML = "next >";

// btnDiv.appendChild(previousBtn);
// btnDiv.appendChild(nextBtn);
// container.appendChild(btnDiv);

////////////////////////////////////////////////////////////////////////////////////////////////////

//oznaka:1-10 z, d, k; tip: herc,karo,pik,tref; vrednost:1-13; boja:karo i herc crvena, tref i pik crna

// class Karta {
//   constructor(oznaka, tip, vrednost, boja) {
//     this.oznaka = oznaka;
//     this.tip = tip;
//     this.vrednost = vrednost;
//     this.boja = boja;
//   }
//   ispis() {
//     let { oznaka, tip, vrednost, boja } = this;
//     console.log(`${oznaka},${tip},${vrednost},${boja}`);
//   }
// }

// class Osoba {
//   constructor(ime) {
//     this.ime = ime;
//     this.karte = [];
//   }
//   ruka(deck) {
//     let { karte } = this;
//     let pom = izbaci(deck, Math.floor(Math.random() * deck.length));
//     karte.push(pom);
//   }
//   ispisRuke() {
//     let { karte } = this;
//     for (let i = 0; i < karte.length; i++) {
//       console.log(karte[i]);
//     }
//   }
// }

// let znak = ["tref", "karo", "pik", "herc"];
// let vrednost = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "D",
//   "K",
// ];

// function getDeck() {
//   let deck = new Array();
//   let boja = "";
//   let vr = 0;
//   for (let i = 0; i < znak.length; i++) {
//     for (let x = 0; x < vrednost.length; x++) {
//       if (znak[i] === "tref" || znak[i] === "pik") {
//         boja = "crna";
//       } else {
//         boja = "crvena";
//       }
//       if (vrednost[x] === "J") {
//         vr = 11;
//       } else if (vrednost[x] === "D") {
//         vr = 12;
//       } else if (vrednost[x] === "K") {
//         vr = 13;
//       } else {
//         vr = Number(vrednost[x]);
//       }
//       deck.push(new Karta(vrednost[x], znak[i], vr, boja));
//     }
//   }
//   return deck;
// }

// function izbaci(deck, index) {
//   for (let i = 0; i < deck.length; i++) {
//     if (i == index) {
//       return deck.splice(i, 1);
//     }
//   }
// }

// let deck = getDeck();

// let covek1 = new Osoba(prompt("Unesite ime prvog igraca: "));
// let covek2 = new Osoba(prompt("Unesite ime drugog igraca: "));

// let container = document.querySelector("#container");
// let content = document.querySelector("#content");

// let ime1 = document.createElement("h3");
// let ime2 = document.createElement("h3");

// ime1.innerHTML = covek1.ime;
// ime2.innerHTML = covek2.ime;

// content.appendChild(ime1);
// content.appendChild(ime2);

// let dugme1 = document.createElement("button");
// let dugme2 = document.createElement("button");
// let dugme3 = document.createElement("button");

// dugme1.innerHTML = "Start igrac1";
// dugme1.type = "button";

// dugme2.innerHTML = "Start igrac2";
// dugme2.type = "button";

// content.appendChild(dugme1);
// content.appendChild(dugme2);

// dugme3.innerHTML = "Pocni opet";
// dugme3.type = "button";

// let brojac1 = 0;
// dugme1.addEventListener("click", () => {
//   let {tip,vrednost} = covek1.karte
//   covek1.ruka(deck);
//   console.log(tip);
//   brojac1 += 1;
//   let kartica = document.createElement("div");
//   let header = document.createElement("h5");
//   let par = document.createElement("p");
//   header.innerHTML = tip
//   kartica.appendChild(header)
//   kartica.appendChild(par)
//   if (brojac1 === 5) {
//     dugme1.classList.toggle("hidden");
//   }
// });

// let brojac2 = 0;
// dugme2.addEventListener("click", () => {
//   covek2.ruka(deck);
//   brojac2 += 1;
//   if (brojac2 === 5) {
//     dugme2.classList.toggle("hidden");
//   }
// });

// for (let i = 0; i < deck.length; i++) {
//   deck[i].ispis();
// }

// const date1 = new Date('8/25/2001');
// const date2 = new Date('12/15/2010');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// console.log(diffTime + " milliseconds");
// console.log(diffDays + " days");
// document.getElementById("container").innerHTML = diffTime;
// document.getElementById("content").innerHTML = diffDays;

/////////////////////////////////////////////////////////////////////////////////

// let content = document.querySelector("#content");

// class Osoba {
//   constructor(name, surname, age, url) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.url = url;
//   }

//   show() {
//     content.innerHTML = "";
//     let img = document.createElement("img");
//     img.src = this.url;
//     let information = document.createElement("div");
//     information.classList.add("inf");
//     let p1 = document.createElement("p");
//     let p2 = document.createElement("p");
//     let p3 = document.createElement("p");
//     p1.innerHTML = this.name;
//     p2.innerHTML = this.surname;
//     p3.innerHTML = this.age;
//     information.appendChild(p1);
//     information.appendChild(p2);
//     information.appendChild(p3);
//     content.appendChild(img);
//     content.appendChild(information);
//   }
// }

// class Profesor extends Osoba {
//   constructor(name, surname, age, url, univerzitet, predmet) {
//     super(name, surname, age, url);
//     this.univerzitet = univerzitet;
//     this.predmet = predmet;
//   }

//   show() {
//     super.show();
//     let information = document.querySelector(".inf");
//     let p1 = document.createElement("p");
//     let p2 = document.createElement("p");
//     p1.innerHTML = this.univerzitet;
//     p2.innerHTML = this.predmet;
//     information.appendChild(p1);
//     information.appendChild(p2);
//   }
// }

// class Student extends Osoba {
//   constructor(name, surname, age, url, univerzitet, brojIndeksa) {
//     super(name, surname, age, url);
//     this.univerzitet = univerzitet;
//     this.brojIndeksa = brojIndeksa;
//   }

//   show() {
//     super.show();
//     let information = document.querySelector(".inf");
//     let p1 = document.createElement("p");
//     let p2 = document.createElement("p");
//     p1.innerHTML = this.univerzitet;
//     p2.innerHTML = this.brojIndeksa;
//     information.appendChild(p1);
//     information.appendChild(p2);
//   }
// }

// let osobe = [
//   new Profesor(
//     "Irfan",
//     "Fetahovic",
//     25,
//     "https://i.pravatar.cc/150?img=4",
//     "DUNP",
//     "Digitalna Elektronika"
//   ),
//   new Profesor(
//     "Ulfeta",
//     "Marovac",
//     90,
//     "https://i.pravatar.cc/150?img=16",
//     "DUNP",
//     "Racunarske mreze"
//   ),
//   new Student(
//     "Ensar",
//     "Hamzic",
//     20,
//     "https://i.pravatar.cc/150?img=25",
//     "DUNP",
//     1
//   ),
//   new Student(
//     "Tarik",
//     "Ibrahimovic",
//     22,
//     "https://i.pravatar.cc/150?img=30",
//     "DUNP",
//     2
//   ),
// ];

// osobe[0].show();
// i = 0;

// let prev = document.createElement("button");
// let next = document.createElement("button");
// prev.innerHTML = "<<";
// next.innerHTML = ">>";

// let main = document.querySelector(".main")

// prev.addEventListener("click", () => {
//   content.innerHTML = "";
//   if (i == 0) {
//     i = osobe.length - 1;
//   } else {
//     i -= 1;
//   }
//   osobe[i].show();
// });

// next.addEventListener("click", () => {
//   content.innerHTML = "";
//   i = (i + 1) % osobe.length;
//   osobe[i].show();
// });

// main.appendChild(prev);
// main.appendChild(next);

// previousBtn.addEventListener("click", (e) => {
//   content.innerHTML = "";
//   i == 0 ? (i = studenti.length - 1) : (i -= 1);
//   studenti[i].view();
// });

// nextBtn.addEventListener("click", (e) => {
//   content.innerHTML = "";
//   i = (i + 1) % studenti.length;
//   studenti[i].view();
// });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Zivotinja{
  constructor(ime,godine){
    this.ime = ime
    this.godine = godine
  }
  lavez(){
    let {ime, godine} = this;
    console.log(`Ja sam ${ime} i imam ${godine} godina.`);
    setTimeout(this.vrisak(),)
  }
  vrisak(){
    setTimeout(this.lavez(),300000) ;
    console.log("bla bla");
  }
}

class Pas extends Zivotinja{
  constructor(ime,godine,vrsta){
    super(ime,godine);
    this.vrsta = vrsta
  }
}

let pas = new Pas('dzeki', 10, 'pas');
pas.vrisak();