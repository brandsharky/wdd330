import { createHeaderFooter, fetchShowData, fetchShowIDs, createShowCard, isInWatchlist, toggleWatchlist } from "./utils.js";




document.addEventListener("DOMContentLoaded", async () => {
  createHeaderFooter();

  const showIDs = await fetchShowIDs();
  const showData = await Promise.all(showIDs.map((showID) => fetchShowData(showID)));



  createShowDetails(showData);
});



function createShowDetails(showData) {
  const params = new URLSearchParams(window.location.search);
  const imdbID = params.get("id");

  const container = document.getElementById("show-details");
  const show = showData.find((show) => show.imdbID === imdbID);

  container.innerHTML = `
    <button id="go-back-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
    </button>

    <button class="watchlist-toggle">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
    </button>

    <div class="info">
      <img src="${show.Poster}" alt="${show.Title}">

      <div class="key-info">
        <div class="details">
          <h2>${show.Title}</h2>
          <p class="imdbRating">⭐ ${show.imdbRating}</p>
          <p class="details">${show.Rated} &bull; ${show.Year} &bull; ${show.Runtime} &bull; ${show.totalSeasons} seasons</p>
          <p class="genres">${show.Genre}</p>
          <p class="awards">${show.Awards}</p>
        </div>
      </div>
    </div>

    <div class="peoples">
      <div>
        <h3>StoryLine :</h3>
        <p>${show.Plot}</p>
      </div>

      <div>
        <h3>Cast :</h3>
        <p>${show.Actors}</p>
      </div>

      <div>
        <h3>Writer :</h3>
        <p>${show.Writer}</p>
      </div>
    </div>
  `;


  document.querySelector("#go-back-btn").addEventListener("click", () => {
    if (history.length > 1) {
      history.back();
    } else {
      window.location.href = "shows.html";
    }
  });


  const watchlistBtn = container.querySelector(".watchlist-toggle");

  if (isInWatchlist(show.imdbID)) {
    watchlistBtn.classList.add("active");
  }

  watchlistBtn.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();

    toggleWatchlist(show.imdbID);

    watchlistBtn.classList.toggle("active");
  });
}


