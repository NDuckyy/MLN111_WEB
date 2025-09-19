import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User, StudyContent, QuizQuestion, AIResponse } from '../types';

interface AppState {
  user: User;
  currentScreen: 'welcome' | 'home' | 'study' | 'quiz' | 'profile' | 'results';
  currentStudyContent: StudyContent | null;
  currentQuiz: QuizQuestion[];
  currentQuestionIndex: number;
  selectedAnswer: number | string | null;
  showExplanation: boolean;
  aiResponses: AIResponse[];
  quizScore: number;
  isLoading: boolean;
}

type AppAction = 
  | { type: 'SET_SCREEN'; payload: AppState['currentScreen'] }
  | { type: 'SET_STUDY_CONTENT'; payload: StudyContent }
  | { type: 'START_QUIZ'; payload: QuizQuestion[] }
  | { type: 'SELECT_ANSWER'; payload: number | string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'SHOW_EXPLANATION' }
  | { type: 'ADD_AI_RESPONSE'; payload: AIResponse }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'COMPLETE_QUIZ'; payload: { score: number; total: number } }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'RESET_QUIZ' };

const initialUser: User = {
  username: 'Học Viên Triết Học',
  studyProgress: {
    currentChapter: 'chuong-2-chu-nghia-duy-vat-bien-chung',
    sectionsRead: [],
    timeSpent: 0,
    lastStudied: new Date()
  },
  quizResults: [],
  totalScore: 0,
  completedChapters: [],
  level: 1
};

const initialState: AppState = {
  user: initialUser,
  currentScreen: 'welcome',
  currentStudyContent: null,
  currentQuiz: [],
  currentQuestionIndex: 0,
  selectedAnswer: null,
  showExplanation: false,
  aiResponses: [],
  quizScore: 0,
  isLoading: false
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, currentScreen: action.payload };
    case 'SET_STUDY_CONTENT':
      return { ...state, currentStudyContent: action.payload };
    case 'START_QUIZ':
      return {
        ...state,
        currentQuiz: action.payload,
        currentQuestionIndex: 0,
        selectedAnswer: null,
        showExplanation: false,
        quizScore: 0
      };
    case 'SELECT_ANSWER':
      return { ...state, selectedAnswer: action.payload };
    case 'SHOW_EXPLANATION':
      return { ...state, showExplanation: true };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswer: null,
        showExplanation: false
      };
    case 'ADD_AI_RESPONSE':
      return {
        ...state,
        aiResponses: [...state.aiResponses, action.payload]
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    case 'COMPLETE_QUIZ':
      const newQuizResult = {
        chapterId: state.currentStudyContent?.id || 'unknown',
        score: action.payload.score,
        totalQuestions: action.payload.total,
        completedAt: new Date(),
        timeSpent: 0
      };
      return {
        ...state,
        user: {
          ...state.user,
          quizResults: [...state.user.quizResults, newQuizResult],
          totalScore: state.user.totalScore + action.payload.score
        },
        quizScore: action.payload.score
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'RESET_QUIZ':
      return {
        ...state,
        currentQuiz: [],
        currentQuestionIndex: 0,
        selectedAnswer: null,
        showExplanation: false,
        quizScore: 0
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const savedData = localStorage.getItem('philosophy-study-app');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      dispatch({ type: 'UPDATE_USER', payload: parsed.user });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('philosophy-study-app', JSON.stringify({
      user: state.user
    }));
  }, [state.user]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};