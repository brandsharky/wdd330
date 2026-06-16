import { createHeaderFooter, fetchShowData, fetchShowIDs, createShowCard, getCurrentlyWatching} from "./utils.js";

document.addEventListener("DOMContentLoaded", async () =>{
  createHeaderFooter();



  const showIDs = await fetchShowIDs();
  const showData = await Promise.all(showIDs.map((showID) => fetchShowData(showID)));




  createShowCard(showData.sort(() => Math.random() - 0.5).slice(0, 3), document.querySelector(".featured-shows"));



  const currentID = getCurrentlyWatching();

  const container = document.querySelector(".currently-watching");

  if (!currentID) {
    container.innerHTML = `
    <p>
      No shows in progress.
      <a href="shows.html">Find</a> something worth watching and we'll keep track of it here.
    </p>
  `;
  } else {
    const currentShow = showData.find((show) => show.imdbID === currentID);

    if (currentShow) {
      createShowCard([currentShow], container);
    } else {
      // safety fallback if ID is broken
      container.innerHTML = `
      <p>
        No shows in progress.
        <a href="shows.html">Find</a> something worth watching and we'll keep track of it here.
      </p>
    `;
    }
  }
})


