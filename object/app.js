// covek1 = {
//   ime: "Tarik",
//   prezime: "Ibrahimovic",
//   location : {
//       drzava : "Srbija",
//       grad : "NP",
//   },
// };
// covek2 = {
//     ...covek1,
//     location:{
//         drzava: "Srbija",
//         grad : "Tutin",
//     },
// };
// covek2 = covek1
// covek2 = { ...covek1, location: {...covek1.location} };
// console.log(Object.keys(covek1));
// console.log(Object.values(covek1));

// console.log(covek2);

// let student = {
//   name: "Tarik Ibrahimovic",
//   sclass: "II",
//   rollno: 12,
// };

// console.log(Object.keys(student));
// console.log(student);
// delete student.rollno;
// console.log(student);

// let library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Stive Jobs",
//     title: "Wakter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay : The final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// let func = (obj) => {
//   for (let i = 0; i < obj.length; i++) {
//     if (obj[i].readingStatus === false) {
//       console.log("Knjiga nije procitana!");
//     } else {
//       console.log("Knjiga je procitana!");
//     }
//   }
// };

// func(library);

// obj.forEach((element) => {
//   if (element.readingStatus === false) {
//     console.log("Knjiga nije procitana!");
//   } else {
//     console.log("Knjiga je procitna!");
//   }
// });

// class Zivotinja{
//   constructor(ime,godine){
//     this.ime = ime
//     this.godine = godine
//   }
//   lavez(){
//     let {ime, godine} = this;
//     setInterval(() => {
//       console.log(`Ja sam ${ime} i imam ${godine} godina.`);
//     },1000);
//   }
//   vrisak(){
//     setInterval(this.lavez(),300);
//     console.log("bla bla");
//   }
// }

// let nesto = new Zivotinja("Amir", 20);

// o1 = {
//   name: "Tarik",
//   age: "200",
// };

// o2 = {};

// let flatObj = Object.entries(o1);

// for (let i = 0; i < flatObj.length; i++) {
//   console.log(flatObj[i]);
//   o2[flatObj[i][1]] = flatObj[i][0];
// }
// console.log(o2);

let osoba = {
  ime : "Tarik",
  budala : true
}
let osoba2 = {
  ime: "Amir",
  budala : true
}

let func = (o1) => {
  let a = Object.keys(o1)

  if (a.includes('budala')) {
    console.log('postji');
  } else {
    console.log('ensdada');
  }
}
  // for (let i = 0; i < a; i++) {
  //   if(Object.keys(o1[i]) === pom){
  //     console.log(`Objekat ima ${pom}`);
  //   }
  //   else{
  //     console.log(`Objekat nema ${pom}`);
  //   }
  // }
