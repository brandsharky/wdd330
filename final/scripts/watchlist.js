import { createHeaderFooter, fetchShowData, fetchShowIDs, createShowCard, getWatchlist } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  createHeaderFooter();



  const showIDs = await fetchShowIDs();
  const showData = await Promise.all(showIDs.map((showID) => fetchShowData(showID)));

  const watchlistIds = getWatchlist();
  const container = document.querySelector("#watchlist-grid");

  if (watchlistIds.length === 0) {
    container.innerHTML = `
    <p>
      No shows in your watchlist. <a href="shows.html">Find</a> something worth watching and we'll keep track of it here.
    </p>
  `;
  } else {
    const watchlistShows = showData.filter((show) => watchlistIds.includes(show.imdbID));

    createShowCard(watchlistShows, container);
  }
});


