'use client'

import { useState } from 'react'
import { Language, translate } from '../utils/translations'
import SophisticatedButton from './SophisticatedButton'

interface MyValuesProps {
  language: Language
}

const MyValues: React.FC<MyValuesProps> = ({ language }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const content = {
    ko: [
      translate('valuesDescription', language),
      "\"배는 항구에 있을 때 가장 안전하다. 하지만 그것이 배의 존재 이유는 아니다.\"",
      "이 말처럼, 우리는 익숙한 환경 속에서 안주하는 것이 아니라, 새로운 가능성을 향해 나아가야 합니다.",
      "세상은 빠르게 변화하고 있습니다. 기술은 새로운 지평을 열고, 기존의 경계를 허물고 있습니다. 하지만 혁신은 기술 그 자체가 아니라, 그것을 어떻게 활용하느냐에 달려 있습니다. 진정한 변화는 도전을 두려워하지 않는 사람들에 의해 이루어집니다.",
      "저는 AI를 통해 사람들의 한계를 확장하는 도구를 만들고 싶습니다. AI는 단순한 자동화 기술이 아니라, 우리가 더 큰 목표를 향해 나아갈 수 있도록 돕는 힘이어야 합니다. 청년들은 이제 더 이상 기회를 기다리는 존재가 아니라, 기회를 직접 만들어가는 창조자가 되어야 합니다. 저는 그들이 자신의 가능성을 믿고, 주저 없이 도전할 수 있도록 지원할 것입니다.",
      "우리는 환경에 좌우되는 존재가 아닙니다."
    ],
    en: [
      translate('valuesDescription', language),
      "\"A ship is safest in harbor, but that's not what ships are built for.\"",
      "Like this saying, we shouldn't just stay in our comfort zones, but move forward towards new possibilities.",
      "The world is changing rapidly. Technology is opening new horizons and breaking down existing boundaries. However, innovation isn't about technology itself, but how we utilize it. True change comes from those who aren't afraid to take on challenges.",
      "I want to create tools that expand human potential through AI. AI shouldn't be just an automation technology, but a force that helps us move towards greater goals. Young people should no longer be waiting for opportunities, but become creators who make their own opportunities. I will support them in believing in their potential and taking on challenges without hesitation.",
      "We are not beings defined by our circumstances."
    ],
    ja: [
      translate('valuesDescription', language),
      "「船は港にいる時が最も安全だ。しかし、それは船の存在理由ではない。」",
      "この言葉のように、私たちは慣れ親しんだ環境に留まるのではなく、新たな可能性に向かって前進しなければなりません。",
      "世界は急速に変化しています。技術は新たな地平を開き、既存の境界を取り払っています。しかし、イノベーションは技術そのものではなく、それをどのように活用するかにかかっています。真の変化は、挑戦を恐れない人々によってもたらされます。",
      "私はAIを通じて人々の可能性を広げるツールを作りたいと考えています。AIは単なる自動化技術ではなく、より大きな目標に向かって進むための力となるべきです。若者はもはや機会を待つ存在ではなく、機会を自ら創り出すクリエイターとなるべきです。私は彼らが自身の可能性を信じ、躊躇なく挑戦できるよう支援していきます。",
      "私たちは環境に左右される存在ではありません。"
    ],
    zh: [
      translate('valuesDescription', language),
      "\"船在港口最安全，但这并非船的存在意义。\"",
      "正如这句话所说，我们不应该安于现状，而是要朝着新的可能性前进。",
      "世界正在快速变化。科技开辟着新的视野，打破着既有的界限。然而，创新不在于技术本身，而在于如何运用它。真正的变革来自于那些不畏挑战的人们。",
      "我想通过AI创造扩展人类潜能的工具。AI不应该仅仅是一种自动化技术，而应该是帮助我们朝着更大目标前进的力量。年轻人不应该再只是等待机会的存在，而应该成为创造机会的创造者。我将支持他们相信自己的潜力，毫不犹豫地迎接挑战。",
      "我们不是被环境所支配的存在。"
    ]
  }

  const currentContent = content[language] ?? content['ko'] ?? [];

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <div className="mb-6 relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 flex flex-col items-center">
          <svg className="absolute top-0 left-0 w-5 sm:w-7 md:w-12 h-5 sm:h-7 md:h-12 text-gray-300 dark:text-gray-700 transform -translate-x-1/6 -translate-y-1/6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <h2 className="text-lg sm:text-2xl md:text-3xl relative z-10 text-center mb-4 sm:mb-5 md:mb-6">
            {translate('valuesDescription', language).split('\n').map((line: string, i: number) => (
              <span key={i} className="block text-lg sm:text-xl md:text-4xl font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 whitespace-nowrap">
                {line}
              </span>
            ))}
          </h2>
          <svg className="absolute bottom-0 right-0 w-5 sm:w-7 md:w-12 h-5 sm:h-7 md:h-12 text-gray-300 dark:text-gray-700 transform translate-x-1/6 translate-y-1/6 rotate-180" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        <div className="space-y-4">
          {(isExpanded ? currentContent.slice(1) : currentContent.slice(1, 3)).map((paragraph, index) => (
            <p key={index} className="text-gray-600 dark:text-gray-300">{paragraph}</p>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <SophisticatedButton 
            expanded={isExpanded} 
            onClick={() => setIsExpanded(!isExpanded)} 
            language={language}
          />
        </div>
      </div>
    </div>
  )
}

export default MyValues