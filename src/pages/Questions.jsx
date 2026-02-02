import questions from "../data/flashcards.js";
import { roles } from "../data/roles.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//change 1
import { useNavigate, useLocation } from "react-router-dom";

export default function Questions() {
  //change 2
  const navigate = useNavigate();

  const { roleId } = useParams();

  const roleExists = roles.find(function (role) {
    return role.id === roleId;
  });

  if (!roleExists) {
    return <h1>Role not found</h1>;
  }

  const roleLabel = roleExists.label;

  const roleQuestions = questions.find(function (q) {
    return q.role === roleLabel;
  });

  if (!roleQuestions) {
    return <h1>No questions available</h1>;
  }

  const flashcards = roleQuestions.flashcards;

  const [currentIndex, setCurrentIndex] = useState(0);
  //not needed. can delete
  const [finished, setFinished] = useState(false);

  useEffect(
    function () {
      setCurrentIndex(0);
    },
    [roleId],
  );

  const currentQuestion = flashcards[currentIndex];

  //change 3
  function finish() {
    navigate("/results", {
      state: {
        score: 5,
        totalQuestions: flashcards.length, //may add replace: true later
        roleId: roleId,
      },
    });
  }
  //change 4
  function clickHandler() {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      finish();
    }
  }

  return (
    <>
      <h1>{roleLabel} Questions</h1>

      <section className="question-section">
        <div>
          <section className="question-title">
            Question {currentIndex + 1}: {flashcards[currentIndex].question}
          </section>
          <section className="question-choices">
            <div>A: {flashcards[currentIndex].options.A}</div>
            <div>B: {flashcards[currentIndex].options.B}</div>
            <div>C: {flashcards[currentIndex].options.C}</div>
            <div>D: {flashcards[currentIndex].options.D}</div>
          </section>
        </div>
        {
          //change 5
        }
        <button onClick={clickHandler}>
          {currentIndex === flashcards.length - 1
            ? "Finish & Show Results"
            : "Next"}
        </button>
      </section>
    </>
  );
}
