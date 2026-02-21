import questions from "../data/flashcards.js";
import { roles } from "../data/roles.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./questions.css";
export default function Questions() {
  const navigate = useNavigate();
  const { roleId } = useParams();
  const [selectedKey, setSelectedKey] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [firstAttempts, setFirstAttempts] = useState([])
  const roleExists = roles.find(function (role) {
    return role.id === roleId;
  });

  if (!roleExists) {
    return <h1>Role not found</h1>;
  }

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const roleLabel = roleExists.label;

  const roleQuestions = questions.find(function (q) {
    return q.role === roleLabel;
  });

  if (!roleQuestions) {
    return <h1>No questions available</h1>;
  }

  const flashcards = roleQuestions.flashcards;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  function shuffleOptions(question) {
    const optionsArray = Object.entries(question.options);

    for (let i = optionsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
    }

    return {
      ...question,
      shuffledOptions: optionsArray,
    };
  }

  useEffect(() => {
  const questionsCopy = [...flashcards];

  for (let i = questionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
  }

   const shuffled = questionsCopy.map(shuffleOptions);

  setShuffledQuestions(shuffled);
  setCurrentIndex(0);
 setFirstAttempts([])

}, [roleId]);

useEffect(() => {
  if (!roleLabel) return;

  window.__INTERVIEW_CONTEXT__ = {
    role: roleLabel,
    attemptsLeft: 3 - wrongGuesses.length,
    questionId: currentIndex
  };

}, [roleLabel, wrongGuesses.length, currentIndex]);

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = shuffledQuestions[currentIndex];

  function finish() {
    navigate("/results", {
      state: {
        score,
        totalQuestions: flashcards.length,
        roleId,
        questions: shuffledQuestions, // Question text and correct keys
        firstAttempts       // The list of what they clicked first
      },
    });
  }

  function handleSelect(key) {
    if (showAnswer) return;
    setSelectedKey(key);
  }

  function clickHandler() {
    if (!showAnswer) {
      const isCorrect = selectedKey === currentQuestion.answer;
      if (wrongGuesses.length === 0) {
      // Find the text of what they just clicked
      const choicePair = currentQuestion.shuffledOptions.find(pair => pair[0] === selectedKey);
      const choiceText = choicePair ? choicePair[1] : "";
      //save first attempt
      setFirstAttempts((prev) => [...prev, choiceText]);
      }

      if (isCorrect) {
        setShowAnswer(true);
        if (wrongGuesses.length === 0) {
          setScore((prevScore) => prevScore + 1);
        }
      } else {
        if (!wrongGuesses.includes(selectedKey)) {
          const newStrikes = [...wrongGuesses, selectedKey];
          setWrongGuesses(newStrikes);

          setSelectedKey(null);

          if (newStrikes.length >= 3) {
            setShowAnswer(true);
          }
        }
      }
    } else {
      if (currentIndex < shuffledQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedKey(null);
        setWrongGuesses([]);
        setShowAnswer(false);
      } else {
        finish();
      }
    }
  }

  return (
    <>
      <section className="question-section">
        <div className="question-section-wrapper">
          <section className="question-title-section">
            <h1 className="question-title">
              Question {currentIndex + 1}: {currentQuestion.question}
            </h1>
          </section>

          <section className="question-choices">
            {currentQuestion.shuffledOptions.map(([key, text]) => {
              const isCorrect = key === currentQuestion.answer;
              const isWrongGuess = wrongGuesses.includes(key);
              const isSelected = key === selectedKey;

              let statusClass = "";

              if (isWrongGuess) {
                statusClass = "wrong";
              } else if (showAnswer && isCorrect) {
                statusClass = "correct";
              } else if (isSelected) {
                statusClass = "selected";
              }

              return (
                <div
                  key={key}
                  className={`choice ${statusClass}`}
                  onClick={() => handleSelect(key)}
                >
                  {text}
                </div>
              );
            })}
          </section>
          {showAnswer && (
            <div className="rationale-box">
              <h3>Rationale:</h3>
              <p>{currentQuestion.rationale}</p>
            </div>
          )}
          <button
            className="nextQuestionBtn"
            onClick={clickHandler}
            disabled={!selectedKey && !showAnswer}
          >
            {showAnswer
              ? currentIndex === shuffledQuestions.length - 1
                ? "Finish"
                : "Next Question"
              : "Submit"}
          </button>
        </div>
      </section>
    </>
  );
}
