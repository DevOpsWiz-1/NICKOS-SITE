const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const navWrap = document.querySelector(".nav-wrap");
if (toggle && navWrap) {
  toggle.addEventListener("click", () => navWrap.classList.toggle("menu-open"));
}

const form = document.getElementById("registrationForm");
const message = document.getElementById("formMessage");

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const programme = String(data.get("programme") || "").trim();

    message.textContent = `Thank you${name ? `, ${name}` : ""}. Your interest in ${programme || "the programme"} has been recorded locally for this demo.`;

    // Later, replace this demo behaviour with fetch() to your backend API.
    form.reset();
  });
}
