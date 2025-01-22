import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";
import { Upload, Award, Loader2 } from "lucide-react";
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
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://auwvgimsiynkfmzdbpug.supabase.co/functions/v1/process-excel', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
        }
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to process file');
      }

      setQuestions(data.questions);
      setCurrentQuestion(0);
      setScore(0);
      setShowResults(false);
      
      toast({
        title: "Success",
        description: "Quiz questions loaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process the Excel file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

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
              Upload your quiz Excel file or take our default quiz
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
            <Card className="border-coral/20 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-coral text-center">Upload Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="excel-upload" className="cursor-pointer">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-coral transition-colors">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Upload Excel file with quiz questions</p>
                    <Input
                      id="excel-upload"
                      type="file"
                      accept=".xlsx,.xls"
                      className="hidden"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                    />
                  </div>
                </Label>
              </CardContent>
            </Card>

            {questions.length > 0 && (
              <Card className="border-coral/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-coral text-center">
                    {showResults ? "Quiz Results" : `Question ${currentQuestion + 1} of ${questions.length}`}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isUploading ? (
                    <div className="text-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin mx-auto text-coral" />
                      <p className="mt-2 text-gray-600">Processing quiz file...</p>
                    </div>
                  ) : !showResults ? (
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
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;