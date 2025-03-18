const sections = document.querySelectorAll(".section");
const options = {
  root: null,
  threshold: 0.2, // quando 30% da seção estiver visível, ativa
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      entry.target
        .querySelectorAll("[data-parallax-x], [data-parallax-y], [data-parallax-scale], [data-parallax-opacity]")
        .forEach(parallax);
    } else {
      entry.target.classList.remove("active");
    }
  });
}, options);

sections.forEach((sec) => { observer.observe(sec); });

function toggleMenu() {
  const menu = document.getElementById("menu-overlay");
  const toggle = document.getElementsByClassName("menu-toggle")[0];
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
}

const items = document.querySelectorAll(".timeline-item");
const timeline = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

items.forEach((item) => timeline.observe(item));

document.addEventListener("DOMContentLoaded", function () {
  const timelineWrapper = document.querySelector(".timeline-wrapper");
  const timelineItems = document.querySelectorAll(".timeline-item");

  // Scroll automático quando a página for rolada
  timelineWrapper.addEventListener("wheel", (event) => {
    event.preventDefault();
    timelineWrapper.scrollLeft += event.deltaY;
  });

  // Destacar o item visível no centro
  function highlightVisibleItem() {
    let center = timelineWrapper.scrollLeft + timelineWrapper.offsetWidth / 2;

    timelineItems.forEach((item) => {
      let itemCenter = item.offsetLeft + item.offsetWidth / 2;
      let distance = Math.abs(center - itemCenter);

      if (distance < 100) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Chama a função ao rolar
  timelineWrapper.addEventListener("scroll", highlightVisibleItem);

  // Inicializa o destaque
  highlightVisibleItem();
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  window.addEventListener("wheel", (event) => {
    event.preventDefault(); // Evita o scroll padrão

    if (event.target.closest(".timeline-wrapper")) {
      console.log("O clique ocorreu dentro de timeline-wrapper");
      return;
    } else {
      console.log("O clique foi fora do timeline-wrapper");
    }

    let currentSection = null;
    let scrollDirection = event.deltaY > 0 ? "down" : "up";

    // Identifica a seção atual baseada no scroll
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight) {
        currentSection = section;
      }
    });

    if (!currentSection) { return; }

    let nextSection = null;
    if (scrollDirection === "down") {
      nextSection = currentSection.nextElementSibling;
    } else {
      nextSection = currentSection.previousElementSibling;
    }

    if (!nextSection) { return; }
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    });
  }, { passive: false }); 
});

function parallax(el) {

  console.log('aqui');
  console.log(el);

  const scrollPosition = window.scrollY;

  const x = el.getAttribute("data-parallax-x") || 0;
  const y = el.getAttribute("data-parallax-y") || 0;
  const scale = el.getAttribute("data-parallax-scale") || 1;
  const opacity = el.getAttribute("data-parallax-opacity") || 1;
  const duration = el.getAttribute("data-parallax-duration") || "0.3s";


  console.log(x);
  console.log(y);
  console.log(scale);
  console.log(opacity);
  console.log(duration);
  
  el.style.transition = `transform ${duration} ease-out, opacity ${duration} ease-out`;
  el.style.transform = `translate(${x * scrollPosition / 100}px, ${y * scrollPosition / 100}px) scale(${1 + (scrollPosition / 10000) * scale})`;
  el.style.opacity = Math.max(0, Math.min(1, 1 - (scrollPosition / 1000) * opacity));
}