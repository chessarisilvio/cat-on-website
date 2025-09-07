import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

interface QuizQuestion {
  question: string;
  answers: string[];
  correctIndex: number;
  explanation: string;
}

const CatQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);

  const quizQuestions: QuizQuestion[] = [
    {
      question: "Which wild species does the domestic cat mainly descend from?",
      answers: ["Felis silvestris lybica", "Panthera leo", "Lynx lynx", "Felis chaus"],
      correctIndex: 0,
      explanation: "Domestication mainly derives from the African wildcat, Felis silvestris lybica."
    },
    {
      question: "What are cat whiskers mainly used for?",
      answers: ["Decoration", "Balance and spatial perception", "Hearing", "Thermoregulation"],
      correctIndex: 1,
      explanation: "Whiskers are tactile receptors that help perceive spaces and air movements."
    },
    {
      question: "Why do cats see well at twilight?",
      answers: ["Always dilated pupils", "Eye structure adapted to low light", "Larger eyes", "They use echolocation"],
      correctIndex: 1,
      explanation: "The retina and tapetum lucidum improve vision in low light conditions."
    },
    {
      question: "What does a high and relaxed tail often indicate?",
      answers: ["Fear", "Aggression", "Curiosity/friendship", "Hunger"],
      correctIndex: 2,
      explanation: "A high and soft tail is often a sign of a friendly attitude."
    },
    {
      question: "How many hours does a cat usually sleep per day?",
      answers: ["4–6", "8–10", "12–16", "20–22"],
      correctIndex: 2,
      explanation: "Most cats sleep between 12 and 16 hours daily."
    },
    {
      question: "Which culture associated cats with the goddess Bastet?",
      answers: ["Greeks", "Egyptians", "Maya", "Vikings"],
      correctIndex: 1,
      explanation: "In ancient Egypt, cats were linked to goddess Bastet, symbol of home and protection."
    },
    {
      question: "Cat claws are…",
      answers: ["Non-retractable", "Retractable", "Always exposed", "Made of cartilage"],
      correctIndex: 1,
      explanation: "Cats can extend and retract their claws as needed."
    },
    {
      question: "The Maneki-neko is…",
      answers: ["A type of wild cat", "A Nordic deity", "A Japanese good luck charm", "A hairless cat breed"],
      correctIndex: 2,
      explanation: "The Maneki-neko is the famous Japanese good fortune figurine."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === quizQuestions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }

    if (!showExplanation) {
      setShowExplanation(true);
      return;
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return { message: "Feline expert! 🏆", emoji: "🐱‍👤", color: "text-green-600" };
    if (percentage >= 60) return { message: "Great cat friend! 😸", emoji: "😺", color: "text-blue-600" };
    return { message: "Keep discovering! 🐾", emoji: "🐱", color: "text-orange-600" };
  };

  const progress = ((currentQuestion + (showExplanation ? 1 : 0)) / quizQuestions.length) * 100;

  if (quizCompleted) {
    const scoreInfo = getScoreMessage();
    return (
      <section id="quiz" className="py-20 px-4 cat-quiz-bg">
        <div className="max-w-4xl mx-auto">
          <Card className="cat-card text-center">
            <CardHeader>
              <div className="text-6xl mb-4">{scoreInfo.emoji}</div>
              <CardTitle className="text-3xl text-white">Quiz Complete!</CardTitle>
              <CardDescription className="text-xl text-white/90">
                {scoreInfo.message}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-4xl font-bold text-white mb-2">
                  {score}/{quizQuestions.length}
                </div>
                <p className="text-white/80">Correct Answers</p>
              </div>
              
              <div className="text-left space-y-4 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white text-center">Answer Summary</h3>
                {quizQuestions.map((q, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4">
                    <p className="font-medium text-white mb-2">{q.question}</p>
                    <div className="flex items-center gap-2">
                      <span className={userAnswers[index] === q.correctIndex ? "text-green-300" : "text-red-300"}>
                        {userAnswers[index] === q.correctIndex ? "✅" : "❌"}
                      </span>
                      <span className="text-white/80">
                        {q.answers[q.correctIndex]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  onClick={resetQuiz}
                  className="cat-button-accent"
                >
                  🔄 Try Again
                </Button>
                <Button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Cat World Quiz',
                        text: `I scored ${score}/${quizQuestions.length} on the cat quiz! ${scoreInfo.message}`,
                        url: window.location.href
                      });
                    }
                  }}
                  className="cat-button-secondary"
                >
                  📱 Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 px-4 cat-quiz-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Feline Quiz 🧠
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Test your knowledge about cats!
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-white/80 text-sm mb-2">
            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
            <span>Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        <Card className="cat-card">
          <CardHeader>
            <CardTitle className="text-2xl">
              {quizQuestions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              {quizQuestions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`p-4 rounded-lg text-left transition-all duration-300 border-2 ${
                    selectedAnswer === index
                      ? showExplanation
                        ? index === quizQuestions[currentQuestion].correctIndex
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                          : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-primary bg-primary/10'
                      : showExplanation && index === quizQuestions[currentQuestion].correctIndex
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : 'border-border hover:border-primary/50 hover:bg-muted'
                  } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold">{String.fromCharCode(65 + index)}.</span>
                    <span>{answer}</span>
                    {showExplanation && index === quizQuestions[currentQuestion].correctIndex && (
                      <span className="text-green-600 ml-auto">✅</span>
                    )}
                    {showExplanation && selectedAnswer === index && index !== quizQuestions[currentQuestion].correctIndex && (
                      <span className="text-red-600 ml-auto">❌</span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">💡 Explanation:</h4>
                <p className="text-muted-foreground">
                  {quizQuestions[currentQuestion].explanation}
                </p>
              </div>
            )}

            <div className="flex justify-between items-center pt-4">
              <div className="text-sm text-muted-foreground">
                {selectedAnswer !== null ? (
                  showExplanation ? 
                    currentQuestion + 1 < quizQuestions.length ? "Ready for the next one?" : "Complete the quiz!"
                    : "Click to see the explanation"
                ) : "Select an answer"}
              </div>
              <Button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="cat-button-accent"
              >
                {!showExplanation ? "Confirm" : 
                 currentQuestion + 1 < quizQuestions.length ? "Next →" : "Finish Quiz"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CatQuiz;