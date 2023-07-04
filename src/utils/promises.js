const productos = [
  {
    id: 1,
    title: "Maceta Rectangular 32",
    price: "10",
    description:
      "¿Cultivar hierbas en la cocina o decorar el dormitorio con plantas verdes? En cualquier caso, BITTERGURKA está a su servicio. Y lo que sea que plantes en la maceta, el soporte de la planta lo elevará a nuevas alturas.",
    url: "data:image/jpeg;base64,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",
    stock: 5,
    category: "interior",
  },
  {
    id: 5,
    title: "Maceta Rectangular 48",
    price: "10",
    description:
      "Su diseño innovador y funcional te permite cuidar de tus vegetales y flores de manera óptima.",
    url: "data:image/jpeg;base64,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",
    stock: 5,
    category: "interior"
  },
  {
    id: 2,
    title: "Maceta Rectangular Mediana",
    price: "10",
    description:
      "Su diseño innovador y funcional te permite cuidar de tus vegetales y flores de manera óptima.",
    url: "data:image/jpeg;base64,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",
    stock: 5,
    category: "exterior",
  },
  {
    id: 3,
    title: "Maceta Rectangular Grande",
    price: "10",
    description:
      "Su diseño innovador y funcional te permite cuidar de tus vegetales y flores de manera óptima.",
    url: "https://cdn.shopify.com/s/files/1/0310/8428/1915/products/Signature-Stone-4-Inch-Planter-Pot-Saucer-Plant.jpg?v=1656957732",
    stock: 5,
    category: "exterior",
  },
  {
    id: 4,
    title: "Maceta Vertical",
    price: "10",
    description:
      "Su diseño innovador y funcional te permite cuidar de tus vegetales y flores de manera óptima.",
    url: "https://i5.walmartimages.com/asr/17634d8b-79fe-460d-9ef2-c22b472fd5b8.e30d86054705178be07658551708643b.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
    stock: 5,
    category: "exterior",
  },
];
export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});