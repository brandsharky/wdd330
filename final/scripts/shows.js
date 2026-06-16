import { createHeaderFooter, fetchShowData, fetchShowIDs, createShowCard } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  createHeaderFooter();



  const showIDs = await fetchShowIDs();
  const showData = await Promise.all(showIDs.map((showID) => fetchShowData(showID)));

  createShowCard(showData, document.getElementById("show-grid"));
});


