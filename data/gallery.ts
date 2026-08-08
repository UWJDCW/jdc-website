// Editable at /admin (Decap CMS) — see data/gallery.json and README's
// "Editing content" section. This file just re-exports it with types.
import galleryData from "./gallery.json";

export const CHARITY_PHOTOS = Array.from({ length: 19 }, (_, i) => ({
  src: `/images/gallery/charity/charity-${String(i + 1).padStart(2, "0")}.jpg`,
  caption: "charity cricket tournament",
}));

export const GALLERY_PHOTOS: { src: string; caption: string }[] = galleryData.GALLERY_PHOTOS;

export const HERO_TEAM_PHOTO: { src: string; alt: string } = galleryData.HERO_TEAM_PHOTO;
