type Answer = {
  videoId: string;
  person: string;
  question: string;
  testAnswer: (answer: string) => boolean;
}

type Clue = Answer & {
  clueId: string;
  nextClue: string;
  firstClue: boolean;
};

const answers: Answer[] = [
  {
    videoId: '',
    person: '',
    question: `
This first one is silly, just a test nothing more
To get your brain going before you head out the door
The answer doesn't matter so let's make this quite brief
Whose bust sits right next to your Georgia O'Keefe?
    `,
    testAnswer(answer) {
      return answer.includes('marx');
    }
  },
  {
    videoId: '',
    person: '',
    question: `
A scavenger hunt is very bourgeois
You should go buy a book (but don't travel too far)
There's philosophy, history, literature and art!
What other genre could we add to our cart?
    `,
    testAnswer(answer) {
      return ['politik', 'politics'].includes(answer);
    }
  },
  {
    videoId: '',
    person: '',
    question: `
With your back to a curve that you might have signed
Look carefully nearby and the answer you'll find
On an advertisement small enough to be mailable
What's the latest time that these movers are available?
    `,
    testAnswer(answer) {
      return ['21h', '9pm', '9', '21', '9h', '9:00', '21:00', '9h00', '21h00'].includes(answer);
    }
  },
  {
    videoId: '',
    person: '',
    question: `
This Christmas was saved by overpriced meat
(Though sexist decor should be flung with a “yeet!”)
Outside though's a plaque to a brave financier
His name's on your street and he died in what year?
    `,
    testAnswer(answer) {
      return answer === '1886';
    }
  },
  {
    videoId: '',
    person: '',
    question: `
A film made your list of the best of this year
And a lot of it's set within minutes of here
To the cafe that  opens the flick you should march
Which letter is gone from the sign on the arch?
    `,
    testAnswer(answer) {
      return answer === 'r';
    }
  },
  {
    videoId: '',
    person: '',
    question: `
It's time to eat breakfast (if any remains)
Each morning their coffee flows through your veins
Please tell me the caffeine-rich soda they sell
(Tom's getting a car it should serve you quite well…)
    `,
    testAnswer(answer) {
      return answer.includes('cascara');
    }
  },
  {
    videoId: '',
    person: '',
    question: `
When making a scavenger hunt for your bae
An animal tax is the price that you'll pay
There's some goats nearby they will make you feel mellow
But tell me how many of their lockers are yellow
    `,
    testAnswer(answer) {
      return answer === '2';
    }
  },
  {
    videoId: '',
    person: '',
    question: `
My favourite store is down the street
A room-sized cushion can't be beat
Pause in the car in time to see
You'll destroy all these creatures in the world with T
    `,
    testAnswer(answer) {
      return ['crocodile', 'alligator'].includes(answer);
    }
  },
  {
    videoId: '',
    person: '',
    question: `
The closest you've come to a pandemic live show
Was dining nearby without quick tests - oh no!
Go straight to that venue, you don't need to stop
Just tell me the brand of the logo on top?
    `,
    testAnswer(answer) {
      return answer === 'astra';
    }
  },
  {
    videoId: '9md3lfHNgGk',
    person: 'Jonas',
    question: `
If the weather was better, you know where I'd be?
In my small home-from-home, tending plants happily
Go there now and keep looking for a green copper tower
What building's it attached to? (It's a seat of power)
    `,
    testAnswer(answer) {
      return answer.includes('rathaus') && answer.includes('treptow');
    }
  },
  {
    videoId: '',
    person: 'Ed',
    question: `
To my previous flat you must now zoom
And consider the view from my old bedroom
Across the tracks is the solution
It's a vaunted British institution
    `,
    testAnswer(answer) {
      return answer.includes('nhs');
    }
  },
  {
    videoId: '',
    person: '',
    question: `
While purchasing a Côtes du Rhône
You spot something that lowers the tone
A snail is drawn upon the wall
Tell me what the artist's called
    `,
    testAnswer(answer) {
      return answer === 'penis';
    }
  },
  {
    videoId: '',
    person: '',
    question: `
Now a short walk you've done often before
To Tom's old place (still no name on the door…)
Seek a parking-space taker (there aren't many to spare)
A grass-filled trailer, but who put it there?
    `,
    testAnswer(answer) {
      return answer === 'tiny hotel';
    }
  },
  {
    videoId: '',
    person: '',
    question: `
There haven't been many films to catch
But you went here to see the French Dispatch
Their politics are on the door
Which organisation do they show love for?
    `,
    testAnswer(answer) {
      return ['black lives matter', 'blm'].includes(answer);
    }
  },
  {
    videoId: '',
    person: '',
    question: `
For lunch we're having a real crowd-pleaser
This town's best focaccia with chicken caesar
It's a bit of a trip but when you arrive
Tell me the colour of the two-headed man's eyes
    `,
    testAnswer(answer) {
      return answer === 'blue';
    }
  },
  {
    videoId: '',
    person: '',
    question: `
You so nearly lived here; you made the shortlist
(it worked out for the best - a bullet you missed)
But if things had been different, and you were Bergmannkiez Gang
How much would you pay for a Haarschnitt lang?
    `,
    testAnswer(answer) {
      return answer.includes('15') || answer.includes('fifteen');
    }
  },
  {
    videoId: '',
    person: '',
    question: `
It's got fashion and monkeys and cups Japanese
At the front door's installed many upside-down trees
The solution is (roughly) how many there are
(Then grab a drink if you like, as you're ditching the car) 
    `,
    testAnswer(answer) {
      const num = Number(answer);
      return !Number.isNaN(num) && num < 70 && num > 66;
    }
  },
  {
    videoId: '',
    person: 'Maria',
    question: `
I showed you both a place unknown
Right next to dinosaurs in stone
Peer through the glass and then confide
The colour of what lives inside
    `,
    testAnswer(answer) {
      return answer.includes('yellow') || answer.includes('gold');
    }
  },
  {
    videoId: '',
    person: '',
    question: `
You typically go here on date nights with Tom
(you may as well pick up a box of Ceylon)
You don't need to go in, 'cos here is the test:
Just tell me what image resides on the crest
    `,
    testAnswer(answer) {
      return answer.includes('ship') || answer.includes('boat');
    }
  },
  {
    videoId: '',
    person: 'Amrei',
    question: `
To recall the next place, search through your memories
It's where Tom & I work, so you should find it with ease
It's a bit of a distance, so pay your train fare
There's a door for 'events', what is written on there?
    `,
    testAnswer(answer) {
      return answer === 'werkstatt';
    }
  },
  {
    videoId: '',
    person: 'Grace',
    question: `
We escaped execution on my birthday (belated)
Well, that place has a story (sadly mostly ill-fated)
It opened as a concert hall in nineteen-hundred-ten
How many people could it seat back then?
    `,
    testAnswer(answer) {
      return ['4000', '4 thousand', 'four thousand'].includes(answer);
    }
  },
  {
    videoId: '',
    person: '',
    question: `
It's tough to find housing in the city of Berlin
The big landlords are shit (just wait for Enteignen…)
You're contractually free now, so your arse they can kiss
There's a banner by their office for which public service?
    `,
    testAnswer(answer) {
      return answer.includes('test') && answer.includes('center');
    }
  },
  {
    videoId: '',
    person: '',
    question: `
You're so close to the end now, you deserve a drink
There's a wine bar quite near you - the name's 'Ottorink'
With your back to the entrance you'll notice a flag
Hanging out of a window featuring which hashtag?
    `,
    testAnswer(answer) {
      return answer.includes('dresdener15');
    }
  },
  {
    videoId: '',
    person: '',
    question: `
To conclude this day Tom has made reservations
At a nice restaurant (try to hide your elation)
It's an old hospital next to Mariannenplatz
Tell me its new name and then, well… that is that…
    `,
    testAnswer(answer) {
      return answer === 'bethanien';
    }
  },
  {
    videoId: '',
    person: '',
    question: `
You've come to the end of this scavenger hunt
A yearlong wait for the next one you have to confront
But for now rest your legs, eat and drink and have fun
This annual tradition has only just begun
    `,
    testAnswer(answer) {
      return true;
    }
  },
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
