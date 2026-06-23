const profileBtn = document.querySelector(".profile");
const createBtn = document.querySelector(".new-btn");
const newProject = document.querySelector(".new-project");

profileBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  window.location.href = "perfil.html";
});

createBtn.addEventListener("click", ()=>{
  window.location.href = "../index.html";
});

newProject.addEventListener("click", ()=>{
  window.location.href = "../index.html";
});