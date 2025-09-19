import React, { useEffect, useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { BookOpen, Brain, Sparkles } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  const { dispatch } = useApp();
  const [isVisible, setIsVisible] = useState(false);

  const philosophyQuotes = [
    {
      text: "Thực tiễn là tiêu chuẩn của chân lý",
      author: "V.I. Lenin"
    },
    {
      text: "Triết học không chỉ giải thích thế giới mà còn thay đổi thế giới",
      author: "Karl Marx"
    },
    {
      text: "Không có gì là bất biến, mọi thứ đều vận động và phát triển",
      author: "Heraclitus"
    }
  ];

  const [currentQuote] = useState(
    philosophyQuotes[Math.floor(Math.random() * philosophyQuotes.length)]
  );

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const handleStart = () => {
    setIsVisible(false);
    setTimeout(() => {
      dispatch({ type: 'SET_SCREEN', payload: 'home' });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-700 flex items-center justify-center p-4">
      <div className={`max-w-4xl w-full text-center transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Logo and Title */}
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Triết Học AI
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light">
            Học Lý Thuyết & Kiểm Tra Kiến Thức
          </p>
        </div>

        {/* Philosophy Quote */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20 shadow-2xl">
          <blockquote className="text-xl md:text-3xl text-white font-medium leading-relaxed mb-4 italic">
            "{currentQuote.text}"
          </blockquote>
          <cite className="text-blue-200 text-lg">
            — {currentQuote.author}
          </cite>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Study Mode</h3>
            <p className="text-blue-200 text-sm">
              Đọc lý thuyết với AI hỗ trợ giải thích, đưa ví dụ và tóm tắt
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quiz Mode</h3>
            <p className="text-blue-200 text-sm">
              Kiểm tra kiến thức với câu hỏi đa dạng và giải thích từ AI
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-6">
          <button
            onClick={handleStart}
            className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 font-bold text-xl px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-yellow-300 focus:outline-none"
          >
            <span className="flex items-center gap-3">
              Bắt Đầu Học
              <Sparkles className="w-6 h-6 group-hover:animate-spin" />
            </span>
          </button>
          
          <p className="text-blue-200 text-sm">
            Khám phá chủ nghĩa duy vật biện chứng với sự hỗ trợ của AI
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-16 w-24 h-24 bg-purple-400/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 bg-pink-400/20 rounded-full animate-float-slow"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;