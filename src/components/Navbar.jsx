import LogoDzDelice from "../icons/LogoDzDelice.jsx";
import SearchIcon from "../icons/SearchIcon.jsx";
import WebIcon from "../icons/WebIcon.jsx";
import ShopBagIcon from "../icons/ShopBagIcon.jsx";
import FacebookIcon from "../icons/FacebookIcon.jsx";
import InstagramIcon from "../icons/InstagramIcon.jsx";
import ArrowIcon from "../icons/ArrowIcon.jsx";

export default function Navbar() {
  return (
    <header className="relative w-full">
      <div className="container relative mx-auto px-4 pt-3">
        {/* Floating nav bar */}
        <div className="relative z-50 flex items-center gap-4 rounded-[20px] bg-[#FFFFFF] px-3 py-2 shadow-md ring-1 ring-black/5 md:px-4 md:py-3">
          {/* Brand */}
          <div className="flex min-w-fit items-center gap-2">
            <LogoDzDelice />
            <span className="hidden text-[24px] font-extrabold leading-none md:block">
              <span className="text-black">Dz</span>
              <span className="text-[#F67F20]">Délice</span>
            </span>
          </div>

          {/* Search */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            <div
              className="flex w-[400px] items-center gap-3 rounded-[8px] bg-[#EAEAEA] px-4 py-2"
              style={{ height: "36px" }}
            >
              <SearchIcon size={18} />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#94A0BB]"
                placeholder="Search"
                style={{ fontSize: "14px" }}
              />
            </div>
          </div>

          {/* Icons */}
          <div className="ml-auto hidden items-center gap-4 text-[#F67F20] md:flex">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FFF1E6]">
              <WebIcon size={20} />
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FFF1E6]">
              <ShopBagIcon size={19} />
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FFF1E6]">
              <FacebookIcon size={20} />
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FFF1E6]">
              <InstagramIcon size={20} />
            </span>
          </div>

          {/* CTA */}
          <button
            className="ml-2 flex items-center gap-[10px] whitespace-nowrap bg-[#F67F20] text-white shadow"
            style={{
              borderRadius: "39px",
              paddingTop: "2px",
              paddingRight: "18px",
              paddingBottom: "2px",
              paddingLeft: "18px",
              width: "175px",
              height: "25px",
            }}
          >
            <span
              style={{
                width: "112px",
                height: "21px",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "130%",
                letterSpacing: "2%",
                verticalAlign: "middle",
                fontVariantNumeric: "lining-nums proportional-nums",
              }}
            >
              Login as Staff
            </span>
            <ArrowIcon size={9} />
          </button>
        </div>
      </div>
    </header>
  );
}
