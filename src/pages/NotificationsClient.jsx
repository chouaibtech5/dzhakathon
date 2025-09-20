import { useState } from "react";

export default function NotificationsClient() {
  const [notifications] = useState([
    {
      id: 1,
      type: "order_prepared",
      title: "Order prepared",
      description: "table 7",
      time: "5 min",
      status: "prepared"
    },
    {
      id: 2,
      type: "order_canceled",
      title: "Order Canceled",
      description: "table 7",
      time: "5 min",
      status: "canceled"
    },
    {
      id: 3,
      type: "order_prepared",
      title: "Order prepared",
      description: "table 7",
      time: "5 min",
      status: "prepared"
    },
    {
      id: 4,
      type: "order_canceled",
      title: "Order Canceled",
      description: "table 7",
      time: "5 min",
      status: "canceled"
    },
    {
      id: 5,
      type: "order_prepared",
      title: "Order prepared",
      description: "table 7",
      time: "5 min",
      status: "prepared"
    },
    {
      id: 6,
      type: "order_canceled",
      title: "Order Canceled",
      description: "table 7",
      time: "5 min",
      status: "canceled"
    },
    {
      id: 7,
      type: "order_prepared",
      title: "Order prepared",
      description: "table 7",
      time: "5 min",
      status: "prepared"
    },
    {
      id: 8,
      type: "order_canceled",
      title: "Order Canceled",
      description: "table 7",
      time: "5 min",
      status: "canceled"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(notifications.length / itemsPerPage);

  const getCurrentPageNotifications = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return notifications.slice(startIndex, endIndex);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "prepared":
        return "text-green-600";
      case "canceled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Add current page and surrounding pages
    if (currentPage > 3) {
      pages.push("...");
    }
    
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }
    
    // Add last page if there are multiple pages
    if (totalPages > 1) {
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
        <div className="flex items-center space-x-2">
          <input 
            type="text" 
            placeholder="Search" 
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4 mb-8">
        {getCurrentPageNotifications().map((notification) => (
          <div key={notification.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`font-medium ${getStatusColor(notification.status)}`}>
                {notification.title}
              </div>
              <span className="text-gray-500">-</span>
              <span className="text-gray-600">{notification.description}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-orange-600 text-sm underline transition-colors">
                see order details
              </button>
              <span className="text-gray-500 text-sm">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Previous</span>
        </button>

        <div className="flex items-center space-x-2">
          {renderPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              disabled={typeof page !== 'number'}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                page === currentPage
                  ? 'bg-orange-500 text-white'
                  : typeof page === 'number'
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-gray-400 cursor-default'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          <span>Next</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}