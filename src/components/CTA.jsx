export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto grid items-center gap-8 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold">
            Fast, fresh, and delicious at your table
          </h2>
          <p className="mt-3 max-w-prose text-gray-600">
            Order now and receive within minutes. Satisfaction guaranteed.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="rounded-full bg-[#F67F20] px-6 py-3 text-white">
              Get started
            </button>
            <button className="rounded-full border border-gray-200 bg-white px-6 py-3">
              Learn more
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="/cta-dish.png"
            alt="Dish"
            className="mx-auto max-w-sm drop-shadow-xl"
          />
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[#F67F20]"
        style={{ clipPath: "ellipse(80% 100% at 50% 100%)" }}
      ></div>
    </section>
  );
}
