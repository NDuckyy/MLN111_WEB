import { PhilosophyQuote, QuizQuestion, Badge } from '../types';

export const philosophyQuotes: PhilosophyQuote[] = [
  {
    text: "Cuộc sống không được kiểm tra thì không đáng sống",
    author: "Socrates",
    category: "wisdom"
  },
  {
    text: "Tôi tư duy, vậy nên tôi tồn tại",
    author: "René Descartes",
    category: "existence"
  },
  {
    text: "Trí tuệ nhân tạo sẽ là phát minh cuối cùng mà con người cần tạo ra",
    author: "Nick Bostrom",
    category: "ai"
  },
  {
    text: "Hãy hành động sao cho nguyên tắc của bạn có thể trở thành luật phổ quát",
    author: "Immanuel Kant",
    category: "ethics"
  },
  {
    text: "Con người sinh ra tự do, nhưng ở đâu cũng bị xiềng xích",
    author: "Jean-Jacques Rousseau",
    category: "wisdom"
  },
  {
    text: "AI không phải là mối đe dọa cho nhân loại mà là công cụ để mở rộng tiềm năng con người",
    author: "Kai-Fu Lee",
    category: "ai"
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'Triết gia nào nói "Cuộc sống không được kiểm tra thì không đáng sống"?',
    options: ['Plato', 'Socrates', 'Aristotle', 'Kant'],
    correctAnswer: 1,
    explanation: 'Socrates tin rằng việc tự suy ngẫm và kiểm tra cuộc sống là điều cần thiết để sống có ý nghĩa.',
    difficulty: 'easy',
    category: 'classical'
  },
  {
    id: '2',
    question: 'AI có thể được coi là đối tác hay đối thủ với con người?',
    options: ['Chỉ là đối tác', 'Chỉ là đối thủ', 'Có thể là cả hai tùy cách sử dụng', 'Không phải cái nào'],
    correctAnswer: 2,
    explanation: 'AI có thể trở thành đối tác khi được sử dụng để hỗ trợ con người, hoặc đối thủ khi thay thế hoặc cạnh tranh với con người.',
    difficulty: 'medium',
    category: 'ai-ethics'
  },
  {
    id: '3',
    question: 'Theo Kant, đạo đức dựa trên điều gì?',
    options: ['Cảm xúc', 'Hậu quả', 'Nghĩa vụ và lý trí', 'Truyền thống'],
    correctAnswer: 2,
    explanation: 'Kant cho rằng đạo đức phải dựa trên nghĩa vụ và lý trí, không phụ thuộc vào cảm xúc hay hậu quả.',
    difficulty: 'medium',
    category: 'ethics'
  },
  {
    id: '4',
    question: 'Thế nào là "Hang Động Plato"?',
    options: ['Một địa điểm thực tế', 'Ẩn dụ về nhận thức', 'Tên một cuốn sách', 'Một thí nghiệm khoa học'],
    correctAnswer: 1,
    explanation: 'Hang Động Plato là ẩn dụ nổi tiếng về việc con người thường chỉ nhận thức được bóng đổ của thực tế, chứ không phải chính thực tại.',
    difficulty: 'hard',
    category: 'classical'
  },
  {
    id: '5',
    question: 'Điều gì làm cho AI trở thành vấn đề triết học?',
    options: ['Khả năng tính toán', 'Câu hỏi về ý thức', 'Tốc độ xử lý', 'Dung lượng bộ nhớ'],
    correctAnswer: 1,
    explanation: 'Vấn đề triết học chính của AI là liệu máy móc có thể có ý thức, cảm xúc và tư duy như con người hay không.',
    difficulty: 'hard',
    category: 'ai-ethics'
  }
];

export const availableBadges: Badge[] = [
  {
    id: 'first-steps',
    name: 'Bước Đầu Triết Học',
    description: 'Hoàn thành onboarding',
    icon: '🌱',
    earned: false
  },
  {
    id: 'quiz-master',
    name: 'Bậc Thầy Quiz',
    description: 'Trả lời đúng 10 câu hỏi',
    icon: '🧠',
    earned: false
  },
  {
    id: 'daily-thinker',
    name: 'Nhà Tư Tưởng Hàng Ngày',
    description: 'Hoạt động 7 ngày liên tiếp',
    icon: '🔥',
    earned: false
  },
  {
    id: 'partner-enthusiast',
    name: 'Người Yêu Đối Tác',
    description: 'Sử dụng Partner Mode 20 lần',
    icon: '🤝',
    earned: false
  },
  {
    id: 'rival-champion',
    name: 'Nhà Vô Địch Đối Thủ',
    description: 'Đạt top 10 trong Rival Mode',
    icon: '⚔️',
    earned: false
  }
];