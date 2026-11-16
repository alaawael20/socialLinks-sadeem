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
    name: "ورشة الجاهزية للطوارئ ومهارات التعامل مع الإصابات",
    username: "نموذج التسجيل",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfoo5IAQzrOyUgJ6_SDPWTuiTGdBwj2HGzRdbhIJdVp3bjB-Q/viewform?usp=header",
    icon: FaWpforms,
    featured: true,
  },
  {
    name: "نموذج التسجيل في دورة تدريب المدربين (TOT)",
    username: "نموذج التسجيل",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfjST3axPMZ8F9cZfneLGO2Qe5-u_mECuZwrSdruDM_hwLatg/viewform?usp=header",
    icon: FaWpforms,
    featured: true,
  },
  {
    name: "دورة الذكاء الاصطناعي باستخدام Claude & Claude Code",
    username: "نموذج التسجيل",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc0-KUfoeX9_Qhq_3ERAIbGHCkHNlTyXNmTFuGvQxuMQm1Z9g/viewform?usp=header",
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