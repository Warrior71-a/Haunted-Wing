import React from "react";

interface Choice {
  text: string;
  nextNodeId: string;
}

interface ChoiceButtonsProps {
  choices: Choice[];
  onChoiceClick: (nodeId: string) => void;  // Ensure this matches App.tsx
}

const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ choices, onChoiceClick }) => {
  return (
    <div>
      {choices.map((choice) => (
        <button key={choice.nextNodeId} onClick={() => onChoiceClick(choice.nextNodeId)}>
          {choice.text}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;
