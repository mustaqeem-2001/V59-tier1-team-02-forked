import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { roles } from "../data/roles.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/arrow.png";

export default function Roles() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleRoleSelect = (id) => {
    setIsOpen(false);
    if (id) {
      navigate(`/questions/${id}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />

      <main className="flex-grow flex flex-col items-center px-4 relative pt-6 md:pt-12 lg:pt-[128.78px]">
        {/* CURLY ARROW - Positioned as per Figma image 6 */}
        <div className="hidden lg:block absolute left-[calc(50%-276px)] ">
          <img
            src={logo}
            alt=""
            className="w-[118.32px] h-[151.45px]"
            style={{ transform: "rotate(90-23.64deg)", opacity: 0.6 }}
          />
        </div>

        {/* FRAME 33 - Main vertical container (closed state) */}
        <div className="w-full max-w-[365px] flex flex-col gap-12 md:gap-20 lg:gap-[122.13px]">
          
          {/* HEADING - 280px × 29px, rotated -0.7° */}
          <div className="w-full flex justify-center">
            <h1
              className="w-[280px] h-[29px] font-['Edu_SA_Beginner'] font-bold text-[22.9px] leading-[100%] text-[#4B4B4B]"
              style={{ transform: "rotate(-0.7deg)" }}
            >
              Master Your Scrum Interview.
            </h1>
          </div>

          {/* BUTTON AND DROPDOWN CONTAINER - Frame with button + dropdown */}
          <div className="w-full flex flex-col gap-[11.45px]">
            
            {/* GET STARTED BUTTON - 365px × 78px (closed), 365px × 78px (open) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                w-full h-[78px]
                flex flex-row items-center justify-center
                gap-[8.32px]
                px-16 py-4
                rounded-[19.96px]
                border-none outline-none
                font-['Nunito_Sans'] font-bold text-[20px] leading-[100%] text-[#E2EAFA]
                transition-all duration-300
                ${isOpen ? "bg-[#1038C0]" : "bg-[#2563EB] shadow-[0px_3.89px_9.72px_rgba(0,0,0,0.25)]"}
              `}
            >
              <span className="flex items-center justify-center">
                Get Started
              </span>

              {/* CHEVRON ICON */}
              <svg
                width="15.27"
                height="7.63"
                viewBox="0 0 16 8"
                fill="none"
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L8 7L15 1"
                  stroke="#E2EAFA"
                  strokeWidth="3.82"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* DROPDOWN MENU - 4px gap between items */}
            {isOpen && (
              <div className="flex flex-col w-full gap-[4px]">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    className="
                      w-full h-[66px]
                      flex flex-row items-center
                      px-[46px] py-4
                      rounded-2xl
                      border-4 border-[#B2C8F8]
                      bg-white
                      font-['Nunito_Sans'] font-bold text-[20px] leading-[100%] text-[#4B4B4B]
                      transition-colors duration-200
                      hover:border-[#2563EB]
                    "
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}