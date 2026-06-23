const routes = {
    home: "../index.html",
    projeto: "projeto.html",
    plano: "plano.html",
    perfil: "perfil.html"
  };
  

  document.querySelectorAll("[data-link]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
  
      const route = link.dataset.link;
  
      if (routes[route]) {
        window.location.href = routes[route];
      }
    });
  });
  
  const publishBtn = document.querySelector(".btn.primary");
  const saveBtn = document.querySelector(".btn.ghost");
  
  publishBtn?.addEventListener("click", () => {
    alert("Projeto publicado ");
  });
  
  saveBtn?.addEventListener("click", () => {
    alert("Projeto salvo ");
  });
  
  const categoryButtons = document.querySelectorAll(".categories button");
  
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
  
  const prompt = localStorage.getItem("sitePrompt");
  
  if (prompt) {
    console.log("Prompt do usuário:", prompt);
  }