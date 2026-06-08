























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
























