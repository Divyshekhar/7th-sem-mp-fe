'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, RefreshCcw } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Question = {
  question: string;
  answer: string;
};

// Generate a long dummy text (~1000 words)
const longText = `
Here is a very detailed explanation containing a mix of text and code.
This answer is intentionally very long to test scrolling, wrapping, and formatting inside the modal.
We want to ensure that nothing overflows, everything wraps properly, and code blocks look clean.

Example JavaScript function:

\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10)); // 55
\`\`\`

Now, some long filler text to simulate a 1000-word descriptive answer:
${"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(50)}
${"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ".repeat(50)}
${"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ".repeat(50)}
${"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ".repeat(50)}
${"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ".repeat(50)}
`;

const demoQuestions: Question[] = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
  { 
    question: "Give a very detailed explanation with code (demo ~1000 words).", 
    answer: longText 
  },
  { question: "Which element has the symbol O?", answer: "Oxygen" },
];

export default function PracticeUI() {
  const [questions, setQuestions] = useState<Question[]>(demoQuestions);

  // const getNewQuestions = () => {
  //   // For now just resetting with dummy new questions
  //   setQuestions([
  //     { question: "What is 2 + 2?", answer: "4" },
  //     { question: "What is the boiling point of water?", answer: "100°C" },
  //     { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
  //     { question: "What is the speed of light?", answer: "299,792,458 m/s" },
  //   ]);
  // };

  useEffect(() => {
    // Example for API fetching
    /*
    async function fetchData() {
      try {
        const res = await fetch('/api/questions'); 
        const data = await res.json();
        setQuestions(data);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
      }
    }
    fetchData();
    */
  }, []);

return (
    <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20 min-h-screen">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="py-6 sm:py-10">

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
            <h1 className="text-xl sm:text-2xl font-bold">Practice Quiz</h1>
            <Badge variant="outline" className="self-start sm:self-auto">
              {questions.length} Questions
            </Badge>
          </div>

          {/* Questions */}
          <div className="space-y-4 sm:space-y-6">
            {questions.map((q, index) => (
              <Card key={index} className="border-0 shadow-md sm:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg leading-relaxed">
                    {index + 1}. {q.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary" size="sm" className="sm:size-default">
                        <Eye className="h-4 w-4 mr-1 sm:mr-2" />
                        Show Answer
                      </Button>
                    </DialogTrigger>
                    <DialogContent
                      className="max-w-[95vw] sm:max-w-2xl md:max-w-3xl w-full p-0 overflow-hidden 
                                 data-[state=open]:animate-none 
                                 data-[state=closed]:animate-none"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto"
                      >
                        <DialogHeader>
                          <DialogTitle className="text-base sm:text-lg">Answer</DialogTitle>
                        </DialogHeader>
                        <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line break-words prose prose-sm dark:prose-invert max-w-none">
                          {q.answer}
                        </div>
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Get New Questions Button */}
          <div className="flex justify-center mt-8 sm:mt-10">
            <Button className="flex items-center gap-2 text-sm sm:text-base px-3 sm:px-4 py-2">
              <RefreshCcw className="h-4 w-4" />
              Get New Questions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
