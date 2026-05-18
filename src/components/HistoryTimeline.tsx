import React, { useState } from 'react';
import { Calendar, Globe, Award, Store } from 'lucide-react';

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
      title: '브랜드 리뉴얼 및 글로벌 시장 진출 추진',
      tag: '현재 진행형 (Now)',
      desc: '이츠베럴의 기술력을 글로벌 시장에 입증하고 친환경 푸드테크 브랜드로서 도약합니다.',
      details: [
        '글로벌 브랜드 리뉴얼 프로젝트 완성',
        '글로벌 시장 수출 계약 추진 (동남아 및 미주 지역)',
        '친환경 ESG 푸드테크 2.0 비전 선포'
      ],
      icon: <Globe size={20} />
    },
    {
      year: '2025',
      title: '연구소 설립 및 가맹점 50호점 돌파',
      tag: '도약 및 성장기',
      desc: '기술 기반의 독보적 입지를 굳히기 위해 부설연구소를 설립하고 가맹 사업의 고도 성장을 실현했습니다.',
      details: [
        '기업부설연구소 설립 완료 및 R&D 본격화',
        '기술 신용등급 우수 벤처기업 공식 인증 획득',
        '전국 핵심 상권 가맹점 50호점 돌파'
      ],
      icon: <Award size={20} />
    },
    {
      year: '2024',
      title: '이츠베럴 법인 설립 및 1호점 오픈',
      tag: '혁신의 시작',
      desc: '지속 가능한 먹거리와 건강한 라이프스타일을 전파하는 이츠베럴의 첫 발을 내딛었습니다.',
      details: [
        '주식회사 이츠베럴 공식 법인 설립',
        '자체 유통 및 R&D 물류 시스템 구축',
        '브랜드 시그니처 1호점 안테나샵 성공적 런칭'
      ],
      icon: <Store size={20} />
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
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.04) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="tag-premium" style={{ marginBottom: '1rem' }}>
            <Calendar size={13} style={{ color: 'hsl(var(--accent-cyan))' }} /> Brand History
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            이츠베럴의 <span className="text-gradient-cyan">성장 타임라인</span>
          </h2>
          <p style={{
            color: 'hsl(var(--text-secondary))',
            fontSize: '1.05rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            법인 설립 이래로 멈추지 않고 성장하며, 푸드테크 업계의 혁신적 가치를 입증해 온 발자취입니다.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-container">
          {/* Timeline central neon line */}
          <div className="timeline-spine" />

          {/* Timeline Nodes */}
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
                  <div className={`year-badge ${isActive ? 'active-year' : ''}`}>
                    {item.year}
                  </div>
                  <div className="timeline-tag font-mono">{item.tag}</div>
                </div>

                {/* MIDDLE: Circular Glowing Pin */}
                <div className="timeline-center">
                  <div className={`timeline-pin ${isActive ? 'active-pin' : ''}`}>
                    {item.icon}
                  </div>
                </div>

                {/* RIGHT: Detail card */}
                <div className="timeline-right">
                  <div 
                    className="glass-panel timeline-card"
                    style={{
                      border: isActive ? '1px solid rgba(0, 242, 254, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                      boxShadow: isActive 
                        ? '0 15px 40px -10px rgba(0, 242, 254, 0.1), 0 0 30px -5px rgba(0, 242, 254, 0.05)' 
                        : 'none',
                    }}
                  >
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.8rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'hsl(var(--text-secondary))', lineHeight: '1.6', marginBottom: '1.25rem' }}>
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
                              width: '4px', 
                              height: '4px', 
                              borderRadius: '50%', 
                              background: isActive ? 'hsl(var(--accent-cyan))' : 'rgba(255, 255, 255, 0.4)',
                              boxShadow: isActive ? '0 0 8px hsl(var(--accent-cyan))' : 'none',
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
        .timeline-spine {
          position: absolute;
          left: 30%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            rgba(0, 242, 254, 0.05) 0%,
            rgba(0, 242, 254, 0.6) 20%,
            rgba(0, 242, 254, 0.6) 80%,
            rgba(0, 242, 254, 0.05) 100%
          );
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.25);
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
        .year-badge {
          font-family: 'Outfit', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.08);
          line-height: 1;
          transition: var(--transition-smooth);
        }
        .active-year {
          color: hsl(var(--text-primary)) !important;
          text-shadow: 0 0 20px rgba(0, 242, 254, 0.2);
          transform: scale(1.05);
        }
        .timeline-tag {
          font-size: 0.75rem;
          color: hsl(var(--text-muted));
          margin-top: 0.4rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .timeline-center {
          width: 0%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .timeline-pin {
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: hsl(var(--bg-surface));
          border: 2px solid rgba(255, 255, 255, 0.1);
          color: hsl(var(--text-muted));
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translate(-50%, 0);
          z-index: 5;
          transition: var(--transition-smooth);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }
        .active-pin {
          background: hsl(var(--accent-cyan)) !important;
          border-color: hsl(var(--accent-cyan)) !important;
          color: #030712 !important;
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.6) !important;
          transform: translate(-50%, 0) scale(1.1) !important;
        }
        .timeline-right {
          width: 70%;
          padding-left: 3rem;
        }
        .timeline-card {
          padding: 2.2rem;
          border-radius: 20px;
          background: rgba(15, 23, 42, 0.35);
          transition: var(--transition-smooth);
        }
        .active-row .timeline-card {
          background: rgba(15, 23, 42, 0.6) !important;
        }
        @media (max-width: 768px) {
          .timeline-spine {
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
          .year-badge {
            font-size: 2.5rem;
          }
          .timeline-center {
            position: absolute;
            left: 25px;
            top: 25px;
          }
          .timeline-pin {
            width: 36px;
            height: 36px;
          }
          .timeline-pin svg {
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
