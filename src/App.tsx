import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialGrid from "./components/SocialGrid";

export default function App() {
  return (
    <main
      className="
        relative flex min-h-[100dvh]
        items-center justify-center
        overflow-hidden bg-[#091A2B]
        px-4 py-4
      "
    >
      <Background />

      <div
        className="
          relative z-10 flex w-full max-w-xl
          flex-col gap-5
        "
      >
        <Header />

        <SocialGrid />

        <Footer />
      </div>
    </main>
  );
}