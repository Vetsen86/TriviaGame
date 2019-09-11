$(document).ready(function() {

    var questions = [{
        question: "A modulator-demodulator is a hardware device better known as what?",
        answer1: "A processor",
        answer2: "A printer",
        answer3: "A modem",
        answer4: "A monitor",
        correctAnswer: "answer3"
    },

    {
        question: "What does the online acronym SMH stand for?",
        answer1: "Shaking my head",
        answer2: "Shackle mama's ham",
        answer3: "Silent murder human",
        answer4: "Salami mega hut",
        correctAnswer: "answer1"
    },

    {
        question: "What was the first publicly traded U.S. company to reach a $1 trillion market cap?",
        answer1: "Microsoft",
        answer2: "Apple",
        answer3: "Facebook",
        answer4: "Google",
        correctAnswer: "answer2"
    },

    {
        question: "On which popular website do users send tweets?",
        answer1: "Reddit",
        answer2: "Amazon",
        answer3: "Ebay",
        answer4: "Twitter",
        correctAnswer: "answer4"
    },

    {
        question: "Mark Zuckerberg was one of the founders of which social networking site?",
        answer1: "Facebook",
        answer2: "Instagram",
        answer3: "MySpace",
        answer4: "LinkedIn",
        correctAnswer: "answer1"
    },

    {
        question: "What was the first console video game that allowed the game to be saved?",
        answer1: "Final Fantasy",
        answer2: "Dragon Quest",
        answer3: "The Legend of Zelda",
        answer4: "Tecmo Super Bowl",
        correctAnswer: "answer3"
    },

    {
        question: "Created in 2009, what was the first decentralized cryptocurrency?",
        answer1: "Ethereum",
        answer2: "Ripple",
        answer3: "Litecoin",
        answer4: "Bitcoin",
        correctAnswer: "answer4"
    },

    {
        question: "What do you call the small image icons used to express emotions or ideas in digital communication?",
        answer1: "Digiemos",
        answer2: "Emoji",
        answer3: "Faces",
        answer4: "Ideacons",
        correctAnswer: "answer2"
    }];

    var currentQuestion = 0;
    var currentCorrectAnswer = questions[currentQuestion].correctAnswer;
    var nextTimer;
    var time = 5;
    var timer;

    function questionTimer() {
        time--;
        $("#time").text(time);
        if(time === 0) {
            clearInterval(timer);
            timeUp();
        }
    }
    
    
    function getNextQuestion() {
        clearInterval(nextTimer);
        time = 5;
        timer = setInterval(questionTimer, 1000);
        $(".trivia").removeClass("hidden");
        $(".result").addClass("hidden");
        $("#question").text(questions[currentQuestion].question);
        $("#answer1").text(questions[currentQuestion].answer1);
        $("#answer2").text(questions[currentQuestion].answer2);
        $("#answer3").text(questions[currentQuestion].answer3);
        $("#answer4").text(questions[currentQuestion].answer4);
        currentCorrectAnswer = questions[currentQuestion].correctAnswer;
    }

    

    function nextQuestionTimer() {
        nextTimer = setInterval(getNextQuestion, 5000);
    }

    function timeUp() {
        $(".trivia").addClass("hidden");
        $(".result").removeClass("hidden");
        $("#right-wrong").text("Time's Up!");
        $("#rightAnswer").text(questions[currentQuestion][currentCorrectAnswer]);
        currentQuestion++;
        nextQuestionTimer();
    }

    
    

    

    $("#start").on("click", function() {
        $("#start").addClass("hidden");
        getNextQuestion(currentQuestion);
        
    });


});