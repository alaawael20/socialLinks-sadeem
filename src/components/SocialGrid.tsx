import SocialCard from "./SocialCard";
import { socialLinks } from "../data/socialLinks";

export default function SocialGrid() {
  return (
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
      {socialLinks.map((social) => (
        <SocialCard key={social.name} social={social} />
      ))}
    </div>
  );
}