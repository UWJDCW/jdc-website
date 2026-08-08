// Editable at /admin (Decap CMS) — see data/charities.json. This file
// just re-exports it with types.
import charitiesData from "./charities.json";

export const CHARITIES: { name: string; announced: boolean; logo: string; donateUrl?: string }[] =
  charitiesData.CHARITIES;
