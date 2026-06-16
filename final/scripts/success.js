import { createHeaderFooter } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  createHeaderFooter();
});



const formInfo = new URLSearchParams(window.location.search);

document.getElementById("results").innerHTML = `
  <h2>Thank You, <span>${formInfo.get("firstname")} ${formInfo.get("lastname")}</span>!</h1>
  <p>Your message has been <span>sent</span>!</p>
  <p>Show: <span>${formInfo.get("showtitle")}</span></p>
  <p>Submitted: <span>${new Date("2026-06-16T18:29:05.331Z").toLocaleString("en-US", {weekday: "short", month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true})}</span></p>
  <a href="expand.html">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
  </a>
`;


