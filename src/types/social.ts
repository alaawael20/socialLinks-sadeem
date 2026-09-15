import type { IconType } from "react-icons";

export interface SocialLink {
  name: string;
  username: string;
  url: string;
  icon: IconType;
  featured?: boolean;
}