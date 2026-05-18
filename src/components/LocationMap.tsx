import React from 'react';
import { MapPin, Phone, Clock, Compass, Navigation, ExternalLink } from 'lucide-react';

export const LocationMap: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        background: 'hsl(var(--bg-surface))',
        borderTop: '1px solid hsl(var(--border-color))',
        paddingBottom: '8rem',
      }}
      className="section-padding"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="location-grid">
          {/* LEFT: Address and support timings */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="tag-sage" style={{ marginBottom: '1rem', width: 'fit-content' }}>
              <Compass size={13} style={{ color: 'hsl(var(--accent-sage))' }} /> 본사 위치 안내
            </span>
            <h2 className="font-serif" style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 800,
              marginBottom: '2rem',
              letterSpacing: '-0.02em',
            }}>
              본사 오시는 길
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {/* ADDRESS ITEM */}
              <div className="info-block">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="info-title font-serif">본사 주소</h4>
                  <p className="info-text">서울시 서초구 서초대로 397, 부띠크모나코 빌딩 18층</p>
                  <span className="info-subtext">(강남역 9번 출구 도보 3분 거리)</span>
                </div>
              </div>

              {/* PHONE ITEM */}
              <div className="info-block">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="info-title font-serif">가맹 개설 문의 대표번호</h4>
                  <p className="info-text" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'hsl(var(--accent-terracotta))', fontFamily: 'Outfit' }}>
                    1544-0000
                  </p>
                  <span className="info-subtext">(이츠베럴 가맹 개설 본부, 상시 무상 운영)</span>
                </div>
              </div>

              {/* TIMING ITEM */}
              <div className="info-block">
                <div className="info-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="info-title font-serif">본사 운영 시간</h4>
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
                style={{ fontSize: '0.85rem', padding: '0.65rem 1.3rem', borderRadius: '10px' }}
              >
                네이버 지도 바로가기 <ExternalLink size={12} />
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.85rem', padding: '0.65rem 1.3rem', borderRadius: '10px' }}
              >
                구글맵으로 보기 <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* RIGHT: Styled warm minimalist blueprint vector map */}
          <div className="map-mockup-wrapper">
            <div className="gourmet-panel map-hud-container">
              {/* Map Title HUD */}
              <div className="map-hud-header font-mono">
                <span className="blink-dot-terracotta" />
                <span>HQ NAVIGATION PATH // LAT 37.498 | LNG 127.025</span>
              </div>

              {/* Vector Grid & Map streets */}
              <div className="vector-grid-base-gourmet">
                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <defs>
                    <pattern id="grid-light" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(44, 41, 37, 0.03)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-light)" />
                  
                  {/* Styled warm roads */}
                  <path d="M -10,120 L 500,120" stroke="rgba(44, 41, 37, 0.04)" strokeWidth="32" strokeLinecap="round" />
                  <path d="M -10,120 L 500,120" stroke="rgba(226, 91, 60, 0.1)" strokeWidth="1.5" strokeDasharray="4,4" />
                  
                  <path d="M 180,-10 L 180,400" stroke="rgba(44, 41, 37, 0.04)" strokeWidth="42" strokeLinecap="round" />
                  <path d="M 180,-10 L 180,400" stroke="rgba(226, 91, 60, 0.1)" strokeWidth="1.5" strokeDasharray="4,4" />

                  {/* Subway stations line (Green subway Line 2) */}
                  <path d="M 40,300 Q 180,280 320,300" fill="none" stroke="hsl(var(--accent-sage))" strokeWidth="5" opacity="0.4" />
                  <circle cx="180" cy="285" r="7" fill="hsl(var(--accent-sage))" />
                  <text x="180" y="315" fill="hsl(var(--text-primary))" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-sans)">강남역 (Line 2)</text>

                  {/* Corporate Node HQ Pointer */}
                  <g transform="translate(180, 120)">
                    <circle r="22" fill="none" stroke="rgba(226, 91, 60, 0.3)" strokeWidth="2" className="animate-slow-rotate" strokeDasharray="8, 8" />
                    <circle r="12" fill="rgba(226, 91, 60, 0.15)" />
                    <circle r="4" fill="hsl(var(--accent-terracotta))" />
                    <path d="M 0,-15 L 0,-25" stroke="hsl(var(--accent-terracotta))" strokeWidth="1.5" />
                    {/* Animated pulse rings */}
                    <circle r="35" fill="none" stroke="rgba(226, 91, 60, 0.12)" strokeWidth="1" className="radar-ripple" />
                  </g>
                </svg>

                {/* Floating Map tooltip */}
                <div className="gourmet-panel map-card-hud animate-float-light" style={{ animationDelay: '1s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Navigation size={12} style={{ color: 'hsl(var(--accent-terracotta))' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--text-primary))' }}>이츠베럴 본사</span>
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'hsl(var(--text-muted))', marginTop: '1px', display: 'block' }}>
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
          gap: 5rem;
        }
        .info-block {
          display: flex;
          gap: 1.25rem;
        }
        .info-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid hsl(var(--border-color));
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsl(var(--accent-terracotta));
          flex-shrink: 0;
          transition: var(--transition-fast);
          box-shadow: 0 4px 10px rgba(94, 87, 80, 0.04);
        }
        .info-block:hover .info-icon {
          border-color: rgba(var(--accent-terracotta-rgb), 0.4);
          background: rgba(var(--accent-terracotta-rgb), 0.03);
          box-shadow: 0 4px 15px rgba(var(--accent-terracotta-rgb), 0.08);
        }
        .info-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: hsl(var(--text-primary));
          margin-bottom: 0.25rem;
        }
        .info-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: hsl(var(--text-primary));
        }
        .info-subtext {
          font-size: 0.75rem;
          color: hsl(var(--text-muted));
          font-weight: 500;
        }
        .map-mockup-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .map-hud-container {
          width: 100%;
          max-width: 520px;
          height: 380px;
          border-radius: 24px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border: 1px solid hsl(var(--border-color));
          background: #ffffff;
        }
        .map-hud-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          color: hsl(var(--text-muted));
          border-bottom: 1px solid hsl(var(--border-color));
          padding-bottom: 0.75rem;
          font-weight: 700;
        }
        .blink-dot-terracotta {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: hsl(var(--accent-terracotta));
          box-shadow: 0 0 8px hsl(var(--accent-terracotta));
          animation: blink 1.5s infinite ease-in-out;
        }
        .vector-grid-base-gourmet {
          flex-grow: 1;
          background: hsl(var(--bg-base));
          border: 1px solid hsl(var(--border-color));
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }
        .map-card-hud {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 0.65rem 0.95rem !important;
          border-radius: 12px !important;
          border: 1px solid hsl(var(--border-color)) !important;
          background: #ffffff !important;
          box-shadow: 0 4px 15px rgba(94, 87, 80, 0.06) !important;
        }
        .radar-ripple {
          animation: radarWave 3s infinite linear;
          transform-origin: center;
        }
        @keyframes blink {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes radarWave {
          0% {
            r: 10px;
            opacity: 0.8;
          }
          100% {
            r: 50px;
            opacity: 0;
            stroke-width: 0.5;
          }
        }
        @media (max-width: 968px) {
          .location-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .map-hud-container {
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
};
