import { useState } from "react";
import Categories from "../components/Categories.jsx";
import Trending from "../components/Trending.jsx";
import Promotions from "../components/Promotions.jsx";
import MyOrder from "./MyOrder.jsx";
import Historic from "./Historic.jsx";
import Profile from "./Profile.jsx";
import MenuManagement from "./MenuManagement.jsx";
import SearchIcon from "../icons/SearchIcon.jsx";
import GlobeIcon from "../icons/GlobeIcon.jsx";
import ShoppingBagIcon from "../icons/ShoppingBagIcon.jsx";
import LogoDzDelice from "../icons/LogoDzDelice.jsx";
import HomeIcon from "../icons/HomeIcon.jsx";
import MenuManagementIcon from "../icons/MenuManagementIcon.jsx";
import MyOrderIcon from "../icons/MyOrderIcon.jsx";
import HistoricIcon from "../icons/HistoricIcon.jsx";
import ProfileIcon from "../icons/ProfileIcon.jsx";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <Promotions />
            <Categories />
            <Trending />
          </>
        );
      case "menu-management":
        return <MenuManagement />;
      case "my-order":
        return <MyOrder />;
      case "historic":
        return <Historic />;
      case "profile":
        return <Profile />;
      default:
        return (
          <>
            <Categories />
            <Trending />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <div className="container mx-auto grid grid-cols-12 gap-6 px-4 py-6">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-white rounded-2xl shadow-sm p-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 mb-8">
            <LogoDzDelice />
            <span className="text-[24px] font-extrabold leading-none">
              <span className="text-black">Dz</span>
              <span className="text-[#F67F20]">Délice</span>
            </span>
          </div>

          <nav className="space-y-3">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg w-full text-left ${
                activeTab === "home"
                  ? "bg-[#FFF1E6] text-[#F67F20]"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <HomeIcon
                size={18}
                fill={activeTab === "home" ? "#F67F20" : "#BBBBBB"}
              />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "130%",
                  letterSpacing: "2%",
                  verticalAlign: "middle",
                  fontVariantNumeric: "lining-nums proportional-nums",
                }}
              >
                Home
              </span>
            </button>
            <button
              onClick={() => setActiveTab("menu-management")}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg w-full text-left ${
                activeTab === "menu-management"
                  ? "bg-[#FFF1E6] text-[#F67F20]"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <MenuManagementIcon
                size={19}
                fill={activeTab === "menu-management" ? "#F67F20" : "#BBBBBB"}
              />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "130%",
                  letterSpacing: "2%",
                  verticalAlign: "middle",
                  fontVariantNumeric: "lining-nums proportional-nums",
                }}
              >
                Menu Management
              </span>
            </button>
            <button
              onClick={() => setActiveTab("my-order")}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg w-full text-left ${
                activeTab === "my-order"
                  ? "bg-[#FFF1E6] text-[#F67F20]"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <MyOrderIcon
                size={16}
                fill={activeTab === "my-order" ? "#F67F20" : "#BBBBBB"}
              />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "130%",
                  letterSpacing: "2%",
                  verticalAlign: "middle",
                  fontVariantNumeric: "lining-nums proportional-nums",
                }}
              >
                My Order
              </span>
            </button>
            <button
              onClick={() => setActiveTab("historic")}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg w-full text-left ${
                activeTab === "historic"
                  ? "bg-[#FFF1E6] text-[#F67F20]"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <HistoricIcon
                size={18}
                fill={activeTab === "historic" ? "#F67F20" : "#BBBBBB"}
              />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "130%",
                  letterSpacing: "2%",
                  verticalAlign: "middle",
                  fontVariantNumeric: "lining-nums proportional-nums",
                }}
              >
                Historic
              </span>
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg w-full text-left ${
                activeTab === "profile"
                  ? "bg-[#FFF1E6] text-[#F67F20]"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <ProfileIcon
                size={18}
                fill={activeTab === "profile" ? "#F67F20" : "#BBBBBB"}
              />
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "130%",
                  letterSpacing: "2%",
                  verticalAlign: "middle",
                  fontVariantNumeric: "lining-nums proportional-nums",
                }}
              >
                Profile
              </span>
            </button>
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50"
              href="#"
            >
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "130%",
                  letterSpacing: "2%",
                  verticalAlign: "middle",
                  fontVariantNumeric: "lining-nums proportional-nums",
                  color: "#BBBBBB",
                }}
              >
                Log out
              </span>
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10 space-y-8">
          {/* Search + Title bar */}
          <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm p-4">
            <h1
              className="text-black"
              style={{
                fontFamily: "Poppins",
                fontWeight: 800,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0%",
              }}
            >
              Menu Management
            </h1>

            {/* Center Search Bar */}
            <div className="flex-1 flex justify-center">
              <div
                className="flex w-[400px] items-center gap-3 rounded-[8px] bg-[#FAFAFA] px-4 py-2"
                style={{
                  height: "36px",
                  paddingTop: "8px",
                  paddingRight: "16px",
                  paddingBottom: "8px",
                  paddingLeft: "16px",
                  gap: "12px",
                }}
              >
                <SearchIcon size={17} />
                <input
                  className="w-full bg-transparent outline-none"
                  placeholder="Search"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0%",
                  }}
                />
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              {/* Globe icon */}
              <div className="w-8 h-8 flex items-center justify-center bg-[#FAFAFA] rounded-lg">
                <GlobeIcon size={21} />
              </div>

              {/* Shopping bag icon */}
              <div className="w-8 h-8 flex items-center justify-center bg-[#FAFAFA] rounded-lg">
                <ShoppingBagIcon size={20} />
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          <section>{renderContent()}</section>
        </main>
      </div>
    </div>
  );
}
