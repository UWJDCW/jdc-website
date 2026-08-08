// Homepage "About us" copy and stat tiles, editable at /admin — see data/about.json.
import aboutData from "./about.json";

export const ABOUT: {
  paragraph1: string;
  paragraph2: string;
  stats: { n: number; label: string }[];
} = aboutData;
