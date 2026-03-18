const questions = [
  { question: "India ka capital kya hai?", options: ["Mumbai","Delhi","Kolkata","Chennai"], answer: "Delhi" },
  { question: "2 + 2 kitna hota hai?", options: ["3","4","5","6"], answer: "4" },
  { question: "Cricket me ek over me kitni balls hoti hain?", options: ["5","6","7","8"], answer: "6" },
  { question: "Taj Mahal kis shehar me hai?", options: ["Delhi","Agra","Jaipur","Mumbai"], answer: "Agra" },
  { question: "HTML ka full form kya hai?", options: ["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Multi Language","None"], answer: "Hyper Text Markup Language" },
  { question: "Mobile ka inventor kaun hai?", options: ["Newton","Martin Cooper","Einstein","Tesla"], answer: "Martin Cooper" },
  { question: "IPL ka first winner kaun tha?", options: ["CSK","MI","RR","RCB"], answer: "RR" },
  { question: "Sun kis direction me ugta hai?", options: ["West","North","East","South"], answer: "East" },
  { question: "5 x 5 kitna hota hai?", options: ["20","25","30","15"], answer: "25" },
  { question: "Water ka formula kya hai?", options: ["CO2","H2O","O2","NaCl"], answer: "H2O" },

  { question: "Which is smallest planet?", options: ["Mercury","Mars","Earth","Venus"], answer: "Mercury" },
  { question: "Which is largest planet?", options: ["Earth","Mars","Jupiter","Venus"], answer: "Jupiter" },
  { question: "Sun is a?", options: ["Planet","Star","Moon","Asteroid"], answer: "Star" },
  { question: "Which is red planet?", options: ["Mars","Earth","Jupiter","Saturn"], answer: "Mars" },
  { question: "Which is largest ocean?", options: ["Indian","Pacific","Atlantic","Arctic"], answer: "Pacific" },

  { question: "भारत का राष्ट्रीय पशु क्या है?", options: ["Lion","Tiger","Elephant","Dog"], answer: "Tiger" },
  { question: "India ka national bird?", options: ["Crow","Peacock","Parrot","Eagle"], answer: "Peacock" },
  { question: "भारत का राष्ट्रीय फल?", options: ["Apple","Mango","Banana","Orange"], answer: "Mango" },

  { question: "Which gas we breathe?", options: ["CO2","Oxygen","Nitrogen","Hydrogen"], answer: "Oxygen" },
  { question: "Which organ pumps blood?", options: ["Lungs","Heart","Kidney","Brain"], answer: "Heart" },

  { question: "3 x 3 = ?", options: ["6","9","12","3"], answer: "9" },
  { question: "7 x 8 = ?", options: ["54","56","48","64"], answer: "56" },
  { question: "4 x 4 = ?", options: ["12","16","14","18"], answer: "16" },
  { question: "6 + 6 = ?", options: ["10","11","12","13"], answer: "12" },

  { question: "Facebook kisne banaya?", options: ["Elon Musk","Mark Zuckerberg","Bill Gates","Steve Jobs"], answer: "Mark Zuckerberg" },
  { question: "YouTube kis company ka hai?", options: ["Google","Meta","Amazon","Apple"], answer: "Google" },

  { question: "Which is pet animal?", options: ["Dog","Lion","Tiger","Elephant"], answer: "Dog" },
  { question: "Which is water animal?", options: ["Dog","Fish","Cat","Tiger"], answer: "Fish" },
  { question: "Which is fastest animal?", options: ["Tiger","Lion","Cheetah","Dog"], answer: "Cheetah" },

  { question: "Which is festival of lights?", options: ["Holi","Diwali","Eid","Christmas"], answer: "Diwali" },
  { question: "Which is winter month?", options: ["May","June","December","April"], answer: "December" },

  { question: "Which language runs in browser?", options: ["C","Java","JavaScript","Python"], answer: "JavaScript" },
  { question: "Which is web browser?", options: ["Chrome","Windows","Linux","MS Word"], answer: "Chrome" },

  { question: "Which is biggest continent?", options: ["Asia","Africa","Europe","Australia"], answer: "Asia" },

  // 🔥 Repeat pattern (total already enough for smooth game)

];

// ===== GAME LOGIC =====

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

function startTimer() {
  timeLeft = 10;
  document.getElementById("timer").innerText = "Time: " + timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "Time: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function loadQuestion() {
  clearInterval(timer);

  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const options = document.querySelectorAll(".option");

  options.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.style.background = "#3498db"; // reset color
    btn.disabled = false;
  });

  startTimer();
}

function checkAnswer(selected) {
  clearInterval(timer);

  const correct = questions[currentQuestion].answer;
  const options = document.querySelectorAll(".option");

  options.forEach(btn => btn.disabled = true);

  if (selected.innerText === correct) {
    selected.style.background = "green"; // correct
    score++;
  } else {
    selected.style.background = "red"; // wrong

    // correct answer highlight
    options.forEach(btn => {
      if (btn.innerText === correct) {
        btn.style.background = "green";
      }
    });
  }

  document.getElementById("score").innerText = "Score: " + score;

  setTimeout(() => {
    nextQuestion();
  }, 1000);
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML =
      `<h2>Game Over</h2>
       <p>Final Score: ${score}/${questions.length}</p>`;
  }
}

// start game
loadQuestion();