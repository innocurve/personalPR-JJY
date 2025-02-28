export type Language = 'ko' | 'en' | 'ja' | 'zh';

export type TranslationKey = string;

// 기본 번역 타입 정의
export type TranslationDictionary = {
  [key in TranslationKey]: {
    [lang in Language]: string;
  };
};

// 음성 대화 설명을 위한 타입 정의
export type VoiceChatDescriptionKey = 
  | 'recognizingVoice'
  | 'pleaseSpeak'
  | 'autoVoiceDetection'
  | 'speakFreely'
  | 'startConversation'
  | 'endConversation'
  | 'iosPermission'
  | 'androidPermission'
  | 'voiceChatTitle';

export type VoiceChatDescriptions = {
  [key in VoiceChatDescriptionKey]: {
    [lang in Language]: string;
  };
};

export const translations: TranslationDictionary = {
  profile: {
    ko: '프로필',
    en: 'Profile',
    ja: 'プロフィール',
    zh: '个人资料',
  },
  values: {
    ko: '가치관',
    en: 'Values',
    ja: '価値観',
    zh: '价值观',
  },
  valuesDescription: {
    ko: '우리를 앞으로 나아가게 하는 것은\n환경이 아니라,도전할 용기이다.',
    en: 'What moves us forward\nis not the environment,but the courage to challenge.',
    ja: '私たちを前に進めるのは\n環境ではなく、挑戦する勇気です。',
    zh: '推动我们前进的不是环境，\n而是挑战的勇气。',
  },
  history: {
    ko: '인증 및 자격',
    en: 'Certifications & Qualifications',
    ja: '認定・資格',
    zh: '认证及资格',
  },
  activities: {
    ko: '프로젝트',
    en: 'Projects',
    ja: 'プロジェクト',
    zh: '项目',
  },
  name: {
    ko: '정진용',
    en: 'Jeong Jinyong',
    ja: '鄭振容',
    zh: '郑振容',
  },
  title: {
    ko: 'AI Agent',
    en: 'AI Agent',
    ja: 'AIエージェント',
    zh: 'AI代理',
  },
  birth: {
    ko: '출생',
    en: 'Birth',
    ja: '生年月日',
    zh: '出生',
  },
  birthDate: {
    ko: '1999년 3월 16일',
    en: 'March 16, 1999',
    ja: '1999年3月16日',
    zh: '1999年3月16日',
  },
  affiliation: {
    ko: '소속',
    en: 'Affiliations',
    ja: '所属',
    zh: '隶属',
  },
  affiliationDescription: {
    ko: '이노커브 AI 에이전트\n(사)대한청년을세계로 운영위원',
    en: 'InnoCurve AI Agent\nAssociation Committee',
    ja: 'イノカーブ AI エージェント\n(社)韓国青年を世界へ 運営委員 ',
    zh: 'InnoCurve AI 代理\n(社)韩国青年走向世界 运营委员',
  },
  field: {
    ko: '분야',
    en: 'Fields',
    ja: '分野',
    zh: '领域',
  },
  fieldDescription: {
    ko: 'AI, 청년',
    en: 'AI, Youth',
    ja: 'AI、青年',
    zh: 'AI，青年',
  },
  mbti: {
    ko: 'MBTI',
    en: 'MBTI',
    ja: 'MBTI',
    zh: 'MBTI',
  },
  mbtiType: {
    ko: 'ENFP',
    en: 'ENFP',
    ja: 'ENFP',
    zh: 'ENFP',
  },
  contact: {
    ko: '문의',
    en: 'Contact',
    ja: 'お問い合わせ',
    zh: '联系',
  },
  smartOptions: {
    ko: '스마트 옵션',
    en: 'Smart Options',
    ja: 'スマートオプション',
    zh: '智能选项',
  },
  socialMedia: {
    ko: 'SNS',
    en: 'Social Media',
    ja: 'SNS',
    zh: '社交媒体',
  },
  viewMore: {
    ko: '자세히 보기',
    en: 'View More',
    ja: '詳細を見る',
    zh: '查看更多',
  },
  allRightsReserved: {
    ko: '모든 권리 보유.',
    en: 'All rights reserved.',
    ja: 'All rights reserved.',
    zh: '版权所有。',
  },
  date: {
    ko: '게시일',
    en: 'Date',
    ja: '投稿日',
    zh: '日期',
  },
  summary: {
    ko: '요약',
    en: 'Summary',
    ja: '要約',
    zh: '摘要',
  },
  details: {
    ko: '상세 내용',
    en: 'Details',
    ja: '詳細内容',
    zh: '详情',
  },
  gallery: {
    ko: '갤러리',
    en: 'Gallery',
    ja: 'ギャラリー',
    zh: '画廊',
  },
  backToList: {
    ko: '목록으로 돌아가기',
    en: 'Back to List',
    ja: 'リストに戻る',
    zh: '返回列表',
  },
  expandToggle: {
    ko: '펼쳐보기',
    en: 'Expand',
    ja: '展開する',
    zh: '展开',
  },
  collapseToggle: {
    ko: '숨기기',
    en: 'Collapse',
    ja: '折りたたむ',
    zh: '折叠',
  },
  aiClone: {
    ko: 'AI 클론',
    en: 'AI Clone',
    ja: 'AIクローン',
    zh: 'AI克隆',
  },
  phone: {
    ko: '전화',
    en: 'Phone',
    ja: '電話',
    zh: '电话',
  },
  greetingVideo: {
    ko: '인사 영상',
    en: 'Greeting Video',
    ja: '挨拶動画',
    zh: '问候视频',
  },
  innoCardInquiry: {
    ko: '문의',
    en: 'Inquiry',
    ja: 'お問い合わせ',
    zh: '咨询',
  },
  contactOptions: {
    ko: '연락하기',
    en: 'Get in Touch',
    ja: 'お問い合わせ',
    zh: '联系方式',
  },
  greetingTitle: {
    ko: '희미해지는 것이 아닌,\n더 깊이 새겨지는\n당신의 존재',
    en: 'Not fading away,\nYour presence\nDeepens over time',
    ja: '消えゆくのではなく、\nより深く刻まれゆく\nあなたの存在',
    zh: '不是渐渐褪色，\n而是愈发深刻地\n铭记你的存在',
  },
  greetingDescription: {
    ko: '인간의 존엄이 위협받는 AI 시대에도,\n당신의 이야기는 결코 흐려지지 않습니다.\n\nInnoCard는 당신의 가치를 더 선명하고,\n더 오래도록 기억하게 만듭니다.',
    en: 'Even in the AI era where human dignity is threatened,\nyour story will never fade.\n\nInnoCard makes your value clearer\nand more memorable for longer.',
    ja: '人間の尊厳が脅かされるAI時代でも、\nあなたの物語は決して薄れることはありません。\n\nInnoCardで、あなたの価値を\nより鮮明に、より永く心に刻みます。',
    zh: '即使在人类尊严受到威胁的AI时代，\n你的故事也永远不会褪色。\n\nInnoCard让你的价值\n更清晰，更持久地铭记于心。',
  },
  chatInputPlaceholder: {
    ko: '메시지를 입력하세요...',
    en: 'Type your message...',
    ja: 'メッセージを入力してください...',
    zh: '请输入消息...',
  },
  cloneTitle: {
    ko: "'s Clone",
    en: "'s Clone",
    ja: "'s Clone",
    zh: "'s Clone"
  },
  formName: {
    ko: '이름',
    en: 'Name',
    ja: '名前',
    zh: '姓名',
  },
  formNamePlaceholder: {
    ko: '이름을 입력하세요',
    en: 'Enter your name',
    ja: '名前を入力してください',
    zh: '请输入姓名',
  },
  formBirthdate: {
    ko: '생년월일',
    en: 'Date of Birth',
    ja: '生年月日',
    zh: '出生日期',
  },
  formBirthdatePlaceholder: {
    ko: 'YYYY-MM-DD',
    en: 'YYYY-MM-DD',
    ja: 'YYYY-MM-DD',
    zh: 'YYYY-MM-DD',
  },
  formPhone: {
    ko: '전화번호',
    en: 'Phone Number',
    ja: '電話番号',
    zh: '电话号码',
  },
  formPhonePlaceholder: {
    ko: '전화번호를 입력하세요',
    en: 'Enter your phone number',
    ja: '電話番号を入力してください',
    zh: '请输入电话号码',
  },
  formInquiry: {
    ko: '문의 내용',
    en: 'Inquiry Details',
    ja: 'お問い合わせ内容',
    zh: '咨询内容',
  },
  formInquiryPlaceholder: {
    ko: '예) 제작 문의',
    en: 'e.g., Production inquiry',
    ja: '例）制作に関するお問い合わせ',
    zh: '例如：制作咨询',
  },
  formSubmit: {
    ko: '제출',
    en: 'Submit',
    ja: '送信',
    zh: '提交',
  },
  back: {
    ko: '뒤로',
    en: 'Back',
    ja: '戻る',
    zh: '返回',
  },
  initialGreeting: {
    ko: '안녕하세요! 저는 정진용입니다. 무엇을 도와드릴까요?',
    en: 'Hello! I am Jeong Jinyong. How can I help you?',
    ja: 'こんにちは！鄭振容と申します。何かお手伝いできることはありますか？',
    zh: '你好！我是郑振容。我能为您做些什么？'
  },
  cloneGreeting: {
    ko: "안녕하세요! 저는 정진용's Clone입니다. 무엇을 도와드릴까요?",
    en: "Hello! I'm Jeong Jinyong's Clone. How can I help you?",
    ja: "こんにちは！鄭振容のクローンです。どのようにお手伝いできますか？",
    zh: "你好！我是郑振容的克隆。我能为您做些什么？"
  },
  formEmail: {
    ko: '이메일',
    en: 'Email',
    ja: 'メール',
    zh: '电子邮件',
  },
  formEmailPlaceholder: {
    ko: '이메일을 입력하세요',
    en: 'Enter your email',
    ja: 'メールアドレスを入力してください',
    zh: '请输入电子邮件',
  },
  greetingScript: {
    ko: '안녕하세요, 정진용입니다.\n저는 이노커브에서 AI 에이전트로 활동하며,\n인공지능을 통해 더 나은 미래를 만드는 데 집중하고 있습니다.\n\nAI 기술은 단순한 자동화를 넘어,\n우리의 삶을 혁신하고 새로운\n가능성을 열어주는 강력한 도구입니다.\n특히, 저는 청년들이 AI를 활용해 더 큰 꿈을 꾸고,\n새로운 기회를 만들 수 있도록 돕고 싶습니다.\n\nAI는 이제 선택이 아니라 필수입니다.\n이 변화 속에서 저는 청년들과 함께 배우고, 성장하며,\n더 나은 세상을 만들어가는 데 기여하고 싶습니다.\n\n앞으로도 AI와 청년이 함께하는 미래를 위해\n최선을 다하겠습니다.\n함께 변화의 중심에서 새로운 가능성을 열어갑시다.\n감사합니다.',
    en: 'nice to meet you,my name is Jin-Yong Jung.\nI am an AI agent at InnoCurve, focusing on creating a better future through artificial intelligence.\n\nAI technology goes beyond simple automation; it is a powerful tool that revolutionizes our lives and opens up new possibilities.In particular, I want to help young people utilize AI to dream bigger and create new opportunities.\n\nAI is no longer an option but a necessity.Amid this transformation, I strive to learn and grow alongside young people, contributing to a better world.\n\nI will continue to do my best for a future where AI and young people thrive together.Let’s stand at the center of change and unlock new possibilities together.\nThank you.',
    ja: 'こんにちは、チョン・ジンヨンです。\n私はイノカーブでAIエージェントとして活動し、人工知能を通じてより良い未来を創ることに注力しています。\n\nAI技術は単なる自動化を超え、私たちの生活を革新し、新たな可能性を切り開く強力なツールです。特に、私は若者たちがAIを活用し、より大きな夢を描き、新しいチャンスを生み出せるよう支援したいと考えています。\n\nAIはもはや選択肢ではなく、必要不可欠なものです。この変革の中で、私は若者たちと共に学び、\n成長し、より良い世界を創ることに貢献したいと思います。\n\nこれからも、AIと若者が共に歩む未来のために全力を尽くします。変革の中心で、新しい可能性を共に切り開いていきましょう。\nありがとうございます。',
    zh: '你好，我是郑振勇。\n我在 InnoCurve 担任 AI 代理，专注于通过人工智能创造更美好的未来。\n\nAI 技术不仅仅是自动化，它是一种强大的工具，能够改变我们的生活，并开启新的可能性。尤其是，我希望帮助年轻人利用 AI 追逐更伟大的梦想，并创造新的机遇。\n\nAI 现在已不是选择，而是必然趋势。在这场变革中，我希望与年轻人一起学习、成长，为创造更美好的世界贡献力量。\n\n我将继续全力以赴，推动 AI 与青年共创未来。让我们站在变革的中心，共同开启新的可能性。\n谢谢！'
  },
  affiliations_1: {
    ko: '이노커브',
    en: 'InnoCurve',
    ja: 'イノカーブ',
    zh: 'InnoCurve'
  },
  affiliations_2: {
    ko: '(사)대한청년을세계로',
    en: 'Korea Youth to the World',
    ja: '(社)韓国青年を世界へ',
    zh: '(社)韩国青年走向世界'
  },
  voiceChat: {
    ko: '음성 대화',
    en: 'Voice Chat',
    ja: '音声チャット',
    zh: '语音聊天',
  },
  listenAudio: {
    ko: '음성으로 듣기',
    en: 'Listen to Audio',
    ja: '音声で聞く',
    zh: '语音播放',
  },
  voiceInput: {
    ko: '음성 입력',
    en: 'Voice Input',
    ja: '音声入力',
    zh: '语音输入',
  },
  clearChat: {
    ko: '채팅 내역 비우기',
    en: 'Clear Chat History',
    ja: 'チャット履歴をクリア',
    zh: '清除聊天记录',
  },
  stopRecording: {
    ko: '녹음 중지',
    en: 'Stop Recording',
    ja: '録音を停止',
    zh: '停止录音',
  },
  backToChat: {
    ko: '채팅으로 돌아가기',
    en: 'Back to Chat',
    ja: 'チャットに戻る',
    zh: '返回聊天',
  },
};

// 음성 대화 페이지 설명 통합
export const voiceChatDescriptions: VoiceChatDescriptions = {
  recognizingVoice: {
    ko: '음성을 인식하고 있습니다...',
    en: 'Recognizing your voice...',
    ja: '音声を認識しています...',
    zh: '正在识别您的声音...',
  },
  pleaseSpeak: {
    ko: '말씀해 주세요',
    en: 'Please speak',
    ja: 'お話しください',
    zh: '请说话',
  },
  autoVoiceDetection: {
    ko: '자동으로 음성을 감지하여 대화합니다',
    en: 'Automatically detects voice for conversation',
    ja: '自動的に音声を検出して会話します',
    zh: '自动检测语音进行对话',
  },
  speakFreely: {
    ko: '자유롭게 말씀해주세요.\n자동으로 음성을 인식하여 대화를 시작합니다.',
    en: 'Speak freely.\nVoice will be automatically recognized\nto start the conversation.',
    ja: '自由に話してください。\n自動的に音声を認識して会話を始めます。',
    zh: '请自由发言。\n系统会自动识别语音并开始对话。',
  },
  startConversation: {
    ko: '대화 시작하기',
    en: 'Start Conversation',
    ja: '会話を始める',
    zh: '开始对话',
  },
  endConversation: {
    ko: '대화 종료하기',
    en: 'End Conversation',
    ja: '会話を終了する',
    zh: '结束对话',
  },
  iosPermission: {
    ko: 'iOS에서는 마이크 권한을 허용해야 합니다',
    en: 'Microphone permission is required on iOS',
    ja: 'iOSではマイクの権限を許可する必要があります',
    zh: '在iOS上需要麦克风权限',
  },
  androidPermission: {
    ko: '안드로이드에서는 마이크 권한을 허용해야 합니다',
    en: 'Microphone permission is required on Android',
    ja: 'Androidではマイクの権限を許可する必要があります',
    zh: '在Android上需要麦克风权限',
  },
  voiceChatTitle: {
    ko: '{name}과\n음성으로 대화해보세요',
    en: 'Voice chat with\n{name}',
    ja: '{name}と\n音声で会話してみましょう',
    zh: '与{name}\n进行语音对话',
  },
};

// 음성 대화 페이지 설명을 위한 번역 함수
export function translateVoiceChat(key: VoiceChatDescriptionKey, lang: Language): string {
  try {
    return voiceChatDescriptions[key][lang] || voiceChatDescriptions[key]['ko'] || key;
  } catch (error) {
    console.error(`Voice chat translation error for key: ${key}, language: ${lang}`, error);
    return key;
  }
}

export function translate(key: TranslationKey, lang: Language): string {
  try {
    const translation = translations[key]?.[lang] ?? translations[key]?.['ko'] ?? key;
    return translation || key;
  } catch (error) {
    console.error(`Translation error for key: ${key}, language: ${lang}`, error);
    return key;
  }
}

