import React from 'react';
import { useApp } from '../contexts/AppContext';
import { User, Trophy, BookOpen, Brain, ArrowLeft, Calendar, Target } from 'lucide-react';

const ProfileScreen: React.FC = () => {
  const { state, dispatch } = useApp();

  const goBack = () => {
    dispatch({ type: 'SET_SCREEN', payload: 'home' });
  };

  const averageScore = state.user.quizResults.length > 0
    ? Math.round(state.user.quizResults.reduce((sum, result) => sum + (result.score / result.totalQuestions * 100), 0) / state.user.quizResults.length)
    : 0;

  const totalQuestionsAnswered = state.user.quizResults.reduce((sum, result) => sum + result.totalQuestions, 0);
  const totalCorrectAnswers = state.user.quizResults.reduce((sum, result) => sum + result.score, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="p-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay về trang chủ
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Hồ Sơ Học Viên</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4 space-y-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{state.user.username}</h2>
              <p className="text-gray-600 mb-4">Học viên triết học AI</p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span>Level {state.user.level}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  <span>{state.user.totalScore} điểm</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Học lần cuối: {state.user.studyProgress.lastStudied.toLocaleDateString('vi-VN')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Study Progress */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-semibold text-gray-800 mb-4">Tiến Trình Học Tập</h3>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Chương đang học</span>
                <span className="font-medium text-indigo-600">Chủ nghĩa duy vật biện chứng</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Phần đã đọc</span>
                <span className="font-medium">{state.user.studyProgress.sectionsRead.length}/3 phần</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(state.user.studyProgress.sectionsRead.length / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Thống Kê Học Tập</h3>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl font-bold text-blue-600">{state.user.totalScore}</div>
              <div className="text-sm text-gray-600">Tổng điểm</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
              <div className="text-3xl font-bold text-teal-600">{state.user.quizResults.length}</div>
              <div className="text-sm text-gray-600">Quiz hoàn thành</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-3xl font-bold text-orange-600">{totalQuestionsAnswered}</div>
              <div className="text-sm text-gray-600">Câu đã trả lời</div>
            </div>
          </div>

          {/* Detailed Stats */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-teal-600" />
                Kết Quả Quiz
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tổng câu hỏi:</span>
                  <span className="font-semibold">{totalQuestionsAnswered}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Trả lời đúng:</span>
                  <span className="font-semibold text-green-600">{state.user.quizResults.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tỷ lệ chính xác:</span>
                  <span className="font-semibold text-teal-600">
                    {totalQuestionsAnswered > 0 ? Math.round((state.user.quizResults.length / totalQuestionsAnswered) * 100) : 0}%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                Tiến Trình Học
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Chương hoàn thành:</span>
                  <span className="font-semibold">{state.user.completedChapters.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Thời gian học:</span>
                  <span className="font-semibold">{state.user.studyProgress.timeSpent} phút</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level hiện tại:</span>
                  <span className="font-semibold text-purple-600">Level {state.user.level}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Quiz Results */}
        {state.user.quizResults.length > 0 && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Kết Quả Quiz Gần Đây</h3>
            <div className="space-y-4">
              {state.user.quizResults.slice(-5).reverse().map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        Quiz Triết Học
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">
                      {result.completedAt.toLocaleDateString('vi-VN')} • {result.completedAt.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Study Goals */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-4">Mục Tiêu Học Tập</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-sm text-indigo-100">Hoàn thành chương</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold mb-2">80%</div>
              <div className="text-sm text-indigo-100">Độ chính xác quiz</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold mb-2">500</div>
              <div className="text-sm text-indigo-100">Điểm mục tiêu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;