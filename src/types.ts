type NodeID = 
  | "haunted_wing_start"
  | "search_shelves"
  | "riddle_puzzle"
  // ... other node IDs
  | "courtyard_end";


  export interface Puzzle {
    prompt: string;
    answer: string;
    hint: string;
    successNode: string;
    failNode: string;
  }
  
  export interface Choice {
    text: string;
    nextNodeId: string;
  }
  
  export interface StoryNode {
    id: string;
    text: string;
    choices: Choice[];
    puzzle?: Puzzle | null; // Ensure it's explicitly optional
  }
  
  export interface StoryPanelProps {
    node: StoryNode;
    onChoiceSelect: (choice: Choice) => void;
  }
  
  export interface ChoiceButtonsProps {
    choices: Choice[];
    onChoiceClick: (nextNodeId: string) => void;
  }