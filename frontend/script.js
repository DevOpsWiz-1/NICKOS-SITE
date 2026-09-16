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
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const data = Object.fromEntries(new FormData(form).entries());

    message.textContent = "Submitting your registration...";
    submitButton.disabled = true;

    try {
      const response = await fetch("http://localhost:8000/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        const detail = Array.isArray(result.detail)
          ? result.detail.map((item) => item.msg).join(" ")
          : result.detail || "Registration failed.";
        throw new Error(detail);
      }

      message.textContent = `Thank you, ${result.name}. Your registration interest for ${result.programme} has been received.`;
      form.reset();
    } catch (error) {
      console.error(error);
      message.textContent = `Unable to submit registration: ${error.message}`;
    } finally {
      submitButton.disabled = false;
    }
  });
}
