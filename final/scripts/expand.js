import { createHeaderFooter } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  createHeaderFooter();
});



//#region Form Submission and Email
document.getElementById("timestamp").value = new Date().toISOString();

document.addEventListener("DOMContentLoaded", () => {
  // Make sure EmailJS exists
  if (typeof emailjs === "undefined") {
    console.error("EmailJS not loaded");
    return;
  }

  // Init EmailJS
  emailjs.init("BaXKE9IgUUAGPJ1Yu");

  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      showtitle: document.getElementById("showtitle").value,
      timestamp: document.getElementById("timestamp").value,
    };

    emailjs
      .send("service_tpxhqz9", "template_gxtop7u", templateParams)
      .then(() => {
        // Build query string
        const params = new URLSearchParams({
          firstname: templateParams.firstname,
          lastname: templateParams.lastname,
          timestamp: templateParams.timestamp,
          showtitle: templateParams.showtitle,
          // Only include safe data (avoid putting full message/email in URL)
        });

        // Redirect after slight delay
        setTimeout(() => {
          window.location.href = "success.html?" + params.toString();
        }, 500);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email.");
      });
  });
})
//#endregion

