import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FileUpload from "./components/FileUpload";
import ChatBox from "./components/ChatBox";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <Hero />

      <div className="flex flex-col items-center px-6">
        <FileUpload />

        {/* Chat Box */}
        <ChatBox />
      </div>

      <Features />

      <Footer />
    </main>
  );
}