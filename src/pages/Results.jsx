import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, totalQuestions, roleId, questions, firstAttempts } = location.state || {};

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

        {/* --- REVIEW SECTION --- */}
        <div className="w-full max-w-[365px] md:max-w-[700px] mt-10 mb-20 flex flex-col gap-3.5 md:gap-4">
          <h2
            className="font-['Edu_SA_Beginner'] font-bold text-[22.9px] text-[#4B4B4B] text-center mb-4"
            style={{ transform: "rotate(-0.7deg)" }}
          >
            Review Your Answers
          </h2>

          {questions && questions.map((q, index) => {
            const correctPair = q.shuffledOptions.find(([key]) => key === q.answer);
            const correctText = correctPair ? correctPair[1] : "";
            const userGuess = firstAttempts[index];
            const isCorrect = userGuess === correctText;

            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl"
                style={{
                  border: "1.5px solid #D6E4F9",
                  borderLeft: `4px solid ${isCorrect ? "#16A34A" : "#EF4444"}`,
                  padding: "18px 16px 18px 48px",
                }}
              >
                {/* Number badge — absolutely positioned */}
                <span
                  className="absolute font-extrabold text-xs text-white bg-[#2563EB] rounded-full flex items-center justify-center"
                  style={{ width: 26, height: 26, left: 14, top: 18 }}
                >
                  {index + 1}
                </span>

                {/* Question */}
                <p className="font-['Nunito_Sans'] font-bold text-[15px] md:text-[16px] leading-[1.45] text-[#4B4B4B] mb-2">
                  {q.question}
                </p>

                {/* User's answer */}
                <p className="font-['Nunito_Sans'] text-[14px] md:text-[15px] leading-relaxed text-[#4B4B4B] mb-2">
                  <span className="font-semibold opacity-55 text-[13px] md:text-[14px]">Your answer: </span>
                  <span className="font-medium">{userGuess}</span>
                </p>

                {/* Divider */}
                <div className="h-px bg-[#D6E4F9] my-2" style={{ marginLeft: '-32px' }} />

                {/* Correct answer (only for wrong) */}
                {!isCorrect && (
                  <p className="font-['Nunito_Sans'] text-[14px] md:text-[15px] leading-relaxed text-[#4B4B4B] mb-1">
                    <span className="font-semibold opacity-55 text-[13px] md:text-[14px]">Answer: </span>
                    <span className="font-bold">{correctText}</span>
                  </p>
                )}

                {/* Verdict chip */}
                <span
                  className={`inline-flex items-center gap-1.5  font-bold text-[13px] rounded-xl  ${
                    isCorrect
                      ? "bg-[#DCFCE7] text-[#16A34A]"
                      : "bg-[#FEE2E2] text-[#DC2626]"
                  }`}
                >
                  {isCorrect ? (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  )}
                  {isCorrect ? "Correct" : "Incorrect"}
                </span>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}