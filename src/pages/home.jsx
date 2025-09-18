import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";
import Trending from "../components/Trending.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTA from "../components/CTA.jsx";

export default function Home() {
  return (
    <main className="relative min-h-dvh bg-[#FFF8F0]">
      {/* Orange background image with exact positioning */}
      <div
        className="absolute"
        style={{
          width: "868px",
          height: "716.72px",
          top: "-113px",
          left: "412px",
          zIndex: 1,
        }}
      >
        <img
          src="/src/assets/images/orng-pic.png"
          alt="Orange background"
          className="h-full w-full object-cover"
        />
      </div>

      <Navbar />
      <Hero />
      <Categories />
      <Trending />
      <Testimonials />
      <CTA />
      <footer className="container mx-auto px-4 py-10 text-sm text-gray-500">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            © {new Date().getFullYear()} DZ Délice. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
