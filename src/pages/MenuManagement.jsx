import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";

export default function MenuManagement() {
  const { cart, addToCart, removeFromCart, isInCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  // Mock menu data
  const menuItems = [
    {
      id: 1,
      name: "Couscous Royal",
      category: "main",
      price: 15.0,
      image: "/api/placeholder/300/200",
      description: "Traditional couscous with lamb, vegetables and chickpeas",
      available: true,
    },
    {
      id: 2,
      name: "Tajine",
      category: "main",
      price: 15.5,
      image: "/api/placeholder/300/200",
      description: "Slow-cooked stew with meat and vegetables",
      available: true,
    },
    {
      id: 3,
      name: "Merguez",
      category: "main",
      price: 12.0,
      image: "/api/placeholder/300/200",
      description: "Spicy lamb sausages with harissa",
      available: true,
    },
    {
      id: 4,
      name: "Chorba",
      category: "soup",
      price: 10.0,
      image: "/api/placeholder/300/200",
      description: "Traditional Algerian soup with vegetables",
      available: true,
    },
    {
      id: 5,
      name: "Brik",
      category: "appetizer",
      price: 9.5,
      image: "/api/placeholder/300/200",
      description: "Crispy pastry filled with egg and tuna",
      available: false,
    },
    {
      id: 6,
      name: "Makroudh",
      category: "dessert",
      price: 8.0,
      image: "/api/placeholder/300/200",
      description: "Sweet semolina pastry with dates",
      available: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Items" },
    { id: "main", name: "Main Dishes" },
    { id: "appetizer", name: "Appetizers" },
    { id: "soup", name: "Soups" },
    { id: "dessert", name: "Desserts" },
  ];

  const filteredItems = menuItems
    .filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price":
          return a.price - b.price;
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const toggleAvailability = (itemId) => {
    // In a real app, this would update the database
    console.log(`Toggling availability for item ${itemId}`);
  };

  const editItem = (itemId) => {
    // In a real app, this would open an edit modal
    console.log(`Editing item ${itemId}`);
  };

  const deleteItem = (itemId) => {
    // In a real app, this would delete from database
    console.log(`Deleting item ${itemId}`);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Menu Management
        </h1>
        <p className="text-gray-600">Manage your restaurant menu items</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Items
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F67F20] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F67F20] focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F67F20] focus:border-transparent"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>
      </div>

      {/* Add New Item Button */}
      <div className="mb-6">
        <button className="px-4 py-2 bg-[#F67F20] text-white rounded-lg hover:bg-[#E55A2B] transition-colors">
          + Add New Item
        </button>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg shadow-sm border p-4 ${
              !item.available ? "opacity-50" : ""
            }`}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.available
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.available ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#F67F20]">
                  ${item.price}
                </span>
                <span className="text-sm text-gray-500 capitalize">
                  {item.category}
                </span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => toggleAvailability(item.id)}
                className={`flex-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                  item.available
                    ? "bg-red-100 text-red-700 hover:bg-red-200"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                {item.available ? "Mark Unavailable" : "Mark Available"}
              </button>
              <button
                onClick={() => editItem(item.id)}
                className="px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                className="px-3 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No items found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}
