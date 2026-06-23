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

const navLoginText = document.getElementById("navLoginText");
const navCreateSite = document.getElementById("navCreateSite");
const navPlans = document.getElementById("navPlans");

const heroPlansBtn = document.getElementById("heroPlansBtn");
const plansSection = document.getElementById("plansSection");

const modalTitle = document.getElementById("modalTitle");
const passwordGroup = document.getElementById("passwordGroup");
const switchMode = document.getElementById("switchMode");
const footerText = document.getElementById("footerText");

let isLoggedIn = false;
let loginMode = "register";

function unlockGenerator() {

  navCreateSite.style.display = "none";

  navPlans.classList.remove("hidden");

  buttons.style.display = "none";
  rating.style.display = "none";

  generator.classList.remove("hidden");
  examplesBox.classList.remove("hidden");
}

function handleCreateSite() {

  if (isLoggedIn) {
    unlockGenerator();
    return;
  }

  loginModal.classList.remove("hidden");
}

function goToPlans() {

  plansSection.scrollIntoView({
    behavior: "smooth"
  });
}

btn.addEventListener("click", handleCreateSite);

navCreateSite.addEventListener("click", (e) => {
  e.preventDefault();
  handleCreateSite();
});

if (heroPlansBtn) {
  heroPlansBtn.addEventListener("click", goToPlans);
}

navPlans.addEventListener("click", (e) => {
  e.preventDefault();
  goToPlans();
});

switchMode.addEventListener("click", (e) => {

  e.preventDefault();

  if (loginMode === "register") {

    loginMode = "login";

    modalTitle.textContent = "Bem-vindo ao Maker Hub";

    passwordGroup.style.display = "none";

    finishLogin.textContent = "Cadastre-se";

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

finishLogin.addEventListener("click", () => {

  isLoggedIn = true;

  loginModal.classList.add("hidden");

  navLoginText.textContent = "Perfil";

  unlockGenerator();
});

textarea.addEventListener("input", () => {

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

    let length = textarea.value.length;

    counter.textContent = `${length} / 500 caracteres`;

    textarea.focus();
  });

});