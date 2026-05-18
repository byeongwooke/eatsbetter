import React from 'react';
import { FileText, ArrowRight, ChefHat, Sparkles } from 'lucide-react';
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
        background: '#FAF8F5',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* LEFT: TEXT COPY & DUAL CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="animate-slide-up">
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="tag-sage" style={{ borderColor: '#1E1C1A', color: '#1E1C1A' }}>
                <ChefHat size={13} style={{ color: '#1E1C1A' }} /> PREMIUM CULINARY FRANCHISE
              </span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: '1.25',
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
              color: '#1E1C1A',
            }}>
              맛의 기준은 높게,<br />
              매장 운영은 <span style={{ color: '#E25B3C' }}>쉽게.</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#2C2825',
              marginBottom: '2.5rem',
              fontWeight: 700,
              maxWidth: '520px',
              lineHeight: '1.6',
            }}>
              원팩 레시피와 체계적인 시스템으로 성공의 확신을 줍니다.
            </p>

            {/* TWO-TRACK CTA */}
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <button
                onClick={handleDownload}
                className="btn btn-secondary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.95rem 2rem',
                  background: 'transparent',
                  border: '1px solid #1E1C1A',
                  color: '#1E1C1A',
                }}
              >
                <FileText size={16} /> 브랜드 소개서 보기
              </button>
              <button
                onClick={onScrollToContact}
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.95rem 2rem',
                  background: '#E25B3C',
                  border: 'none',
                  color: '#FAF8F5',
                }}
              >
                창업 상담 신청 <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT: STEAMING PASTA PIC WITH FLAT OUTLINE BADGES */}
          <div className="hero-visual-wrapper">
            <div className="hero-card-glow">
              <img
                src={pastaImg}
                alt="이츠베럴 시그니처 김이 모락모락 나는 고화질 파스타 요리 사진"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  display: 'block',
                  border: '1px solid #1E1C1A',
                }}
              />
              
              {/* Floating Badge 1: 5-min One-pack system */}
              <div 
                className="gourmet-panel floating-badge"
                style={{
                  position: 'absolute',
                  top: '12%',
                  left: '-10%',
                  padding: '0.75rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: '#FAF8F5',
                  border: '1px solid #1E1C1A',
                  boxShadow: 'none',
                  borderRadius: '12px',
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'rgba(226, 91, 60, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #E25B3C',
                }}>
                  <ChefHat size={16} style={{ color: '#E25B3C' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#5A5450', fontWeight: 800 }}>원팩 시스템</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#1E1C1A' }}>5분 간편 조리 완성</div>
                </div>
              </div>

              {/* Floating Badge 2: Store Growth */}
              <div 
                className="gourmet-panel floating-badge"
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '-8%',
                  padding: '0.75rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: '#FAF8F5',
                  border: '1px solid #1E1C1A',
                  boxShadow: 'none',
                  borderRadius: '12px',
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'rgba(226, 91, 60, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #E25B3C',
                }}>
                  <Sparkles size={16} style={{ color: '#E25B3C' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#5A5450', fontWeight: 800 }}>프랜차이즈 도약</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 900, color: '#1E1C1A' }}>전국 100호점 돌파 진행</div>
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
          max-width: 440px;
          aspect-ratio: 1;
          border-radius: 16px;
          background: #FAF8F5;
        }
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
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
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
