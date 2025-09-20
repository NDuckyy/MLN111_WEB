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
    type: 'multiple_choice',
    question: 'Quá trình tích lũy kiến thức qua từng bài học để đạt kết quả thi xuất sắc là ví dụ của quy luật nào?',
    options: [
      'Quy luật phủ định của phủ định',
      'Quy luật thống nhất và đấu tranh của các mặt đối lập',
      'Quy luật lượng - chất',
      'Cả ba quy luật trên'
    ],
    correctAnswer: 2,
    explanation: 'Phản ánh quy luật lượng - chất: tích lũy lượng đến ngưỡng dẫn đến bước nhảy vọt về chất.',
    aiExplanation: 'Phản ánh quy luật lượng - chất: tích lũy lượng đến ngưỡng dẫn đến bước nhảy vọt về chất.',
    difficulty: 'easy',
    relatedSection: 'Quy luật lượng - chất'
  },
  {
    id: '2',
    type: 'multiple_choice',
    question: 'Theo quy luật Lượng - Chất, điểm khác biệt cơ bản giữa “lượng” và “chất” là gì?',
    options: [
      'Lượng là yếu tố bên ngoài, chất là yếu tố bên trong',
      'Lượng biểu thị số lượng, quy mô; chất biểu thị thuộc tính cơ bản',
      'Lượng luôn thay đổi, chất thì không',
      'Lượng thay đổi dần dần, chất thay đổi đột ngột'
    ],
    correctAnswer: 1,
    explanation: 'Lượng phản ánh quy mô, số lượng; chất là thuộc tính cơ bản làm cho sự vật là chính nó.',
    aiExplanation: 'Lượng phản ánh quy mô, số lượng; chất là thuộc tính cơ bản làm cho sự vật là chính nó.',
    difficulty: 'medium',
    relatedSection: 'Quy luật lượng - chất'
  },
  {
    id: '3',
    type: 'multiple_choice',
    question: 'Quy luật lượng - chất giải thích điều gì trong quá trình phát triển?',
    options: [
      'Nguồn gốc của phát triển',
      'Cách thức phát triển',
      'Khuynh hướng phát triển',
      'Mục tiêu cuối cùng'
    ],
    correctAnswer: 1,
    explanation: 'Chỉ ra cách thức phát triển: sự thay đổi về lượng dẫn đến sự thay đổi về chất.',
    aiExplanation: 'Chỉ ra cách thức phát triển: sự thay đổi về lượng dẫn đến sự thay đổi về chất.',
    difficulty: 'easy',
    relatedSection: 'Quy luật lượng - chất'
  },
  {
    id: '4',
    type: 'multiple_choice',
    question: 'Ví dụ nào sau đây thể hiện sự chuyển hóa từ lượng thành chất?',
    options: [
      'Nước đun đến 100°C chuyển từ lỏng sang khí',
      'Cây ra hoa vào mùa xuân',
      'Mặt trời mọc mỗi ngày',
      'Người lớn lên theo thời gian'
    ],
    correctAnswer: 0,
    explanation: 'Nước đun tới 100°C là ví dụ điển hình: lượng đổi (nhiệt độ) → chất đổi (thể).',
    aiExplanation: 'Nước đun tới 100°C là ví dụ điển hình: lượng đổi (nhiệt độ) → chất đổi (thể).',
    difficulty: 'easy',
    relatedSection: 'Quy luật lượng - chất'
  },
  {
    id: '5',
    type: 'multiple_choice',
    question: 'Trong học tập, quá trình “tích lũy dần kiến thức” đến một ngưỡng rồi “hiểu sâu vấn đề” là biểu hiện của?',
    options: [
      'Quy luật lượng - chất',
      'Quy luật phủ định của phủ định',
      'Quy luật đấu tranh của các mặt đối lập',
      'Quy luật nhân quả'
    ],
    correctAnswer: 0,
    explanation: 'Việc học tập dần dần đến lúc hiểu sâu chính là biến đổi lượng thành chất.',
    aiExplanation: 'Việc học tập dần dần đến lúc hiểu sâu chính là biến đổi lượng thành chất.',
    difficulty: 'medium',
    relatedSection: 'Quy luật lượng - chất'
  },
  {
    id: '6',
    type: 'multiple_choice',
    question: '“Bước nhảy” trong quy luật lượng - chất có đặc điểm gì?',
    options: [
      'Diễn ra dần dần',
      'Là sự thay đổi căn bản về chất sau khi lượng tích lũy đủ',
      'Không phụ thuộc vào lượng',
      'Chỉ xảy ra trong tự nhiên, không có trong xã hội'
    ],
    correctAnswer: 1,
    explanation: 'Bước nhảy = sự thay đổi về chất khi lượng đạt điểm nút.',
    aiExplanation: 'Bước nhảy = sự thay đổi về chất khi lượng đạt điểm nút.',
    difficulty: 'medium',
    relatedSection: 'Quy luật lượng - chất'
  },
  {
    id: '7',
    type: 'multiple_choice',
    question: 'Ý nghĩa phương pháp luận quan trọng của quy luật lượng - chất là gì?',
    options: [
      'Phải chú ý tích lũy lượng để đạt bước nhảy về chất',
      'Chỉ cần thay đổi chất mà không quan tâm lượng',
      'Bỏ qua điểm nút vì không quan trọng',
      'Xem sự phát triển chỉ là ngẫu nhiên'
    ],
    correctAnswer: 0,
    explanation: 'Cần tích lũy lượng để tạo tiền đề cho thay đổi chất.',
    aiExplanation: 'Cần tích lũy lượng để tạo tiền đề cho thay đổi chất.',
    difficulty: 'hard',
    relatedSection: 'Quy luật lượng - chất'
  },
  {
    id: '8',
    type: 'multiple_choice',
    question: 'Ví dụ “một hạt giống sau thời gian nảy mầm thành cây” thể hiện gì?',
    options: [
      'Quy luật lượng - chất',
      'Quy luật phủ định của phủ định',
      'Quy luật thống nhất và đấu tranh của các mặt đối lập',
      'Không thuộc quy luật nào'
    ],
    correctAnswer: 0,
    explanation: 'Sự tích lũy lượng (sinh trưởng) dẫn đến biến đổi chất (từ hạt sang cây).',
    aiExplanation: 'Sự tích lũy lượng (sinh trưởng) dẫn đến biến đổi chất (từ hạt sang cây).',
    difficulty: 'easy',
    relatedSection: 'Quy luật lượng - chất'
  },
  {
    id: '9',
    type: 'multiple_choice',
    question: 'Trong quản lý, cải tiến nhỏ liên tục dẫn tới sự thay đổi lớn là minh chứng cho?',
    options: [
      'Quy luật lượng - chất',
      'Quy luật phủ định của phủ định',
      'Quy luật thống nhất và đấu tranh của các mặt đối lập',
      'Ngẫu nhiên'
    ],
    correctAnswer: 0,
    explanation: 'Các cải tiến nhỏ tích lũy đến mức đủ tạo ra thay đổi căn bản.',
    aiExplanation: 'Các cải tiến nhỏ tích lũy đến mức đủ tạo ra thay đổi căn bản.',
    difficulty: 'medium',
    relatedSection: 'Quy luật lượng - chất'
  },
  {
    id: '10',
    type: 'multiple_choice',
    question: 'Điểm nút trong quy luật lượng - chất là gì?',
    options: [
      'Điểm thay đổi lượng',
      'Điểm thay đổi chất khi lượng đạt đến giới hạn',
      'Điểm bắt đầu của sự vật',
      'Điểm kết thúc của sự vật'
    ],
    correctAnswer: 1,
    explanation: 'Điểm nút: lượng tích lũy đến giới hạn → chất thay đổi.',
    aiExplanation: 'Điểm nút: lượng tích lũy đến giới hạn → chất thay đổi.',
    difficulty: 'hard',
    relatedSection: 'Quy luật lượng - chất'
  },

  // --- Quy luật thống nhất và đấu tranh của các mặt đối lập (11 - 20) ---
  {
    id: '11',
    type: 'multiple_choice',
    question: 'Theo Triết học Mác - Lênin, đâu là nguồn gốc, động lực của sự phát triển?',
    options: [
      'Sự tác động của thế giới bên ngoài',
      'Sự đấu tranh của các mặt đối lập',
      'Sự kế thừa những yếu tố tích cực',
      'Sự biến đổi từ từ về lượng'
    ],
    correctAnswer: 1,
    explanation: 'Mâu thuẫn nội tại, thể hiện qua sự đấu tranh của các mặt đối lập.',
    aiExplanation: 'Nguồn gốc phát triển là mâu thuẫn nội tại, thể hiện qua đấu tranh của các mặt đối lập.',
    difficulty: 'easy',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },
  {
    id: '12',
    type: 'multiple_choice',
    question: 'Khẳng định nào dưới đây không đúng về các mặt đối lập?',
    options: [
      'Vừa thống nhất, vừa đấu tranh với nhau',
      'Luôn loại trừ nhau và không thể tồn tại trong cùng một sự vật',
      'Tồn tại khách quan, vốn có trong mỗi sự vật',
      'Sự đấu tranh giữa chúng là nguồn gốc của sự phát triển'
    ],
    correctAnswer: 1,
    explanation: 'Chúng không loại trừ nhau tuyệt đối mà vừa thống nhất vừa đấu tranh.',
    aiExplanation: 'Các mặt đối lập vừa thống nhất vừa đấu tranh, không loại trừ nhau tuyệt đối.',
    difficulty: 'medium',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },
  {
    id: '13',
    type: 'multiple_choice',
    question: 'Mâu thuẫn biện chứng có đặc điểm gì?',
    options: [
      'Chỉ tồn tại trong xã hội',
      'Là mối liên hệ phổ biến, khách quan',
      'Chỉ là sản phẩm tư duy',
      'Không có vai trò trong phát triển'
    ],
    correctAnswer: 1,
    explanation: 'Mâu thuẫn tồn tại khách quan trong mọi sự vật, hiện tượng.',
    aiExplanation: 'Mâu thuẫn tồn tại khách quan trong mọi sự vật, hiện tượng.',
    difficulty: 'easy',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },
  {
    id: '14',
    type: 'multiple_choice',
    question: 'Khi các mặt đối lập đấu tranh đến mức gay gắt sẽ dẫn đến?',
    options: [
      'Sự ổn định lâu dài',
      'Sự thay đổi căn bản, sự vật phát triển',
      'Không có thay đổi',
      'Mâu thuẫn biến mất hoàn toàn'
    ],
    correctAnswer: 1,
    explanation: 'Đấu tranh gay gắt → mâu thuẫn giải quyết → phát triển.',
    aiExplanation: 'Đấu tranh gay gắt → mâu thuẫn giải quyết → phát triển.',
    difficulty: 'medium',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },
  {
    id: '15',
    type: 'multiple_choice',
    question: 'Ví dụ nào thể hiện sự đấu tranh của các mặt đối lập trong tự nhiên?',
    options: [
      'Ngày - đêm',
      'Nhiệt - lạnh',
      'Sinh - tử',
      'Cả ba ví dụ trên'
    ],
    correctAnswer: 3,
    explanation: 'Ngày - đêm, nóng - lạnh, sinh - tử đều là các mặt đối lập trong tự nhiên.',
    aiExplanation: 'Ngày - đêm, nóng - lạnh, sinh - tử đều là các mặt đối lập trong tự nhiên.',
    difficulty: 'easy',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },
  {
    id: '16',
    type: 'multiple_choice',
    question: 'Trong xã hội, mâu thuẫn giai cấp là ví dụ của?',
    options: [
      'Mâu thuẫn đối kháng',
      'Mâu thuẫn không đối kháng',
      'Mâu thuẫn ngẫu nhiên',
      'Mâu thuẫn giả định'
    ],
    correctAnswer: 0,
    explanation: 'Mâu thuẫn giai cấp có tính đối kháng.',
    aiExplanation: 'Mâu thuẫn giai cấp có tính đối kháng.',
    difficulty: 'medium',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },
  {
    id: '17',
    type: 'multiple_choice',
    question: 'Mâu thuẫn không đối kháng có thể được giải quyết bằng cách nào?',
    options: [
      'Đấu tranh bạo lực',
      'Đàm phán, thỏa hiệp',
      'Không thể giải quyết',
      'Loại bỏ một bên'
    ],
    correctAnswer: 1,
    explanation: 'Mâu thuẫn không đối kháng có thể giải quyết bằng thương lượng.',
    aiExplanation: 'Mâu thuẫn không đối kháng có thể giải quyết bằng thương lượng.',
    difficulty: 'medium',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },
  {
    id: '18',
    type: 'multiple_choice',
    question: 'Ý nghĩa phương pháp luận của quy luật này là gì?',
    options: [
      'Phải nhận diện mâu thuẫn và tìm cách giải quyết',
      'Tránh né mọi mâu thuẫn',
      'Xem mâu thuẫn là tiêu cực hoàn toàn',
      'Bỏ qua đấu tranh'
    ],
    correctAnswer: 0,
    explanation: 'Cần nhận diện, phân tích, tìm cách giải quyết mâu thuẫn phù hợp.',
    aiExplanation: 'Cần nhận diện, phân tích, tìm cách giải quyết mâu thuẫn phù hợp.',
    difficulty: 'hard',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },
  {
    id: '19',
    type: 'multiple_choice',
    question: 'Quy luật nào giải thích nguồn gốc và động lực của sự phát triển?',
    options: [
      'Quy luật phủ định của phủ định',
      'Quy luật thống nhất và đấu tranh của các mặt đối lập',
      'Quy luật lượng - chất',
      'Cả A và C'
    ],
    correctAnswer: 1,
    explanation: 'Nguồn gốc, động lực phát triển nằm ở mâu thuẫn và sự đấu tranh của các mặt đối lập.',
    aiExplanation: 'Nguồn gốc phát triển nằm ở mâu thuẫn và sự đấu tranh của các mặt đối lập.',
    difficulty: 'medium',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },
  {
    id: '20',
    type: 'multiple_choice',
    question: 'Ví dụ “điện tích âm và dương trong nguyên tử” phản ánh gì?',
    options: [
      'Sự cân bằng tuyệt đối',
      'Sự thống nhất và đấu tranh của các mặt đối lập',
      'Không liên quan',
      'Sự biến mất của mâu thuẫn'
    ],
    correctAnswer: 1,
    explanation: 'Điện tích âm - dương vừa thống nhất vừa đấu tranh tạo nên sự ổn định và phát triển của vật chất.',
    aiExplanation: 'Điện tích âm - dương vừa thống nhất vừa đấu tranh tạo nên sự ổn định và phát triển của vật chất.',
    difficulty: 'hard',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },

  // --- Quy luật phủ định của phủ định (21 - 30) ---
  {
    id: '21',
    type: 'multiple_choice',
    question: 'Con đường phát triển của sự vật, hiện tượng được quy luật phủ định của phủ định mô tả là gì?',
    options: [
      'Đường thẳng tiến lên',
      'Đường xoắn ốc',
      'Đường lặp lại theo chu kỳ',
      'Đường lùi về điểm xuất phát'
    ],
    correctAnswer: 1,
    explanation: 'Sự phát triển diễn ra theo đường xoắn ốc: lặp lại nhưng ở trình độ cao hơn.',
    aiExplanation: 'Sự phát triển diễn ra theo đường xoắn ốc: lặp lại nhưng ở trình độ cao hơn.',
    difficulty: 'easy',
    relatedSection: 'Quy luật phủ định của phủ định'
  },
  {
    id: '22',
    type: 'multiple_choice',
    question: 'Theo quy luật này, sự vật mới ra đời có đặc điểm gì so với sự vật cũ đã bị phủ định?',
    options: [
      'Kế thừa những yếu tố tích cực và loại bỏ những yếu tố tiêu cực',
      'Giống hệt sự vật ban đầu',
      'Khác hoàn toàn, không có điểm chung',
      'Hoàn toàn đối lập với sự vật cũ'
    ],
    correctAnswer: 0,
    explanation: 'Sự phủ định biện chứng có tính kế thừa: giữ lại yếu tố tích cực, loại bỏ tiêu cực.',
    aiExplanation: 'Sự phủ định biện chứng có tính kế thừa: giữ lại yếu tố tích cực, loại bỏ tiêu cực.',
    difficulty: 'medium',
    relatedSection: 'Quy luật phủ định của phủ định'
  },
  {
    id: '23',
    type: 'multiple_choice',
    question: 'Quy luật phủ định của phủ định giải thích điều gì trong phát triển?',
    options: [
      'Nguồn gốc phát triển',
      'Cách thức phát triển',
      'Khuynh hướng, con đường phát triển',
      'Mục tiêu phát triển'
    ],
    correctAnswer: 2,
    explanation: 'Chỉ ra khuynh hướng, con đường phát triển theo hình xoắn ốc.',
    aiExplanation: 'Chỉ ra khuynh hướng, con đường phát triển theo hình xoắn ốc.',
    difficulty: 'easy',
    relatedSection: 'Quy luật phủ định của phủ định'
  },
  {
    id: '24',
    type: 'multiple_choice',
    question: 'Ví dụ nào thể hiện phủ định của phủ định?',
    options: [
      'Hạt lúa → cây lúa → hạt lúa mới',
      'Ngày → đêm → ngày',
      'Nước → băng → nước',
      'Đứa trẻ → người lớn → người già'
    ],
    correctAnswer: 0,
    explanation: 'Hạt lúa ban đầu bị phủ định thành cây lúa, cây lúa lại tạo ra hạt lúa mới → sự lặp lại cao hơn.',
    aiExplanation: 'Hạt lúa ban đầu bị phủ định thành cây lúa, cây lúa lại tạo ra hạt lúa mới → sự lặp lại cao hơn.',
    difficulty: 'medium',
    relatedSection: 'Quy luật phủ định của phủ định'
  },
  {
    id: '25',
    type: 'multiple_choice',
    question: 'Điểm khác biệt giữa phủ định biện chứng và phủ định siêu hình là gì?',
    options: [
      'Biện chứng có tính kế thừa, siêu hình thì không',
      'Biện chứng là ngẫu nhiên, siêu hình là tất yếu',
      'Biện chứng loại bỏ hoàn toàn, siêu hình giữ lại một phần',
      'Không có khác biệt'
    ],
    correctAnswer: 0,
    explanation: 'Phủ định biện chứng có tính kế thừa, giữ lại yếu tố tích cực của cái cũ.',
    aiExplanation: 'Phủ định biện chứng có tính kế thừa, giữ lại yếu tố tích cực của cái cũ.',
    difficulty: 'hard',
    relatedSection: 'Quy luật phủ định của phủ định'
  },
  {
    id: '26',
    type: 'multiple_choice',
    question: 'Ý nghĩa phương pháp luận của quy luật phủ định của phủ định là gì?',
    options: [
      'Phải biết kế thừa có chọn lọc',
      'Luôn loại bỏ hoàn toàn cái cũ',
      'Bảo thủ, giữ nguyên cái cũ',
      'Phát triển theo đường thẳng'
    ],
    correctAnswer: 0,
    explanation: 'Phải kế thừa có chọn lọc những gì tích cực từ cái cũ.',
    aiExplanation: 'Phải kế thừa có chọn lọc những gì tích cực từ cái cũ.',
    difficulty: 'medium',
    relatedSection: 'Quy luật phủ định của phủ định'
  },
  {
    id: '27',
    type: 'multiple_choice',
    question: 'Ví dụ “tư bản chủ nghĩa thay thế phong kiến, rồi lại bị thay thế bởi xã hội chủ nghĩa” là minh chứng cho?',
    options: [
      'Quy luật lượng - chất',
      'Quy luật thống nhất và đấu tranh của các mặt đối lập',
      'Quy luật phủ định của phủ định',
      'Không thuộc quy luật nào'
    ],
    correctAnswer: 2,
    explanation: 'Một hình thái xã hội phủ định hình thái trước đó, phát triển cao hơn.',
    aiExplanation: 'Một hình thái xã hội phủ định hình thái trước đó, phát triển cao hơn.',
    difficulty: 'hard',
    relatedSection: 'Quy luật phủ định của phủ định'
  },
  {
    id: '28',
    type: 'multiple_choice',
    question: 'Sự phát triển theo đường xoắn ốc thể hiện điều gì?',
    options: [
      'Sự vật lặp lại y nguyên',
      'Sự vật phát triển ở trình độ cao hơn nhưng vẫn kế thừa cái cũ',
      'Sự vật ngẫu nhiên biến đổi',
      'Sự vật luôn giữ nguyên chất'
    ],
    correctAnswer: 1,
    explanation: 'Đường xoắn ốc = lặp lại ở trình độ cao hơn, có tính kế thừa.',
    aiExplanation: 'Đường xoắn ốc = lặp lại ở trình độ cao hơn, có tính kế thừa.',
    difficulty: 'easy',
    relatedSection: 'Quy luật phủ định của phủ định'
  },
  {
    id: '29',
    type: 'multiple_choice',
    question: 'Trong quy luật phủ định của phủ định, “phủ định” được hiểu là gì?',
    options: [
      'Sự bác bỏ hoàn toàn',
      'Sự thay thế biện chứng, có kế thừa',
      'Sự phủ nhận chủ quan',
      'Sự loại bỏ ngẫu nhiên'
    ],
    correctAnswer: 1,
    explanation: 'Phủ định ở đây là biện chứng: kế thừa và phát triển.',
    aiExplanation: 'Phủ định ở đây là biện chứng: kế thừa và phát triển.',
    difficulty: 'medium',
    relatedSection: 'Quy luật phủ định của phủ định'
  },
  {
    id: '30',
    type: 'multiple_choice',
    question: 'Khi một sự vật mới ra đời phủ định sự vật cũ, nhưng sau đó chính nó lại bị sự vật mới khác phủ định, hiện tượng này thuộc?',
    options: [
      'Quy luật phủ định của phủ định',
      'Quy luật lượng - chất',
      'Quy luật đấu tranh của các mặt đối lập',
      'Ngẫu nhiên'
    ],
    correctAnswer: 0,
    explanation: 'Đây chính là quá trình phủ định của phủ định.',
    aiExplanation: 'Đây chính là quá trình phủ định của phủ định.',
    difficulty: 'hard',
    relatedSection: 'Quy luật phủ định của phủ định'
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