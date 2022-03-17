let dugme = document.querySelector("#dugme");
// let form = document.querySelector("#forma");
let mail = document.querySelector("#email");
let password = document.querySelector("#password");
let username = document.querySelector("#username");
let name = document.querySelector("#name");

dugme.addEventListener("click", (e) => {
    e.preventDefault();
    const obj = {
        name: name.value,
        email: e.target.form[0].value,
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
    }).then(res => res.json())
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
});

let link = "https://serene-fortress-45917.herokuapp.com/v1/auth/signup";


