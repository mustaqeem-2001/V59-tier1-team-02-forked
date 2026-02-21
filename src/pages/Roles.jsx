import { roles } from "../data/roles.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/arrow.png";

export default function Roles() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const firstRoleRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleRoleSelect = (id) => {
    setIsOpen(false);
    if (id) {
      navigate(`/questions/${id}`);
    }
  };

  // Auto-focus first role when dropdown opens
  useEffect(() => {
    if (isOpen && firstRoleRef.current) {
      firstRoleRef.current.focus();
    }
  }, [isOpen]);

  // Close dropdown on Escape and return focus to toggle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        if (toggleRef.current) toggleRef.current.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Shared focus ring style — only visible for keyboard users
  const focusRingStyle = `
    outline: none;
    box-shadow: none;
  `;
  const focusVisibleRing = "0 0 0 3px rgba(37, 99, 235, 0.5)";

  return (
    <section
      aria-label="Role selection"
      style={{ fontSize: "16px", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 16px 80px", minHeight: "100vh" }}
    >
      <div style={{ width: "100%", maxWidth: "365px", display: "flex", flexDirection: "column", gap: "80px", position: "relative" }}>

        {/* HEADING */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              fontFamily: "'Edu SA Beginner', cursive",
              fontWeight: 700,
              fontSize: "22.9px",
              lineHeight: "100%",
              color: "#4B4B4B",
              transform: "rotate(-0.7deg)",
            }}
          >
            Master Your Scrum Interview.
          </h1>
        </div>

        {/* BUTTON AND DROPDOWN CONTAINER */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "11px" }}>

          {/* GET STARTED BUTTON */}
          <button
            ref={toggleRef}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="role-dropdown"
            aria-label={isOpen ? "Close role selection" : "Open role selection"}
            style={{
              width: "100%",
              height: "78px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              borderRadius: "20px",
              border: "none",
              outline: "none",
              fontFamily: "'Nunito Sans', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "#E2EAFA",
              backgroundColor: isOpen ? "#1038C0" : "#2563EB",
              boxShadow: isOpen ? "none" : "0px 3.89px 9.72px rgba(0,0,0,0.25)",
              cursor: "pointer",
              padding: 0,
              margin: 0,
              transition: "all 0.3s",
            }}
            onFocus={(e) => e.currentTarget.style.boxShadow = focusVisibleRing}
            onBlur={(e) => e.currentTarget.style.boxShadow = isOpen ? "none" : "0px 3.89px 9.72px rgba(0,0,0,0.25)"}
          >
            <span>Get Started</span>
            <svg
              aria-hidden="true"
              width="15"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              style={{
                transition: "transform 0.3s",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
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

          {/* DROPDOWN MENU */}
          {isOpen && (
            <div
              id="role-dropdown"
              role="group"
              aria-label="Available roles"
              style={{ display: "flex", flexDirection: "column", width: "100%", gap: "4px" }}
            >
              {roles.map((role, index) => (
                <button
                  key={role.id}
                  ref={index === 0 ? firstRoleRef : null}
                  onClick={() => handleRoleSelect(role.id)}
                  aria-label={`Start quiz as ${role.label}`}
                  style={{
                    width: "100%",
                    height: "66px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "16px",
                    border: "4px solid #B2C8F8",
                    backgroundColor: "#ffffff",
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#4B4B4B",
                    cursor: "pointer",
                    padding: 0,
                    margin: 0,
                    outline: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "#2563EB"}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#B2C8F8"; }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#2563EB";
                    e.currentTarget.style.boxShadow = focusVisibleRing;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#B2C8F8";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {role.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}