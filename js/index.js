const renderJoke = document.getElementById("renderjoke");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "de5255d304msh17588dc6e5ca726p16e6e5jsn40a3ad05698d",
    "X-RapidAPI-Host": "joke110.p.rapidapi.com",
  },
};

const fetchData = async () => {
  const res = await fetch(
    "https://joke110.p.rapidapi.com/random_joke",
    options
  );

  const data = await res.json();

  console.log(data);

  $("#jokes-card").append(`
  <div>
  <div class="jokes">The Joke:${data.setup}</div>
  <div class="jokes">Punchline:${data.punchline}</div>
  </div>`);
};

const renderJokes = (event) => {
  event.preventDefault();
  console.log("hey");
  fetchData();
  renderJoke.remove();
};

renderJoke.addEventListener("click", renderJokes);
