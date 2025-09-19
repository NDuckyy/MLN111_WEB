import React, { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { Zap, Trophy, Clock, Target, ArrowLeft, Play } from 'lucide-react';
import { quizQuestions } from '../data/philosophy';

const RivalMode: React.FC = () => {
  const { state, dispatch } = useApp();
  const [timeRemaining, setTimeRemaining] = useState(86400); // 24 hours in seconds
  const [leaderboard] = useState([
    { name: 'Triết Gia Alpha', score: 2850, avatar: '🧠' },
    { name: 'Logic Master', score: 2720, avatar: '⚡' },
    { name: 'Wisdom Seeker', score: 2680, avatar: '🔮' },
    { name: 'AI Challenger', score: 2650, avatar: '🤖' },
    { name: 'Deep Thinker', score: 2580, avatar: '💭' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => prev > 0 ? prev - 1 : 86400);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const goBack = () => {
    dispatch({ type: 'SET_STEP', payload: 'home' });
  };

  const startDailyChallenge = () => {
    const hardQuestions = quizQuestions.filter(q => q.difficulty === 'medium' || q.difficulty === 'hard');
    const selectedQuestions = hardQuestions.slice(0, 5);
    dispatch({ type: 'START_QUIZ', payload: selectedQuestions });
    dispatch({ type: 'SET_STEP', payload: 'quiz' });
  };

  const startQuickBattle = () => {
    const randomQuestions = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 3);
    dispatch({ type: 'START_QUIZ', payload: randomQuestions });
    dispatch({ type: 'SET_STEP', payload: 'quiz' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Header */}
      <header className="p-4 border-b border-red-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-red-700 hover:text-red-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay về trang chủ
          </button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-800">Rival Mode</h1>
            <p className="text-red-600">Thử thách với AI</p>
          </div>
          <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
            <Trophy className="w-4 h-4 text-red-600" />
            <span className="font-medium text-red-800">{state.user.score}</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4">
        {/* Daily Challenge Timer */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Thử Thách Hôm Nay</h2>
          </div>
          <p className="text-red-100 mb-6 text-lg">
            Hoàn thành thử thách trong thời gian quy định để tích điểm cao nhất!
          </p>
          <div className="text-4xl font-mono font-bold mb-6">
            {formatTime(timeRemaining)}
          </div>
          <button
            onClick={startDailyChallenge}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl py-4 px-8 text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <Target className="w-5 h-5" />
            Bắt Đầu Thử Thách (500 điểm)
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Battle Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Battle */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Đấu Nhanh</h3>
                  <p className="text-gray-600">3 câu hỏi - 2 phút</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Thử thách tốc độ với 3 câu hỏi triết học ngẫu nhiên. Trả lời nhanh để được điểm cao!
              </p>
              <button
                onClick={startQuickBattle}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Bắt đầu (50 điểm)
              </button>
            </div>

            {/* Challenge Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Thành Tích Của Bạn</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{state.user.completedQuizzes}</div>
                  <div className="text-sm text-gray-600">Thử thách hoàn thành</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{state.user.dailyStreak}</div>
                  <div className="text-sm text-gray-600">Ngày liên tiếp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{state.user.level}</div>
                  <div className="text-sm text-gray-600">Cấp độ</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{Math.floor(state.user.score / 10)}</div>
                  <div className="text-sm text-gray-600">Thứ hạng</div>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white rounded-2xl shadow-lg border border-red-100">
            <div className="p-6 border-b border-red-100">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Bảng Xếp Hạng
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {leaderboard.map((player, index) => (
                <div key={index} className={`flex items-center gap-3 p-3 rounded-xl ${
                  index < 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : 'bg-gray-50'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    index === 0 ? 'bg-yellow-400 text-white' :
                    index === 1 ? 'bg-gray-400 text-white' :
                    index === 2 ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="text-2xl">{player.avatar}</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{player.name}</div>
                    <div className="text-sm text-gray-600">{player.score} điểm</div>
                  </div>
                </div>
              ))}
              
              {/* User's position */}
              <div className="border-t border-gray-200 pt-3 mt-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-red-50 border border-red-200">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
                    {Math.floor(state.user.score / 10) || 999}
                  </div>
                  <div className="text-2xl">👤</div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{state.user.username}</div>
                    <div className="text-sm text-gray-600">{state.user.score} điểm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RivalMode;