import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FileUpload from "./components/FileUpload";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <Hero />

      <div className="flex justify-center px-6">
        <FileUpload />
      </div>

      <Features />

      <Footer />
    </main>
  );
}