const quickAccess = [
  { title: "Balcão de Empregos", description: "Vagas e oportunidades na região", icon: "briefcase" },
  { title: "Compra e Aluguel", description: "Produtos e itens perto de você", icon: "tag" },
  { title: "Imóveis", description: "Casas, apartamentos e terrenos", icon: "home" },
  { title: "Horários de Ônibus", description: "Linhas, horários e itinerários", icon: "bus" },
  { title: "Adoção de Animais", description: "Encontre um novo melhor amigo", icon: "heart" },
  { title: "Empresas Locais", description: "Conheça e apoie o comércio local", icon: "building" },
  { title: "Promoções", description: "Ofertas especiais na cidade", icon: "percent" },
  { title: "Eventos da Cidade", description: "Cultura, lazer e entretenimento", icon: "calendar" }
];

const serviceCategories = [
  ["Elétrica", "bolt"],
  ["Hidráulica", "droplet"],
  ["Construção Civil", "hardhat"],
  ["Pintura", "paint"],
  ["Jardinagem", "leaf"],
  ["Informática", "monitor"],
  ["Desenvolvimento de Sites", "code"],
  ["Marketing", "megaphone"],
  ["Moda", "shirt"],
  ["Alimentação", "utensils"],
  ["Saúde", "medical"],
  ["Psicologia", "brain"],
  ["Beleza", "sparkles"],
  ["Mecânica", "wrench"],
  ["Educação", "book"],
  ["Advocacia", "scale"],
  ["Contabilidade", "calculator"],
  ["Serviços Gerais", "tools"]
].map(([title, icon]) => ({ title, icon }));

const highlights = [
  {
    badge: "EMPRESA EM DESTAQUE",
    title: "Café do Centro",
    category: "Alimentação",
    description: "Cafés especiais e aquele pão de queijo fresquinho no coração da cidade.",
    rating: "4.9",
    location: "Centro",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
  },
  {
    badge: "SERVIÇO PROCURADO",
    title: "Elétrica Vale",
    category: "Elétrica",
    description: "Instalações e reparos residenciais com atendimento rápido e seguro.",
    rating: "4.8",
    location: "Vila Branca",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80"
  },
  {
    badge: "NOVIDADE",
    title: "Feira de Empreendedores",
    category: "Eventos",
    description: "Produtos artesanais, gastronomia e talentos locais em um só lugar.",
    rating: "Sáb, 15 Jun",
    location: "Parque da Cidade",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80"
  }
];

const searchableItems = [
  ...serviceCategories.map(item => ({ title: item.title, type: "servicos" })),
  ...quickAccess.map(item => ({ title: item.title, type: item.title.includes("Emprego") ? "empregos" : "todos" })),
  ...highlights.map(item => ({ title: item.title, type: item.category === "Eventos" ? "eventos" : "empresas" }))
];

window.portalData = { quickAccess, serviceCategories, highlights, searchableItems };
