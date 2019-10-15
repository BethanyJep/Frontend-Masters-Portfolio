let points = 0;

function lake(userAnswer) {
    // Name the largest freshwater lake in the world?
    // 100points
    const isCorrect = userAnswer === 'Lake Superior';

    if (isCorrect) {
        points += 100
    }
    return isCorrect
}
function tranquil(userAnswer) {
    // Name the largest freshwater lake in the world?
    // 100points
    const isCorrect = userAnswer === 'The Moon';

    if (isCorrect) {
        points += 100
    }
    return isCorrect
}
function planet(userAnswer) {
    const isCorrect = userAnswer === 'Uranus';

    if (isCorrect) {
        points += 100
    }
    return isCorrect
}

function uppercase(userAnswer, word) {
    const isCorrect = userAnswer == word.toUpperCase();

    if (isCorrect) {
        points += 200
    }
    return isCorrect
}

function firstFourLetters(userAnswer, word) {
    const isCorrect = userAnswer === word.substr(0, 4);
        if (isCorrect) {
        points += 200
    }
    return isCorrect
}
function cubed(userAnswer, number) {
    // Name the largest freshwater lake in the world?
    const isCorrect = userAnswer === number ** 3;

    if (isCorrect) {
        points += 200
    }
    return isCorrect
}

function multiplication(userAnswer, num1, num2) {
    // Name the largest freshwater lake in the world?
    const isCorrect = userAnswer === num1 * num2;

    if (isCorrect) {
        points += 300
    }
    return isCorrect
}
function getScore() {
    return points;
}

(function initQuiz() {
  const words = [
    "squeeze",
    "suspend",
    "cloudy",
    "parallel",
    "scrape",
    "puppy",
    "horses",
    "sedate",
    "guarded",
    "part",
    "name",
    "solid",
    "queue",
    "alike",
    "home",
    "overwrought",
    "talented",
    "concerned",
    "increase",
    "silky",
    "rude",
    "hypnotic",
    "moaning",
    "rabbit",
    "oily",
    "intelligent",
    "delicious",
    "snow",
    "sticky",
    "view"
  ];
  let currentQuestion = 0;
  const text = document.getElementById("text")
  
  function validate(userResponse) {
    const answer = process[currentQuestion].validator.apply(window, [userResponse, ...(process[currentQuestion].meta ? process[currentQuestion].meta : [])]);
    let response = "";

    if (answer === true) {
      response = "correct!", 'Hooray';
    } else if (answer === false) {
      response = "incorrect :(", 'Try your luck next time!';
    } else {
      response = "got a response other than true or false";
    }

    alert(response);
    currentQuestion++;
    
    if (currentQuestion >= process.length) {
      document.getElementById("container").innerHTML = `<h1>Congrats!</h1> <h1>You finished.</h1> <h1>You got ${getScore()} points!</h1>`;
      return;
    }
    
    text.innerText = process[currentQuestion].question;
  }

  const randomNumber = max => Math.floor(Math.random() * max);
  const randomWord = () => words[randomNumber(words.length)];
  const word1 = randomWord();
  const word2 = randomWord();
  const number1 = randomNumber(25);
  const number2 = randomNumber(25);
  const number3 = randomNumber(25);
    
   const process = [
      {
        question: 'Name the largest freshwater lake in the world?',
        validator: lake,
        points: 100
      },
      {
        question: 'Where would you find the Sea of Tranquility?',
        validator: tranquil,
         points: 100
        },
        {
            question: 'Name the seventh planet from the sun.',
            validator: planet,
            points: 100
        },
        {
      question: `what is "${word1}" in all capital letters?`,
      meta: [word1],
      validator: uppercase,
      points: 200
    },
    {
      question: `what are the first four letters of "${word2}"?`,
      meta: [word2],
      validator: firstFourLetters,
      points: 200
    },
    {
      question: `what is ${number1} cubed?`,
      meta: [number1],
      validator: cubed,
      points: 200
    },
    {
      question: `what is ${number2} multiplied by ${number3}?`,
      meta: [number2, number3],
      validator: multiplication,
      points: 300
    }
    ];

  const input = document.getElementById("input");

  document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    validate(input.value);
    input.value = "";
  });

  // document.getElementById('button').addEventListener('submit', e => {
  //   e.preventDefault();
  //   validate(input.value);
  //   input.value = "";
  // });

})();













