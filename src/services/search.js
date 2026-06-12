const normalize = value =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

function searchPortal(query, type = "todos") {
  const term = normalize(query);
  if (!term) return [];

  return window.portalData.searchableItems
    .filter(item => type === "todos" || item.type === type || item.type === "todos")
    .filter(item => normalize(item.title).includes(term))
    .slice(0, 6);
}

window.searchPortal = searchPortal;
