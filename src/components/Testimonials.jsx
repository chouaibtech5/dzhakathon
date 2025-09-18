const reviews = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  name: "User " + (i + 1),
  rating: 5,
  text: "Amazing taste and super fast delivery!",
}));

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Reviews - Users Testimonials</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold">{r.name}</div>
              <div className="text-[#F67F20]">{"★".repeat(r.rating)}</div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
