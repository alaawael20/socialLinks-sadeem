import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaLinkedinIn,
  FaWpforms,
} from "react-icons/fa";

import type { SocialLink } from "../types/social";

export const socialLinks: SocialLink[] = [
  {
    name: "ورشة إعداد السيرة الذاتية ورسالة التغطية باحتراف",
    username: "نموذج التسجيل",
    url: "https://forms.gle/h4rwiGUNMwQWbiXBA",
    icon: FaWpforms,
    featured: true,
  },
  {
    name: "التسجيل في دورة إدارة الحالة",
    username: "نموذج التسجيل",
    url: "https://forms.gle/KvmW8zSw13f2nF7A7",
    icon: FaWpforms,
    featured: true,
  },
  {
    name: "التسجيل في دورة الرخصة الدولية لقيادة الحاسوب (ICDL)",
    username: "نموذج التسجيل",
    url: "https://forms.gle/e43tepcWnquxtzJX9",
    icon: FaWpforms,
    featured: true,
  },
  {
    name: "التسجيل في دورة مهارات التمريض والاسعاف العملي",
    username: "نموذج التسجيل",
    url: "https://forms.gle/ZnWRwXoumNm4mQrS7",
    icon: FaWpforms,
    featured: true,
  },
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
    username: "Sadeem Training & Development Center",
    url: "https://www.linkedin.com/company/sadeem-center/",
    icon: FaLinkedinIn,
    featured: true,
  },
];