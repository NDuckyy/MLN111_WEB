export interface User {
  username: string;
  studyProgress: StudyProgress;
  quizResults: QuizResult[];
  totalScore: number;
  completedChapters: string[];
  level: number;
}

export interface StudyProgress {
  currentChapter: string;
  sectionsRead: string[];
  timeSpent: number; // in minutes
  lastStudied: Date;
}

export interface QuizResult {
  chapterId: string;
  score: number;
  totalQuestions: number;
  completedAt: Date;
  timeSpent: number;
}

export interface StudyContent {
  id: string;
  title: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
  keyPoints: string[];
  examples: string[];
  relatedConcepts: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple_choice' | 'true_false' | 'short_answer';
  options?: string[];
  correctAnswer: number | string;
  aiExplanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  relatedSection: string;
}

export interface AIResponse {
  type: 'explanation' | 'example' | 'summary' | 'question';
  content: string;
  relatedConcepts?: string[];
}