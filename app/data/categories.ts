export type Category = {
  slug: string;
  name: string;
  description?: string;
  position: number;
};

export const categories: Category[] = [
  {
    slug: "energia",
    name: "Energía & Plantas",
    description: "Plantas eléctricas, inversores y soluciones de respaldo.",
    position: 1,
  },
  {
    slug: "refrigeracion",
    name: "Refrigeración",
    description: "Refrigeradores y freezers confiables para el hogar cubano.",
    position: 2,
  },
  {
    slug: "clima",
    name: "Climatización",
    description: "Aires acondicionados, ventiladores y equipos de confort.",
    position: 3,
  },
];
