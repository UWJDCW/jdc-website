import { HeartDoodle } from "@/components/Doodles";
import { BANNER } from "@/data/banner";

// Site-wide announcement bar, on/off and text both editable at /admin.
// Renders null (no layout shift) when turned off.
export default function Banner() {
  if (!BANNER.enabled || !BANNER.text) return null;

  return (
    <div className="announce-bar" role="note">
      <HeartDoodle className="announce-heart" size={20} />
      <p className="hand">{BANNER.text}</p>
      <HeartDoodle className="announce-heart" size={20} />
    </div>
  );
}
