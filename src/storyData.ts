import { Choice } from "./types";
import { StoryNode } from './types';


export const storyNodes: StoryNode[] = [
  {
    id: "haunted_wing_start",
    text: "**The air chills.** You awaken in a dim library wing, surrounded by towering shelves. Dust motes dance in the faint moonlight filtering through grimy windows. A ghostly voice whispers: *'Solve my riddle, mortal, or become one with the books...'*",
    choices: [
      { text: "Search the shelves for clues", nextNodeId: "search_shelves" },
      { text: "Confront the librarian", nextNodeId: "confront_librarian" }
    ],
    puzzle: null
  },
  {
    id: "search_shelves",
    text: "You scan the shelves, your fingers tracing the spines of ancient tomes. The titles are in languages you don't recognize, but one book shimmers with an eerie green glow. It's titled *Secrets of the Silent Keys*. As you pull it from the shelf, a cold gust of wind rushes past you, and the ghostly voice laughs...",
    choices: [
      { text: "Open the book", nextNodeId: "riddle_puzzle" },
      { text: "Step back - something feels wrong", nextNodeId: "confront_librarian" }
    ],
    puzzle: null
  },
  {
    id: "confront_librarian",
    text: "The spectral librarian materializes before you, eyes glowing with an eerie light. *'Why disturb the forgotten, mortal?'* it hisses.",
    choices: [
      { text: "[Demand answers] 'Where am I?!'", nextNodeId: "librarian_anger" },
      { text: "[Apologize] 'I meant no harm...'", nextNodeId: "librarian_mercy" }
    ],
    puzzle: null
  },
  {
    id: "riddle_puzzle",
    text: "You open the book, and a riddle is scrawled in blood-red ink on the first page:",
    choices: [],
    puzzle: {
      prompt: "What has keys but no locks?",
      answer: "piano",
      hint: "Think of music and silence...",
      successNode: "escape_path_1",
      failNode: "ghostly_trap_1"
    }
  },
  {
    id: "librarian_anger",
    text: "The librarian's form flickers with rage. *'Insolent mortal! You shall remain here, lost among the endless shelves!'* The room begins to spin, and the bookshelves seem to close in...",
    choices: [
      { text: "Try to apologize", nextNodeId: "librarian_anger_apology" },
      { text: "Search for a way out", nextNodeId: "search_shelves_2" }
    ],
    puzzle: null
  },
  {
    id: "librarian_mercy",
    text: "The librarian's gaze softens slightly. *'Lost, are you? Very well. Solve my riddle, and I shall guide you to the exit.'*",
    choices: [
      { text: "Accept the challenge", nextNodeId: "riddle_puzzle" }
    ],
    puzzle: null
  },
  {
    id: "escape_path_1",
    text: "As you utter the word 'piano', a hidden door creaks open behind a bookshelf. Moonlight spills into the library, revealing a cobblestone path leading out into the night. You can hear the ghostly librarian's fading laughter as you step through the doorway...",
    choices: [
      { text: "Escape to the courtyard", nextNodeId: "courtyard_end" }
    ],
    puzzle: null
  },
  {
    id: "ghostly_trap_1",
    text: "**The walls close in.** The librarian's form wavers, becoming more menacing. *'Wrong answer... Your essence shall be bound to these shelves for eternity!'* You feel a strange pull towards the books, your vision blurring...",
    choices: [],
    puzzle: null
  },
  {
    id: "librarian_anger_apology",
    text: "You try to apologize, but the librarian is consumed by rage. *'Silence!'* it booms. *'Your fate is sealed!'* The shelves groan and shift, and you realize you're trapped in a labyrinth of books...",
    choices: [
      { text: "Try to find another way out", nextNodeId: "search_shelves_2" }
    ],
    puzzle: null
  },
  {
    id: "search_shelves_2",
    text: "You frantically search the shelves, hoping to find a hidden passage or a clue to escape. You notice a faint pattern etched into the spines of some books. Could it be a code?",
    choices: [
      { text: "Examine the code", nextNodeId: "code_puzzle" }
    ],
    puzzle: null
  },
  {
    id: "code_puzzle",
    text: "You carefully examine the pattern on the book spines. It seems to be a series of symbols and numbers. Can you decipher the code?",
    choices: [],
    puzzle: {
      prompt: "Decipher the code: △ 3 ♎︎ 1 ▢ 4 ♌︎ 2",
      answer: "triangle 3 libra 1 square 4 leo 2",
      hint: "The symbols correspond to astrological signs.",
      successNode: "escape_path_2",
      failNode: "ghostly_trap_2"
    }
  },
  {
    id: "escape_path_2",
    text: "As you decipher the code, a secret passage opens in the wall behind the bookshelf. You quickly slip through, leaving the haunted wing behind...",
    choices: [
      { text: "Escape to the courtyard", nextNodeId: "courtyard_end" }
    ],
    puzzle: null
  },
  {
    id: "ghostly_trap_2",
    text: "The symbols on the books glow red as you fail to decipher the code. The shelves begin to close in, threatening to crush you...",
    choices: [],
    puzzle: null
  },
  {
    id: "courtyard_end",
    text: "You emerge into a moonlit courtyard, the haunted wing of the library fading into the distance. You've escaped! For now...",
    choices: [],
    puzzle: null
  }
];