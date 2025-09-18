const dishes = Array.from({ length: 8 }).map((_, idx) => ({
  id: idx + 1,
  title: "Grilled Chicken Bowl",
  price: "$12.90",
  img: "/hero-bowl.png",
}));

export default function Trending() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Trending dishes</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <button className="rounded-full border border-gray-200 bg-white px-3 py-1">
            Prev
          </button>
          <button className="rounded-full border border-gray-200 bg-white px-3 py-1">
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dishes.map((d) => (
          <article
            key={d.id}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
          >
            <img src={d.img} alt="dish" className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{d.title}</h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[#F67F20] font-semibold">{d.price}</span>
                <button className="rounded-full bg-[#F67F20] px-4 py-2 text-sm text-white">
                  Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
