var questions = [
  "What did you eat for lunch?",
  "Did you catch anyone picking their nose?",
  "What games did you play at recess?",
  "What was the funniest thing that happened today?",
  "Did anyone do anything super nice for you?",
  "What was the nicest thing you did for someone else?",
  "Who made you smile today?",
  "Which one of your teachers would survive a zombie apocalypse? Why?",
  "What new fact did you learn today?",
  "Who brought the best food in their lunch today? What was it?",
  "What challenged you today?",
  "If school were a ride at the fair, which ride would it be? Why?",
  "What would you rate your day on a scale of 1 to 10? Why?",
  "If one of your classmates could be the teacher for the day who would you want it to be? Why?",
  "If you had the chance to be the teacher tomorrow, what would you teach the class?",
  "Did anyone push your buttons today?",
  "Who do you want to make friends with but haven’t yet? Why not?",
  "What is your teacher’s most important rule?",
  "What is the most popular thing to do at recess?",
  "Does your teacher remind you of anyone else you know? How?",
  "Tell me something you learned about a friend today.",
  "If aliens came to school and beamed up 3 kids, who do you wish they would take? Why?",
  "What is one thing you did today that was helpful?",
  "When did you feel most proud of yourself today?",
  "What rule was the hardest to follow today?",
  "What is one thing you hope to learn before the school year is over?",
  "Which person in your class is your exact opposite?",
  "Which area of your school is the most fun?",
  "Which playground skill do you plan to master this year?",
  "Does anyone in your class have a hard time following the rules?"
];

function getRandomItemNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuestion() {
  $('p > b').text(questions[getRandomItemNumber(0, questions.length - 1)]);
}

$('#refresh').on('click', getQuestion);

(getQuestion())();
