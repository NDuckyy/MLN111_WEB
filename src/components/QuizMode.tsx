import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { ArrowLeft, Play, Brain, Trophy, Target } from 'lucide-react';
import { quizQuestions } from '../data/studyContent';

const QuizMode: React.FC = () => {
  const { state, dispatch } = useApp();
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');

  // ✅ Helper: format Date an toàn (Date | string | null)
  const formatVNDate = (value: any) => {
    const d = value instanceof Date ? value : value ? new Date(value) : null;
    return d && !isNaN(d.getTime()) ? d.toLocaleDateString('vi-VN') : 'Chưa có';
  };

  const goBack = () => {
    dispatch({ type: 'SET_SCREEN', payload: 'home' });
  };

  const startQuiz = (difficulty: 'all' | 'easy' | 'medium' | 'hard' = 'all') => {
    let filteredQuestions = quizQuestions;
    if (difficulty !== 'all') {
      filteredQuestions = quizQuestions.filter(q => q.difficulty === difficulty);
    }
    const shuffledQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);
    dispatch({ type: 'START_QUIZ', payload: shuffledQuestions });
    dispatch({ type: 'SET_SCREEN', payload: 'quiz' });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const recentResults = state.user.quizResults.slice(-3).reverse();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50">
      {/* Header */}
      <header className="p-4 border-b border-teal-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-teal-700 hover:text-teal-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay về trang chủ
          </button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-teal-800">Quiz Mode</h1>
            <p className="text-teal-600">Kiểm tra kiến thức</p>
          </div>
          <div className="flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full">
            <Trophy className="w-4 h-4 text-teal-600" />
            <span className="font-medium text-teal-800">{state.user.totalScore}</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4">
        {/* Quiz Options */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Chọn Loại Quiz
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            Kiểm tra kiến thức về chủ nghĩa duy vật biện chứng
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* All */}
            <div
              onClick={() => startQuiz('all')}
              className="group bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tất Cả</h3>
                <p className="text-teal-50 text-sm mb-4">
                  {quizQuestions.length} câu hỏi
                </p>
                <div className="bg-white/20 rounded-lg p-2 text-xs">Tổng hợp tất cả mức độ</div>
              </div>
            </div>

            {/* Easy */}
            <div
              onClick={() => startQuiz('easy')}
              className="group bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dễ</h3>
                <p className="text-green-50 text-sm mb-4">
                  {quizQuestions.filter(q => q.difficulty === 'easy').length} câu hỏi
                </p>
                <div className="bg-white/20 rounded-lg p-2 text-xs">Khái niệm cơ bản</div>
              </div>
            </div>

            {/* Medium */}
            <div
              onClick={() => startQuiz('medium')}
              className="group bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trung Bình</h3>
                <p className="text-yellow-50 text-sm mb-4">
                  {quizQuestions.filter(q => q.difficulty === 'medium').length} câu hỏi
                </p>
                <div className="bg-white/20 rounded-lg p-2 text-xs">Hiểu biết sâu hơn</div>
              </div>
            </div>

            {/* Hard */}
            <div
              onClick={() => startQuiz('hard')}
              className="group bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Khó</h3>
                <p className="text-red-50 text-sm mb-4">
                  {quizQuestions.filter(q => q.difficulty === 'hard').length} câu hỏi
                </p>
                <div className="bg-white/20 rounded-lg p-2 text-xs">Thử thách bản thân</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Preview & Recent */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Question Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Xem Trước Câu Hỏi</h3>
              <div className="space-y-4">
                {quizQuestions.slice(0, 3).map((question, index) => (
                  <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-gray-500">Câu {index + 1}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                          question.difficulty
                        )}`}
                      >
                        {question.difficulty === 'easy'
                          ? 'Dễ'
                          : question.difficulty === 'medium'
                          ? 'Trung bình'
                          : 'Khó'}
                      </span>
                    </div>
                    <p className="text-gray-800 font-medium mb-2">{question.question}</p>
                    <p className="text-sm text-gray-600">
                      Loại:{' '}
                      {question.type === 'multiple_choice'
                        ? 'Trắc nghiệm'
                        : question.type === 'true_false'
                        ? 'Đúng/Sai'
                        : 'Tự luận ngắn'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Recent Results */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Thống Kê</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quiz đã làm:</span>
                  <span className="font-bold text-teal-600">{state.user.quizResults.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tổng điểm:</span>
                  <span className="font-bold text-teal-600">{state.user.totalScore}</span>
                </div>
              </div>
            </div>

            {/* Recent Results */}
            {recentResults.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quiz Gần Đây</h3>
                <div className="space-y-3">
                  {recentResults.map((result, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-800">{result.score} điểm</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          {/* ✅ dùng formatter an toàn thay cho toLocaleDateString trực tiếp */}
                          {formatVNDate(result.completedAt)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips */}
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4">💡 Mẹo Làm Quiz</h3>
              <ul className="space-y-2 text-sm text-blue-50">
                <li>• Đọc kỹ câu hỏi trước khi chọn đáp án</li>
                <li>• Chú ý đến từ khóa quan trọng</li>
                <li>• Xem giải thích sau mỗi câu để học thêm</li>
                <li>• Làm quiz thường xuyên để ghi nhớ lâu</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizMode;
