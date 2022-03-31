let email = document.querySelector('#email')
let h2 = document.querySelector('#result')
let dugme = document.querySelector('.button')
const regex = /^([/./_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
const t = 0
let link = document.querySelector('#link')
email.addEventListener('input', () =>
{
  if(regex.test(email.value)){
    h2.innerText =  "Your Email is valid"
    h2.style.color = "lime"
    h2.style.fontFamily = "Roboto"
dugme.addEventListener('click', () => {
  if(t===1){
    dugme = window.location.href = '../index.html'
  }
})
  }
  else{
    h2.innerText =  "Your Email is not valid"
    h2.style.color = "red"
    h2.style.fontFamily = "Roboto"
  }
 })
dugme.addEventListener('click', () => {
  if(t===1){ 
    link.href = "../index.html"
  }
})
console.log(link.innerText)

///////////


// let ime = querySelector('#ime')
// let prezime = querySelector('#prezime')
// let imeInp = querySelector('#first')
// let prezimeInp = querySelector('#last')
// imeInp.addEventListener('input', ()=> {
//   if(imeInp.innerHTML.length<3){
//     ime.innerText = 'Your Name is not valid'
//     ime.style.color = 'red'
//     ime.style.fontFamily = 'Roboto'
//   }
//   else{
//     ime.innerText = 'Your Name not valid'
//     ime.style.color = 'green'
//     ime.style.fontFamily = 'Roboto'
//   }
// })