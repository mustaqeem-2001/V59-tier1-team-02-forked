import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { roles } from "../data/roles.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Roles() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (id) => {
    setIsOpen(false);
    if (id) {
      navigate(`/questions/${id}`);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />

      {/* Main Layout Container */}
      <main className="flex-grow flex flex-col items-center pt-20 px-4 relative">
        
        {/* BIG CURLY ARROW (Section 5 Spec) */}
        {/* Responsive: hidden on mobile (sm), absolute positioning for desktop */}
        <div className="hidden sm:block absolute left-[calc(50%-310px)] top-[40px]">
          <img 
            src="" // Path to big-arrow.svg
            alt="" 
            className="w-[118.32px] h-[151.45px] rotate-[23.64deg] opacity-80" 
          />
        </div>

        {/* HANDWRITTEN HEADING (Section 6 Spec) */}
        <h1 className="w-[280px] text-right mb-6 mr-[-100px] rotate-[-0.7deg] 
                       font-['Edu_SA_Beginner'] font-bold text-[22.9px] text-[#4B4B4B]">
          Master Your Scrum Interview.
        </h1>

        <div className="w-full max-w-[382px] z-10">
          
          {/* TRIGGER BUTTON (Variant 1/2 Spec) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              w-full h-[72px] flex justify-between items-center px-16 py-4
              rounded-[19.96px] shadow-md transition-all duration-300
              font-['Nunito_Sans'] font-bold text-[20px] text-[#E2EAFA]
              ${isOpen ? "bg-[#1038C0]" : "bg-[#2563EB]"}
            `}
          >
            <span>Get Started</span>
            
            {/* SMALL TRIGGER ARROW (Section 6 Spec) */}
            <img 
              src="" // Path to chevron-down.svg
              alt="" 
              className={`w-[15.27px] h-[7.63px] transition-transform duration-300 
                         ${isOpen ? "rotate-180" : "rotate-0"}`} 
            />
          </button>

          {/* DROPDOWN MENU ITEMS */}
          {isOpen && (
            <div className="flex flex-col gap-[12px] mt-[12px] w-full animate-in fade-in slide-in-from-top-4">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => navigate(`/questions/${role.id}`)}
                  className="w-full h-[66px] px-[46px] py-4 text-left
                             bg-[#E2EAFA] border-[4px] border-[#B2C8F8] rounded-[16px]
                             font-['Nunito_Sans'] font-bold text-[18px] text-[#2563EB]/60
                             transition-all duration-200 hover:border-[#2563EB] hover:text-[#2563EB]"
                >
                  {role.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
    
;
}
