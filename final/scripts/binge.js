import { createHeaderFooter, fetchShowData, fetchShowIDs, createShowCard } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () =>{
  createHeaderFooter();



  const showIDs = await fetchShowIDs();
  const showData = await Promise.all(showIDs.map((showID) => fetchShowData(showID)));


  initializeMysteryCard(showData);
})



function initializeMysteryCard(showData) {
  const container = document.querySelector(".mystery-container");

  renderMysteryCard(container);


  container.addEventListener("click", (event) => {
    if (event.target.closest(".mystery-show")) {
      revealRandomShow(container, showData);
    }

    if (event.target.id === "reroll-btn") {
      revealRandomShow(container, showData);
    }

    if (event.target.id === "reset-btn") {
      renderMysteryCard(container);
    }
  });
}


function revealRandomShow(container, showData) {
  const randomShow = showData[Math.floor(Math.random() * showData.length)];

  container.innerHTML = "";

  createShowCard([randomShow], container);

  const resetButton = document.createElement("button");
  resetButton.id = "reset-btn";
  resetButton.textContent = "Choose Another Mystery";

  container.appendChild(resetButton);
}


function renderMysteryCard(container) {
  container.innerHTML = `
    <div class="mystery-show">
      <span>?</span>

      <p>
        Click to reveal your next binge.
      </p>
    </div>

    <button class="reroll-btn">
      Re-roll
    </button>
  `;
}








