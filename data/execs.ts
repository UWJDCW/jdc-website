// The annual edit: when the exec team turns over, this file is the change.
// Photos live in public/images/execs/ — see README for the naming convention.

export type Exec = {
  names: string[]; // co-VP roles share one entry (two names, one role)
  role: string;
  roleNote?: string; // gloss for titles an outside visitor won't know
  degree: string;
  blurb: string; // short description of what the role actually does
  featured?: boolean;
  photos?: string[]; // paths into public/, aligned index-for-index with `names`; omit an entry (or the whole field) to fall back to initials
};

export const CAPTAIN: Exec = {
  names: ["Thiksha Sathish Kumar"],
  role: "Captain",
  degree: "BBA Economics & Finance",
  blurb:
    "The one steering the ship. Sets the vision, brings the exec team together, and keeps the entire JDC West journey moving forward.",
  featured: true,
  photos: ["/images/execs/thiksha-sathish-kumar.jpg"],
};

export const EXECS: Exec[] = [
  {
    names: ["Joshua Adeleke"],
    role: "Godparent",
    roleNote: "our returning-alumni mentor",
    degree: "BBA Accounting",
    blurb:
      "The team's built-in wisdom, guidance, and support system. A trusted mentor who helps the exec team navigate the highs, lows, and occasional chaos of JDC West.",
    photos: ["/images/execs/joshua-adeleke.jpg"],
  },
  {
    names: ["Shreya Sharma"],
    role: "VP Internal",
    degree: "BBA Accounting",
    blurb:
      "The glue, the group chat, and the keeper of team culture. Keeps everyone connected, informed, and feeling like part of the team.",
    photos: ["/images/execs/shreya-sharma.jpg"],
  },
  {
    names: ["Dev Jani"],
    role: "VP Corporate Relations",
    degree: "BBA Accounting",
    blurb:
      "The sponsorship superstar. Builds and maintains relationships with sponsors, secures support for the team, and makes sure our partners feel like part of the JDC West family.",
    photos: ["/images/execs/dev-jani.jpg"],
  },
  {
    names: ["Rishi J Koriya"],
    role: "VP Finance",
    degree: "BBA Economics & Finance",
    blurb:
      "The person making sure the numbers add up and the budget survives the year. Keeps track of the money so the team can focus on making things happen.",
    photos: ["/images/execs/rishi-j-koriya.jpg"],
  },
  {
    names: ["Arun Muthu"],
    role: "VP Marketing, Engagement",
    degree: "BBA Accounting & Marketing",
    blurb:
      "The person making sure people know who we are. Spreads the word, builds connections, and gets students and the community excited about UWinnipeg JDC West.",
    photos: ["/images/execs/arun-muthu.jpg"],
  },
  {
    names: ["Raezel Florence Balino"],
    role: "VP Marketing, Social Media",
    degree: "BBA Accounting & Marketing",
    blurb:
      "The creative mind behind the brand. Brings UWinnipeg JDC West to life through design, content, social media, and everything that makes the team impossible to miss.",
    photos: ["/images/execs/raezel-florence-balino.jpg"],
  },
  {
    names: ["Ronal Daison"],
    role: "VP Events & Logistics",
    degree: "BBA Accounting & Marketing",
    blurb:
      "The master of making things happen. Turns ideas into events, plans the details, and makes sure everything comes together without the chaos showing.",
    photos: ["/images/execs/ronal-daison.jpg"],
  },
  {
    names: ["Vikramsinh Parmar"],
    role: "VP Charity",
    degree: "BBA Human Resources",
    blurb:
      "The heart behind giving back. Leads initiatives that bring the team together to support meaningful causes and make an impact beyond the competition.",
    photos: ["/images/execs/vikramsinh-parmar.jpg"],
  },
  {
    names: ["Richel Saldanha"],
    role: "VP Academics, Internal",
    degree: "BBA International Business",
    blurb:
      "The academic backbone of the team. Helps keep everyone learning, growing, and sharpening the skills needed to take on the competition.",
    photos: ["/images/execs/richel-saldanha.jpg"],
  },
  {
    names: ["Chetan Veer Singh"],
    role: "VP Academics, External and Debate",
    degree: "BBA",
    blurb:
      "The connection to the world beyond campus. Brings in coaches, speakers, and new perspectives to help the academic teams learn from experiences beyond the classroom.",
    photos: ["/images/execs/chetan-veer-singh.jpg"],
  },
  {
    names: ["Harleen Deol"],
    role: "VP Athletics & Challenge",
    degree: "BBA",
    blurb:
      "Where the competition continues beyond the cases. Brings the energy through athletic activities, challenges, and team-building experiences that build chemistry and team spirit.",
    photos: ["/images/execs/harleen-deol.jpg"],
  },
];

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
