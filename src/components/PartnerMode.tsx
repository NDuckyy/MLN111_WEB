import React, { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { MessageCircle, Lightbulb, BookOpen, ArrowLeft, Play } from 'lucide-react';
import { quizQuestions, philosophyQuotes } from '../data/philosophy';

const PartnerMode: React.FC = () => {
  const { state, dispatch } = useApp();
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'ai', content: string}>>([
    { type: 'ai', content: 'Xin chào! Tôi là AI đối tác của bạn trong hành trình khám phá triết học. Hãy cùng nhau tìm hiểu những câu hỏi sâu sắc về cuộc sống và tư duy nhé!' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [dailyTip, setDailyTip] = useState<string>('');

  useEffect(() => {
    const tips = [
      'Hôm nay hãy suy ngẫm về câu hỏi: "Điều gì làm cho một cuộc sống có ý nghĩa?"',
      'Triết học không chỉ là lý thuyết mà còn là cách chúng ta sống mỗi ngày.',
      'Hãy thử áp dụng nguyên tắc đạo đức của Kant vào một quyết định hôm nay.',
      'Socrates nói: "Tôi chỉ biết rằng tôi không biết gì." Điều này có ý nghĩa gì với bạn?'
    ];
    setDailyTip(tips[Math.floor(Math.random() * tips.length)]);
  }, []);

  const goBack = () => {
    dispatch({ type: 'SET_STEP', payload: 'home' });
  };

  const startQuiz = () => {
    const easyQuestions = quizQuestions.filter(q => q.difficulty === 'easy' || q.difficulty === 'medium');
    const selectedQuestions = easyQuestions.slice(0, 3);
    dispatch({ type: 'START_QUIZ', payload: selectedQuestions });
    dispatch({ type: 'SET_STEP', payload: 'quiz' });
  };

  const sendMessage = () => {
    if (!userInput.trim()) return;
    
    const newMessages = [
      ...chatMessages,
      { type: 'user' as const, content: userInput }
    ];
    
    // Simple AI responses
    const aiResponses = [
      'Đó là một câu hỏi rất thú vị! Trong triết học, không có câu trả lời duy nhất. Bạn có thể kể thêm về suy nghĩ của mình không?',
      'Tôi hiểu quan điểm của bạn. Điều này nhắc tôi đến triết lý của Aristotle về hạnh phúc và đức hạnh.',
      'Hãy thử nhìn vấn đề này từ góc độ khác. Nếu bạn là một triết gia cổ đại, bạn sẽ nghĩ thế nào?',
      'Câu hỏi này liên quan đến bản chất của sự tồn tại. Hãy cùng khám phá sâu hơn nhé!',
      'Rất hay! Bạn có muốn thử một câu hỏi quiz nhẹ để kiểm tra hiểu biết không?'
    ];
    
    setTimeout(() => {
      const aiResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setChatMessages([...newMessages, { type: 'ai', content: aiResponse }]);
    }, 1000);
    
    setChatMessages(newMessages);
    setUserInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="p-4 border-b border-green-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-green-700 hover:text-green-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay về trang chủ
          </button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-green-800">Partner Mode</h1>
            <p className="text-green-600">AI đồng hành cùng bạn</p>
          </div>
          <div className="w-24"></div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 grid lg:grid-cols-3 gap-8">
        {/* Chat Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg border border-green-100 h-96 flex flex-col">
            <div className="p-4 border-b border-green-100">
              <h3 className="font-semibold text-green-800 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Trò chuyện với AI Partner
              </h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-green-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Hỏi AI về triết học..."
                  className="flex-1 px-4 py-2 border border-green-200 rounded-full focus:ring-2 focus:ring-green-300 focus:border-transparent outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                >
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Daily Tip */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              <h3 className="font-semibold text-green-800">Gợi ý hôm nay</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{dailyTip}</p>
          </div>

          {/* Quick Quiz */}
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6" />
              <h3 className="font-semibold">Quiz Nhẹ Nhàng</h3>
            </div>
            <p className="mb-4 text-green-50">
              Thử sức với một số câu hỏi triết học cơ bản để củng cố kiến thức!
            </p>
            <button
              onClick={startQuiz}
              className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl py-3 px-4 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              Bắt đầu Quiz
            </button>
          </div>

          {/* Random Quote */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <h3 className="font-semibold text-green-800 mb-4">Triết lý ngẫu nhiên</h3>
            <blockquote className="text-gray-700 italic text-sm leading-relaxed">
              "{philosophyQuotes[Math.floor(Math.random() * philosophyQuotes.length)].text}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerMode;