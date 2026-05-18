import React from 'react';
import { MapPin, Phone, Clock, Compass, Navigation, ExternalLink } from 'lucide-react';

export const LocationMap: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        background: 'hsl(var(--bg-surface))',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)',
        paddingBottom: '8rem',
      }}
      className="section-padding"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="location-grid">
          {/* LEFT: Address and support timings */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="tag-premium" style={{ marginBottom: '1rem', width: 'fit-content' }}>
              <Compass size={13} style={{ color: 'hsl(var(--accent-cyan))' }} /> Headquarters Location
            </span>
            <h2 style={{
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
                  <h4 className="info-title">본사 주소</h4>
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
                  <h4 className="info-title">창업 상담 및 고객센터</h4>
                  <p className="info-text" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'hsl(var(--accent-cyan))', fontFamily: 'Outfit' }}>
                    1544-0000
                  </p>
                  <span className="info-subtext">(가맹 상담 내선 번호 1번, 상시 가동)</span>
                </div>
              </div>

              {/* TIMING ITEM */}
              <div className="info-block">
                <div className="info-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="info-title">운영 시간</h4>
                  <p className="info-text">평일 09:00 ~ 18:00</p>
                  <span className="info-subtext">(토/일/공휴일 휴무, 점심 시간 12:00 ~ 13:00)</span>
                </div>
              </div>
            </div>

            {/* EXTERNAL NAV BUTTONS */}
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '2.5rem' }}>
              <a 
                href="https://map.naver.com" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem', borderRadius: '8px' }}
              >
                네이버 지도 <ExternalLink size={12} />
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem', borderRadius: '8px' }}
              >
                구글맵으로 보기 <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* RIGHT: Styled blueprint vector map mockup */}
          <div className="map-mockup-wrapper">
            <div className="glass-panel map-hud-container">
              {/* Map Title HUD */}
              <div className="map-hud-header font-mono">
                <span className="blink-dot" />
                <span>HQ COORDINATES // LAT 37.498 | LNG 127.025</span>
              </div>

              {/* Vector Grid & Map streets */}
              <div className="vector-grid-base">
                {/* Horizontal & vertical layout streets (SVGs) */}
                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 242, 254, 0.04)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Styled roads */}
                  <path d="M -10,120 L 500,120" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="36" strokeLinecap="round" />
                  <path d="M -10,120 L 500,120" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="2" strokeDasharray="5,5" />
                  
                  <path d="M 180,-10 L 180,400" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="48" strokeLinecap="round" />
                  <path d="M 180,-10 L 180,400" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="2" strokeDasharray="5,5" />

                  {/* Subway stations line */}
                  <path d="M 40,300 Q 180,280 320,300" fill="none" stroke="#22c55e" strokeWidth="6" opacity="0.6" />
                  <circle cx="180" cy="285" r="8" fill="#22c55e" />
                  <text x="180" y="315" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-sans)">강남역 (Line 2)</text>

                  {/* Corporate Node HQ Pointer */}
                  <g transform="translate(180, 120)">
                    <circle r="22" fill="none" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="2" className="animate-slow-rotate" strokeDasharray="10, 10" />
                    <circle r="12" fill="rgba(0, 242, 254, 0.2)" />
                    <circle r="4" fill="hsl(var(--accent-cyan))" style={{ boxShadow: '0 0 10px hsl(var(--accent-cyan))' }} />
                    <path d="M 0,-15 L 0,-30" stroke="hsl(var(--accent-cyan))" strokeWidth="2" />
                    {/* Animated pulse rings */}
                    <circle r="35" fill="none" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="1" className="radar-ripple" />
                  </g>
                </svg>

                {/* Floating Map tooltip */}
                <div className="glass-panel map-card-hud animate-float" style={{ animationDelay: '1s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Navigation size={14} style={{ color: 'hsl(var(--accent-amber))' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f8fafc' }}>주식회사 이츠베럴 본사</span>
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'hsl(var(--text-muted))', marginTop: '2px', display: 'block' }}>
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
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: hsl(var(--accent-cyan));
          flex-shrink: 0;
          transition: var(--transition-fast);
        }
        .info-block:hover .info-icon {
          border-color: rgba(0, 242, 254, 0.4);
          background: rgba(0, 242, 254, 0.06);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.1);
        }
        .info-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: hsl(var(--text-secondary));
          margin-bottom: 0.25rem;
        }
        .info-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: #f8fafc;
        }
        .info-subtext {
          font-size: 0.75rem;
          color: hsl(var(--text-muted));
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
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .map-hud-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          color: hsl(var(--text-muted));
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 0.75rem;
        }
        .blink-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          animation: blink 1.5s infinite ease-in-out;
        }
        .vector-grid-base {
          flex-grow: 1;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }
        .map-card-hud {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 0.6rem 0.9rem !important;
          border-radius: 12px !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          background: rgba(15, 23, 42, 0.8) !important;
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
            r: 60px;
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
