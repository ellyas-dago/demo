const CONFIG = {
  // ─── IDENTITÉ ───────────────────────────────────────────
  name: "Maxime Renault",
  tagline: "Capturer l'invisible,<br><span class='serif'>sublimer</span> le réel",
  subtitle: "Photographe professionnel basé à Lyon",
  logo: null,

  // ─── COULEURS & STYLE ──────────────────────────────────
  accentHue: 38,
  accentSaturation: 28,
  darkMode: true,

  // ─── PREUVE SOCIALE (Hero) ─────────────────────────────
  socialProof: {
    googleRating: 4.9,
    googleReviews: 127,
    googleUrl: "https://g.page/maximerenault",
    clientCount: "350+",
    clientLabel: "projets réalisés",
    partners: [
      { name: "Maison Claret" },
      { name: "Hôtel Dieu Lyon" },
      { name: "Galeries Lafayette" },
      { name: "Lyon Métropole" },
      { name: "Bocuse" },
      { name: "Vogue France" },
    ],
    partnersLabel: "Ils nous ont fait confiance",
  },

  // ─── HERO ──────────────────────────────────────────────
  hero: {
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1600&h=1000&fit=crop",
    cta: "Voir le portfolio",
    ctaSecondary: "Prendre rendez-vous",
  },

  // ─── À PROPOS ──────────────────────────────────────────
  about: {
    portrait: "portrait.jpg",
    title: "À propos",
    text: [
      "Depuis plus de 12 ans, je parcours la France et l'Europe pour raconter des histoires à travers mon objectif. Spécialisé en portrait et reportage, je cherche toujours l'émotion authentique dans chaque cliché.",
      "Mon approche se veut naturelle et spontanée. Je travaille en lumière naturelle autant que possible, privilégiant les instants vrais aux poses figées.",
    ],
    stats: [
      { value: "12+", label: "Années d'expérience" },
      { value: "847", label: "Projets réalisés" },
      { value: "4.9/5", label: "Note Google" },
    ],
  },

  // ─── SERVICES ──────────────────────────────────────────
  services: {
    title: "Services",
    subtitle: "Des prestations adaptées à chaque besoin",
    items: [
      {
        title: "Portrait & Mode",
        description: "Séances portrait en studio ou en extérieur. Book professionnel, portrait corporate, photo de mode.",
        price: "À partir de 250 €",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&h=500&fit=crop",
      },
      {
        title: "Mariage & Événements",
        description: "Couverture complète de votre journée. Du préparatif à la soirée, chaque moment est immortalisé.",
        price: "À partir de 1 200 €",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&h=500&fit=crop",
      },
      {
        title: "Reportage & Documentaire",
        description: "Reportage immersif pour entreprises, associations ou projets personnels. Narration visuelle sur mesure.",
        price: "Sur devis",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=500&fit=crop",
      },
      {
        title: "Photo Produit & Culinaire",
        description: "Mise en valeur de vos produits pour catalogues, e-commerce et réseaux sociaux.",
        price: "À partir de 400 €",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=700&h=500&fit=crop",
      },
    ],
  },

  // ─── PORTFOLIO ─────────────────────────────────────────
  portfolio: {
    title: "Portfolio",
    subtitle: "Travaux récents",
    categories: ["Tout", "Portrait", "Mariage", "Reportage", "Produit"],
    items: [
      { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1100&fit=crop", category: "Portrait", title: "Lumière d'atelier" },
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=600&fit=crop", category: "Mariage", title: "Cérémonie en Provence" },
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop", category: "Reportage", title: "Festival de rue" },
      { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&h=600&fit=crop", category: "Produit", title: "Collection automne" },
      { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1100&fit=crop", category: "Portrait", title: "Clair-obscur" },
      { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&h=700&fit=crop", category: "Mariage", title: "Premier regard" },
      { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&h=600&fit=crop", category: "Reportage", title: "Backstage concert" },
      { src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=800&fit=crop", category: "Produit", title: "Nature morte" },
    ],
  },

  // ─── TÉMOIGNAGES ───────────────────────────────────────
  testimonials: {
    title: "Ce qu'ils disent",
    items: [
      {
        text: "Maxime a su capturer l'essence même de notre journée. Les photos sont d'une sensibilité rare, chaque image raconte un moment précieux.",
        author: "Camille & Thibault Morel",
        role: "Mariage — Juin 2025",
        avatar: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=100&h=100&fit=crop&crop=faces",
      },
      {
        text: "Un regard artistique unique et une capacité à mettre à l'aise qui fait toute la différence. Le résultat dépasse nos attentes.",
        author: "Éléonore Vasseur",
        role: "Séance Portrait Corporate",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
      },
      {
        text: "Collaboration fluide et résultat impeccable. Les photos produit ont transformé notre communication visuelle.",
        author: "Antoine Berger",
        role: "Directeur — Maison Claret",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
      },
    ],
  },

  // ─── CONTACT ───────────────────────────────────────────
  contact: {
    title: "Travaillons ensemble",
    subtitle: "Vous avez un projet ? Parlons-en autour d'un café.",
    email: "contact@maximerenault.fr",
    phone: "+33 6 42 87 19 03",
    address: "12 rue de la République, 69001 Lyon",
    mapEmbed: null,
    socials: {
      instagram: "https://instagram.com/maximerenault",
      facebook: null,
      linkedin: null,
      behance: null,
      tiktok: null,
    },
  },

  // ─── FOOTER ────────────────────────────────────────────
  footer: {
    copyright: "Tous droits réservés",
    legalLinks: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
    ],
  },

  // ─── SEO ───────────────────────────────────────────────
  seo: {
    title: "Maxime Renault | Photographe Lyon",
    description: "Photographe professionnel à Lyon. Portrait, mariage, reportage et photo produit. Capturer l'invisible, sublimer le réel.",
    ogImage: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1200&h=630&fit=crop",
  },
};
