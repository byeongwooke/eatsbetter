import React from 'react';
import { Download, ArrowRight, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';
import heroImg from '../assets/foodtech-hero.png';

interface MainBannerProps {
  onScrollToContact: () => void;
}

export const MainBanner: React.FC<MainBannerProps> = ({ onScrollToContact }) => {
  const handleDownload = () => {
    // Download simulation
    const link = document.createElement('a');
    link.href = '#';
    alert('이츠베럴 회사소개서 다운로드가 시작되었습니다. (B2B_ItsBetter_Brochure_2026.pdf)');
  };

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 70% 30%, rgba(0, 242, 254, 0.08) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(168, 85, 247, 0.06) 0%, transparent 50%)',
      }}
    >
      {/* Ambient backgrounds */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* LEFT: TEXT COPY & CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="animate-slide-up">
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="tag-premium">
                <Cpu size={14} style={{ color: 'hsl(var(--accent-cyan))' }} /> SUSTAINABLE FOODTECH LEADER
              </span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: '1.25',
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
            }}>
              지속 가능한 미래를 여는 <br />
              <span className="text-gradient-cyan">푸드테크의 중심</span>,<br />
              주식회사 이츠베럴
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
              color: 'hsl(var(--text-secondary))',
              marginBottom: '2.5rem',
              fontWeight: 400,
              maxWidth: '540px',
              lineHeight: '1.7',
            }}>
              혁신적인 기술과 탄탄한 시스템으로 상생의 가치를 실현합니다. 
              검증된 B2B 파트너십과 체계적인 올인원 지원 프로세스로 성공 창업을 이끕니다.
            </p>

            {/* TWO-TRACK CTA */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={handleDownload}
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '1rem 2rem',
                }}
              >
                <Download size={18} /> 회사 소개서 다운로드
              </button>
              <button
                onClick={onScrollToContact}
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '1rem 2rem',
                }}
              >
                창업문의 바로가기 <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT: PREMIUM VISUAL WITH FLOATING BADGES */}
          <div className="hero-visual-wrapper">
            <div className="hero-card-glow">
              <img
                src={heroImg}
                alt="Sustainable foodtech abstract architecture"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  display: 'block',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              />
              
              {/* Floating Badge 1: Patent Tech */}
              <div 
                className="glass-panel floating-badge shadow-lg animate-float"
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '-10%',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  animationDelay: '0s',
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(0, 242, 254, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <ShieldCheck size={20} style={{ color: 'hsl(var(--accent-cyan))' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', fontWeight: 600 }}>R&D 특허기술</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>업계 최초 특허 다수 보유</div>
                </div>
              </div>

              {/* Floating Badge 2: Annual Growth */}
              <div 
                className="glass-panel floating-badge shadow-lg animate-float"
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '-8%',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  animationDelay: '2s',
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <TrendingUp size={20} style={{ color: 'hsl(var(--accent-amber))' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', fontWeight: 600 }}>연평균 성장률</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#f8fafc' }}>전년 대비 +150% 달성</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
        }
        .hero-visual-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-card-glow {
          position: relative;
          width: 90%;
          max-width: 480px;
          aspect-ratio: 1;
          border-radius: 24px;
          background: rgba(15, 23, 42, 0.5);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.8),
                      0 0 50px rgba(0, 242, 254, 0.08);
          transition: var(--transition-smooth);
        }
        .hero-card-glow:hover {
          transform: translateY(-5px) scale(1.01);
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.9),
                      0 0 70px rgba(0, 242, 254, 0.15);
        }
        .floating-badge {
          border-radius: 16px !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
        }
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 5rem;
            text-align: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid div {
            align-items: center;
          }
          .hero-grid .btn {
            width: 100%;
          }
          .hero-visual-wrapper {
            margin-top: 1rem;
          }
          .hero-card-glow {
            width: 80%;
          }
          .floating-badge {
            display: none !important; /* Hide badges on small viewports to maintain spacing */
          }
        }
      `}</style>
    </section>
  );
};
