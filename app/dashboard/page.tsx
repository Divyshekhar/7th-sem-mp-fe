'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Play } from 'lucide-react';
import { topicsData } from '@/lib/subjects';
import Link from 'next/link';

export default function CategoriesPage() {
  
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  // const [selectedDifficulty, setSelectedDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');

  // const difficulties = ['Easy', 'Medium', 'Hard'] as const;

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
            Choose Your Subject
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select a subject and start your interview preparation journey.
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Topic Selection Dialog */}
        <Dialog open={!!selectedTopic} onOpenChange={() => setSelectedTopic(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center space-x-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className={`w-12 h-12 rounded-xl ${selectedTopic?.color} flex items-center justify-center text-xl`}
                  >
                    {selectedTopic?.icon}
                  </motion.div>
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl"
                    >
                      {selectedTopic?.name}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm text-muted-foreground font-normal"
                    >
                      {selectedTopic?.fullName}
                    </motion.div>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Quiz Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-muted/50 rounded-lg p-2 space-y-1"
                >
                  {/* Add info here if needed */}
                </motion.div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href="/questions" passHref>
                    <Button asChild className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center justify-center"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Generate new set of questions!
                      </motion.span>
                    </Button>
                  </Link>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button variant="outline" className="w-full">
                      Pick up where you left off.
                    </Button>
                  </motion.div>
                </div>
              </div>
            </DialogContent>
          </motion.div>
        </Dialog>
      </div>
    </div>
  );
}