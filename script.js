const btn = document.getElementById("ctaBtn");
const generator = document.getElementById("generatorBox");
const examplesBox = document.getElementById("examplesBox");
const buttons = document.querySelector(".hero-buttons");
const rating = document.querySelector(".rating");

const loginModal = document.getElementById("loginModal");
const finishLogin = document.getElementById("finishLogin");

const textarea = document.querySelector(".generator textarea");
const counter = document.getElementById("charCount");
const examples = document.querySelectorAll(".examples div");

const navLogin = document.getElementById("navLogin");
const navLoginText = document.getElementById("navLoginText");
const navCreateSite = document.getElementById("navCreateSite");
const navPlans = document.getElementById("navPlans");
const heroPlansBtn = document.getElementById("heroPlansBtn");

const modalTitle = document.getElementById("modalTitle");
const passwordGroup = document.getElementById("passwordGroup");
const switchMode = document.getElementById("switchMode");
const footerText = document.getElementById("footerText");

const navAbout = document.getElementById("navAbout");
const footerSection = document.getElementById("footerSection");

let loginMode = "register";
let redirectToPlans = false;

let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

if (isLoggedIn) {
  navLoginText.textContent = "Perfil";
}

function unlockGenerator() {
  navCreateSite.style.display = "none";
  navPlans.classList.remove("hidden");
  buttons.style.display = "none";
  rating.style.display = "none";
  generator.classList.remove("hidden");
  examplesBox.classList.remove("hidden");
}

function handleCreateSite() {
  redirectToPlans = false;

  if (isLoggedIn) {
    unlockGenerator();
    return;
  }

  loginModal.classList.remove("hidden");
}

function handlePlans() {
  if (isLoggedIn) {
    window.location.href = "pages/plano.html";
    return;
  }

  redirectToPlans = true;
  loginModal.classList.remove("hidden");
}

function handleProfile() {
  if (isLoggedIn) {
    window.location.href = "pages/perfil.html";
    return;
  }

  redirectToPlans = false;
  loginModal.classList.remove("hidden");
}

btn?.addEventListener("click", handleCreateSite);

navCreateSite?.addEventListener("click", (e) => {
  e.preventDefault();
  handleCreateSite();
});

heroPlansBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  handlePlans();
});

navPlans?.addEventListener("click", (e) => {
  e.preventDefault();
  handlePlans();
});

navLogin?.addEventListener("click", (e) => {
  e.preventDefault();
  handleProfile();
});

navAbout?.addEventListener("click", (e) => {
  e.preventDefault();
  footerSection.scrollIntoView({ behavior: "smooth" });
});

if (switchMode) {
  switchMode.addEventListener("click", (e) => {
    e.preventDefault();

    if (loginMode === "register") {
      loginMode = "login";

      modalTitle.textContent = "Bem-vindo ao Maker Hub";
      passwordGroup.style.display = "none";
      finishLogin.textContent = "Entrar";
      footerText.textContent = "Não possui conta?";
      switchMode.textContent = "Cadastre-se";

    } else {
      loginMode = "register";

      modalTitle.textContent = "Crie sua conta";
      passwordGroup.style.display = "block";
      finishLogin.textContent = "Concluir cadastro";
      footerText.textContent = "Já tem uma conta?";
      switchMode.textContent = "Entrar";
    }
  });
}

finishLogin.addEventListener("click", () => {
  isLoggedIn = true;
  localStorage.setItem("isLoggedIn", "true");

  loginModal.classList.add("hidden");
  navLoginText.textContent = "Perfil";

  if (redirectToPlans) {
    window.location.href = "pages/plano.html";
    return;
  }

  unlockGenerator();
});

textarea?.addEventListener("input", () => {
  let length = textarea.value.length;

  if (length > 500) {
    textarea.value = textarea.value.substring(0, 500);
    length = 500;
  }

  counter.textContent = `${length} / 500 caracteres`;
});

examples.forEach(example => {
  example.addEventListener("click", () => {
    textarea.value = example.textContent;

    counter.textContent = `${textarea.value.length} / 500 caracteres`;
    textarea.focus();
  });
});