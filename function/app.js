let rec = window.prompt("Unesite recenicu: ")

const capitaliseString = (drugo) => {
    drugo = drugo.split(' ');
    for(let i = 0; i < drugo.length; i++){
        let pom = drugo[i]
        pom = pom.split('')
        pom[0] = pom[0].toUpperCase()
        pom = pom.join("")
        drugo[i] = pom
    }
    return drugo;
}

console.log(capitaliseString(rec));