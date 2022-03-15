let dugme = document.querySelector('#sign')
      dugme.addEventListener('click', () => {
        window.location.href='index (1).html'
      })
      let stranicaa = document.querySelector('.drugiSajt')
      //ovde dodaj druge sajtove
      stranicaa.addEventListener('click', () => {
        window.location.href='../stranica2/Museum-of-Candy.html'
      })
      let stranicat = document.querySelector('.prviSajt')
      stranicat.addEventListener('click', () => {
        window.location.href='../projekat/index.html'
      })

      let treciSajt = document.querySelector('.treciSajt')
      treciSajt.addEventListener('click', () => {
        window.location.href='../stranica3/index.html'
      })
      // let email = document.querySelector('#email')
      // let login = document.querySelector('#login')
      // let pom;
      // for(let i = 0;i<email.lenght;i++){
      //   if(email[i] == '@'){
      //   break;
      //   }
      //   else{
      //     pom += email[i]
      //   }
      // }
      // let desno = document.querySelector('.desno')
      // let form = document.querySelector('form')
      // login.addEventListener('click', (e) => {
      //   form.classList.toggle('.none')
      //   const nesto = document.createElement('div')
      //   nesto.innerHTML = pom
      //   desno.append(nesto)
      // })