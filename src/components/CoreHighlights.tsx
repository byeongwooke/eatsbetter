import React from 'react';
import { Award, BarChart3, HeartHandshake, Zap, ChevronRight } from 'lucide-react';

export const CoreHighlights: React.FC = () => {
  return (
    <section
      id="highlights"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'hsl(var(--bg-surface))',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div className="ambient-glow-3" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <span className="tag-premium" style={{ marginBottom: '1rem' }}>
            <Zap size={13} style={{ color: 'hsl(var(--accent-cyan))' }} /> Core Competency
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            이츠베럴의 <span className="text-gradient-cyan">독보적인 경쟁력</span>
          </h2>
          <p style={{
            color: 'hsl(var(--text-secondary))',
            fontSize: '1.05rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            지속 가능한 푸드테크 기술력을 바탕으로 상생 협력과 탄탄한 상생 네트워크를 통해 가치를 창출합니다.
          </p>
        </div>

        {/* 3 Cards Highlight Grid */}
        <div className="highlight-grid">
          {/* Card 1: 독보적인 기술력 */}
          <div className="glass-panel highlight-card">
            <div className="card-top">
              <div className="icon-wrapper">
                <Award size={24} style={{ color: 'hsl(var(--accent-cyan))' }} />
              </div>
              <span className="card-number">01</span>
            </div>
            
            <h3 className="card-title">독보적인 기술력</h3>
            <p className="card-desc">
              업계 최초 특허 보유 및 식물성 대체 식품 R&D 전문성으로 시장 트렌드를 적극 선도하고 차별화합니다.
            </p>

            {/* Embedded Micro Dashboard */}
            <div className="micro-dash font-mono">
              <div className="dash-row">
                <span>R&D 특허 취득</span>
                <span className="cyan-text">12건</span>
              </div>
              <div className="patent-pills">
                <span className="pill">대체육 가공</span>
                <span className="pill">식물성 원료</span>
                <span className="pill">친환경 포장</span>
              </div>
            </div>
          </div>

          {/* Card 2: 탄탄한 수익 구조 (BEST) */}
          <div className="glass-panel highlight-card active-border">
            <div className="card-top">
              <div className="icon-wrapper amber-bg">
                <BarChart3 size={24} style={{ color: 'hsl(var(--accent-amber))' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="badge-best">BEST</span>
                <span className="card-number">02</span>
              </div>
            </div>
            
            <h3 className="card-title">탄탄한 수익 구조</h3>
            <p className="card-desc">
              연평균 150% 성장률 달성, 중간 단계를 제거한 유통 마진 최소화로 가맹점의 안정적 수익을 견인하고 보장합니다.
            </p>

            {/* Embedded Micro Dashboard */}
            <div className="micro-dash font-mono">
              <div className="dash-row">
                <span>연평균 성장율</span>
                <span className="amber-text">+150%</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '85%' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'hsl(var(--text-muted))', marginTop: '4px' }}>
                <span>2024</span>
                <span>2025</span>
                <span>2026 (현재)</span>
              </div>
            </div>
          </div>

          {/* Card 3: 체계적인 지원 시스템 */}
          <div className="glass-panel highlight-card">
            <div className="card-top">
              <div className="icon-wrapper">
                <HeartHandshake size={24} style={{ color: 'hsl(var(--accent-cyan))' }} />
              </div>
              <span className="card-number">03</span>
            </div>
            
            <h3 className="card-title">체계적인 지원 시스템</h3>
            <p className="card-desc">
              오픈 전 전문 교육부터 오픈 후 1:1 밀착 전담 슈퍼바이저 케어까지 지속 가능한 운영 안정성을 위해 올인원 케어를 제공합니다.
            </p>

            {/* Embedded Micro Dashboard */}
            <div className="micro-dash font-mono" style={{ paddingBottom: '0.5rem' }}>
              <div className="step-chain">
                <div className="step">
                  <div className="step-dot" />
                  <span>교육</span>
                </div>
                <ChevronRight size={10} style={{ color: 'hsl(var(--text-muted))', alignSelf: 'center', marginTop: '-12px' }} />
                <div className="step">
                  <div className="step-dot active" />
                  <span>매칭</span>
                </div>
                <ChevronRight size={10} style={{ color: 'hsl(var(--text-muted))', alignSelf: 'center', marginTop: '-12px' }} />
                <div className="step">
                  <div className="step-dot" />
                  <span>올인원 케어</span>
                </div>
              </div>
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
        }
        .active-border {
          border-color: rgba(var(--accent-amber-rgb), 0.25) !important;
        }
        .active-border:hover {
          border-color: rgba(var(--accent-amber-rgb), 0.45) !important;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6),
                      0 0 50px -10px rgba(var(--accent-amber-rgb), 0.12) !important;
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
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .amber-bg {
          background: rgba(245, 158, 11, 0.1) !important;
          border-color: rgba(245, 158, 11, 0.15) !important;
        }
        .card-number {
          font-family: 'Outfit', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.05);
          transition: var(--transition-smooth);
        }
        .highlight-card:hover .card-number {
          color: rgba(0, 242, 254, 0.2);
        }
        .active-border:hover .card-number {
          color: rgba(245, 158, 11, 0.25) !important;
        }
        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 0.9rem;
        }
        .card-desc {
          font-size: 0.95rem;
          color: hsl(var(--text-secondary));
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }
        .micro-dash {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 0.9rem 1.1rem;
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .dash-row {
          display: flex;
          justify-content: space-between;
          color: hsl(var(--text-secondary));
          font-weight: 500;
        }
        .cyan-text {
          color: hsl(var(--accent-cyan));
          font-weight: 700;
        }
        .amber-text {
          color: hsl(var(--accent-amber));
          font-weight: 700;
        }
        .patent-pills {
          display: flex;
          gap: 0.4rem;
          margin-top: 0.2rem;
          flex-wrap: wrap;
        }
        .pill {
          padding: 0.2rem 0.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 4px;
          font-size: 0.65rem;
          color: hsl(var(--text-secondary));
        }
        .progress-bar-container {
          height: 6px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 0.25rem;
        }
        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #f59e0b, #fbbf24);
          border-radius: 3px;
          animation: progressGrow 2.5s ease-out forwards;
        }
        .step-chain {
          display: flex;
          justify-content: space-between;
          padding-top: 0.5rem;
        }
        .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          width: 30%;
        }
        .step span {
          font-size: 0.65rem;
          color: hsl(var(--text-muted));
          font-family: var(--font-sans);
        }
        .step-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }
        .step-dot.active {
          background: hsl(var(--accent-cyan));
          box-shadow: 0 0 10px hsl(var(--accent-cyan));
        }
        @keyframes progressGrow {
          from { width: 0%; }
        }
      `}</style>
    </section>
  );
};
