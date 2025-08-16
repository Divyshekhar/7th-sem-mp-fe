

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags?: string[];
}



