// "https://swapi.dev/api/people/1"

// const req = new XMLHttpRequest();
// req.onerror = function () {
//   console.log("EROR!!");
//   console.log(this);
// };

// req.onload = function () {
//   console.log("IT LOADED!!");
//   console.log(this.responseText);
//   const data = JSON.parse(this.responseText);
//   console.log(data);
//   console.log(data.name, data.height);
// };
// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();

// fetch

// fetch("https://swapi.dev/api/people/1") //vraca promise i zato se koristi res.json
//   .then((res) => {
//     console.log("RESOLVED", res);
//     res.json().then((data) => console.log("JSON done", data));
//     //res.json nije isto sto i json parse, res.json() vraca promise
//   })
//   .catch((e) => {
//     console.log("EROR!", e);
//   });

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("RESOLVED", res);
//     res.json().then((data) => console.log("JSON done", data));
//     return res.json;// json sluzi da iz promisa izvucemo podatke koje nam trebaju
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2");
//   }).then(res => {
//       console.log("SECOND REQ RES");

//   })
//   .catch((e) => {
//     console.log("EROR!", e);
//   });

// laksi nacin
// const loadSW = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/5/");
//     const data2 = await res2.json();
//     console.log(data);
//   } catch (e) {
//     console.log("Greska!");
//   }
// };
// loadSW();

//////////////////////////////////AXIOS////////////////////////

// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Response: ", res);
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.log("greska");
//   });

//laksi nacin

// const getSW = async () => {
//   try {
//     const res = await axios.get("https://swapi.dev/api/people/1/");
//     console.log(res.data);
//   } catch (e) {
//     console.log("Greska");
//   }
// };
// getSW();

// const getSW = async (id) => {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   };

// getSW(5);

///////////////////////////////////////////////////////EXERCISE//////////////////////////////////////////

//posle.com/ se razlikuje za svaki api
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    console.log(res);
    console.log(res.data);
    console.log(res.data.joke);
    return res.data.joke;
    // const sala = res.data.joke;
    // const e = document.createElement("h1");
    // e.innerHTML = sala;
    // document.body.appendChild(e);
  } catch (e) {
    console.log("Problem");
  }
};
// getDadJoke();

const dugme = document.querySelector("#dugme");
const lista = document.querySelector("#lista");

const func = async () => {
  const res = await getDadJoke();
  const newLi = document.createElement("li");
  newLi.innerHTML = res;
  lista.append(newLi);
};

dugme.addEventListener("click", func);
