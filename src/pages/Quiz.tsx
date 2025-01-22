import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const questions = [
  {
    question: "What is Xiaohongshu primarily known as?",
    options: [
      "A messaging app",
      "A lifestyle and shopping platform",
      "A gaming platform",
      "A news website"
    ],
    correctAnswer: 1
  },
  {
    question: "Which content format performs best on Xiaohongshu?",
    options: [
      "Text-only posts",
      "Long-form articles",
      "Photo and video content",
      "Audio podcasts"
    ],
    correctAnswer: 2
  },
  {
    question: "What is a key feature of successful Xiaohongshu content?",
    options: [
      "Formal business tone",
      "Authentic and personal style",
      "Political discussions",
      "News reporting"
    ],
    correctAnswer: 1
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/d42d5b8e-4024-47c6-be55-5c639dfb6fce.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4"
          >
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-coral/90 text-white rounded-full">
              Test Your Knowledge
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Xiaohongshu Quiz
            </h1>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Test your understanding of Xiaohongshu platform basics
            </p>
          </motion.div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16 -mt-16 relative z-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-coral/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-coral text-center">
                  {showResults ? "Quiz Results" : `Question ${currentQuestion + 1} of ${questions.length}`}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!showResults ? (
                  <>
                    <p className="text-lg font-medium mb-4">
                      {questions[currentQuestion].question}
                    </p>
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          className="w-full text-left justify-start hover:bg-coral/10"
                          variant="outline"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <p className="text-2xl font-bold text-coral">
                      Your Score: {score}/{questions.length}
                    </p>
                    <p className="text-gray-600">
                      {score === questions.length 
                        ? "Perfect! You're ready to start your Xiaohongshu journey!"
                        : "Keep learning! Check out our starter guide for more information."}
                    </p>
                    <Button
                      onClick={resetQuiz}
                      className="bg-coral hover:bg-coral/90 text-white"
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;