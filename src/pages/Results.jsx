import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, totalQuestions, roleId } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate("/", { replace: true });
    }
  }, [location, navigate]); // react suggest to add as dependency any variable from "outside" that you use "inside" the effect
  const percentage = totalQuestions
    ? Math.round((score / totalQuestions) * 100)
    : 0;
  return (
    <>
      <h1>Results</h1>
      <h2>
        You got {score} out of {totalQuestions} correct!
      </h2>
      <h2>{percentage}%</h2>
      <button onClick={() => navigate(`/questions/${roleId}`)}>
        Try Again (Same Role)
      </button>
      <button onClick={() => navigate("/roles")}>Change Role</button>
    </>
  );
}
