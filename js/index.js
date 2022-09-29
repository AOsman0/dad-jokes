const renderJokeBtn = document.getElementById("renderjoke");
const jokesCard = document.getElementById("jokes-card");
const refetchJokeBtn = document.getElementById("refetch-joke");

const options = {
  headers: {
    Accept: "application/json",
  },
};

const refetchANewJoke = () => {
  console.log("hello");
  localStorage.clear();
  fetchData();
};

const hideRefetchJoke = () => {
  document.getElementById("refetch-joke").style.display = "none";
};

const renderCardJokes = async () => {
  jokesCard.innerHTML = dataFromLS.setup;
};

const fetchData = async () => {
  const res = await fetch("https://icanhazdadjoke.com", options);

  const data = await res.json();

  console.log(data);

  jokesCard.innerHTML = data.joke;
};

const renderJokes = () => {
  fetchData();
  renderJokeBtn.remove();
  document.getElementById("refetch-joke").style.display = "block";
};

const onLoad = () => {
  hideRefetchJoke();
};

renderJokeBtn.addEventListener("click", renderJokes);
refetchJokeBtn.addEventListener("click", refetchANewJoke);
window.onload = onLoad();
