var swiper = new Swiper("#projetos .swiper", {
  slidesPerView: 1,
  pagination: { clickable: true },
  effect: 'creative',
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
      opacity: 0
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
      opacity: 0
    },
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var html = '';
  for(var i = 0; i < 7; i++) {
    html += `
    <div class="swiper-slide">
      <div class="detalhes-content">
        <img id="detalhe-img" src="https://via.placeholder.com/250" alt="Imagem do Projeto">
        <div class="detalhes-texto">
          <h3 id="detalhe-titulo"><span data-i18n="projects.list.${i}.company"></span> - <span data-i18n="projects.list.${i}.name"></span></h3>
          <p id="detalhe-descricao"  data-i18n="projects.list.${i}.description"></p>
          <p id="detalhe-tempo"></p>
          <p id="detalhe-posicao" data-i18n="projects.list.${i}.role"></p>
        </div>
      </div>
    </div>`;
  }

  const container = document.getElementById("projects-container");
  container.innerHTML = html;

});

