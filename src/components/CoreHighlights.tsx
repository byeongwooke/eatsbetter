import React from 'react';
import { ChefHat, TrendingUp, Handshake, Zap, ChevronRight } from 'lucide-react';

export const CoreHighlights: React.FC = () => {
  return (
    <section
      id="highlights"
      className="section-padding"
      style={{
        position: 'relative',
        background: '#FAF8F5',
        borderTop: '1px solid #1E1C1A',
        borderBottom: '1px solid #1E1C1A',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="tag-gourmet" style={{ borderColor: '#E25B3C', color: '#E25B3C' }}>
              <Zap size={13} style={{ color: '#E25B3C' }} /> Brand Highlights
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            color: '#1E1C1A',
          }}>
            이츠베럴 핵심 경쟁력
          </h2>
          <p style={{
            color: '#2C2825',
            fontSize: '1rem',
            fontWeight: 700,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5',
          }}>
            초보 점주도 숙련자처럼 안정되게 성공을 거두는 3대 독보적 차별점입니다.
          </p>
        </div>

        {/* 3 Brand Highlights Card Grid */}
        <div className="highlight-grid">
          {/* Card 1: 독보적인 소스 */}
          <div 
            className="gourmet-panel highlight-card"
            style={{
              padding: '2.2rem',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #1E1C1A',
              background: '#FAF8F5',
              borderRadius: '12px',
              minHeight: '260px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                border: '1px solid #1E1C1A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1E1C1A',
              }}>
                <ChefHat size={18} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="badge-best-gourmet" style={{ background: '#E25B3C', color: '#FAF8F5', fontSize: '0.6rem', fontWeight: 800, padding: '0.15rem 0.4rem', borderRadius: '4px' }}>BEST</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E1C1A', fontFamily: 'Outfit' }}>01</span>
              </div>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E1C1A', marginBottom: '0.5rem' }}>
              [독보적인 소스]
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#5A5450', fontWeight: 700, lineHeight: '1.5', marginBottom: '1.5rem' }}>
              전문 주방장 없는 5분 원팩 레시피.
            </p>

            {/* Embedded Micro Cooking Step Diagram */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid #1E1C1A', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontWeight: 800, color: '#1E1C1A' }}>
                <span>원팩 개봉</span>
                <ChevronRight size={10} style={{ color: '#E25B3C' }} />
                <span>5분 조리</span>
                <ChevronRight size={10} style={{ color: '#E25B3C' }} />
                <span>요리 완성</span>
              </div>
            </div>
          </div>

          {/* Card 2: 안정적인 롱런 */}
          <div 
            className="gourmet-panel highlight-card"
            style={{
              padding: '2.2rem',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #1E1C1A',
              background: '#FAF8F5',
              borderRadius: '12px',
              minHeight: '260px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                border: '1px solid #1E1C1A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1E1C1A',
              }}>
                <TrendingUp size={18} />
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E1C1A', fontFamily: 'Outfit' }}>02</span>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E1C1A', marginBottom: '0.5rem' }}>
              [안정적인 롱런]
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#5A5450', fontWeight: 700, lineHeight: '1.5', marginBottom: '1.5rem' }}>
              트렌드를 타지 않는 대중적인 메뉴 구성.
            </p>

            <div style={{ marginTop: 'auto', borderTop: '1px solid #1E1C1A', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 800, color: '#1E1C1A' }}>
                <span>비수기 매출 변동폭</span>
                <span style={{ color: '#E25B3C' }}>최소화 (±3% 내외)</span>
              </div>
            </div>
          </div>

          {/* Card 3: 밀착형 상생 */}
          <div 
            className="gourmet-panel highlight-card"
            style={{
              padding: '2.2rem',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #1E1C1A',
              background: '#FAF8F5',
              borderRadius: '12px',
              minHeight: '260px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                border: '1px solid #1E1C1A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1E1C1A',
              }}>
                <Handshake size={18} />
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1E1C1A', fontFamily: 'Outfit' }}>03</span>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E1C1A', marginBottom: '0.5rem' }}>
              [밀착형 상생]
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#5A5450', fontWeight: 700, lineHeight: '1.5', marginBottom: '1.5rem' }}>
              상권 분석부터 1:1 전담 슈퍼바이징까지.
            </p>

            <div style={{ marginTop: 'auto', borderTop: '1px solid #1E1C1A', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 800, color: '#1E1C1A' }}>
                <span>현장 밀착 오퍼레이션</span>
                <span style={{ color: '#E25B3C' }}>상시 밀착 케어</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
