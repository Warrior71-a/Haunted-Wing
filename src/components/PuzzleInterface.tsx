import React, { useRef } from 'react';
import { Puzzle } from '../types';

interface PuzzleInterfaceProps {
  puzzle: Puzzle;
  onAnswer: (answer: string) => void;
}

const PuzzleInterface: React.FC<PuzzleInterfaceProps> = ({ puzzle, onAnswer }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      onAnswer(inputRef.current.value);
      inputRef.current.value = ''; // Clear input after submission
    }
  };

  return (
    <div className="puzzle-interface">
      <h3>Solve the Puzzle</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="puzzle-answer">{puzzle.prompt}</label>
        <input 
          type="text" 
          id="puzzle-answer" 
          ref={inputRef}
          placeholder="Enter your answer..."
          autoComplete="off"
        />
        <button type="submit">Check Answer</button>
      </form>
      {puzzle.hint && <div className="hint">Hint: {puzzle.hint}</div>}
    </div>
  );
};

export default PuzzleInterface;