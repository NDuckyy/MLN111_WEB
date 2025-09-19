import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Users, Zap, Award, ArrowRight, ArrowLeft } from 'lucide-react';

const OnboardingScreen: React.FC = () => {
  const { state, dispatch } = useApp();

  const steps = [
    {
      title: 'Chào Mừng Đến Với AI Philosophy',
      content: (
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
            <Users className="w-12 h-12 text-white" />
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Khám phá mối quan hệ giữa con người và AI thông qua các câu hỏi triết học sâu sắc. 
            Website này sẽ giúp bạn hiểu được AI là đối tác hay đối thủ của chúng ta.
          </p>
        </div>
      )
    },
    {
      title: 'Chọn Chế Độ Của Bạn',
      content: (
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-green-800">Partner Mode</h3>
              </div>
              <p className="text-green-700 text-sm">
                AI sẽ đồng hành và hỗ trợ bạn học tập triết học một cách nhẹ nhàng.
              </p>
            </div>
            
            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-red-800">Rival Mode</h3>
              </div>
              <p className="text-red-700 text-sm">
                Thử thách bản thân với các câu hỏi khó và cạnh tranh với người khác.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Hệ Thống Điểm & Phần Thưởng',
      content: (
        <div className="space-y-6">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
            <Award className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
              <span>Trả lời đúng câu hỏi để tích điểm</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
              <span>Mở khóa các badge thành tích</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
              <span>Hoàn thành thử thách hàng ngày</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (state.onboardingStep < 3) {
      dispatch({ type: 'SET_ONBOARDING_STEP', payload: state.onboardingStep + 1 });
    } else {
      dispatch({ type: 'COMPLETE_ONBOARDING' });
      dispatch({ type: 'SET_STEP', payload: 'home' });
    }
  };

  const prevStep = () => {
    if (state.onboardingStep > 1) {
      dispatch({ type: 'SET_ONBOARDING_STEP', payload: state.onboardingStep - 1 });
    }
  };

  const currentStep = steps[state.onboardingStep - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Bước {state.onboardingStep}/3</span>
            <span className="text-sm text-gray-500">{Math.round((state.onboardingStep / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(state.onboardingStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {currentStep.title}
          </h2>
          
          <div className="mb-8">
            {currentStep.content}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={state.onboardingStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                state.onboardingStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Quay Lại
            </button>

            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 focus:ring-4 focus:ring-blue-300"
            >
              {state.onboardingStep === 3 ? 'Bắt Đầu' : 'Tiếp Theo'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;