import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";
import { Award } from "lucide-react";

interface Question {
  title: string;
  hook: string;
  body: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    title: "Xiaohongshu Basics",
    hook: "What is the main content format on Xiaohongshu?",
    body: "Is it photos, videos, or blogs?",
    options: ["Photos", "Videos", "Blogs"],
    correctAnswer: 0, // Index of "Photos" in the options array
  },
  {
    title: "Influencer Trivia",
    hook: "Which influencer is most popular on Xiaohongshu?",
    body: "A lifestyle, beauty, or food creator?",
    options: ["Beauty creator", "Food creator", "Lifestyle creator"],
    correctAnswer: 0, // Index of "Beauty creator" in the options array
  },
  {
    title: "Features Spotlight",
    hook: "Which feature helps users shop directly?",
    body: "Is it \"Notes,\" \"Store,\" or \"Live\"?",
    options: ["Notes", "Store", "Live"],
    correctAnswer: 1, // Index of "Store" in the options array
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: "Well done! That's the right answer.",
      });
    } else {
      toast({
        title: "Incorrect",
        description: `The correct answer was: ${questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}`,
        variant: "destructive",
      });
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
              Test your knowledge about Xiaohongshu
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
                  {showResults ? "Quiz Results" : questions[currentQuestion].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!showResults ? (
                  <>
                    <div className="space-y-4">
                      <p className="text-xl font-medium mb-2">
                        {questions[currentQuestion].hook}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {questions[currentQuestion].body}
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
                    </div>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <Award className="h-16 w-16 mx-auto text-coral" />
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