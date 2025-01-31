import React, { useState } from 'react';
import { storyNodes } from './storyData';
import { StoryNode } from './types';
import StoryPanel from './components/StoryPanel';
import ChoiceButtons from './components/ChoiceButtons';
import PuzzleInterface from './components/PuzzleInterface';

const App: React.FC = () => {
  const [currentNodeId, setCurrentNodeId] = useState<string>('haunted_wing_start');

  const getNode = (nodeId: string): StoryNode | undefined => {
    return storyNodes.find((node) => node.id === nodeId);
  };

  const handleChoice = (nodeId: string) => {
    setCurrentNodeId(nodeId);
  };

  const handlePuzzleAnswer = (answer: string) => {
    const currentNode = getNode(currentNodeId);
    if (currentNode?.puzzle?.answer.toLowerCase() === answer.toLowerCase()) {
      // Send a message to the extension to update the inventory
      window.postMessage({ command: 'updateInventory', item: 'ghostly_key' });
      setCurrentNodeId(currentNode.puzzle.successNode);
    } else {
      setCurrentNodeId(currentNode?.puzzle?.failNode || currentNodeId);
      // Send a message to the extension to display an error message
      window.postMessage({ command: 'showError', message: `Incorrect. ${currentNode?.puzzle?.hint}` });
    }
  };

  const currentNode = getNode(currentNodeId);

  return (
    <div className="app-container">
      {currentNode? (
        <>
          <StoryPanel 
          text={currentNode.text}
  node={currentNode}
  onChoiceSelect={(choice) => handleChoice(choice.nextNodeId)}
/>
          {currentNode.choices && (
            <ChoiceButtons choices={currentNode.choices} onChoiceClick={handleChoice} /> // Corrected prop name
          )}
          {currentNode.puzzle && (
            <PuzzleInterface puzzle={currentNode.puzzle} onAnswer={handlePuzzleAnswer} />
          )}
        </>
      ): (
        <p>The End</p>
      )}
    </div>
  );
};

export default App;