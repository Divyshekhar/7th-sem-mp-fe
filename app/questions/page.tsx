'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';
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
    <div className="w-[1000px] mx-auto bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20">
      <div className="container mx-auto px-4 py-8">
        
        
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Practice Quiz</h1>
          <Badge variant="outline">{questions.length} Questions</Badge>
        </div>

    
        <div className="space-y-6">
          {questions.map((q, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg leading-relaxed">
                  {index + 1}. {q.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">
                      <Eye className="h-4 w-4 mr-2" />
                      Show Answer
                    </Button>
                  </DialogTrigger>
                  <DialogContent
                    className="max-w-3xl w-full p-0 overflow-hidden 
                               data-[state=open]:animate-none 
                               data-[state=closed]:animate-none"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="p-6 max-h-[80vh] overflow-y-auto"
                    >
                      <DialogHeader>
                        <DialogTitle>Answer</DialogTitle>
                      </DialogHeader>
                      <div className="text-sm leading-relaxed whitespace-pre-line break-words prose prose-sm dark:prose-invert max-w-none">
                        {q.answer}
                      </div>
                    </motion.div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
