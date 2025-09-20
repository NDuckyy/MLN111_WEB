// src/components/StudyMode.tsx
import React, { useState, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import {
  ArrowLeft,
  MessageCircle,
  Lightbulb,
  BookOpen,
  Send,
  Sparkles
} from 'lucide-react';
import Navbar from './Navbar.tsx';
import { studyContent as defaultStudyContent, aiSampleResponses } from '../data/studyContent';

const StudyMode: React.FC = () => {
  const { state, dispatch } = useApp();
  const [userQuestion, setUserQuestion] = useState('');
  const [chatMessages, setChatMessages] = useState<
    Array<{ type: 'user' | 'ai'; content: string }>
  >([
    {
      type: 'ai',
      content:
        'Xin chào! Tôi là AI hỗ trợ học tập. Bạn có thể hỏi tôi về bất kỳ khái niệm nào trong bài học, hoặc yêu cầu tôi giải thích, đưa ví dụ thực tiễn. Hãy bắt đầu học nhé!'
    }
  ]);
  const [currentSection, setCurrentSection] = useState(0);

  // fallback nếu context chưa load content
  const content = state.currentStudyContent || defaultStudyContent;

  useEffect(() => {
    // Đánh dấu đã đọc section sau 30s
    const timer = setTimeout(() => {
      const sectionId = `section-${currentSection}`;
      if (!state.user.studyProgress.sectionsRead.includes(sectionId)) {
        dispatch({
          type: 'UPDATE_USER',
          payload: {
            studyProgress: {
              ...state.user.studyProgress,
              sectionsRead: [...state.user.studyProgress.sectionsRead, sectionId],
              lastStudied: new Date()
            }
          }
        });
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [currentSection, state.user.studyProgress.sectionsRead, dispatch]);

  const goBack = () => dispatch({ type: 'SET_SCREEN', payload: 'home' });

  const sendMessage = () => {
    if (!userQuestion.trim()) return;

    const newMessages = [...chatMessages, { type: 'user' as const, content: userQuestion }];

    // Simple rule-based AI reply using aiSampleResponses
    let aiResponse = '';
    const q = userQuestion.toLowerCase();

    if (q.includes('mâu thuẫn') || q.includes('đối lập')) {
      aiResponse = aiSampleResponses.explanations[0];
    } else if (q.includes('lượng') || q.includes('chất') || q.includes('độ')) {
      aiResponse = aiSampleResponses.explanations[1];
    } else if (q.includes('phủ định') || q.includes('xoáy ốc')) {
      aiResponse = aiSampleResponses.explanations[2];
    } else if (q.includes('ví dụ') || q.includes('thực tiễn')) {
      aiResponse = aiSampleResponses.examples[
        Math.floor(Math.random() * aiSampleResponses.examples.length)
      ];
    } else {
      aiResponse =
        'Câu hỏi hay — tôi có thể giải thích. Bạn muốn tôi phân tích theo quy luật nào (mâu thuẫn / lượng-chất / phủ định của phủ định)?';
    }

    // Simulate latency
    setChatMessages(newMessages);
    setUserQuestion('');
    setTimeout(() => setChatMessages(prev => [...prev, { type: 'ai', content: aiResponse }]), 700);
  };

  const askAIQuestion = (question: string) => {
    setUserQuestion(question);
    setTimeout(() => sendMessage(), 100);
  };

  const suggestedQuestions = [
    'Giải thích khái niệm mâu thuẫn trong triết học',
    'Cho ví dụ về quy luật lượng - chất',
    'Tại sao phát triển theo hình xoáy ốc?',
    'Ứng dụng thực tiễn của ba quy luật này'
  ];

  // guard: nếu content không đúng cấu trúc, tránh crash
  if (!content || !content.sections || content.sections.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Không có nội dung học. Vui lòng kiểm tra dữ liệu `studyContent`.</p>
      </div>
    );
  }

  const section = content.sections[currentSection] || content.sections[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Header */}
      <header className="p-4 border-b border-indigo-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-indigo-700 hover:text-indigo-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay về trang chủ
          </button>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-indigo-800">Study Mode</h1>
            <p className="text-indigo-600">Học với AI hỗ trợ</p>
          </div>

          <div className="w-24" />
        </div>
      </header>

      {/* Navbar điều hướng (truyền currentSection handlers) */}
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />

      <div className="max-w-7xl mx-auto p-4 grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
            <div
              className="text-gray-700 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>

          {/* Key Points */}
          {content.keyPoints?.length > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Điểm Quan Trọng
              </h3>
              <ul className="space-y-2">
                {content.keyPoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* AI Chat Sidebar */}
        <aside className="space-y-6">
          {/* Chat box */}
          <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 h-96 flex flex-col">
            <div className="p-4 border-b border-indigo-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-indigo-700" />
                <h3 className="font-semibold text-indigo-800">Hỏi AI</h3>
              </div>
              <div className="text-sm text-gray-500">AI offline demo</div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.type === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <div className="text-sm">{msg.content}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-indigo-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Hỏi AI về bài học..."
                  className="flex-1 px-3 py-2 border border-indigo-200 rounded-full focus:ring-2 focus:ring-indigo-300 outline-none text-sm"
                />
                <button
                  onClick={sendMessage}
                  className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Suggested Questions */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
            <h3 className="font-semibold text-indigo-800 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Câu hỏi gợi ý
            </h3>
            <div className="space-y-2">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => askAIQuestion(q)}
                  className="w-full text-left p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors text-sm text-indigo-700"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Quick action to quiz */}
          <div className="bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6" />
              <h3 className="font-semibold">Sẵn sàng kiểm tra?</h3>
            </div>
            <p className="mb-4 text-teal-50 text-sm">Sau khi đọc xong lý thuyết, hãy làm quiz để kiểm tra hiểu biết!</p>
            <button
              onClick={() => dispatch({ type: 'SET_SCREEN', payload: 'quiz' })}
              className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl py-3 px-4 transition-all text-sm font-medium"
            >
              Làm Quiz Ngay
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default StudyMode;
