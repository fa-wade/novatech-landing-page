document.addEventListener("DOMContentLoaded", () => {

  /* ======================================================
     1. MENU MOBILE (hamburger)
  ====================================================== */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  hamburgerBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    hamburgerBtn.classList.toggle("is-active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen);
  });

  /* Fermer le menu automatiquement quand on clique sur un lien
     (utile en mobile, une fois qu'on a cliqué on veut voir la section) */
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      hamburgerBtn.classList.remove("is-active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });

  /* ======================================================
     2. VALIDATION DU FORMULAIRE DE CONTACT
  ====================================================== */
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("formSuccess");

  const fields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
  };

  const errors = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    subject: document.getElementById("subjectError"),
    message: document.getElementById("messageError"),
  };

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function setError(field, message) {
    fields[field].classList.add("is-invalid");
    errors[field].textContent = message;
  }

  function clearError(field) {
    fields[field].classList.remove("is-invalid");
    errors[field].textContent = "";
  }

  function validateForm() {
    let isValid = true;

    if (fields.name.value.trim() === "") {
      setError("name", "Le nom est requis.");
      isValid = false;
    } else {
      clearError("name");
    }

    if (fields.email.value.trim() === "") {
      setError("email", "L'email est requis.");
      isValid = false;
    } else if (!isValidEmail(fields.email.value.trim())) {
      setError("email", "Veuillez entrer un email valide.");
      isValid = false;
    } else {
      clearError("email");
    }

    if (fields.subject.value.trim() === "") {
      setError("subject", "Le sujet est requis.");
      isValid = false;
    } else {
      clearError("subject");
    }

    if (fields.message.value.trim() === "") {
      setError("message", "Le message est requis.");
      isValid = false;
    } else {
      clearError("message");
    }

    return isValid;
  }

  /* ======================================================
     3. SOUMISSION DU FORMULAIRE
  ====================================================== */
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    successMessage.classList.remove("is-visible");

    if (!validateForm()) {
      return;
    }

    // Pas de backend pour cet exercice : on simule juste l'envoi.
    successMessage.classList.add("is-visible");
    form.reset();

    // Le message disparaît après quelques secondes
    setTimeout(() => {
      successMessage.classList.remove("is-visible");
    }, 5000);
  });

});
