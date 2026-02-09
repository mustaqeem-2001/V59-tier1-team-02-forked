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
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden font-['Nunito_Sans']">
      <Header />

      <main className="flex-grow flex flex-col items-center pt-12 px-4 relative">
        
        {/* BIG CURLY ARROW - Adjusted position */}
        <div className="hidden lg:block absolute left-[calc(50%-340px)] top-[60px]">
          <img src="" alt="" className="w-[118px] h-[151px] rotate-[23deg] opacity-60" />
        </div>

        {/* HEADING - Removed the aggressive negative margins that caused overlap */}
        <div className="w-full max-w-[382px] flex justify-end mb-8">
          <h1 className="text-right rotate-[-0.7deg] font-['Edu_SA_Beginner'] font-bold text-[22.9px] text-[#4B4B4B] leading-tight">
            Master Your Scrum <br /> Interview.
          </h1>
        </div>

        <div className="w-full max-w-[382px] z-10">
          {/* TRIGGER BUTTON - Fixed height and centering */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              w-full h-[72px] flex justify-between items-center px-8 sm:px-16
              rounded-[19.96px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] transition-all duration-300
              font-bold text-[20px] text-[#E2EAFA]
              ${isOpen ? "bg-[#1038C0]" : "bg-[#2563EB]"}
            `}
          >
            <span>Get Started</span>
            <img 
              src="" 
              alt="" 
              className={`w-[15.27px] h-[7.63px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
            />
          </button>

          {/* DROPDOWN MENU */}
          {isOpen && (
            <div className="flex flex-col gap-3 mt-4 w-full animate-in fade-in slide-in-from-top-4">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => navigate(`/questions/${role.id}`)}
                  className="w-full h-[66px] px-8 text-left
                             bg-[#E2EAFA] border-[4px] border-[#B2C8F8] rounded-[16px]
                             font-bold text-[18px] text-[#2563EB]
                             transition-all duration-200 hover:border-[#2563EB] active:scale-[0.98]"
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
}
