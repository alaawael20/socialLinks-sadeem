import { FiArrowUpLeft } from "react-icons/fi";
import type { SocialLink } from "../types/social";

interface SocialCardProps {
  social: SocialLink;
}

export default function SocialCard({ social }: SocialCardProps) {
  const Icon = social.icon;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`زيارة حساب ${social.name}`}
      className={`
        group relative flex items-center gap-4
        rounded-2xl border border-white/10
        bg-white/[0.06] p-4
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#D4952C]/60
        hover:bg-white/[0.09]
        ${social.featured ? "sm:col-span-2" : ""}
      `}
    >
      <div
        className="
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-xl bg-white/10 text-[#ECCC91]
          transition-all duration-300
          group-hover:bg-[#D4952C]
          group-hover:text-[#091A2B]
        "
      >
        <Icon size={23} />
      </div>

      <div className="min-w-0 flex-1 text-right">
        <h2 className="font-semibold text-[#FFF9EE]">
          {social.name}
        </h2>

        <p className="truncate text-sm text-white/55">
          {social.username}
        </p>
      </div>

      <FiArrowUpLeft
        className="
          text-white/30 transition-all duration-300
          group-hover:-translate-x-1
          group-hover:-translate-y-1
          group-hover:text-[#D4952C]
        "
      />
    </a>
  );
}