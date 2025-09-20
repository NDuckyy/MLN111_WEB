'use client';

import React from 'react';
import { ArrowLeft, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

const AITransparency = () => {
  const sections = [
    {
      id: 1,
      title: 'Minh Bạch',
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      gradient: 'from-blue-50 to-indigo-50',
      border: 'border-blue-200',
      description: (
        <>
          <p className="text-gray-700 leading-relaxed">
            Chúng tôi đã sử dụng các công cụ AI như <strong>ChatGPT</strong> và{' '}
            <strong>Copilot</strong> với hai mục đích chính:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
            <li>
              <strong>Giao diện:</strong> Gợi ý ý tưởng để trang web có thiết kế
              đẹp mắt và trực quan hơn.
            </li>
            <li>
              <strong>Nội dung:</strong> Hỗ trợ kiểm tra và chỉnh sửa ngôn từ,
              đảm bảo bám sát giáo trình và mang tính học thuật cao.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: 'Có Trách Nhiệm & Liêm Chính Học Thuật',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      gradient: 'from-emerald-50 to-teal-50',
      border: 'border-emerald-200',
      description: (
        <p className="text-gray-700 leading-relaxed">
          Chúng tôi cam kết rằng AI <strong>không thay thế con người</strong>.
          Mọi thông tin do AI đưa ra đều được{' '}
          <strong>đối chiếu kỹ lưỡng với giáo trình</strong>. Toàn bộ cấu trúc
          logic, nội dung cốt lõi và quyết định thiết kế cuối cùng đều do chúng
          tôi thực hiện, đảm bảo <strong>sự kiểm soát 100% từ con người</strong>.
        </p>
      ),
    },
    {
      id: 3,
      title: 'Sáng Tạo',
      icon: <Sparkles className="w-6 h-6 text-pink-600" />,
      gradient: 'from-pink-50 to-rose-50',
      border: 'border-pink-200',
      description: (
        <p className="text-gray-700 leading-relaxed">
          AI là một <strong>người cộng sự đắc lực</strong> giúp chúng tôi thúc
          đẩy sự sáng tạo. Bằng cách tự động hóa các tác vụ đơn giản, AI cho
          phép chúng tôi tập trung vào phân tích chuyên sâu, phát triển luận
          điểm triết học và mang lại{' '}
          <strong>trải nghiệm học tập độc đáo</strong>.
        </p>
      ),
    },
  ];

  const { dispatch } = useApp();
  const goBack = () => {
    dispatch({ type: 'SET_SCREEN', payload: 'home' });
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-12">
      {/* Back button */}
      <button
        onClick={goBack}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Quay về trang chủ
      </button>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          Tính Minh Bạch AI
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Chúng tôi muốn công khai rõ ràng cách thức sử dụng AI trong quá trình
          học tập và phát triển dự án, đảm bảo tính minh bạch, trách nhiệm và
          sáng tạo.
        </p>
      </div>

      {/* Sections */}
      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((sec, idx) => (
          <motion.div
            key={sec.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 8px 25px rgba(0,0,0,0.15)' }}
            className={`bg-gradient-to-br ${sec.gradient} rounded-2xl p-6 border ${sec.border} shadow-sm cursor-pointer transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="p-2 bg-white rounded-lg shadow"
              >
                {sec.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900">{sec.title}</h3>
            </div>
            <div className="text-sm">{sec.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AITransparency;
