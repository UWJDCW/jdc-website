// Hero eyebrow + subtext, editable at /admin — see data/hero.json. The
// headline itself stays in components/Hero.tsx: it has inline styled accent
// spans ("compete", "JDC West 26/27") that a plain text field would flatten.
import heroData from "./hero.json";

export const HERO_COPY: { eyebrow: string; subtext: string } = heroData;
