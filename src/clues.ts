type Answer = {
  videoId: string;
  testAnswer: (answer: string) => boolean;
}

type Clue = Answer & {
  clueId: string;
  nextClue: string;
  firstClue: boolean;
};

const answers: Answer[] = [
  {
    videoId: 'ug50zmP9I7s',
    testAnswer(answer) {
      return true;
    }
  },
  {
    videoId: 'gQgczagzAmg',
    testAnswer(answer) {
      return false;
    }
  }
];

export const clues: Record<string, Clue> = (function generateClues() {
  return answers.reduce((acc, answer, index) => ({
     ...acc,
     [answer.videoId]: {
       ...answer,
       firstClue: index === 0,
       clueId: answer.videoId,
       nextClue: answers[index + 1]?.videoId ?? ''
     }
   }), {})
})();

export const defaultClueId = Object.values(clues).find(({ firstClue }) => firstClue)?.clueId || '';
