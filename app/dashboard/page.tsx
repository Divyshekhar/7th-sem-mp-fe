'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// If you have an Input component, ensure the path is correct. For example:
import { Input } from '../../components/ui/input';
// Or, if the Input component does not exist, create it at 'components/ui/input.tsx' or use a suitable replacement from your UI library.
import { Label } from '@/components/ui/label';
import { Play, BookOpen, Clock, Users } from 'lucide-react';
import { topicsData } from '@/lib/mockData';
import Link from 'next/link';

export default function CategoriesPage() {
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');
  const [questionCount, setQuestionCount] = useState(10);

  const difficulties = ['Easy', 'Medium', 'Hard'] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Choose Your Topic
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select a topic and difficulty level to start your interview preparation journey.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topicsData.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30 group"
                onClick={() => setSelectedTopic(topic)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${topic.color} flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {topic.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">
                    {topic.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {topic.fullName}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {/* <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Total Questions</span>
                      <Badge variant="secondary">
                        {Object.values(topic.questionCounts).reduce((a, b) => a + b, 0)}
                      </Badge>
                    </div> */}
                    {/* <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Easy: {topic.questionCounts.Easy}</span>
                      <span>Medium: {topic.questionCounts.Medium}</span>
                      <span>Hard: {topic.questionCounts.Hard}</span>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Topic Selection Dialog */}
        <Dialog open={!!selectedTopic} onOpenChange={() => setSelectedTopic(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl ${selectedTopic?.color} flex items-center justify-center text-xl`}>
                  {selectedTopic?.icon}
                </div>
                <div>
                  <div className="text-xl">{selectedTopic?.name}</div>
                  <div className="text-sm text-muted-foreground font-normal">
                    {selectedTopic?.fullName}
                  </div>
                </div>
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Difficulty Selection */}
              {/* <div className="space-y-3">
                <Label className="text-sm font-medium">Select Difficulty</Label>
                <div className="grid grid-cols-3 gap-2">
                  {difficulties.map((difficulty) => (
                    <Button
                      key={difficulty}
                      variant={selectedDifficulty === difficulty ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={selectedDifficulty === difficulty ? "bg-gradient-to-r from-emerald-500 to-teal-600" : ""}
                    >
                      {difficulty}
                    </Button>
                  ))}
                </div>

              </div> */}

              {/* Question Count */}
              {/* <div className="space-y-3">
                <Label htmlFor="questionCount" className="text-sm font-medium">
                  Number of Questions
                </Label>
                <Input
                  id="questionCount"
                  type="number"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Math.min(parseInt(e.target.value) || 1, selectedTopic?.questionCounts[selectedDifficulty] || 50))}
                  min="1"
                  max={selectedTopic?.questionCounts[selectedDifficulty]}
                  className="text-center"
                />
              
              </div> */}

              {/* Quiz Info */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-emerald-600" />
                    <span>Questions</span>
                  </div>
                  <span className="font-medium">{questionCount}</span>
                </div>
                {/* <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    <span>Est. Time</span>
                  </div>
                  <span className="font-medium">{Math.ceil(questionCount * 1.5)} min</span>
                </div> */}
                {/* <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-emerald-600" />
                    <span>Difficulty</span>
                  </div>
                 
                 
                </div> */}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href={`/practice?topic=${selectedTopic?.id}&difficulty=${selectedDifficulty}&count=${questionCount}`}
                  onClick={() => setSelectedTopic(null)}
                >
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                    <Play className="w-4 h-4 mr-2" />
                    Start Quiz
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Load Last Session
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}