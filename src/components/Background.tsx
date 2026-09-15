export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="
          absolute -right-32 -top-32
          h-80 w-80 rounded-full
          bg-[#1F3858]/40 blur-[100px]
        "
      />

      <div
        className="
          absolute -bottom-40 -left-32
          h-96 w-96 rounded-full
          bg-[#D4952C]/10 blur-[120px]
        "
      />

      <div
        className="
          absolute left-1/2 top-1/2
          h-72 w-72 -translate-x-1/2 -translate-y-1/2
          rounded-full bg-[#1F3858]/10 blur-[100px]
        "
      />
    </div>
  );
}