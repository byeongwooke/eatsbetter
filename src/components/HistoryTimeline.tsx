import React from 'react';
import { Calendar } from 'lucide-react';

export const HistoryTimeline: React.FC = () => {
  const historyData = [
    {
      year: '2026',
      text: '브랜드 리뉴얼 및 전국 100호점 확장 진행',
    },
    {
      year: '2025',
      text: '가맹 사업 전개 및 50호점 돌파',
    },
    {
      year: '2024',
      text: '주식회사 이츠베럴 법인 설립 및 제조 센터 완공',
    }
  ];

  return (
    <section
      id="timeline"
      className="section-padding"
      style={{
        position: 'relative',
        background: '#FAF8F5',
        overflow: 'hidden',
        borderBottom: '1px solid #1E1C1A',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="tag-gourmet" style={{ borderColor: '#1E1C1A', color: '#1E1C1A' }}>
              <Calendar size={13} style={{ color: '#1E1C1A' }} /> Brand History
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            color: '#1E1C1A',
          }}>
            이츠베럴 브랜드 연혁
          </h2>
          <p style={{
            color: '#2C2825',
            fontSize: '1rem',
            fontWeight: 700,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5',
          }}>
            신뢰와 상생을 바탕으로 다져진 주식회사 이츠베럴의 발자취입니다.
          </p>
        </div>

        {/* Minimal Timeline List */}
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', paddingLeft: '2.5rem' }}>
          {/* Vertical central charcoal thin line */}
          <div 
            style={{
              position: 'absolute',
              left: '9px',
              top: '8px',
              bottom: '8px',
              width: '1px',
              background: '#1E1C1A',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {historyData.map((item, idx) => (
              <div 
                key={item.year} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Dotted indicator node on the timeline spine */}
                <div 
                  style={{
                    position: 'absolute',
                    left: '-2.5rem',
                    top: '6px',
                    width: '19px',
                    height: '19px',
                    borderRadius: '50%',
                    background: '#FAF8F5',
                    border: '2px solid #1E1C1A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                  }}
                >
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: idx === 0 ? '#E25B3C' : '#1E1C1A' }} />
                </div>

                {/* Details layout */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span 
                    style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 900, 
                      color: idx === 0 ? '#E25B3C' : '#1E1C1A',
                      lineHeight: '1' 
                    }}
                  >
                    {item.year}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E1C1A' }}>
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
