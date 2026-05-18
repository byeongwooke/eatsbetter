import React, { useState } from 'react';
import { Calendar, Building, Award, Rocket } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  tag: string;
  desc: string;
  details: string[];
  icon: React.ReactNode;
}

export const HistoryTimeline: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>('2026');

  const historyData: TimelineItem[] = [
    {
      year: '2026',
      title: '브랜드 리뉴얼 및 전국 100호점 확장 진행 중',
      tag: '현재 진행형 (Now)',
      desc: 'eatsbetter의 요식 가치를 극대화하여 메이저 프랜차이즈 브랜드로서 전국 확장을 본격화합니다.',
      details: [
        'eatsbetter F&B 감성 브랜드 리뉴얼 완성',
        '전국 주요 상권 100호점 오픈 로드맵 달성 중',
        '원팩 물류 배송 허브 전국망 인프라 고도화'
      ],
      icon: <Rocket size={20} />
    },
    {
      year: '2025',
      title: '가맹 사업 전개 및 단기간 50호점 돌파, 브랜드 대상',
      tag: '성장 가속기',
      desc: '본격적인 가맹 사업을 전개하여 폭발적인 성장세를 기록하고 가치 창출을 대외적으로 입증받았습니다.',
      details: [
        '가맹 사업 런칭 후 최단기간 50호점 전격 돌파',
        '대한민국 우수 B2B 프랜차이즈 부문 브랜드 대상 수상',
        '메뉴 조리 편의화 특허 획득 (원팩 시스템의 기틀 마련)'
      ],
      icon: <Award size={20} />
    },
    {
      year: '2024',
      title: '주식회사 eatsbetter 법인 설립 및 R&D 센터 완공',
      tag: '도전의 첫걸음',
      desc: '요식업계에 차별화된 맛과 상생 모델을 제시하기 위해 법인을 설립하고 핵심 기지를 구축했습니다.',
      details: [
        '주식회사 eatsbetter 공식 법인 설립',
        '자체 핵심 소스 개발 및 완제품 R&D 제조 센터 완공',
        '직영 안테나샵 런칭을 통한 현장 검증 완료'
      ],
      icon: <Building size={20} />
    }
  ];

  return (
    <section
      id="timeline"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'hsl(var(--bg-base))',
        overflow: 'hidden',
      }}
    >
      {/* Background radial effects */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(226, 91, 60, 0.03) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="tag-gourmet" style={{ marginBottom: '1rem' }}>
            <Calendar size={13} style={{ color: 'hsl(var(--accent-terracotta))' }} /> Brand History
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            이츠베럴의 <span className="text-gradient-terracotta">성장 발자취</span>
          </h2>
          <p style={{
            color: 'hsl(var(--text-secondary))',
            fontSize: '1.05rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.65',
          }}>
            철저한 준비와 R&D 인프라 완비로 출발하여, 가맹점과의 두터운 신뢰로 쌓아온 이츠베럴의 브랜드 스토리입니다.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-container">
          {/* Timeline central terracotta dotted line */}
          <div className="timeline-spine-gourmet" />

          {/* Timeline Rows */}
          {historyData.map((item, idx) => {
            const isActive = activeYear === item.year;
            return (
              <div
                key={item.year}
                className={`timeline-row ${isActive ? 'active-row' : ''}`}
                onMouseEnter={() => setActiveYear(item.year)}
                style={{
                  display: 'flex',
                  position: 'relative',
                  marginBottom: idx === historyData.length - 1 ? '0' : '4rem',
                  zIndex: 2,
                }}
              >
                {/* LEFT: Year block */}
                <div className="timeline-left">
                  <div className={`year-badge-gourmet ${isActive ? 'active-year' : ''}`}>
                    {item.year}
                  </div>
                  <div className="timeline-tag font-mono">{item.tag}</div>
                </div>

                {/* MIDDLE: Circular Glowing Pin */}
                <div className="timeline-center">
                  <div className={`timeline-pin-gourmet ${isActive ? 'active-pin' : ''}`}>
                    {item.icon}
                  </div>
                </div>

                {/* RIGHT: Detail card */}
                <div className="timeline-right">
                  <div 
                    className="gourmet-panel timeline-card"
                    style={{
                      border: isActive ? '1px solid hsl(var(--accent-terracotta))' : '1px solid hsl(var(--border-color))',
                      boxShadow: isActive 
                        ? '0 15px 40px -15px rgba(226, 91, 60, 0.08), 0 0 1px rgba(226, 91, 60, 0.15)' 
                        : '0 10px 30px -15px rgba(94, 87, 80, 0.05)',
                    }}
                  >
                    <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 700, color: 'hsl(var(--text-primary))', marginBottom: '0.8rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'hsl(var(--text-secondary))', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                      {item.desc}
                    </p>

                    {/* Detailed sub bullets */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {item.details.map((detail, dIdx) => (
                        <li 
                          key={dIdx} 
                          style={{ 
                            display: 'flex', 
                            gap: '0.5rem', 
                            fontSize: '0.85rem', 
                            color: 'hsl(var(--text-secondary))',
                            alignItems: 'center' 
                          }}
                        >
                          <span 
                            style={{ 
                              width: '5px', 
                              height: '5px', 
                              borderRadius: '50%', 
                              background: isActive ? 'hsl(var(--accent-terracotta))' : 'hsl(var(--text-muted))',
                              boxShadow: isActive ? '0 0 8px hsl(var(--accent-terracotta))' : 'none',
                              display: 'inline-block' 
                            }} 
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .timeline-spine-gourmet {
          position: absolute;
          left: 30%;
          top: 0;
          bottom: 0;
          width: 2px;
          border-left: 2px dashed rgba(var(--accent-terracotta-rgb), 0.3);
          transform: translateX(-50%);
          z-index: 1;
        }
        .timeline-left {
          width: 30%;
          padding-right: 3rem;
          text-align: right;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
        }
        .year-badge-gourmet {
          font-family: 'Playfair Display', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: rgba(44, 41, 37, 0.08);
          line-height: 1;
          transition: var(--transition-smooth);
        }
        .active-year {
          color: hsl(var(--text-primary)) !important;
          transform: scale(1.05);
        }
        .timeline-tag {
          font-size: 0.75rem;
          color: hsl(var(--text-muted));
          margin-top: 0.4rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 700;
        }
        .timeline-center {
          width: 0%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .timeline-pin-gourmet {
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid hsl(var(--border-color));
          color: hsl(var(--text-muted));
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, 0);
          z-index: 5;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 10px rgba(94, 87, 80, 0.06);
        }
        .active-pin {
          background: hsl(var(--accent-terracotta)) !important;
          border-color: hsl(var(--accent-terracotta)) !important;
          color: #ffffff !important;
          box-shadow: 0 0 15px rgba(var(--accent-terracotta-rgb), 0.4) !important;
          transform: translate(-50%, 0) scale(1.1) !important;
        }
        .timeline-right {
          width: 70%;
          padding-left: 3rem;
        }
        .timeline-card {
          padding: 2.2rem;
          background: #ffffff;
          transition: var(--transition-smooth);
        }
        .active-row .timeline-card {
          background: #ffffff !important;
        }
        @media (max-width: 768px) {
          .timeline-spine-gourmet {
            left: 25px;
          }
          .timeline-row {
            flex-direction: column;
          }
          .timeline-left {
            width: 100%;
            text-align: left;
            align-items: flex-start;
            padding-left: 70px;
            padding-right: 0;
            margin-bottom: 1rem;
          }
          .year-badge-gourmet {
            font-size: 2.5rem;
          }
          .timeline-center {
            position: absolute;
            left: 25px;
            top: 25px;
          }
          .timeline-pin-gourmet {
            width: 36px;
            height: 36px;
          }
          .timeline-pin-gourmet svg {
            width: 16px;
            height: 16px;
          }
          .timeline-right {
            width: 100%;
            padding-left: 70px;
          }
          .timeline-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
