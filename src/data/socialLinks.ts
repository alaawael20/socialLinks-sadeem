import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

import type { SocialLink } from "../types/social";

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    username: "@sadeem_center2026",
    url: "https://www.instagram.com/sadeem_center2026/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    username: "Sadeem Training & Development Center",
    url: "https://www.facebook.com/sadeemcenter2026",
    icon: FaFacebookF,
  },
  {
    name: "WhatsApp",
    username: "القناة الرسمية للمركز",
    url: "https://whatsapp.com/channel/0029Vb8L0ju1t90b0TQobX3E",
    icon: FaWhatsapp,
  },
  {
    name: "Telegram",
    username: "@stdc2026",
    url: "https://t.me/stdc2026",
    icon: FaTelegramPlane,
  },
  {
    name: "LinkedIn",
    username: "Sadeem Center",
    url: "https://www.linkedin.com/company/sadeem-center/",
    icon: FaLinkedinIn,
    featured: true,
  },
];