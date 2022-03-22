const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  //   console.log(form.elements.query.value);
  const user = form.elements.query.value;
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${user}`);
  //   console.log(res.data[0].show.image.medium); izbacuje link
  const slika = document.createElement('img');
  slika.src = res.data[0].show.image.medium;
  document.body.append(slika)
});

//form.elements.query.value dobijanje sadrzaja napisanog u formi!!!! query je u html name na input. MORA DA SE DA IME
