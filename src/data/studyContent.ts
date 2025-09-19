import { StudyContent, QuizQuestion } from '../types';

export const studyContent: StudyContent = {
  id: 'chuong-2-chu-nghia-duy-vat-bien-chung',
  title: 'Chương 2: Chủ nghĩa duy vật biện chứng',
  content: `
# II. Phép biện chứng duy vật - Các quy luật cơ bản

## 1. Quy luật thống nhất và đấu tranh của các mặt đối lập

Quy luật này khẳng định rằng **mâu thuẫn là nguồn gốc của mọi sự vận động và phát triển**. Mọi sự vật, hiện tượng đều chứa đựng trong mình những mặt đối lập, những xu hướng trái ngược nhau.

### Các khái niệm cơ bản:
- **Mặt đối lập**: Những xu hướng, khuynh hướng trái ngược nhau trong cùng một sự vật
- **Thống nhất**: Các mặt đối lập cùng tồn tại trong một thể thống nhất
- **Đấu tranh**: Sự tác động qua lại, xung đột giữa các mặt đối lập

### Ví dụ thực tiễn:
- Trong xã hội: giai cấp tư sản và giai cấp vô sản
- Trong tự nhiên: sự sống và sự chết, thu hút và đẩy lùi
- Trong tư duy: khẳng định và phủ định

## 2. Quy luật chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất

Quy luật này giải thích **cơ chế của sự phát triển**. Sự phát triển diễn ra qua hai giai đoạn:
1. **Thay đổi về lượng**: Sự tích lũy dần dần, từ từ
2. **Thay đổi về chất**: Sự biến đổi căn bản, nhảy vọt

### Khái niệm quan trọng:
- **Chất**: Tính quy định căn bản làm cho sự vật là chính nó
- **Lượng**: Tính quy định về mặt số lượng, quy mô, mức độ
- **Độ**: Giới hạn mà trong đó lượng có thể thay đổi mà không làm thay đổi chất

### Ví dụ minh họa:
- Nước đóng băng ở 0°C, sôi ở 100°C
- Sự phát triển của xã hội từ phong kiến lên tư bản chủ nghĩa
- Quá trình học tập: tích lũy kiến thức → hiểu biết chất lượng mới

## 3. Quy luật phủ định của phủ định

Quy luật này chỉ ra **hướng và con đường của sự phát triển**. Sự phát triển không diễn ra theo đường thẳng mà theo hình xoáy ốc, vừa tiến lên vừa quay lại.

### Đặc điểm của sự phủ định:
- **Tính khách quan**: Diễn ra độc lập với ý thức con người
- **Tính kế thừa**: Giữ lại những yếu tố tích cực của giai đoạn cũ
- **Tính vượt lên**: Đạt được trình độ cao hơn so với ban đầu

### Ví dụ điển hình:
- Hạt giống → cây con → cây trưởng thành → hạt giống mới
- Chế độ cộng sản nguyên thủy → xã hội có giai cấp → chủ nghĩa cộng sản
- Quá trình nhận thức: thực tiễn → lý luận → thực tiễn mới
  `,
  keyPoints: [
    'Mâu thuẫn là động lực của sự phát triển',
    'Sự phát triển diễn ra qua sự chuyển hóa lượng - chất',
    'Phủ định của phủ định tạo nên sự phát triển theo hình xoáy ốc',
    'Ba quy luật cơ bản tác động qua lại với nhau',
    'Ứng dụng vào thực tiễn xã hội và tư duy'
  ],
  examples: [
    'Mâu thuẫn giữa lực sản xuất và quan hệ sản xuất thúc đẩy xã hội phát triển',
    'Quá trình học tập: từ không biết → biết một chút → hiểu sâu sắc',
    'Sự phát triển của khoa học: giả thuyết → thực nghiệm → lý thuyết mới',
    'Chu trình nước trong tự nhiên: bay hơi → ngưng tụ → mưa → bay hơi'
  ],
  relatedConcepts: [
    'Chủ nghĩa duy vật lịch sử',
    'Phương pháp luận của chủ nghĩa Mác-Lênin',
    'Quy luật khách quan',
    'Nhận thức và thực tiễn'
  ]
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'Quy luật mâu thuẫn trong phép biện chứng duy vật cho rằng:',
    type: 'multiple_choice',
    options: [
      'Mâu thuẫn là nguồn gốc của sự phát triển',
      'Mâu thuẫn làm xã hội ngừng phát triển',
      'Mâu thuẫn chỉ tồn tại trong tư tưởng con người',
      'Mâu thuẫn là hiện tượng tiêu cực cần loại bỏ'
    ],
    correctAnswer: 0,
    aiExplanation: 'Trong phép biện chứng duy vật, mâu thuẫn là động lực nội tại thúc đẩy sự vật và hiện tượng phát triển. Không có mâu thuẫn thì không có sự vận động và phát triển.',
    difficulty: 'easy',
    relatedSection: 'Quy luật thống nhất và đấu tranh của các mặt đối lập'
  },
  {
    id: '2',
    question: 'Đúng hay Sai: Quy luật phủ định của phủ định khẳng định sự phát triển đi theo đường thẳng.',
    type: 'true_false',
    options: ['Đúng', 'Sai'],
    correctAnswer: 1,
    aiExplanation: 'Sai. Quy luật phủ định của phủ định cho thấy sự phát triển theo hình xoáy ốc, vừa kế thừa vừa vượt lên, chứ không phải theo đường thẳng. Sự phát triển có tính chất lặp lại ở trình độ cao hơn.',
    difficulty: 'medium',
    relatedSection: 'Quy luật phủ định của phủ định'
  },
  {
    id: '3',
    question: 'Trong quy luật chuyển hóa lượng - chất, "độ" được hiểu là gì?',
    type: 'multiple_choice',
    options: [
      'Đơn vị đo lường nhiệt độ',
      'Giới hạn mà lượng có thể thay đổi mà không làm thay đổi chất',
      'Mức độ phát triển của sự vật',
      'Tốc độ thay đổi của sự vật'
    ],
    correctAnswer: 1,
    aiExplanation: '"Độ" là giới hạn nhất định mà trong đó lượng có thể thay đổi mà không làm thay đổi chất của sự vật. Khi vượt quá giới hạn này, sự vật sẽ chuyển sang chất mới.',
    difficulty: 'medium',
    relatedSection: 'Quy luật chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất'
  },
  {
    id: '4',
    question: 'Ví dụ nào sau đây thể hiện rõ nhất quy luật chuyển hóa lượng - chất?',
    type: 'multiple_choice',
    options: [
      'Sự thay đổi màu sắc của lá cây theo mùa',
      'Nước chuyển thành băng ở 0°C',
      'Sự tăng trưởng chiều cao của con người',
      'Sự thay đổi thời tiết hàng ngày'
    ],
    correctAnswer: 1,
    aiExplanation: 'Nước chuyển thành băng ở 0°C là ví dụ điển hình của quy luật chuyển hóa lượng - chất. Khi nhiệt độ giảm dần (thay đổi lượng), đến 0°C thì nước chuyển thành băng (thay đổi chất).',
    difficulty: 'easy',
    relatedSection: 'Quy luật chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất'
  },
  {
    id: '5',
    question: 'Ba quy luật cơ bản của phép biện chứng duy vật có mối quan hệ như thế nào?',
    type: 'multiple_choice',
    options: [
      'Hoàn toàn độc lập với nhau',
      'Chỉ có một quy luật đúng, hai quy luật kia sai',
      'Tác động qua lại và bổ sung cho nhau',
      'Chỉ áp dụng riêng lẻ cho từng hiện tượng'
    ],
    correctAnswer: 2,
    aiExplanation: 'Ba quy luật cơ bản của phép biện chứng duy vật có mối quan hệ hữu cơ, tác động qua lại và bổ sung cho nhau. Chúng cùng giải thích các khía cạnh khác nhau của quá trình vận động và phát triển.',
    difficulty: 'hard',
    relatedSection: 'Tổng quan về các quy luật cơ bản'
  }
];

export const aiSampleResponses = {
  explanations: [
    'Để hiểu rõ hơn về mâu thuẫn, hãy nghĩ về việc học tập. Bạn vừa muốn nghỉ ngơi (xu hướng lười biếng) vừa muốn tiến bộ (xu hướng cần cù). Sự đấu tranh giữa hai xu hướng này thúc đẩy bạn phát triển.',
    'Quy luật lượng - chất giống như việc đun nước. Bạn tăng nhiệt độ từ từ (thay đổi lượng), nhưng đến 100°C thì nước sôi (thay đổi chất). Đây là sự nhảy vọt chất lượng.',
    'Phủ định của phủ định như chu trình học tập: Không biết → Học và hiểu → Áp dụng thực tế → Hiểu sâu hơn. Bạn quay lại kiến thức cũ nhưng ở trình độ cao hơn.'
  ],
  examples: [
    'Trong xã hội hiện đại, mâu thuẫn giữa công nghệ và việc làm truyền thống đang thúc đẩy sự chuyển đổi số và tạo ra những ngành nghề mới.',
    'Quá trình phát triển của một startup: Ý tưởng → Tích lũy vốn và kinh nghiệm → Thành công (chuyển từ startup thành công ty lớn).',
    'Sự phát triển của smartphone: Điện thoại cơ bản → Tích hợp nhiều tính năng → Smartphone thông minh → AI phone.'
  ]
};