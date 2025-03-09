export interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  steps: TutorialStep[];
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
    space: string;
  };
  realWorldApplications: string[];
  quiz: Quiz;
}

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  code?: string;
  visualization?: {
    type: 'array' | 'tree' | 'graph' | '3d';
    data: any;
    highlights?: number[];
  };
}

export interface Quiz {
  id: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  userId: string;
  completedTutorials: string[];
  quizScores: Record<string, number>;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlockedAt: Date;
}