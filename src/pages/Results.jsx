import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const headingRef = useRef(null);

  const { score, totalQuestions, roleId, questions, firstAttempts } = location.state || {};

  useEffect(() => {
    if (!location.state) navigate("/", { replace: true });
  }, [location.state, navigate]);

  // Focus the heading on mount so screen readers announce results immediately
  useEffect(() => {
    if (headingRef.current) headingRef.current.focus();
  }, []);

  const percentage = totalQuestions
    ? Math.round((score / totalQuestions) * 100)
    : 0;

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      style={{ fontSize: "16px", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 16px 80px" }}
    >
      {/* ── RESULTS SUMMARY ── */}
      <section
        aria-label="Quiz results summary"
        style={{ width: "100%", maxWidth: "365px", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}
      >
        <h1
          ref={headingRef}
          tabIndex={-1}
          style={{
            fontFamily: "'Edu SA Beginner', cursive",
            fontWeight: 700,
            fontSize: "22.9px",
            color: "#4B4B4B",
            transform: "rotate(-0.7deg)",
            outline: "none",
          }}
        >
          Your Results
        </h1>

        {/* Circle chart — decorative visual, score announced via sr-only text */}
        <div style={{ position: "relative", width: "180px", height: "180px" }} role="img" aria-label={`Score: ${percentage} percent. ${score} out of ${totalQuestions} correct.`}>
          <svg
            aria-hidden="true"
            style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}
            viewBox="0 0 180 180"
          >
            <circle cx="90" cy="90" r={radius} fill="none" stroke="#E2EAFA" strokeWidth="10" />
            <circle
              cx="90" cy="90" r={radius} fill="none"
              stroke="#2563EB" strokeWidth="10" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
              style={{ transition: "stroke-dashoffset 1s ease-out" }}
            />
          </svg>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: "40px", color: "#4B4B4B" }}>
              {percentage}%
            </span>
          </div>
        </div>

        {/* Visible score text */}
        <p style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 500, fontSize: "18px", color: "#4B4B4B" }}>
          You got <span style={{ fontWeight: 700 }}>{score}</span> out of{" "}
          <span style={{ fontWeight: 700 }}>{totalQuestions}</span> correct!
        </p>

        {/* Action buttons */}
        <div role="group" aria-label="Quiz actions" style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
          <button
            onClick={() => navigate(`/questions/${roleId}`)}
            aria-label="Try the quiz again"
            style={{
              width: "100%",
              height: "78px",
              borderRadius: "20px",
              backgroundColor: "#2563EB",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "#ffffff",
              boxShadow: "0px 3.89px 9.72px rgba(0,0,0,0.25)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              margin: 0,
            }}
          >
            Try Again
          </button>

          <button
            onClick={() => navigate("/roles")}
            aria-label="Go back and change role"
            style={{
              width: "100%",
              height: "78px",
              borderRadius: "20px",
              border: "4px solid #B2C8F8",
              backgroundColor: "#ffffff",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "#4B4B4B",
              cursor: "pointer",
              padding: 0,
              margin: 0,
            }}
          >
            Change Role
          </button>
        </div>
      </section>

      {/* ── REVIEW SECTION ── */}
      <section
        aria-label="Review your answers"
        style={{ width: "100%", maxWidth: "min(90vw, 700px)", marginTop: "40px", display: "flex", flexDirection: "column", gap: "14px" }}
      >
        <h2
          style={{
            fontFamily: "'Edu SA Beginner', cursive",
            fontWeight: 700,
            fontSize: "22.9px",
            color: "#4B4B4B",
            textAlign: "center",
            marginBottom: "16px",
            transform: "rotate(-0.7deg)",
          }}
        >
          Review Your Answers
        </h2>

        {/* Screen reader summary of results */}
        <div
          role="status"
          aria-live="polite"
          style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}
        >
          You scored {score} out of {totalQuestions}. {percentage} percent correct.
        </div>

        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
          {questions && questions.map((q, index) => {
            const correctPair = q.shuffledOptions.find(([key]) => key === q.answer);
            const correctText = correctPair ? correctPair[1] : "";
            const userGuess = firstAttempts[index];
            const isCorrect = userGuess === correctText;

            return (
              <li
                key={index}
                aria-label={`Question ${index + 1}: ${isCorrect ? "Correct" : "Incorrect"}`}
                style={{
                  position: "relative",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  border: "1.5px solid #D6E4F9",
                  borderLeft: `4px solid ${isCorrect ? "#16A34A" : "#EF4444"}`,
                  padding: "18px 16px 24px 48px",
                }}
              >
                {/* Number badge — decorative since <ol> provides numbering for screen readers */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    width: 26, height: 26, left: 14, top: 18,
                    borderRadius: "50%",
                    backgroundColor: "#2563EB",
                    color: "#fff",
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {index + 1}
                </span>

                {/* Question */}
                <p style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: 1.45,
                  color: "#4B4B4B",
                  marginBottom: "8px",
                }}>
                  {q.question}
                </p>

                {/* User's answer */}
                <p style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#4B4B4B",
                  marginBottom: "8px",
                }}>
                  <span style={{ fontWeight: 600, opacity: 0.55, fontSize: "14px" }}>Your answer: </span>
                  <span style={{ fontWeight: 500 }}>{userGuess}</span>
                </p>

                {/* Divider — decorative */}
                <div aria-hidden="true" style={{ height: "1px", backgroundColor: "#D6E4F9", margin: "8px 0 8px -32px" }} />

                {/* Correct answer (only for wrong) */}
                {!isCorrect && (
                  <p style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "#4B4B4B",
                    marginBottom: "4px",
                  }}>
                    <span style={{ fontWeight: 600, opacity: 0.55, fontSize: "14px" }}>Correct answer: </span>
                    <span style={{ fontWeight: 700 }}>{correctText}</span>
                  </p>
                )}

                {/* Verdict chip */}
                <span
                  role="status"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    borderRadius: "8px",
                    padding: "6px 12px",
                    marginTop: "8px",
                    backgroundColor: isCorrect ? "#DCFCE7" : "#FEE2E2",
                    color: isCorrect ? "#16A34A" : "#DC2626",
                  }}
                >
                  {isCorrect ? (
                    <svg aria-hidden="true" style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg aria-hidden="true" style={{ width: 14, height: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  )}
                  {isCorrect ? "Correct" : "Incorrect"}
                </span>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}