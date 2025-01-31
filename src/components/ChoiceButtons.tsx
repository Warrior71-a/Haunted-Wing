import React from "react";
import { Choice } from '../types'; 

interface ChoiceButtonsProps {
  choices: [any]; // Change from Choice to Choice
  onChoice: (choice: Choice) => void;
}

const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ choices, onChoice }) => {
  return (
    <div>
      {choices.map((choice) => ( // Now 'choices' is an array, so.map works
        <button key={choice.nextNodeId} onClick={() => onChoice(choice)}> 
          {choice.text}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;