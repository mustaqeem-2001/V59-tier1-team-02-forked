import questions  from "../data/flashcards.js";
import { roles }  from "../data/roles.js";
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function Questions() {
  const { roleId } = useParams();
  const roleExists = roles.find(function(role) {
    return roleId === role.id;
  })

  let roleLabel = null;
  if (roleExists) {
    roleLabel = roleExists.label;
  }

  const flashcardQuestions = questions.find(function(question) {
    if (question.role === roleLabel) {
      return question.flashcards;
    }
  });

  console.log(flashcardQuestions);

  const [currentQuestionId, setCurrentQuestionId] = useState(
    flashcardQuestions.flashcards[0].id
  );

  const currentQuestion = flashcardQuestions.flashcards.find(function(card) {
    return card.id === currentQuestionId;
  })

  console.log(currentQuestion);
  return (
    <>
      <h1>Questions Page</h1>
      <section className="question-section">
        <div>
              <section className="question-title">{currentQuestion.question}</section>
              <section className="question-choices">
              <div>{currentQuestion.options.A}</div>
              <div>{currentQuestion.options.B}</div>
              <div>{currentQuestion.options.C}</div>
              <div>{currentQuestion.options.D}</div>
              </section>
        </div>
      </section>
      <button type="submit"
        onClick={function () {
          const nextQuestion = flashcardQuestions.flashcards[currentQuestionId + 1];
          if (nextQuestion) {
            setCurrentQuestionId(nextQuestion.id);
            console.log(nextQuestion);
          }

        }}
      >
        Next
      </button>
    </>
  );
}
