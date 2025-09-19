import React, { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { Clock, CheckCircle, XCircle, ArrowRight, Home, Lightbulb } from 'lucide-react';

const QuizScreen: React.FC = () => {
  const { state, dispatch } = useApp();
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0); // ✅ thêm state đếm số câu đúng

  const currentQuestion = state.currentQuiz[state.currentQuestionIndex];
  const isLastQuestion = state.currentQuestionIndex >= state.currentQuiz.length - 1;

  useEffect(() => {
    if (!quizComplete && timeLeft > 0 && state.currentQuiz.length > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0 && !quizComplete) {
      handleQuizComplete();
    }
  }, [timeLeft, quizComplete, state.currentQuiz.length]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answerIndex: number | string) => {
    dispatch({ type: 'SELECT_ANSWER', payload: answerIndex });
  };

  const pointsByDifficulty = (difficulty?: string) =>
    difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 30;

  const handleNext = () => {
    let isCorrect = false;

    if (currentQuestion.type === 'multiple_choice') {
      isCorrect = state.selectedAnswer === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'true_false') {
      isCorrect = state.selectedAnswer === currentQuestion.correctAnswer;
    } else {
      // short answer (demo)
      isCorrect = true;
    }

    if (isCorrect) {
      setCorrectCount(prev => prev + 1); // ✅ tăng số câu đúng
      const points = pointsByDifficulty(currentQuestion.difficulty);
      setScore(prev => prev + points);
    }

    if (isLastQuestion) {
      handleQuizComplete();
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  };

  const showExplanation = () => {
    dispatch({ type: 'SHOW_EXPLANATION' });
  };

  const handleQuizComplete = () => {
    setQuizComplete(true);
    dispatch({ type: 'COMPLETE_QUIZ', payload: { score, total: state.currentQuiz.length } });
  };

  const goHome = () => {
    dispatch({ type: 'RESET_QUIZ' });
    dispatch({ type: 'SET_SCREEN', payload: 'home' });
  };

  const retakeQuiz = () => {
    setQuizComplete(false);
    setScore(0);
    setCorrectCount(0); // ✅ reset số câu đúng
    setTimeLeft(600);
    dispatch({ type: 'START_QUIZ', payload: state.currentQuiz });
  };

  if (quizComplete) {
    // ✅ tổng điểm tối đa tính theo độ khó từng câu
    const totalPossible = state.currentQuiz.reduce(
      (sum: number, q: any) => sum + pointsByDifficulty(q.difficulty),
      0
    );
    const percentage = totalPossible > 0 ? Math.round((score / totalPossible) * 100) : 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full text-center">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              percentage >= 70 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
          >
            {percentage >= 70 ? (
              <CheckCircle className="w-10 h-10 text-white" />
            ) : (
              <XCircle className="w-10 h-10 text-white" />
            )}
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {percentage >= 70 ? 'Xuất sắc!' : percentage >= 50 ? 'Khá tốt!' : 'Cần cố gắng thêm!'}
          </h2>

          <div className="text-5xl font-bold text-teal-600 mb-2">{score}</div>
          <p className="text-gray-600 mb-6">điểm đã kiếm được</p>

          <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Tổng câu hỏi:</span>
              <span className="font-semibold">{state.currentQuiz.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Trả lời đúng:</span>
              <span className="font-semibold text-green-600">{correctCount}</span> {/* ✅ đúng thật */}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Điểm tối đa có thể đạt:</span>
              <span className="font-semibold">{totalPossible}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">% hoàn thành:</span>
              <span className="font-semibold">{percentage}%</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={retakeQuiz}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-xl transition-colors"
            >
              Làm Lại Quiz
            </button>
            <button
              onClick={goHome}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              Về Trang Chủ
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải câu hỏi...</p>
        </div>
      </div>
    );
  }

  const isCorrectAnswer = (index: number | string) => {
    return index === currentQuestion.correctAnswer;
  };

  const isSelectedAnswer = (index: number | string) => {
    return state.selectedAnswer === index;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Quiz Header */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Quiz Triết Học</h1>
              <p className="text-gray-600">Câu {state.currentQuestionIndex + 1} / {state.currentQuiz.length}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-red-600">
                <Clock className="w-5 h-5" />
                <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
              </div>
              <div className="text-teal-600 font-bold">{score} điểm</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-teal-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((state.currentQuestionIndex + 1) / state.currentQuiz.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentQuestion.difficulty === 'easy'
                    ? 'bg-green-100 text-green-800'
                    : currentQuestion.difficulty === 'medium'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {currentQuestion.difficulty === 'easy'
                  ? 'Dễ'
                  : currentQuestion.difficulty === 'medium'
                  ? 'Trung bình'
                  : 'Khó'}
              </span>
              <span className="text-sm text-gray-500">
                {currentQuestion.type === 'multiple_choice'
                  ? 'Trắc nghiệm'
                  : currentQuestion.type === 'true_false'
                  ? 'Đúng/Sai'
                  : 'Tự luận ngắn'}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 leading-tight">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.type === 'short_answer' ? (
              <textarea
                value={(state.selectedAnswer as string) || ''}
                onChange={(e) => handleAnswer(e.target.value)}
                placeholder="Nhập câu trả lời của bạn..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none resize-none h-32"
                disabled={state.showExplanation}
              />
            ) : (
              currentQuestion.options?.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={state.showExplanation}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    isSelectedAnswer(index)
                      ? state.showExplanation
                        ? isCorrectAnswer(index)
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-red-500 bg-red-50 text-red-800'
                        : 'border-teal-500 bg-teal-50 text-teal-800'
                      : state.showExplanation && isCorrectAnswer(index)
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        isSelectedAnswer(index)
                          ? state.showExplanation
                            ? isCorrectAnswer(index)
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                            : 'bg-teal-500 text-white'
                          : state.showExplanation && isCorrectAnswer(index)
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {currentQuestion.type === 'true_false'
                        ? index === 0
                          ? 'Đ'
                          : 'S'
                        : String.fromCharCode(65 + index)}
                    </div>
                    <span className="font-medium">{option}</span>
                    {state.showExplanation && (
                      <>
                        {isCorrectAnswer(index) && <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />}
                        {isSelectedAnswer(index) && !isCorrectAnswer(index) && (
                          <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                        )}
                      </>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Explanation */}
          {state.showExplanation && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Giải thích từ AI:
              </h3>
              <p className="text-blue-700 leading-relaxed">{currentQuestion.aiExplanation}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between">
            <div></div>
            <div className="space-x-3">
              {state.selectedAnswer !== null && !state.showExplanation && (
                <button
                  onClick={showExplanation}
                  className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <Lightbulb className="w-4 h-4" />
                  Xem giải thích
                </button>
              )}
              {(state.showExplanation || state.selectedAnswer !== null) && (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors flex items-center gap-2"
                >
                  {isLastQuestion ? 'Hoàn thành' : 'Tiếp theo'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
