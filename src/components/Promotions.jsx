export default function Promotions() {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deal of the Day Card */}
        <div className="bg-gradient-to-br from-orange-100 via-pink-50 to-gray-100 rounded-3xl shadow-lg border-0 p-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200 to-pink-200 opacity-30 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-200 to-orange-100 opacity-40 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-[#F67F20] font-bold text-lg">
                Deal of the Day
              </h3>
              <button className="flex items-center gap-1 px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                more
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center overflow-hidden shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🍝</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                  Spaghetti + classic burger + soda
                </h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  Spaghetti, ground beef, tomato sauce, garlic, onion, parmesan
                  + classic burger + soda of your choice
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-gray-900">800</span>
                  <span className="text-sm text-gray-900 font-medium">DA</span>
                  <span className="text-lg text-gray-400 line-through font-medium">
                    1000 DA
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 text-sm">
                Get <span className="text-[#F67F20] font-bold">FREE</span>{" "}
                delivery on every weekend.
              </p>
            </div>

            <button className="w-full bg-[#F67F20] text-white py-3 rounded-xl hover:bg-[#E55A2B] transition-all duration-300 font-semibold text-sm hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
              Check Menu
            </button>
          </div>
        </div>

        {/* 50% off Burger Card */}
        <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-3xl shadow-lg overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

          <div className="relative p-8 text-center h-full flex flex-col justify-between min-h-[300px]">
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🍔</span>
                </div>
              </div>
            </div>

            <div className="text-white space-y-2">
              <h3 className="text-4xl font-bold mb-1 drop-shadow-lg">
                50% off
              </h3>
              <p className="text-lg font-medium opacity-90 drop-shadow">
                The full price of burgers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
