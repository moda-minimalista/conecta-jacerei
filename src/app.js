const { quickAccess, serviceCategories, highlights } = window.portalData;
const icon = window.portalIcon;
const searchPortal = window.searchPortal;

const quickGrid = document.querySelector("#quick-grid");
const categoryGrid = document.querySelector("#category-grid");
const highlightGrid = document.querySelector("#highlight-grid");
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3200);
}

quickGrid.innerHTML = quickAccess.map(item => `
  <a class="quick-card" href="#categorias" aria-label="${item.title}: ${item.description}">
    <span class="card-icon">${icon(item.icon)}</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <span class="card-arrow"><svg class="icon"><use href="#icon-arrow"/></svg></span>
  </a>
`).join("");

categoryGrid.innerHTML = serviceCategories.map(item => `
  <button class="category-card" type="button" data-category="${item.title}">
    <span class="card-icon">${icon(item.icon)}</span>
    <h3>${item.title}</h3>
  </button>
`).join("");

highlightGrid.innerHTML = highlights.map(item => `
  <article class="highlight-card">
    <div class="highlight-image">
      <img src="${item.image}" alt="${item.title}" loading="lazy" width="900" height="600">
      <span class="highlight-badge">${item.badge}</span>
    </div>
    <div class="highlight-content">
      <div class="highlight-meta">
        <span>${item.category}</span>
        <span class="rating"><svg class="icon"><use href="#icon-star"/></svg>${item.rating}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <span class="highlight-meta"><span><svg class="icon"><use href="#icon-pin"/></svg>${item.location}</span></span>
      <button class="highlight-link" type="button" data-toast="O perfil completo estará disponível em breve.">
        Ver detalhes <svg class="icon"><use href="#icon-arrow"/></svg>
      </button>
    </div>
  </article>
`).join("");

document.querySelectorAll("[data-toast]").forEach(element => {
  element.addEventListener("click", event => {
    if (element.getAttribute("href") === "#") event.preventDefault();
    showToast(element.dataset.toast);
  });
});

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector("#search-input").value = button.dataset.category;
    document.querySelector("#global-search").scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => document.querySelector("#search-input").focus(), 500);
  });
});

const toggleCategories = document.querySelector("#toggle-categories");
toggleCategories.addEventListener("click", () => {
  const expanded = categoryGrid.classList.toggle("expanded");
  toggleCategories.firstChild.textContent = expanded ? "Mostrar menos " : "Ver todas as categorias ";
});

const searchForm = document.querySelector("#global-search");
const searchInput = document.querySelector("#search-input");
const searchType = document.querySelector("#search-type");
const searchResults = document.querySelector("#search-results");

function performSearch() {
  const query = searchInput.value;
  if (!query.trim()) {
    searchResults.hidden = false;
    searchResults.textContent = "Digite o que você procura para iniciar a busca.";
    return;
  }

  const results = searchPortal(query, searchType.value);
  searchResults.hidden = false;
  searchResults.innerHTML = results.length
    ? `<strong>${results.length} resultado${results.length > 1 ? "s" : ""} de demonstração:</strong> ${results.map(item => item.title).join(" • ")}`
    : `Ainda não há anúncios para “${query}”. A estrutura de busca já está pronta para receber novos cadastros.`;
}

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  performSearch();
});

document.addEventListener("click", event => {
  if (!searchForm.contains(event.target)) searchResults.hidden = true;
});

document.querySelectorAll("[data-focus-search]").forEach(button => {
  button.addEventListener("click", () => {
    searchForm.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => searchInput.focus(), 500);
  });
});

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileMenu.hidden = open;
  document.body.classList.toggle("menu-open", !open);
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
    document.body.classList.remove("menu-open");
  });
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
