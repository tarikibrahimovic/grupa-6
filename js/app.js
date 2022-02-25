// for(let i=0;i<100;i++){
      //   const div = document.querySelector("div")
      //   const dugme = document.createElement("button")
      //   dugme.innerText = "Hey!"
      //   div.append(dugme)
      // }


      // let lista = document.querySelectorAll("li");
      // for(let i=0;i<=lista.length;i++){
      //   lista[i].classList.toggle("highlight");
      // }



      //     const greet = (n) =>{
      //         return console.log(n);
      //     }

      // const rollDie = () =>{
      //     return Math.floor(Math.random() * 6) + 1
      // }

      // const validUserNames = (['mark', 'stacetsmom1978', 'q29832128238983' , 'carrie98', 'MoanaFar']);
      // validUserNames.filter(n => {
      //     return n.length < 10
      // }).map(n => n.toUpperCase())

      // let osobe = [
      //   {
      //     ime: "Tarik",
      //     prezime: "Ibrahimovic",
      //     godine: 20,
      //   },
      //   {
      //     ime: "Mahir",
      //     prezime: "Ibrahimovic",
      //     godine: 11,
      //   },
      //   {
      //     ime: "Maida",
      //     prezime: "Ibrahimovic",
      //     godine: 17,
      //   },
      // ];

      // let ocene = [
      //   {
      //     polozeniIspit: 1,
      //     ocene: "8",
      //     rok: "jan",
      //   },
      //   {
      //     polozeniIspit: 3,
      //     ocene: "8 7 6",
      //     rok: "jun",
      //   },
      // ];
      // let student = osobe.concat(ocene);

      // const score = [12,13,14,15,16,17];
      
      // const [prvi,drugi,treci,...ostali] = score

      // const student = Object.assign(osobe,ocene)
      //         let person = {
      //     firstName: 'John',
      //     lastName: 'Doe',
      //     age: 25,
      //     ssn: '123-456-2356'
      // };

      // let job = {
      //     jobTitle: 'JavaScript Developer',
      //     location: 'USA'
      // };

      // let employee = {
      //     ...person,
      //     ...job
      // };

      // console.log(employee);

      // const godine = osobe.map(n => {
      //     return n.godine
      // })
      // let num = Math.max(...godine)
      // const broj = [1,2,3,4,5,6,7,8,11,20,40,70];
      // const num = Math.max(...broj);
      // const pom = Math.max(...movie.godine)




//       const btn1 = document.querySelector('#hello')
// const btn2 = document.querySelector('#goodbye')

// btn1.addEventListener('click', () => {
//     console.log("hello");
// })

// btn2.addEventListener('click', () => {
//     console.log("goodbye");
// })

const button = document.querySelector('button')
const h1 = document.querySelector('h1')

 button.addEventListener('click', () => {
     document.body.style.backgroundColor = "olive";
     const r = Math.floor(Math.random() * 256)
     const g = Math.floor(Math.random() * 256)
     const b = Math.floor(Math.random() * 256)
     const newColor = `rgb(${r}, ${g}, ${b})` 
     document.body.style.backgroundColor = newColor;
     h1.innerText = newColor
     if(r<150 && g<150 && b<150){
         h1.style.color = "white"
     }
     else
     {
         h1.style.color = "black"
     }
 })
// function randColor() {
//     const r = Math.floor(Math.random() * 256)
// const g = Math.floor(Math.random() * 256)
// const b = Math.floor(Math.random() * 256)
// return`rgb(${r}, ${g}, ${b})`;
// }

// button.addEventListener('click', () => {
//     const newColor = randColor()
//     document.body.style.backgroundColor = newColor();
//     h1.innerText = newColor()
//     if(r<150 && g<150 && b<150){
//         h1.style.color = "white"
//     }
//     else
//     {
//         h1.style.color = "black"
//     }
// })

let dugme = document.querySelector('#v2')
dugme.addEventListener('click', (e) => {
    console.log(e)
})
let input = document.querySelector('#v3')
input.addEventListener('keyup', (e) =>{
    console.log(e.code)
    console.log(e.key)
    console.log("UP!")
})

input.addEventListener('keydown', (e) =>{
    console.log("DOWN!")
})

let form = document.querySelector("#forma")
let text = document.querySelector("#input")
let lista = document.querySelector('#lista')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Submited!!")
    const newLi = document.createElement("li")
    newLi.innerText = text.value
    lista.append(newLi)
    text.value = '' //restartovanje forme
})

lista.addEventListener('click', (e) =>{
     e.target.remove()
    // target je da vazi i za tek dodate clanove liste a ne samo za one stare
    // e.target.nodeName === 'li' && e.target.remove()
    //ovo je zastita da ako je to lista da se moze izbrisat na klik, a ako nije li onda se ne moze izbrisat na klik
})

const naslov = document.querySelector('#naslov')
const kutija = document.querySelector('#username')

kutija.addEventListener('input', (e) => {
    naslov.innerText = `Welcome, ${kutija.value}`
    if(kutija.value === ''){
        naslov.innerText = "Enter Your Username"
    }
})

// e.stopPropagation() <- ovo je da se spreci vise evenata koji se interaptuju,
//string.prototype.nekafunkcija = ...(definisanje funkcije) i posle svi stringovi mogu da je koriste
// array.prototype.nekafuncija = ...(definisanje funkcije) i posle svi nizovi mogu da je koriste

