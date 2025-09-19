import React from 'react';
import { useApp } from '../contexts/AppContext';
import { BookOpen, Brain, User, Trophy } from 'lucide-react';
import { studyContent } from '../data/studyContent';

const HomePage: React.FC = () => {
  const { state, dispatch } = useApp();

  // ✅ Helper: format Date an toàn cho cả Date/string/null
  const formatVNDate = (value: any) => {
    const d = value instanceof Date ? value : value ? new Date(value) : null;
    return d && !isNaN(d.getTime()) ? d.toLocaleDateString('vi-VN') : 'Chưa có';
  };

  const startStudyMode = () => {
    dispatch({ type: 'SET_STUDY_CONTENT', payload: studyContent });
    dispatch({ type: 'SET_SCREEN', payload: 'study' });
  };

  const startQuizMode = () => {
    dispatch({ type: 'SET_SCREEN', payload: 'quiz' });
  };

  const goToProfile = () => {
    dispatch({ type: 'SET_SCREEN', payload: 'profile' });
  };

  const completionRate = Math.round((state.user.studyProgress.sectionsRead.length / 3) * 100);
  const averageScore =
    state.user.quizResults.length > 0
      ? Math.round(
          state.user.quizResults.reduce(
            (sum, result) => sum + (result.score / result.totalQuestions) * 100,
            0
          ) / state.user.quizResults.length
        )
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="p-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Triết Học AI</h1>
            <p className="text-sm text-gray-600">Xin chào, {state.user.username}!</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">
              <Trophy className="w-4 h-4 text-yellow-600" />
              {state.user.totalScore === 0 ? (
                <span className="font-medium text-yellow-800">{state.user.totalScore} điểm</span>
              ) : (
                <span className="font-medium text-yellow-800">{state.user.totalScore + 10} điểm</span>
              )}
            </div>
            <button
              onClick={goToProfile}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 pt-8">
        {/* Current Chapter Info */}
        <div className="mb-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Chương Đang Học</h2>
            <h3 className="text-xl text-indigo-600 font-semibold mb-4">{studyContent.title}</h3>
            <p className="text-gray-600 mb-4">II. Phép biện chứng duy vật - Các quy luật cơ bản</p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Tiến độ học tập</span>
                <span>{completionRate}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${completionRate}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Mode Selection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Chọn Phương Thức Học Tập
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            Học lý thuyết với AI hỗ trợ hoặc kiểm tra kiến thức qua quiz
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Study Mode Card */}
            <div
              onClick={startStudyMode}
              className="group bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Study Mode</h3>
                <p className="text-indigo-50 mb-6 leading-relaxed">
                  Đọc nội dung lý thuyết với sự hỗ trợ của AI. Nhận giải thích,
                  ví dụ thực tiễn và câu hỏi gợi mở để hiểu sâu hơn.
                </p>
                <div className="bg-white/20 rounded-lg p-4 text-sm">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span>📚</span> <span>Nội dung chi tiết</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span>🤖</span> <span>AI hỗ trợ giải thích</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>💡</span> <span>Ví dụ thực tiễn</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Mode Card */}
            <div
              onClick={startQuizMode}
              className="group bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl p-8 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quiz Mode</h3>
                <p className="text-teal-50 mb-6 leading-relaxed">
                  Kiểm tra kiến thức với các câu hỏi đa dạng. Nhận điểm ngay
                  và xem giải thích chi tiết từ AI.
                </p>
                <div className="bg-white/20 rounded-lg p-4 text-sm">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span>❓</span> <span>Câu hỏi đa dạng</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span>⚡</span> <span>Chấm điểm tức thì</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>🎯</span> <span>Giải thích từ AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-4 text-center shadow-md">
            {state.user.totalScore === 0 ? (
              <div className="text-2xl font-bold text-indigo-600">{state.user.totalScore}</div>
            ) : (
              <div className="text-2xl font-bold text-indigo-600">{state.user.totalScore + 10}</div>
            )}
            <div className="text-sm text-gray-600">Tổng Điểm</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-teal-600">{state.user.quizResults.length}</div>
            <div className="text-sm text-gray-600">Quiz Hoàn Thành</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md">
            <div className="text-2xl font-bold text-orange-600">{state.user.level}</div>
            <div className="text-sm text-gray-600">Level</div>
          </div>
        </div>

        {/* Recent Activity */}
        {state.user.quizResults.length > 0 && (
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Hoạt Động Gần Đây</h3>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="space-y-3">
                {state.user.quizResults.slice(-3).reverse().map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Quiz hoàn thành</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">
                        {/* ✅ Dùng formatter an toàn thay cho toLocaleDateString trực tiếp */}
                        {formatVNDate(result.completedAt)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
