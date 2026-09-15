import logo from "../assets/sadeem-logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative mb-4">
        {/* Gold glow */}
        <div
          className="
      absolute inset-0
      rounded-3xl
      bg-[#D4952C]/20
      blur-2xl
    "
        />

        {/* Logo container */}
        <div
          className="
      relative flex
      h-24 w-48
      items-center justify-center
      rounded-2xl
      border border-[#D4952C]/30
      bg-[#FFF9EE]
      px-5 py-3
      shadow-[0_15px_45px_rgba(0,0,0,0.30)]
    "
        >
          <img
            src={logo}
            alt="شعار مركز سديم للتدريب والتطوير"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <h1 className="text-xl font-bold text-[#FFF9EE] sm:text-2xl">
        مركز سديم للتدريب والتطوير
      </h1>

      <p
        dir="ltr"
        className="mt-1 text-xs tracking-wide text-white/50 sm:text-sm"
      >
        Sadeem Training & Development Center
      </p>

      <div
        className="
          mt-3 rounded-full border border-[#D4952C]/20
          bg-[#D4952C]/10 px-4 py-1.5
          text-xs text-[#ECCC91]
        "
      >
        الحسابات الرسمية للمركز
      </div>

      <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
        تابعنا وابقَ على اطلاع بأحدث الدورات والبرامج والفرص
      </p>
    </header>
  );
}
