import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Award, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        console.log('Fetching questions...');
        // Fetch the latest Excel file from the excel_instructions table
        const { data: fileData, error: fileError } = await supabase
          .from('excel_instructions')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(1);

        if (fileError) {
          console.error('File fetch error:', fileError);
          throw fileError;
        }
        
        if (!fileData || fileData.length === 0) {
          console.error('No quiz file found');
          throw new Error('No quiz file found');
        }

        console.log('File data:', fileData[0]);
        const filePath = fileData[0].file_path;

        // Process the Excel file using our edge function
        const { data, error } = await supabase.functions.invoke('process-excel', {
          body: { filePath },
        });

        if (error) {
          console.error('Process excel error:', error);
          throw error;
        }

        if (!data || !data.questions) {
          console.error('No questions in response:', data);
          throw new Error('Failed to process quiz file');
        }

        console.log('Processed questions:', data.questions);
        setQuestions(data.questions);
        toast({
          title: "Success",
          description: "Quiz questions loaded successfully!",
        });
      } catch (error) {
        console.error('Error loading quiz:', error);
        toast({
          title: "Error",
          description: "Failed to load quiz questions. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [toast]);

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
            {isLoading ? (
              <Card className="border-coral/20 shadow-lg">
                <CardContent className="text-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto text-coral" />
                  <p className="mt-2 text-gray-600">Loading quiz questions...</p>
                </CardContent>
              </Card>
            ) : questions.length > 0 ? (
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
            ) : (
              <Card className="border-coral/20 shadow-lg">
                <CardContent className="text-center py-8">
                  <p className="text-gray-600">No quiz questions available. Please try again later.</p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;