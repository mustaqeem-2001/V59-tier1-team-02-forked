import { useNavigate } from "react-router-dom";

export default function Button({ children, to, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);          // navigate to a route if "to" prop is provided
    } else if (onClick) {
      onClick();             // otherwise run the custom onClick handler
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#2563EB] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1038C0] transition"
    >
      {children}
    </button>
  );
}
