export default function Hero() {
  return (
    <section className="relative min-h-[600px] ">
      <div className="container relative mx-auto grid items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-14">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs text-gray-700 shadow">
            <span className="inline-block h-2 w-2 rounded-full bg-[#F67F20]"></span>
            Fresh & Fast Delivery
          </div>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Welcome to <span className="text-black">DzDélice</span> – Your
            Gateway to Delicious Moments
          </h1>
          <p className="mt-4 max-w-prose text-black">
            Fresh, Fast & Hassle-Free Ordering
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-[#F67F20] px-6 py-3 text-white">
              Order Now
            </button>
            <button className="rounded-full border border-[#F67F20] bg-white px-6 py-3 text-[#F67F20]">
              Reserve a table
            </button>
          </div>
        </div>

        {/* Hero food image with exact positioning */}
        <div
          className="absolute z-20 right-0"
          style={{
            width: "436px",
            height: "473px",
            top: "187px",
            right: "0px",
          }}
        >
          <img
            src="/src/assets/images/hero.png"
            alt="Hero food bowl"
            className="h-full w-full object-cover drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
