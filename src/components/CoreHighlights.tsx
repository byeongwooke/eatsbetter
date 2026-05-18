import React from 'react';
import { ChefHat, TrendingUp, Handshake, Zap, ChevronRight, Check } from 'lucide-react';

export const CoreHighlights: React.FC = () => {
  return (
    <section
      id="highlights"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'hsl(var(--bg-surface))',
        borderTop: '1px solid hsl(var(--border-color))',
        borderBottom: '1px solid hsl(var(--border-color))',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background plaster glows */}
      <div className="ambient-warm-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span className="tag-gourmet" style={{ marginBottom: '1rem' }}>
            <Zap size={13} style={{ color: 'hsl(var(--accent-terracotta))' }} /> Brand Highlights
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            이츠베럴의 <span className="text-gradient-terracotta">독보적인 경쟁력</span>
          </h2>
          <p style={{
            color: 'hsl(var(--text-secondary))',
            fontSize: '1.05rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.65',
          }}>
            누구나 쉬운 운영, 유행을 타지 않는 깊은 맛으로 성공하는 B2B 요식업 파트너십을 완성합니다.
          </p>
        </div>

        {/* 3 Brand Highlights Card Grid */}
        <div className="highlight-grid">
          {/* Card 1: 독보적인 소스 & 레시피 (BEST) */}
          <div className="gourmet-panel highlight-card active-terracotta-border">
            <div className="card-top">
              <div className="icon-wrapper terracotta-bg">
                <ChefHat size={24} style={{ color: '#ffffff' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge-best-gourmet">BEST</span>
                <span className="card-number">01</span>
              </div>
            </div>
            
            <h3 className="card-title font-serif">독보적인 소스 & 레시피</h3>
            <p className="card-desc">
              이츠베럴만의 핵심 **원팩(One-pack) 시스템**으로 전문 주방장 없이도 5분 만에 완벽히 구현하는 프리미엄 파스타의 맛을 보장합니다.
            </p>

            {/* Embedded Micro Dashboard */}
            <div className="micro-dash font-mono">
              <div className="step-chain-gourmet">
                <div className="gourmet-step">
                  <div className="circle-number active">1</div>
                  <span>원팩 개봉</span>
                </div>
                <ChevronRight size={10} style={{ color: 'hsl(var(--text-muted))', alignSelf: 'center', marginTop: '-15px' }} />
                <div className="gourmet-step">
                  <div className="circle-number active">2</div>
                  <span>5분 조리</span>
                </div>
                <ChevronRight size={10} style={{ color: 'hsl(var(--text-muted))', alignSelf: 'center', marginTop: '-15px' }} />
                <div className="gourmet-step">
                  <div className="circle-number active">3</div>
                  <span>요리 완성</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 안정적인 롱런 구조 */}
          <div className="gourmet-panel highlight-card">
            <div className="card-top">
              <div className="icon-wrapper slate-bg">
                <TrendingUp size={24} style={{ color: 'hsl(var(--text-primary))' }} />
              </div>
              <span className="card-number">02</span>
            </div>
            
            <h3 className="card-title font-serif">안정적인 롱런 구조</h3>
            <p className="card-desc">
              트렌드를 전혀 타지 않는 대중적인 이탈리안 메뉴 구성으로 계절 비수기 없이 365일 내내 꾸준하고 안정적인 매출을 확보합니다.
            </p>

            {/* Embedded Micro Dashboard */}
            <div className="micro-dash">
              <div className="sales-stability-row font-mono">
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-secondary))' }}>비수기 매출 변동폭</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--accent-sage))' }}>ZERO (±3% 내외)</span>
              </div>
              <div className="stability-indicator">
                <div className="stable-bar green-bar" />
                <span className="stable-label font-serif">Perfect Balance</span>
              </div>
            </div>
          </div>

          {/* Card 3: 밀착형 상생 지원 */}
          <div className="gourmet-panel highlight-card">
            <div className="card-top">
              <div className="icon-wrapper slate-bg">
                <Handshake size={24} style={{ color: 'hsl(var(--text-primary))' }} />
              </div>
              <span className="card-number">03</span>
            </div>
            
            <h3 className="card-title font-serif">밀착형 상생 지원</h3>
            <p className="card-desc">
              오픈 전 철저한 상권 입지 분석부터 오픈 후 1:1 전담 슈퍼바이징 매칭까지 현장 밀착형 올인원 가맹 관리 프로세스를 제공합니다.
            </p>

            {/* Embedded Micro Dashboard */}
            <div className="micro-dash">
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', fontWeight: 600, color: 'hsl(var(--text-secondary))' }}>
                  <Check size={12} style={{ color: 'hsl(var(--accent-terracotta))' }} /> 1:1 가맹 분석 전문가 매칭
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem', fontWeight: 600, color: 'hsl(var(--text-secondary))' }}>
                  <Check size={12} style={{ color: 'hsl(var(--accent-terracotta))' }} /> 점포 맞춤 마케팅 전략 수립
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .highlight-card {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 380px;
          border-color: hsl(var(--border-color)) !important;
        }
        .active-terracotta-border {
          border-color: rgba(var(--accent-terracotta-rgb), 0.25) !important;
        }
        .active-terracotta-border:hover {
          border-color: hsl(var(--accent-terracotta)) !important;
          box-shadow: 0 20px 50px -20px rgba(94, 87, 80, 0.15),
                      0 0 1px rgba(var(--accent-terracotta-rgb), 0.3) !important;
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .terracotta-bg {
          background: hsl(var(--accent-terracotta)) !important;
          border: 1px solid hsl(var(--accent-terracotta));
        }
        .slate-bg {
          background: rgba(44, 41, 37, 0.04);
          border: 1px solid rgba(44, 41, 37, 0.08);
        }
        .card-number {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: rgba(44, 41, 37, 0.08);
          transition: var(--transition-smooth);
        }
        .highlight-card:hover .card-number {
          color: hsl(var(--accent-terracotta));
        }
        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: hsl(var(--text-primary));
          margin-bottom: 0.9rem;
        }
        .card-desc {
          font-size: 0.95rem;
          color: hsl(var(--text-secondary));
          line-height: 1.65;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .micro-dash {
          background: rgba(44, 41, 37, 0.02);
          border: 1px solid hsl(var(--border-color));
          border-radius: 12px;
          padding: 0.9rem 1.1rem;
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .step-chain-gourmet {
          display: flex;
          justify-content: space-between;
          padding-top: 0.25rem;
        }
        .gourmet-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          width: 30%;
        }
        .gourmet-step span {
          font-size: 0.65rem;
          color: hsl(var(--text-secondary));
          font-family: var(--font-sans);
          font-weight: 600;
        }
        .circle-number {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(var(--border-color));
          color: hsl(var(--text-secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 800;
        }
        .circle-number.active {
          background: hsl(var(--accent-terracotta));
          color: #ffffff;
          box-shadow: 0 0 10px rgba(var(--accent-terracotta-rgb), 0.3);
        }
        .sales-stability-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .stability-indicator {
          height: 20px;
          background: #ffffff;
          border: 1px solid hsl(var(--border-color));
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          margin-top: 0.2rem;
        }
        .stable-bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          background: rgba(44, 82, 52, 0.08);
          width: 100%;
        }
        .stable-label {
          position: relative;
          z-index: 2;
          font-size: 0.65rem;
          font-weight: 700;
          color: hsl(var(--accent-sage));
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  );
};
