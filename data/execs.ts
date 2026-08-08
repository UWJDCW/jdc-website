// The annual edit: when the exec team turns over, this is the change —
// editable at /admin (Decap CMS) — see data/execs.json. This file just
// re-exports it with types.
import execsData from "./execs.json";

export type Exec = {
  names: string[]; // co-VP roles share one entry (two names, one role)
  role: string;
  roleNote?: string; // gloss for titles an outside visitor won't know
  degree: string;
  blurb: string; // short description of what the role actually does
  featured?: boolean;
  photos?: string[]; // paths into public/, aligned index-for-index with `names`; omit an entry (or the whole field) to fall back to initials
};

export const CAPTAIN: Exec = execsData.CAPTAIN;
export const EXECS: Exec[] = execsData.EXECS;

// Real headcount: Captain + every exec, each with their own card —
// including Arun and Raezel, who used to share one Co-VP card.
export const HEADCOUNT = 1 + EXECS.length;

export function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}
