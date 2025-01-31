import React from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { StoryNode, Choice } from "../types";

const animationVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

interface StoryPanelProps {
  text: string;
  node: StoryNode;
  onChoiceSelect: (choice: Choice) => void; // Callback for handling choice selection
}

const StoryPanel: React.FC<StoryPanelProps> = ({ node, onChoiceSelect, text }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      transition={{ duration: 0.5 }}
      variants={animationVariants}
      className="story-panel"
    >
      <ReactMarkdown>{node.text}</ReactMarkdown>

      {node.puzzle? (
        <div className="puzzle-section">
          <p><strong>Riddle:</strong> {node.puzzle.prompt}</p>
          <p><em>Hint:</em> {node.puzzle.hint}</p>
          {/* Add input field and answer submission logic here */}
        </div>
      ): (
        <div className="choices">
          {node.choices.map((choice: Choice, index: number) => (
            <button key={index} onClick={() => onChoiceSelect(choice)}> 
              {choice.text}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default StoryPanel;