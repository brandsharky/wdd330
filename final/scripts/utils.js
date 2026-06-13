























//#region Header/Footer
export function createHeaderFooter() {
  const header = document.getElementById("header");
  header.innerHTML = `
    <div class="logo">
      <img src="images/telematrix.svg" alt="Telematrix Logo" width="100" height="100">
      <h1>Tele<span>matrix</span></h1>
    </div>

    <button id="ham-btn" class="hamburger" aria-label="Open navigation menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu">
        <path d="M4 5h16" />
        <path d="M4 12h16" />
        <path d="M4 19h16" />
      </svg>
    </button>

    <nav id="nav-bar" class="navigation">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="binge.html">Binge</a></li>
        <li><a href="shows.html">Shows</a></li>
        <li><a href="watchlist.html">Watchlist</a></li>
        <li><a href="expand.html">Expand</a></li>
      </ul>
    </nav>
  `;

  setCurrentPage();
  createResponsiveNavbar();





  const footer = document.getElementById("footer");
  const updated = new Date(document.lastModified);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const user = "barroyo";
  const domain = "byupathway.edu";
  const email = `${user}@${domain}`;
  footer.innerHTML = `
    <div class="footer-section footer-top">
      <div class="brand">
        <h3>Tele<span>matrix</span></h3>
        <p>
          Discover new movies, explore detailed information, and build your personal watchlist with Tele<span>matrix</span>.
        </p>
      </div>

      <a href="https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg" target="_blank" rel="noopener noreferrer">Watch Demo</a>
    </div>


    <div class="footer-section footer-middle">
      <div class="footer-column">
        <h3>Explore</h3>

        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="binge.html">Binge</a></li>
          <li><a href="shows.html">Shows</a></li>
          <li><a href="watchlist.html">Watchlist</a></li>
          <li><a href="expand.html">Expand</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Telematrix</h3>

        <ul>
          <li><a href="https://www.shutterstock.com/image-vector/coming-soon-on-dark-background-600nw-2364512887.jpg" target="_blank" rel="noopener noreferrer">Video Demo</a></li>
          <li><a href="https://trello.com/b/Bc0A2KSq/wdd330-final-project" target="_blank" rel="noopener noreferrer">Trello</a></li>
          <li>Last updated: <span id="lastUpdated">${updated.toLocaleDateString("en-US", options)}</span></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Contact</h3>

        <ul>
          <li><a href="mailto:${email}">${email}</a></li>
          <li>Created by <span>Brandon Arroyo</span></li>
          <li><a href="https://github.com/brandsharky" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>
    </div>


    <div class="footer-section footer-bottom">
      <p>Made with <span>love</span> for television</p>
      <p>Television data provided by <span>IMDb</span> and <span>OMDb</span>.</p>
      <p>&copy; <span id="currentYear">${new Date().getFullYear()}</span> Telematrix</p>
    </div>
  `;
}


function setCurrentPage() {
  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "") {
    currentPage = "index.html";
  }

  document.querySelectorAll("#nav-bar a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("current");
    }
  });
}

function createResponsiveNavbar() {
  const menuBtn = document.querySelector("#ham-btn");
  const navMenu = document.querySelector("#nav-bar");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
      menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
    } else {
      menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`;
    }
  });
}
//#endregion
























//#region Fetch Data
export async function fetchShowIDs() {
  try {
    const response = await fetch("data/shows.json");
    if (response.ok) {
      const data = await response.json();
      return data.shows;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


export async function fetchShowData(id) {
  const apiKey = "e10faa8f";

  try {
    // const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`);
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${encodeURIComponent(id)}`);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    return data;
  } catch (error) {
    console.error(`Error fetching "${title}":`, error);
    return null;
  }
}
//#endregion
























//#region Create Show Cards
export function createShowCard(showDataList, container) {
  showDataList.forEach(show => {
    const card = document.createElement("div");
    card.classList.add("show-card");
    card.innerHTML = `
      <div class="card-banners">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </button>

        <span class="cw-banner">Currently Watching</span>

        <span class="rating">${show.Rated}</span>
      </div>

      <img src="${show.Poster}" alt="${show.Title}" loading="lazy" width="300" height="400">

      <div class="show-card-info">
        <h3>${show.Title}</h3>

        <p class="imdbRating">⭐ ${show.imdbRating}</p>
        <p class="details">${show.Rated} &bull; ${show.Year} &bull; ${show.totalSeasons} seasons</p>
        <p class="genres">${show.Genre.split(", ").slice(0, 2).join(" &bull; ")}</p>
      </div>
    `;



    container.appendChild(card);
  });
}
//#endregion











