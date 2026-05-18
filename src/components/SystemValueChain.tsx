import React from 'react';
import { Warehouse, Truck, ShieldCheck, Award } from 'lucide-react';

export const SystemValueChain: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        background: '#FAF8F5',
        borderTop: '1px solid #1E1C1A',
        borderBottom: '1px solid #1E1C1A',
      }}
      className="section-padding"
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="tag-sage" style={{ borderColor: '#1E1C1A', color: '#1E1C1A' }}>
              <Award size={13} style={{ color: '#1E1C1A' }} /> CORE VALUE CHAIN
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            color: '#1E1C1A',
          }}>
            이츠베럴 시스템 밸류체인
          </h2>
          <p style={{
            color: '#2C2825',
            fontSize: '1rem',
            fontWeight: 700,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.5',
          }}>
            원가 절감과 위생 관리, 가맹점 상생을 보장하는 체계적인 3대 핵심 인프라를 소개합니다.
          </p>
        </div>

        {/* 3-COLUMN CONNECTOR INFOGRAPHIC */}
        <div className="chain-selector-grid">
          {/* STEP 1: R&D */}
          <div className="chain-node-wrapper">
            <div 
              className="gourmet-panel" 
              style={{
                flexGrow: 1,
                padding: '2rem',
                border: '1px solid #1E1C1A',
                background: '#FAF8F5',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: '100%',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#E25B3C', letterSpacing: '0.1em' }}>
                  SYSTEM 01
                </span>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'transparent',
                  border: '1px solid #1E1C1A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1E1C1A',
                }}>
                  <Warehouse size={18} />
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1E1C1A', marginBottom: '0.4rem' }}>
                  R&D 제조 센터
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#5A5450', fontWeight: 700, lineHeight: '1.5' }}>
                  자체 핵심 레시피 소스 완제품 직접 조리 가공.
                </p>
              </div>
            </div>
            
            <div className="chain-arrow-symbol">➜</div>
          </div>

          {/* STEP 2: LOGISTICS */}
          <div className="chain-node-wrapper">
            <div 
              className="gourmet-panel" 
              style={{
                flexGrow: 1,
                padding: '2rem',
                border: '1px solid #1E1C1A',
                background: '#FAF8F5',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: '100%',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#E25B3C', letterSpacing: '0.1em' }}>
                  SYSTEM 02
                </span>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'transparent',
                  border: '1px solid #1E1C1A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1E1C1A',
                }}>
                  <Truck size={18} />
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1E1C1A', marginBottom: '0.4rem' }}>
                  전국 원팩 물류
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#5A5450', fontWeight: 700, lineHeight: '1.5' }}>
                  콜드체인 전국 주 6회 신선 안심 직배송망.
                </p>
              </div>
            </div>
            
            <div className="chain-arrow-symbol">➜</div>
          </div>

          {/* STEP 3: SUPPORT */}
          <div className="chain-node-wrapper" style={{ position: 'relative' }}>
            <div 
              className="gourmet-panel" 
              style={{
                flexGrow: 1,
                padding: '2rem',
                border: '1px solid #1E1C1A',
                background: '#FAF8F5',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                height: '100%',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#E25B3C', letterSpacing: '0.1em' }}>
                  SYSTEM 03
                </span>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'transparent',
                  border: '1px solid #1E1C1A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1E1C1A',
                }}>
                  <ShieldCheck size={18} />
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1E1C1A', marginBottom: '0.4rem' }}>
                  1:1 가맹 상생
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#5A5450', fontWeight: 700, lineHeight: '1.5' }}>
                  전담 슈퍼바이저 매장 오픈 상시 상생 매칭.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .chain-selector-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2.5rem;
        }
        .chain-node-wrapper {
          display: flex;
          align-items: center;
          position: relative;
        }
        .chain-arrow-symbol {
          position: absolute;
          right: -1.65rem;
          color: #1E1C1A;
          font-size: 1.15rem;
          font-weight: 800;
          z-index: 10;
        }
        @media (max-width: 968px) {
          .chain-selector-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .chain-arrow-symbol {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
