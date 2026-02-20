import React from 'react';

const CardHomepage = ({ 
  emoji = "💪", 
  title = "Confidence Booster",
  description = "Practise one question at a time in a focused flashcard flow that builds comfort and interview readiness."
}) => {
  return (
    
    // card
      <div className="bg-white rounded-[3rem] shadow-lg border-4 border-[var(--color-secondary)] px-[var(--space-lg)] pt-[var(--space-lg)] pb-[var(--space-xl)] "> 
        <div className="flex items-start gap-8 card-container">
          {/* Emoji container */}
          <div className="inline-flex items-center  justify-center rounded-[var(--radius-md)] p-[var(--space-md)] bg-[var(--color-bg2)]">
            <h2>{emoji}</h2>
          </div>
          
          {/* Text content */}
          <div className="flex-1 px-[var(--space-md)] w-full">
            <h2 className="text-6xl font-bold text-gray-800 mb-6">
              {title}
            </h2>
            <p className="text-[var(--p-size)] w-full leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default CardHomepage;