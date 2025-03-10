'use client'

import { useState, useMemo } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { translate } from '../utils/translations'

type CertificationsByLanguage = {
  [key: string]: { title: string; subtitle: string }[]
}

export default function Career() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { language } = useLanguage()

  const certifications: CertificationsByLanguage = useMemo(() => ({
    ko: [
      {
        title: "AI활용전문가 1급",
        subtitle: "주무부처: 과학기술정보통신부"
      },
      {
        title: "인공지능(AI)전문가 1급",
        subtitle: "주무부처: 과학기술정보통신부"
      },
      {
        title: "챗GPT활용지도사 1급",
        subtitle: "주무부처: 과학기술정보통신부"
      },
      {
        title: "마케팅기획 전문가",
        subtitle: "주무부처: 과학기술정보통신부"
      }
    ],
    en: [
      {
        title: "AI Professional 1st Level",
        subtitle: "Main Ministry: Ministry of Science and ICT"
      },
      {
        title: "AI Expert 1st Level",
        subtitle: "Main Ministry: Ministry of Science and ICT"
      },
      {
        title: "ChatGPT Certified Guide 1st Level",
        subtitle: "Main Ministry: Ministry of Science and ICT"
      },
      {
        title: "Marketing Planning Specialist",
        subtitle: "Main Ministry: Ministry of Science and ICT"
      }
    ],
    ja: [
      {
        title: "AI活用専門家1級",
        subtitle: "主務省: 科学技術情報通信部"
      },
      {
        title: "人工知能(AI)専門家1級",
        subtitle: "主務省: 科学技術情報通信部"
      },
      {
        title: "ChatGPT活用指導者1級",
        subtitle: "主務省: 科学技術情報通信部"
      },
      {
        title: "マーケティング計画専門家",
        subtitle: "主務省: 科学技術情報通信部"
      }
    ],
    zh: [
      {
        title: "AI应用专家1级",
        subtitle: "主务省: 科学技術情報通信部"
      },
      {
        title: "人工智能(AI)专家1级",
        subtitle: "主务省: 科学技術情報通信部"
      },
      {
        title: "ChatGPT活用指導者1級",
        subtitle: "主務省: 科学技術情報通信部"
      },
      {
        title: "マーケティング計画専門家",
        subtitle: "主務省: 科学技術情報通信部"
      }
    ]
  }), [])

  const currentCertifications = useMemo(() => {
    return certifications[language] || certifications['ko']
  }, [language, certifications])

  const displayedCertifications = useMemo(() => {
    return isExpanded ? currentCertifications : currentCertifications.slice(0, 3)
  }, [isExpanded, currentCertifications])

  return (
    <section className="mb-4 px-4 md:px-6 lg:px-8" role="region" aria-label="자격 사항">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {translate('인증 및 자격', language)}
        </span>
      </h2>
      <div className="space-y-6">
        <ul className="space-y-6" role="list">
          {displayedCertifications.map((cert, index) => (
            <li 
              key={index} 
              className="border-b border-gray-100 pb-4 last:border-b-0"
              role="listitem"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#4B6BF5] mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                {cert.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                {cert.subtitle}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}