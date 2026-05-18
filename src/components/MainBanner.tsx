import React from 'react';
import { FileText, ArrowRight, Sparkles, ChefHat } from 'lucide-react';
import pastaImg from '../assets/gourmet-pasta.png';

interface MainBannerProps {
  onScrollToContact: () => void;
}

export const MainBanner: React.FC<MainBannerProps> = ({ onScrollToContact }) => {
  const handleDownload = () => {
    alert('이츠베럴 브랜드 가이드북이 새로운 창에서 열립니다. (eatsbetter_Brand_Guide_2026.pdf)');
  };

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 80% 20%, rgba(226, 91, 60, 0.05) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(99, 26, 36, 0.03) 0%, transparent 50%)',
      }}
    >
      {/* Ambient background plaster glows */}
      <div className="ambient-warm-1" />
      <div className="ambient-warm-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* LEFT: TEXT COPY & DUAL CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="animate-slide-up">
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="tag-sage">
                <ChefHat size={14} style={{ color: 'hsl(var(--accent-sage))' }} /> PREMIUM CULINARY FRANCHISE
              </span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: '1.25',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              color: 'hsl(var(--text-primary))',
            }}>
              맛의 기준은 높게,<br />
              매장 운영은 <span className="text-gradient-terracotta">쉽게.</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
              color: 'hsl(var(--text-secondary))',
              marginBottom: '2.5rem',
              fontWeight: 500,
              maxWidth: '540px',
              lineHeight: '1.75',
            }}>
              독보적인 원팩 레시피와 간편한 가맹 시스템으로 예비 창업자에게 성공의 확신을 줍니다.
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
                  padding: '1.05rem 2.2rem',
                }}
              >
                <FileText size={18} /> 브랜드 소개서 보기
              </button>
              <button
                onClick={onScrollToContact}
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '1.05rem 2.2rem',
                }}
              >
                창업 상담 신청 <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT: STEAME PASTA PIC WITH FLOATING BADGES */}
          <div className="hero-visual-wrapper">
            <div className="hero-card-glow">
              <img
                src={pastaImg}
                alt="eatsbetter steaming hot signature pasta culinary styled"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  display: 'block',
                  border: '1px solid hsl(var(--border-color))',
                }}
              />
              
              {/* Floating Badge 1: 5-min One-pack system */}
              <div 
                className="gourmet-panel floating-badge shadow-lg animate-float-light"
                style={{
                  position: 'absolute',
                  top: '12%',
                  left: '-12%',
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
                  background: 'rgba(226, 91, 60, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <ChefHat size={20} style={{ color: 'hsl(var(--accent-terracotta))' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', fontWeight: 700 }}>원팩 시스템</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'hsl(var(--text-primary))' }}>전문 주방장 없이 5분 조리</div>
                </div>
              </div>

              {/* Floating Badge 2: Store Growth */}
              <div 
                className="gourmet-panel floating-badge shadow-lg animate-float-light"
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '-10%',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  animationDelay: '2.5s',
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(44, 82, 52, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Sparkles size={20} style={{ color: 'hsl(var(--accent-sage))' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', fontWeight: 700 }}>프랜차이즈 도약</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'hsl(var(--text-primary))' }}>전국 100호점 확장 진행 중</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4.5rem;
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
          background: #ffffff;
          box-shadow: 0 30px 70px -15px rgba(94, 87, 80, 0.15),
                      0 0 1px rgba(94, 87, 80, 0.15);
          transition: var(--transition-smooth);
        }
        .hero-card-glow:hover {
          transform: translateY(-4px);
          box-shadow: 0 40px 80px -20px rgba(94, 87, 80, 0.22),
                      0 0 1px rgba(226, 91, 60, 0.25);
        }
        .floating-badge {
          border-radius: 16px !important;
          border: 1px solid hsl(var(--border-color)) !important;
          background: #ffffff !important;
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
