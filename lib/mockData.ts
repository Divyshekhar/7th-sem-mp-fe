import { Question } from './types';

export type Topic = {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  color: string;
  questionCounts: {
    Easy: number;
    Medium: number;
    Hard: number;
  };
};

export const topicsData: Topic[] = [
  {
    id: 'dsa',
    name: 'DSA',
    fullName: 'Data Structures & Algorithms',
    icon: '🧠',
    color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    questionCounts: { Easy: 150, Medium: 200, Hard: 100 }
  },
  {
    id: 'os',
    name: 'OS',
    fullName: 'Operating Systems',
    icon: '💻',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    questionCounts: { Easy: 80, Medium: 120, Hard: 60 }
  },
  {
    id: 'dbms',
    name: 'DBMS',
    fullName: 'Database Management Systems',
    icon: '🗃️',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
    questionCounts: { Easy: 90, Medium: 110, Hard: 50 }
  },
  {
    id: 'coa',
    name: 'COA',
    fullName: 'Computer Organization & Architecture',
    icon: '⚙️',
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    questionCounts: { Easy: 70, Medium: 100, Hard: 40 }
  },
  {
    id: 'cn',
    name: 'CN',
    fullName: 'Computer Networks',
    icon: '🌐',
    color: 'bg-gradient-to-br from-indigo-500 to-blue-600',
    questionCounts: { Easy: 85, Medium: 105, Hard: 45 }
  },
  {
    id: 'oops',
    name: 'OOPS',
    fullName: 'Object-Oriented Programming',
    icon: '🎯',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    questionCounts: { Easy: 75, Medium: 95, Hard: 35 }
  },
  {
    id: 'lr',
    name: 'LR',
    fullName: 'Logical Reasoning',
    icon: '🧩',
    color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    questionCounts: { Easy: 100, Medium: 130, Hard: 70 }
  },
  {
    id: 'aptitude',
    name: 'Aptitude',
    fullName: 'Aptitude & Quantitative',
    icon: '📊',
    color: 'bg-gradient-to-br from-pink-500 to-rose-600',
    questionCounts: { Easy: 120, Medium: 140, Hard: 80 }
  },
  {
    id: 'hr',
    name: 'HR',
    fullName: 'HR Questions',
    icon: '👥',
    color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    questionCounts: { Easy: 60, Medium: 80, Hard: 30 }
  },
  {
    id: 'system-design',
    name: 'System Design',
    fullName: 'System Design Basics',
    icon: '🏗️',
    color: 'bg-gradient-to-br from-slate-500 to-gray-600',
    questionCounts: { Easy: 40, Medium: 60, Hard: 30 }
  }
];

export const sampleQuestions: Question[] = [
  {
    id: '1',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    correctAnswer: 1,
    explanation: 'Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity.',
    topic: 'dsa',
    difficulty: 'Easy',
  },
  {
    id: '2',
    question: 'Which data structure is used to implement recursion?',
    options: ['Queue', 'Stack', 'Linked List', 'Array'],
    correctAnswer: 1,
    explanation: 'Stack is used to implement recursion as it follows LIFO (Last In First Out) principle.',
    topic: 'dsa',
    difficulty: 'Medium',
  },
  // Add more sample questions as needed
];

