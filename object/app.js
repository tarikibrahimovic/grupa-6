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

// let osoba = {
//   ime : "Tarik",
//   budala : true
// }
// let osoba2 = {
//   ime: "Amir",
//   budala : true
// }

// let func = (o1) => {
//   let a = Object.keys(o1)

//   if (a.includes('budala')) {
//     console.log('postji');
//   } else {
//     console.log('ensdada');
//   }
// }
// for (let i = 0; i < a; i++) {
//   if(Object.keys(o1[i]) === pom){
//     console.log(`Objekat ima ${pom}`);
//   }
//   else{
//     console.log(`Objekat nema ${pom}`);
//   }
// }

// class Book {
//   constructor(title, genre, author) {
//     this.title = title;
//     this.genre = genre;
//     this.author = author;
//     this.genre = false;
//     this.read_date = null;
//   }
// }

// class Booklist {
//   constructor() {
//     this.book_read = 0;
//     this.book_not_read = 0;
//     this.nextBook = null;
//     this.currBook = null;
//     this.lastBook = null;
//     this.bookShefl = [];
//   }

//   add(book) {
//     if (book instanceof Book) {
//       this.bookShefl.push(book);
//     } else {
//       console.log("invalid");
//     }
//   }
//   finishCurrentBook() {
//     for (let i = 0; i < this.bookShelf.length; i++) {
//       const book = this.bookShefl[i];
//       if (book.title === this.currBook.title) {
//         this.bookShefl[i].read = true;
//         this.bookShefl[i].read_date = new Date().now();
//         this.lastBook = this.currBook;
//         this.currBook = this.nextBook;
//         if (this.bookShefl[i + 1]) {
//           this.nextBook = this.bookShefl[i + 1];
//         }
//         break;
//       }
//     }
//   }
// }

// b1 = new Book("hp1", "magic", "jkr");
// b2 = new Book("hp1", "magic", "jkr");
// b3 = new Book("hp1", "magic", "jkr");
// b4 = new Book("hp1", "magic", "jkr");
// b5 = new Book("hp1", "magic", "jkr");

// booklist = new Booklist();

// booklist.add(b1);
// booklist.add(b2);
// booklist.add(b3);
// booklist.add(b4);
// booklist.add(b5);



//bind()
//call() i apply();

// let neki = {
//   name: "Tarik",
//   surname: "Ibrahimovic",
// };

// console.log("Ibrahimovic" in neki);

nesto = function (a) {
  let a = 0
  console.log(a);
}

