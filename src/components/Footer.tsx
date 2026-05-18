import React, { useState } from 'react';
import { Shield, X } from 'lucide-react';

const CustomO: React.FC = () => (
  <svg 
    width="15" 
    height="15" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ 
      display: 'inline-block', 
      verticalAlign: 'middle',
      marginRight: '2px',
      color: '#1E1C1A',
      transform: 'translateY(-1.5px)'
    }}
  >
    {/* Ultra-refined, single-stroke outline plate symbol decorating consonant 'ㅇ' */}
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="12" cy="12" r="5" stroke="#E25B3C" strokeWidth="1.5" strokeDasharray="2,2" />
  </svg>
);

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer
      style={{
        background: '#FAF8F5',
        borderTop: '1px solid #1E1C1A',
        padding: '3rem 0 2.5rem 0',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center', textAlign: 'center' }}>
          
          {/* Logo Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span 
              style={{ 
                fontSize: '1.15rem', 
                fontWeight: 900, 
                color: '#1E1C1A', 
                letterSpacing: '-0.04em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1px'
              }}
            >
              <CustomO />
              ㅣ츠베럴
            </span>
          </div>

          {/* SINGLE-LINE CORPORATE DISCLOSURE (가장 작고 정갈한 서체) */}
          <div 
            style={{ 
              fontSize: '0.72rem', 
              color: '#5A5450', 
              lineHeight: '1.8', 
              fontWeight: 700,
              maxWidth: '820px',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'center'
            }}
          >
            <div className="footer-disclosure-text">
              주식회사 이츠베럴 | 대표자: 이베러 | 사업자등록번호: 120-88-00000 | 본사 주소: 서울시 서초구 서초대로 397, 부띠크모나코 빌딩 18층
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#1E1C1A', 
                  fontSize: '0.72rem', 
                  fontWeight: 800, 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.2rem',
                  textDecoration: 'underline'
                }}
              >
                <Shield size={10} /> 개인정보처리방침
              </button>
              <span>|</span>
              <span>가맹문의 대표번호: 1544-0000</span>
              <span>|</span>
              <span>© 2026 이츠베럴. All rights reserved.</span>
            </div>
          </div>

        </div>
      </div>

      {/* PRIVACY POLICY MODAL */}
      {isPrivacyOpen && (
        <div className="modal-overlay-gourmet">
          <div className="modal-content-gourmet">
            <div className="modal-header-gourmet">
              <h3>개인정보처리방침</h3>
              <button onClick={() => setIsPrivacyOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1E1C1A' }}>
                <X size={18} />
              </button>
            </div>
            <div className="modal-body-gourmet">
              <p>주식회사 이츠베럴(이하 "회사")는 가맹 희망 고객의 개인정보를 중요시하며, 개인정보 보호 관련 관계 법률을 엄격히 준수하고 있습니다.</p>
              <h4>1. 수집하는 개인정보 항목</h4>
              <p>회사는 창업 가이드북 송부 및 가맹 개설 1:1 리포팅을 위해 아래의 개인정보를 수집하고 있습니다.</p>
              <ul>
                <li>필수 항목: 성함, 연락처, 희망 창업 지역, 문의 사항</li>
              </ul>
              <h4>2. 수집 및 이용 목적</h4>
              <p>수집된 정보는 가맹 상권 분석, 1:1 상담 조율, 무료 브랜드 가이드북 전송 목적 외 어떠한 상업적 제3자 제공을 하지 않습니다.</p>
              <h4>3. 보유 및 이용기간</h4>
              <p>개인정보는 이용 목적이 달성된 즉시 파기함을 원칙으로 합니다. (최대 보존 기간: 1년)</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .modal-overlay-gourmet {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(30, 28, 26, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }
        .modal-content-gourmet {
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          background: #FAF8F5 !important;
          border: 1px solid #1E1C1A !important;
          display: flex;
          flex-direction: column;
          border-radius: 12px;
        }
        .modal-header-gourmet {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem;
          border-bottom: 1px solid #1E1C1A;
        }
        .modal-header-gourmet h3 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #1E1C1A;
        }
        .modal-body-gourmet {
          padding: 1.25rem;
          overflow-y: auto;
          font-size: 0.8rem;
          color: #2C2825;
          line-height: 1.6;
          text-align: left;
        }
        .modal-body-gourmet h4 {
          color: #1E1C1A;
          font-size: 0.85rem;
          margin-top: 1rem;
          margin-bottom: 0.4rem;
          font-weight: 800;
        }
        .modal-body-gourmet p {
          margin-bottom: 0.6rem;
        }
        .modal-body-gourmet ul {
          margin-left: 1.15rem;
          margin-bottom: 0.6rem;
        }
        .modal-body-gourmet li {
          margin-bottom: 0.2rem;
        }
        @media (max-width: 576px) {
          .footer-disclosure-text {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </footer>
  );
};
