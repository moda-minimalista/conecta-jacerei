const paths = {
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M9 12v2h6v-2"/>',
  tag: '<path d="M20 13 13 20 4 11V4h7Z"/><circle cx="8.5" cy="8.5" r="1.2"/>',
  home: '<path d="m3 11 9-8 9 8v10H3Z"/><path d="M9 21v-6h6v6"/>',
  bus: '<rect x="4" y="3" width="16" height="16" rx="3"/><path d="M4 10h16M8 19v2M16 19v2M8 15h.01M16 15h.01"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>',
  percent: '<path d="m19 5-14 14M7 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM17 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  bolt: '<path d="m13 2-9 12h7l-1 8 9-12h-7Z"/>',
  droplet: '<path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/>',
  hardhat: '<path d="M4 14a8 8 0 0 1 16 0M2 14h20v4H2ZM9 6v8M15 6v8"/>',
  paint: '<path d="M14 3 3 14l7 7L21 10Z"/><path d="m12 5 7 7M4 19h4"/>',
  leaf: '<path d="M20 4S8 4 5 11c-2 5 2 9 6 7 7-3 9-14 9-14Z"/><path d="M4 21c3-6 7-9 13-13"/>',
  monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
  megaphone: '<path d="m3 11 14-6v14L3 13Z"/><path d="M7 15v5h4l-1-6M19 9v6"/>',
  shirt: '<path d="m8 4-5 3 3 5 2-1v10h8V11l2 1 3-5-5-3a4 4 0 0 1-8 0Z"/>',
  utensils: '<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M16 3v18M16 3c5 3 5 9 0 11"/>',
  medical: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z"/>',
  brain: '<path d="M9.5 4A3.5 3.5 0 0 0 6 7.5v.7A4 4 0 0 0 4 15a4 4 0 0 0 5.5 3.7M14.5 4A3.5 3.5 0 0 1 18 7.5v.7A4 4 0 0 1 20 15a4 4 0 0 1-5.5 3.7M12 3v18M8 10h4M12 15h4"/>',
  sparkles: '<path d="m12 3 1.4 4.1L17 9l-3.6 1.9L12 15l-1.4-4.1L7 9l3.6-1.9ZM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z"/>',
  wrench: '<path d="M14 6a5 5 0 0 0-6.5 6.5L3 17l4 4 4.5-4.5A5 5 0 0 0 18 10l-3 3-4-4 3-3Z"/>',
  book: '<path d="M3 5a4 4 0 0 1 4-2h5v18H7a4 4 0 0 0-4 2ZM21 5a4 4 0 0 0-4-2h-5v18h5a4 4 0 0 1 4 2Z"/>',
  scale: '<path d="M12 3v18M5 6h14M5 6l-3 7h6ZM19 6l-3 7h6ZM8 21h8"/>',
  calculator: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 5h8v4H8ZM8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01"/>',
  tools: '<path d="m14 7 3-3 3 3-3 3M14 7 4 17l3 3 10-10M4 4l6 6M3 3l3 1-2 2Z"/>'
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.tools}</svg>`;
}

window.portalIcon = icon;
