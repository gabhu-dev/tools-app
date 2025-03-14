import type { IColor } from "../@types";

const COLORS: IColor[] = [
  {
    name: "Negro",
    color: "#000000",
    value: {
      band: 0,
      multiplier: 1,
    },
  },
  {
    name: "Marrón",
    color: "#5D4037",
    value: {
      band: 1,
      multiplier: 10,
      tolerance: 1,
    },
  },
  {
    name: "Rojo",
    color: "#D32F2F",
    value: {
      band: 2,
      multiplier: 100,
      tolerance: 2,
    },
  },
  {
    name: "Naranja",
    color: "#D37F2F",
    value: {
      band: 3,
      multiplier: 1000,
    },
  },
  {
    name: "Amarillo",
    color: "#D4C62F",
    value: {
      band: 4,
      multiplier: 10000,
    },
  },
  {
    name: "Verde",
    color: "#4CAF50",
    value: {
      band: 5,
      multiplier: 100000,
      tolerance: 0.5,
    },
  },
  {
    name: "Azul",
    color: "#1976D2",
    value: {
      band: 6,
      multiplier: 1000000,
      tolerance: 0.25,
    },
  },
  {
    name: "Violeta",
    color: "#7B1FA2",
    value: {
      band: 7,
      multiplier: 10000000,
      tolerance: 0.1,
    },
  },
  {
    name: "Gris",
    color: "#757575",
    value: {
      band: 8,
      multiplier: 100000000,
      tolerance: 0.05,
    },
  },
  {
    name: "Blanco",
    color: "#FFFFFF",
    value: {
      band: 9,
      multiplier: 1000000000,
    },
  },
  {
    name: "Oro",
    color: "#FFFFFF",
    value: {
      multiplier: 0.1,
      tolerance: 5,
    },
  },
  {
    name: "Plata",
    color: "#FFFFFF",
    value: {
      multiplier: 10,
    },
  },
];

const BAND_COLORS = COLORS.filter((color) => color.value.band);
const MULTIPLIER_COLORS = COLORS.filter((color) => color.value.multiplier);
const TOLERANCE_COLORS = COLORS.filter((color) => color.value.tolerance);

export { COLORS, BAND_COLORS, MULTIPLIER_COLORS, TOLERANCE_COLORS };
