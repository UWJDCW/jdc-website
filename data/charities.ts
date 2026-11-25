// Editable at /admin (Decap CMS) — see data/charities.json. This file
// just re-exports it with types.
import charitiesData from "./charities.json";

export type Charity = {
  name: string;
  announced: boolean;
  logo: string;
  donateUrl?: string;
  instructions?: string[];
  altUrl?: string;
  altLabel?: string;
};

export const CHARITIES: Charity[] = charitiesData.CHARITIES;
export const DONATE_REFERENCE: string = charitiesData.DONATE_REFERENCE;
export const DONATE_GENERAL: string[] = charitiesData.DONATE_GENERAL;
