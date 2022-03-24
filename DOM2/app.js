let dugme = document.querySelector("#dugme");
// let form = document.querySelector("#forma");
let mail = document.querySelector("#emali");
let password = document.querySelector("#password");
let username = document.querySelector("#username");
let name1 = document.querySelector("#name");

dugme.addEventListener("click", (e) => {
    e.preventDefault();
    const obj = {
        name: name1.value,
        email: mail.value,
        password: password.value,
        username: username.value
    }
    // console.log(obj);
    fetch("https://serene-fortress-45917.herokuapp.com/v1/auth/signup",
    {
        method: 'POST',
        headers: {
            "Content-type": "aplication/json; charset=UTF-8"
        },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
});

let link = "https://serene-fortress-45917.herokuapp.com/v1/auth/signup";


