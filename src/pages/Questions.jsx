import questions from "../data/flashcards.js";
import { roles } from "../data/roles.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./questions.css";
export default function Questions() 
{
  const navigate = useNavigate();
  const { roleId } = useParams();
  const [selectedKey, setSelectedKey] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState([]); // Track keys of wrong guesses
  const [showAnswer, setShowAnswer] = useState(false); // New: Force reveal after 3 tries
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
  
  // Use states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  
  // Creates a shallow copy of questions whilst adding a new property with values called shuffledOptions. All other properties still exist
  function shuffleOptions(question) {
    const optionsArray = Object.entries(question.options);
    
    for (let i = optionsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
    }
    
    return { 
      ...question, // Created copy to not affect original data
      shuffledOptions: optionsArray // New property
    };
  }
  
  useEffect(
    function () {
      const shuffled = flashcards.map(shuffleOptions);
      setShuffledQuestions(shuffled);
      setCurrentIndex(0);
    },
    [roleId]
  );
  
  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>;
  }
  
  const currentQuestion = shuffledQuestions[currentIndex];
  
  function finish() {
    navigate("/results", {
      state: {
        score: 5,
        totalQuestions: flashcards.length,
        roleId: roleId,
      },
    });
  }
  
  function handleSelect(key) {
  // Don't allow changing selection if the answer is already revealed
  if (showAnswer) return;
  setSelectedKey(key);
}

function clickHandler() {
  if (!showAnswer) {
    // PHASE 1: User clicked "Submit"
    const isCorrect = selectedKey === currentQuestion.answer;

    if (isCorrect) {
      setShowAnswer(true);
    } else {
      // It's wrong! Add to strikes
      if (!wrongGuesses.includes(selectedKey)) {
        const newStrikes = [...wrongGuesses, selectedKey];
        setWrongGuesses(newStrikes);
        
        // Reset selection so they have to pick a new one
        setSelectedKey(null); 

        // If this was the 3rd wrong guess, reveal the truth
        if (newStrikes.length >= 3) {
          setShowAnswer(true);
        }
      }
    }
  } else {
    // PHASE 2: User clicked "Next Question"
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
        <section className="question-title">
          <h1>Question {currentIndex + 1}: {currentQuestion.question}</h1>
        </section>

        <section className="question-choices">
          {currentQuestion.shuffledOptions.map(([key, text]) => {
          const isCorrect = key === currentQuestion.answer;
          const isWrongGuess = wrongGuesses.includes(key);
          const isSelected = key === selectedKey;

          let statusClass = "";
          
          if (isWrongGuess) {
            statusClass = "wrong";
          } 
          else if (showAnswer && isCorrect) {
            statusClass = "correct";
          } 
          else if (isSelected) {
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
        <button 
          className="nextQuestionBtn" 
          onClick={clickHandler}
          disabled={!selectedKey && !showAnswer} 
        >
          {showAnswer 
            ? (currentIndex === shuffledQuestions.length - 1 ? "Finish" : "Next Question") 
            : "Submit"}
        </button>
      </div>
    </section>
    </>
);
}