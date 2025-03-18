async function fetchGitHubRepos() {
  const username = "joaomazza"; // Seu nome de usuário do GitHub
  const repoList = document.getElementById("repo-list");

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const repos = await response.json();

    repoList.innerHTML = ""; // Limpa a seção antes de adicionar os repositórios

    for (const repo of repos) {
      const repoCard = document.createElement("div");
      repoCard.classList.add("repo-card");
      repoCard.classList.add("swiper-slide");
      
      // Criando HTML base do card
      repoCard.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p class="repo-description">Carregando descrição...</p>
          <div><span class="repo-lang">${repo.language || "N/A"}</span></div>
        `;

      repoList.appendChild(repoCard);

      // Buscar README.md para cada repositório
      fetchRepoReadme(
        username,
        repo.name,
        repoCard.querySelector(".repo-description")
      );
    }
  } catch (error) {
    console.error("Erro ao buscar repositórios:", error);
    repoList.innerHTML = "<p>Erro ao carregar repositórios do GitHub.</p>";
  }
}

// Função para buscar o README.md e converter para texto
async function fetchRepoReadme(username, repoName, descriptionElement) {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${username}/${repoName}/main/README.md`
    );

    if (!response.ok) throw new Error("README não encontrado");

    const readmeText = await response.text();

    // Usar apenas as primeiras linhas do README para resumo
    const summary = readmeText.split("\n").slice(0, 3).join(" ");

    descriptionElement.innerText =
      summary.length > 0 ? summary : "Sem descrição disponível.";
  } catch (error) {
    console.warn(`Erro ao buscar README.md do repositório ${repoName}:`, error);
    descriptionElement.innerText = "Descrição não disponível.";
  }
}


var swiper = new Swiper("#repositorios .swiper", {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    640: { 
      slidesPerView: 1,
      spaceBetween: 0
    },
    1024: { 
      slidesPerView: 3,
      spaceBetween: 20
    },
  },
});