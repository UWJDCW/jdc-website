// Hero copy, editable at /admin — see data/hero.json. The headline is split
// into pieces (headlineBefore/Accent1/Middle/Accent2) so the two colored
// accent words stay styled — components/Hero.tsx wraps them in spans, only
// the words themselves come from here.
import heroData from "./hero.json";

export const HERO_COPY: {
  eyebrow: string;
  headlineBefore: string;
  headlineAccent1: string;
  headlineMiddle: string;
  headlineAccent2: string;
  subtext: string;
  stampText: string;
  noteLines: string[];
} = heroData;
