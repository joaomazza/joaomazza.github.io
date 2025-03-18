document.addEventListener("DOMContentLoaded", () => {
  const lang = navigator.language.startsWith("pt") ? "pt" : "en";
  loadLanguage(lang);
  fetchGitHubRepos();

  document.getElementById("chat-toggle").addEventListener("click", function () {
    const chatContainer = document.getElementById("chat-container");
    const pagetContainer = document.getElementsByClassName("page-container")[0];
    pagetContainer.classList.toggle("open");

    chatContainer.style.display =
      chatContainer.style.display === "block" ? "none" : "block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let lang = localStorage.getItem("lang") || "pt";
  loadLanguage(lang);
});

// Carrega o JSON e aplica as traduções
function loadLanguage(lang) {
  fetch("i18n/conteudo.json")
    .then((response) => response.json())
    .then((data) => {
      applyTranslations(data[lang]);
      localStorage.setItem("lang", lang);
    });
}

// Aplica as traduções ao HTML, lidando com listas e textos normais
function applyTranslations(translations) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const keys = element.getAttribute("data-i18n").split(".");
    let translation = translations;

    keys.forEach((key) => {
      translation = translation[key];
    });

    if (Array.isArray(translation)) {
      // Se for uma lista (array), adicionamos os itens dentro do elemento
      element.innerHTML = translation
        .map((item) => `<li>${item}</li>`)
        .join("");
    } else if (translation) {
      // Caso seja um texto normal, apenas substituímos
      element.innerHTML = translation;
    }
  });
}

// Troca de idioma ao clicar
function changeLanguage(lang) {
  loadLanguage(lang);
}
