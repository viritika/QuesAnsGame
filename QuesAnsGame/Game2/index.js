    const quizData = [
      {
        question: "1. Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
      },
      {
        question: "2. What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
      },
      {
        question: "3. What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
      },
      {
        question: "4. What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
      },
      {
        question: "5. Which Indian state is known as the (Land of Five Rivers)?",
        a: "Punjab",
        b: "Rajasthan",
        c: "Maharashtra",
        d: "Kerala",
        correct: "a",
      },

      {
        question: "6. Who was the first Prime Minister of India?",
        a: " Jawaharlal Nehru",
        b: "Mahatma Gandhi",
        c: " Indira Gandhi",
        d: " Lal Bahadur Shastri",
        correct: "a",
      },
      {
        question: "7. Which river is known as the (Ganga of the South) in India?",
        a: "Yamuna",
        b: "Godavari",
        c: "Narmada",
        d: " Krishna",
        correct: "b",
      },
      {
        question: "8. What is the capital city of the Indian state of Maharashtra?",
        a: "Chennai",
        b: "Mumbai",
        c: "Kolkata",
        d: "Bengaluru",
        correct: "b",
      },
      {
        question: "9. Who wrote the Indian national anthem (Jana Gana Mana)?",
        a: " Rabindranath Tagore",
        b: "Mahatma Gandhi",
        c: " Subhas Chandra Bose",
        d: "Jawaharlal Nehru",
        correct: "a",
      },
      {
        question: "10. Which Indian city is known as the (Pink City)?",
        a: "Jaipur",
        b: "Udaipur",
        c: "Jodhpur",
        d: " Bikaner",
        correct: "a",
      },

    ];

    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");

    let currentQuiz = 0;
    let score = 0;

    const deselectAnswers = () => {
      answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
      let answer;
      answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
      });
      return answer;
    };


    const loadQuiz = () => {
      deselectAnswers();
      const currentQuizData = quizData[currentQuiz];
      questionElement.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
    };

    loadQuiz();


    submitButton.addEventListener("click", () => {
      const answer = getSelected();
      if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();

        else {
          quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `
        }
      }
    });
