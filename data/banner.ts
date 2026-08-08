// Site-wide announcement bar, editable at /admin — see data/banner.json.
import bannerData from "./banner.json";

export const BANNER: { enabled: boolean; text: string } = bannerData;
