export default function Historic() {
  // Mock data for order history
  const orderHistory = [
    {
      id: 1,
      orderNumber: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 45.5,
      items: [
        { name: "Couscous Royal", quantity: 2, price: 15.0 },
        { name: "Tajine", quantity: 1, price: 15.5 },
      ],
    },
    {
      id: 2,
      orderNumber: "ORD-002",
      date: "2024-01-12",
      status: "Delivered",
      total: 32.0,
      items: [
        { name: "Merguez", quantity: 1, price: 12.0 },
        { name: "Chorba", quantity: 2, price: 10.0 },
      ],
    },
    {
      id: 3,
      orderNumber: "ORD-003",
      date: "2024-01-10",
      status: "Cancelled",
      total: 28.5,
      items: [{ name: "Brik", quantity: 3, price: 9.5 }],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order History</h1>
        <p className="text-gray-600">View your past orders and their details</p>
      </div>

      {orderHistory.length === 0 ? (
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
            No order history
          </h3>
          <p className="text-gray-500">
            Your completed orders will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {orderHistory.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-sm border p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Order {order.orderNumber}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Placed on {order.date}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                  <p className="text-lg font-bold text-[#F67F20] mt-1">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 mb-2">Items:</h4>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.quantity}x {item.name}
                      </span>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-4 space-x-2">
                <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  View Details
                </button>
                {order.status === "Delivered" && (
                  <button className="px-4 py-2 text-sm bg-[#F67F20] text-white rounded-lg hover:bg-[#E55A2B] transition-colors">
                    Reorder
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
