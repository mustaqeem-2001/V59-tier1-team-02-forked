import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, totalQuestions, roleId,questions,firstAttempts } = location.state || {};

  useEffect(() => {
    if (!location.state) navigate("/", { replace: true });
  }, [location.state, navigate]);

  const percentage = totalQuestions
    ? Math.round((score / totalQuestions) * 100)
    : 0;

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header />

      <main className="flex-grow flex flex-col items-center px-4 pt-6 md:pt-12 lg:pt-[128.78px]">
        <div className="w-full max-w-[365px] flex flex-col items-center gap-10">

          <h1
            className="font-['Edu_SA_Beginner'] font-bold text-[22.9px] text-[#4B4B4B]"
            style={{ transform: "rotate(-0.7deg)" }}
          >
            Your Results
          </h1>

          <div className="relative w-[180px] h-[180px]">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 180 180">
              <circle
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke="#E2EAFA"
                strokeWidth="10"
              />
              <circle
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke="#2563EB"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: "stroke-dashoffset 1s ease-out" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-['Nunito_Sans'] font-bold text-[40px] text-[#4B4B4B]">
                {percentage}%
              </span>
            </div>
          </div>

          <p className="font-['Nunito_Sans'] font-medium text-[18px] text-[#4B4B4B]">
            You got <span className="font-bold">{score}</span> out of{" "}
            <span className="font-bold">{totalQuestions}</span> correct!
          </p>

          <div className="w-full flex flex-col gap-4">
            <button
              onClick={() => navigate(`/questions/${roleId}`)}
              className="
                w-full h-[78px]
                rounded-[20px]
                bg-[#2563EB]
                font-['Nunito_Sans'] font-bold text-[20px] text-white
                shadow-[0px_3.89px_9.72px_rgba(0,0,0,0.25)]
                transition hover:bg-[#1E4FD8]
              "
            >
              Try Again
            </button>

            <button
              onClick={() => navigate("/roles")}
              className="
                w-full h-[78px]
                rounded-[20px]
                border-4 border-[#B2C8F8]
                bg-white
                font-['Nunito_Sans'] font-bold text-[20px] text-[#4B4B4B]
                transition hover:border-[#2563EB]
              "
            >
              Change Role
            </button>
          </div>
        </div>
      </main>
      {/* --- START OF REVIEW SECTION --- */}
          <div className="w-full mt-10 mb-20 flex flex-col gap-6">
            <h2 className="font-['Nunito_Sans'] font-bold text-[24px] text-[#4B4B4B] text-center">
              Review Your Answers
            </h2>
            
            {questions && questions.map((q, index) => {
              // 1. Find the correct answer text
              const correctPair = q.shuffledOptions.find(([key]) => key === q.answer);
              const correctText = correctPair ? correctPair[1] : "";
              
              // 2. Get the user's guess
              const userGuess = firstAttempts[index];
              const isCorrect = userGuess === correctText;

              return (
                <div 
                  key={index} 
                  className={`p-6 rounded-[20px] border-2 flex flex-col gap-2 ${
                    isCorrect ? "border-[#B2C8F8] bg-blue-50" : "border-red-200 bg-red-50"
                  }`}
                >
                  {/* The Question */}
                  <p className="font-['Nunito_Sans'] font-bold text-[18px] text-[#4B4B4B]">
                    {index + 1}. {q.question}
                  </p>
                  
                  {/* The User's Input */}
                  <p className="font-['Nunito_Sans'] font-medium text-[16px] text-[#4B4B4B]">
                    <span className="opacity-70">Your Answer:</span> {userGuess}
                  </p>

                  {/* The Verdict (The logic you asked for) */}
                  <p className={`font-['Nunito_Sans'] font-bold text-[16px] ${
                    isCorrect ? "text-[#2563EB]" : "text-red-600"
                  }`}>
                    Answer: {isCorrect ? "Correct" : correctText}
                  </p>
                </div>
              );
            })}
          </div>
          {/* --- END OF REVIEW SECTION --- */}

      <Footer />
    </div>
  );
}