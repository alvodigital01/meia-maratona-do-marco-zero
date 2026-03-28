export const siteUrl = "https://meiamaratonadomarcozero.com.br";
export const registrationUrl = "https://site.ticketsports.com.br/";

export const navigation = [
  { label: "Evento", href: "#sobre" },
  { label: "Distâncias", href: "#distancias" },
  { label: "Percurso", href: "#percurso" },
  { label: "MZ Summit", href: "#summit" }
] as const;

export const distances = [
  {
    label: "5K",
    title: "Energia de largada",
    description:
      "Para quem quer sentir a energia do evento e viver a experiência da prova.",
    accent: "bg-white/8"
  },
  {
    label: "10K",
    title: "Ritmo e evolução",
    description: "O equilíbrio entre ritmo, performance e evolução.",
    accent: "bg-white/8"
  },
  {
    label: "21K",
    title: "A clássica",
    description: "A distância clássica para quem busca superação e alto nível.",
    accent: "bg-white/8"
  },
  {
    label: "30K",
    title: "Desafio Capibaribe",
    description:
      "O novo desafio da edição. Mais resistência, mais preparo, mais história.",
    accent:
      "bg-gradient-to-br from-gold via-[#ffd76a] to-gold text-midnight shadow-[0_30px_80px_rgba(245,180,0,0.28)]"
  }
] as const;

export const experienceItems = [
  "Estrutura de prova",
  "Ambiente urbano e histórico",
  "Energia do público",
  "Ativações e parceiros",
  "Comunidade de corredores",
  "Experiência inesquecível"
] as const;

export const summitTopics = [
  "Esporte",
  "Saúde",
  "Empreendedorismo esportivo",
  "Superação",
  "Alto rendimento feminino",
  "Cultura local",
  "Endurance",
  "Esportes de inclusão"
] as const;

export const gallery = [
  {
    src: "/images/placeholder-black.svg",
    alt: "Corredores celebrando a energia da Meia Maratona do Marco Zero no Recife",
    caption: "Cenário real de prova para substituir por fotos oficiais"
  },
  {
    src: "/images/background-03.png",
    alt: "Arte de apoio em azul vibrante da identidade da Meia Maratona do Marco Zero",
    caption: "Texturas e grafismos inspirados na identidade oficial"
  },
  {
    src: "/images/background-04.png",
    alt: "Grafismo esportivo urbano em azul com elementos de movimento",
    caption: "Espaço preparado para imagens da experiência do evento"
  }
] as const;
