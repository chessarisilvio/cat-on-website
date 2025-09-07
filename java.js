// Cat World JavaScript
const quizQuestions = [
    {
        question: "Da quale specie selvaggia discende principalmente il gatto domestico?",
        answers: ["Felis silvestris lybica", "Panthera leo", "Lynx lynx", "Felis chaus"],
        correctIndex: 0,
        explanation: "L'addomesticazione deriva principalmente dal gatto selvatico africano, Felis silvestris lybica."
    },
    {
        question: "A cosa servono principalmente i baffi del gatto?",
        answers: ["Decorazione", "Equilibrio e percezione spaziale", "Udito", "Termoregolazione"],
        correctIndex: 1,
        explanation: "I baffi sono recettori tattili che aiutano a percepire spazi e movimenti d'aria."
    },
    {
        question: "Perché i gatti vedono bene al crepuscolo?",
        answers: ["Pupille sempre dilatate", "Struttura dell'occhio adattata alla scarsa luce", "Occhi più grandi", "Usano l'ecolocalizzazione"],
        correctIndex: 1,
        explanation: "La retina e il tapetum lucidum migliorano la visione in condizioni di scarsa luce."
    },
    {
        question: "Quante ore al giorno dorme mediamente un gatto?",
        answers: ["6-8 ore", "9-11 ore", "12-16 ore", "18-20 ore"],
        correctIndex: 2,
        explanation: "I gatti dormono 12-16 ore al giorno, conservando energia per la caccia."
    },
    {
        question: "Qual è la frequenza delle fusa che può favorire la guarigione?",
        answers: ["5-10 Hz", "20-50 Hz", "60-80 Hz", "100-120 Hz"],
        correctIndex: 1,
        explanation: "Le fusa vibrano tra 20-50 Hz, frequenze che possono favorire la guarigione delle ossa."
    }
];

// Quiz State
let currentQuestion = 0;
let selectedAnswer = null;
let showExplanation = false;
let score = 0;
let userAnswers = [];

// DOM Elements
let progressFill, progressText, quizQuestion, quizAnswers, quizExplanation, nextButton, quizCard, quizResults, finalScore, scoreMessage;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    initializeNavigation();
    initializeTheme();
});

// Quiz Functions
function initializeQuiz() {
    progressFill = document.getElementById('progressFill');
    progressText = document.getElementById('progressText');
    quizQuestion = document.getElementById('quizQuestion');
    quizAnswers = document.getElementById('quizAnswers');
    quizExplanation = document.getElementById('quizExplanation');
    nextButton = document.getElementById('nextButton');
    quizCard = document.getElementById('quizCard');
    quizResults = document.getElementById('quizResults');
    finalScore = document.getElementById('finalScore');
    scoreMessage = document.getElementById('scoreMessage');
    
    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestion];
    
    // Update progress
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    progressFill.style.width = progress + '%';
    progressText.textContent = `Domanda ${currentQuestion + 1} di ${quizQuestions.length}`;
    
    // Update question
    quizQuestion.textContent = question.question;
    
    // Update answers
    quizAnswers.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const answerElement = document.createElement('div');
        answerElement.className = 'quiz-answer';
        answerElement.textContent = answer;
        answerElement.onclick = () => selectAnswer(index);
        quizAnswers.appendChild(answerElement);
    });
    
    // Reset state
    selectedAnswer = null;
    showExplanation = false;
    quizExplanation.style.display = 'none';
    nextButton.style.display = 'none';
}

function selectAnswer(index) {
    if (showExplanation) return;
    
    selectedAnswer = index;
    const question = quizQuestions[currentQuestion];
    const answers = quizAnswers.children;
    
    // Style answers
    for (let i = 0; i < answers.length; i++) {
        answers[i].classList.remove('selected', 'correct', 'incorrect');
        
        if (i === question.correctIndex) {
            answers[i].classList.add('correct');
        } else if (i === index && i !== question.correctIndex) {
            answers[i].classList.add('incorrect');
        }
    }
    
    // Show explanation
    quizExplanation.innerHTML = `
        <strong>${index === question.correctIndex ? '✅ Corretto!' : '❌ Sbagliato!'}</strong><br>
        ${question.explanation}
    `;
    quizExplanation.style.display = 'block';
    
    // Update score
    if (index === question.correctIndex) {
        score++;
    }
    
    userAnswers[currentQuestion] = index;
    showExplanation = true;
    nextButton.style.display = 'inline-block';
    nextButton.textContent = currentQuestion === quizQuestions.length - 1 ? 'Vedi Risultati' : 'Prossima Domanda';
}

function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizCard.style.display = 'none';
    quizResults.style.display = 'block';
    
    finalScore.textContent = score;
    
    let message = '';
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage >= 80) {
        message = "🎉 Eccellente! Sei un vero esperto di gatti!";
    } else if (percentage >= 60) {
        message = "😊 Bravo! Conosci bene i nostri amici felini!";
    } else if (percentage >= 40) {
        message = "😸 Non male! C'è ancora qualcosa da imparare sui gatti.";
    } else {
        message = "🐱 Hai bisogno di studiare di più sui gatti! Riprova!";
    }
    
    scoreMessage.textContent = message;
}

function restartQuiz() {
    currentQuestion = 0;
    selectedAnswer = null;
    showExplanation = false;
    score = 0;
    userAnswers = [];
    
    quizCard.style.display = 'block';
    quizResults.style.display = 'none';
    
    loadQuestion();
}

// Navigation Functions
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            navLinks.forEach(nl => nl.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    window.addEventListener('scroll', updateActiveNavigation);
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector('.nav-bar').offsetHeight;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navHeight = document.querySelector('.nav-bar').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
}

// Theme Functions
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('catSiteTheme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        themeToggle.textContent = '☀️';
    } else {
        document.documentElement.classList.remove('dark');
        themeToggle.textContent = '🌙';
    }
    
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('catSiteTheme', 'light');
            themeToggle.textContent = '🌙';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('catSiteTheme', 'dark');
            themeToggle.textContent = '☀️';
        }
    });
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.nextQuestion = nextQuestion;
window.restartQuiz = restartQuiz;
window.selectAnswer = selectAnswer;
