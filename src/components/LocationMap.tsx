import React from 'react';
import { MapPin, Phone, Clock, Compass, Navigation, ExternalLink } from 'lucide-react';

export const LocationMap: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        background: '#FAF8F5',
        borderTop: '1px solid #1E1C1A',
        paddingBottom: '7rem',
      }}
      className="section-padding"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="location-grid">
          {/* LEFT: Address and support timings */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="tag-sage" style={{ marginBottom: '1rem', width: 'fit-content', borderColor: '#1E1C1A', color: '#1E1C1A' }}>
              <Compass size={13} style={{ color: '#1E1C1A' }} /> 본사 위치 안내
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 800,
              marginBottom: '2rem',
              letterSpacing: '-0.02em',
              color: '#1E1C1A',
            }}>
              본사 오시는 길
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* ADDRESS ITEM */}
              <div className="info-block">
                <div className="info-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="info-title">본사 주소</h4>
                  <p className="info-text">서울시 서초구 서초대로 397, 부띠크모나코 빌딩 18층</p>
                  <span className="info-subtext">(강남역 9번 출구 도보 3분 거리)</span>
                </div>
              </div>

              {/* PHONE ITEM */}
              <div className="info-block">
                <div className="info-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="info-title">대표 문의 번호</h4>
                  <p className="info-text" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#E25B3C' }}>
                    1544-0000
                  </p>
                  <span className="info-subtext">(이츠베럴 가맹 개설 본부)</span>
                </div>
              </div>

              {/* TIMING ITEM */}
              <div className="info-block">
                <div className="info-icon">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="info-title">본사 운영 시간</h4>
                  <p className="info-text">평일 09:00 ~ 18:00</p>
                  <span className="info-subtext">(주말/공휴일 제외, 점심 시간 12:00 ~ 13:00)</span>
                </div>
              </div>
            </div>

            {/* EXTERNAL MAP LINKS */}
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '2.5rem' }}>
              <a 
                href="https://map.naver.com" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem', borderRadius: '6px', border: '1px solid #1E1C1A', color: '#1E1C1A' }}
              >
                네이버 지도 바로가기 <ExternalLink size={12} />
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem', borderRadius: '6px', border: '1px solid #1E1C1A', color: '#1E1C1A' }}
              >
                구글맵으로 보기 <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* RIGHT: Styled blueprint vector map (Static Flat) */}
          <div className="map-mockup-wrapper">
            <div className="gourmet-panel map-hud-container">
              {/* Map Title HUD */}
              <div className="map-hud-header">
                <span className="static-dot-terracotta" />
                <span>HQ NAVIGATION PATH // LAT 37.498 | LNG 127.025</span>
              </div>

              {/* Vector Grid & Map streets */}
              <div className="vector-grid-base-gourmet">
                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <defs>
                    <pattern id="grid-light" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(30, 28, 26, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-light)" />
                  
                  {/* Styled roads */}
                  <path d="M -10,120 L 500,120" stroke="rgba(30, 28, 26, 0.05)" strokeWidth="24" strokeLinecap="round" />
                  <path d="M -10,120 L 500,120" stroke="#E25B3C" strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />
                  
                  <path d="M 180,-10 L 180,400" stroke="rgba(30, 28, 26, 0.05)" strokeWidth="24" strokeLinecap="round" />
                  <path d="M 180,-10 L 180,400" stroke="#E25B3C" strokeWidth="1.2" strokeDasharray="3,3" opacity="0.5" />

                  {/* Subway stations line (Green subway Line 2) */}
                  <path d="M 40,280 Q 180,265 320,280" fill="none" stroke="#1E1C1A" strokeWidth="2.5" opacity="0.6" />
                  <circle cx="180" cy="270" r="5" fill="#1E1C1A" />
                  <text x="180" y="295" fill="#1E1C1A" fontSize="9" fontWeight="800" textAnchor="middle">강남역 (Line 2)</text>

                  {/* Corporate Node HQ Pointer */}
                  <g transform="translate(180, 120)">
                    <circle r="16" fill="none" stroke="#E25B3C" strokeWidth="1.5" strokeDasharray="4, 4" />
                    <circle r="8" fill="rgba(226, 91, 60, 0.15)" />
                    <circle r="3.5" fill="#E25B3C" />
                    <path d="M 0,-10 L 0,-18" stroke="#E25B3C" strokeWidth="1.5" />
                  </g>
                </svg>

                {/* Floating Map tooltip (Static) */}
                <div className="gourmet-panel map-card-hud" style={{ top: '15px', right: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Navigation size={10} style={{ color: '#E25B3C' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1E1C1A' }}>이츠베럴 본사</span>
                  </div>
                  <span style={{ fontSize: '0.65rem', color: '#5A5450', marginTop: '1px', display: 'block', fontWeight: 700 }}>
                    부띠크모나코 18F
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .location-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 4rem;
        }
        .info-block {
          display: flex;
          gap: 1rem;
        }
        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #FAF8F5;
          border: 1px solid #1E1C1A;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #E25B3C;
          flex-shrink: 0;
          transition: var(--transition-fast);
        }
        .info-block:hover .info-icon {
          border-color: #E25B3C;
          background: rgba(226, 91, 60, 0.03);
        }
        .info-title {
          font-size: 0.9rem;
          font-weight: 800;
          color: #1E1C1A;
          margin-bottom: 0.15rem;
        }
        .info-text {
          font-size: 0.95rem;
          font-weight: 800;
          color: #1E1C1A;
        }
        .info-subtext {
          font-size: 0.72rem;
          color: #5A5450;
          font-weight: 700;
        }
        .map-mockup-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .map-hud-container {
          width: 100%;
          max-width: 480px;
          height: 340px;
          border-radius: 12px !important;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          border: 1px solid #1E1C1A !important;
          background: #FAF8F5 !important;
        }
        .map-hud-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.65rem;
          color: #5A5450;
          border-bottom: 1px solid #1E1C1A;
          padding-bottom: 0.6rem;
          font-weight: 800;
        }
        .static-dot-terracotta {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #E25B3C;
        }
        .vector-grid-base-gourmet {
          flex-grow: 1;
          background: #FAF8F5;
          border: 1px solid #1E1C1A;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }
        .map-card-hud {
          position: absolute;
          padding: 0.5rem 0.8rem !important;
          border-radius: 8px !important;
          border: 1px solid #1E1C1A !important;
          background: #FAF8F5 !important;
          box-shadow: none !important;
        }
        @media (max-width: 968px) {
          .location-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .map-hud-container {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};
