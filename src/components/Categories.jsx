const categoryItems = [
  { id: 1, label: "Burger" },
  { id: 2, label: "Pizza" },
  { id: 3, label: "Salad" },
  { id: 4, label: "Pasta" },
  { id: 5, label: "Dessert" },
  { id: 6, label: "Drinks" },
];

export default function Categories() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Menu category</h2>
        <button className="text-sm text-[#F67F20]">See all</button>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {categoryItems.map((c) => (
          <button
            key={c.id}
            className="flex h-16 items-center justify-center rounded-xl border border-gray-200 bg-white text-sm shadow-sm"
          >
            {c.label}
          </button>
        ))}
      </div>
    </section>
  );
}
