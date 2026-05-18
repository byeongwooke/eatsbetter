import React, { useState } from 'react';
import { ArrowUp, Shield, FileText, X } from 'lucide-react';

const CustomO: React.FC = () => (
  <svg 
    width="16" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ 
      display: 'inline-block', 
      verticalAlign: 'middle',
      marginRight: '2px',
      color: 'hsl(var(--text-primary))',
      transform: 'translateY(-1px)'
    }}
  >
    {/* Outer plate ring representing a gourmet dish */}
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="3" />
    {/* Terracotta orange smile representing dining pleasure inside */}
    <path d="M8 12C8 15 16 15 16 12" stroke="hsl(var(--accent-terracotta))" strokeWidth="2.2" strokeLinecap="round" />
    {/* Chef's garnish spice dot representing premium cuisine */}
    <circle cx="12" cy="8.5" r="1.5" fill="hsl(var(--accent-terracotta))" />
  </svg>
);

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        background: '#FAF8F5',
        borderTop: '1px solid hsl(var(--border-color))',
        padding: '5rem 0 3.5rem 0',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="container">
        {/* TOP PANEL: Brand + Go to Top */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', borderBottom: '1px solid hsl(var(--border-color))', paddingBottom: '2rem' }}>
          <div>
            <span 
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontSize: '1.4rem', 
                fontWeight: 900, 
                color: 'hsl(var(--text-primary))', 
                letterSpacing: '-0.04em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1px'
              }}
            >
              <CustomO />
              ㅣ츠베럴
            </span>
            <p style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', marginTop: '0.25rem', fontWeight: 600 }}>
              타협하지 않는 맛과 체계적인 시스템의 상생 요식 파트너십
            </p>
          </div>
          <button
            onClick={scrollToTop}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: '#ffffff',
              border: '1.5px solid hsl(var(--border-color))',
              color: 'hsl(var(--text-secondary))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition-fast)',
            }}
            className="top-scroll-btn-gourmet"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* MIDDLE PANEL: Corporate disclosures */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'hsl(var(--text-muted))', fontSize: '0.8rem', lineHeight: '1.85', fontWeight: 500 }}>
          <div>
            <span style={{ fontWeight: 700, color: 'hsl(var(--text-secondary))' }}>주식회사 이츠베럴</span>
            <span className="divider-gourmet" />
            <span>대표자: 이베러</span>
            <span className="divider-gourmet" />
            <span>사업자등록번호: 120-88-00000</span>
            <span className="divider-gourmet" />
            <span>통신판매업신고: 제 2026-서울서초-0000호</span>
          </div>
          <div>
            <span>본사 주소: 서울시 서초구 서초대로 397, 부띠크모나코 빌딩 18층</span>
            <span className="divider-gourmet" />
            <span style={{ fontWeight: 700, color: 'hsl(var(--text-secondary))' }}>가맹문의 대표번호: 1544-0000</span>
            <span className="divider-gourmet" />
            <span>이메일: franchise@eatsbetter.com</span>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            {/* Legal Links */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                style={{ background: 'none', border: 'none', color: 'hsl(var(--text-primary))', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                className="footer-link-gourmet"
              >
                <Shield size={12} /> 개인정보처리방침
              </button>
              <button 
                onClick={() => setIsTermsOpen(true)}
                style={{ background: 'none', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                className="footer-link-gourmet"
              >
                <FileText size={12} /> 서비스이용약관
              </button>
            </div>
            
            <span>© 2026 이츠베럴 Co., Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* PRIVACY POLICY MODAL */}
      {isPrivacyOpen && (
        <div className="modal-overlay-gourmet">
          <div className="modal-content-gourmet gourmet-panel">
            <div className="modal-header-gourmet">
              <h3 className="font-serif">개인정보처리방침</h3>
              <button onClick={() => setIsPrivacyOpen(false)}><X size={20} /></button>
            </div>
            <div className="modal-body-gourmet">
              <p>주식회사 이츠베럴(이하 "회사")는 가맹 희망 고객의 개인정보를 중요시하며, 개인정보 보호 관련 관계 법률을 엄격히 준수하고 있습니다.</p>
              <h4>1. 수집하는 개인정보 항목</h4>
              <p>회사는 창업 가이드북 송부 및 가맹 개설 1:1 리포팅을 위해 아래의 개인정보를 수집하고 있습니다.</p>
              <ul>
                <li>필수 항목: 성함, 연락처, 희망 창업 지역, 예상 비용</li>
                <li>선택 항목: 문의 사항 및 상세 요구 메세지</li>
              </ul>
              <h4>2. 수집 및 이용 목적</h4>
              <p>수집된 정보는 가맹 상권 분석, 1:1 상담 조율, 무료 브랜드 가이드북 전송 목적 외 어떠한 상업적 제3자 제공을 하지 않습니다.</p>
              <h4>3. 보유 및 이용기간</h4>
              <p>개인정보는 이용 목적이 달성된 즉시 파기함을 원칙으로 합니다. (최대 보존 기간: 1년)</p>
            </div>
          </div>
        </div>
      )}

      {/* TERMS MODAL */}
      {isTermsOpen && (
        <div className="modal-overlay-gourmet">
          <div className="modal-content-gourmet gourmet-panel">
            <div className="modal-header-gourmet">
              <h3 className="font-serif">서비스이용약관</h3>
              <button onClick={() => setIsTermsOpen(false)}><X size={20} /></button>
            </div>
            <div className="modal-body-gourmet">
              <p>주식회사 이츠베럴 가맹 정보 이용에 관한 표준 조항 규정입니다.</p>
              <h4>제 1 조 (목적)</h4>
              <p>본 규정은 이츠베럴이 제공하는 가맹 가이드북 서비스 및 무상 1:1 리포팅을 취득하는 예비 창업주들의 기본적 가치 수용에 대한 상호 신뢰 증명을 목표로 합니다.</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .divider-gourmet {
          display: inline-block;
          width: 1px;
          height: 10px;
          background: hsl(var(--border-color));
          margin: 0 0.6rem;
        }
        .top-scroll-btn-gourmet:hover {
          background: rgba(var(--accent-terracotta-rgb), 0.08) !important;
          border-color: hsl(var(--accent-terracotta)) !important;
          color: hsl(var(--accent-terracotta)) !important;
          box-shadow: 0 4px 15px rgba(var(--accent-terracotta-rgb), 0.15);
          transform: translateY(-3px);
        }
        .footer-link-gourmet:hover {
          color: hsl(var(--accent-terracotta)) !important;
        }
        .modal-overlay-gourmet {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(44, 41, 37, 0.4);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }
        .modal-content-gourmet {
          width: 100%;
          max-width: 600px;
          max-height: 80vh;
          background: #ffffff !important;
          border: 1px solid hsl(var(--border-color)) !important;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          box-shadow: 0 25px 60px -15px rgba(94, 87, 80, 0.18) !important;
          animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .modal-header-gourmet {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid hsl(var(--border-color));
        }
        .modal-header-gourmet h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: hsl(var(--text-primary));
        }
        .modal-header-gourmet button {
          background: none;
          border: none;
          color: hsl(var(--text-muted));
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .modal-header-gourmet button:hover {
          color: hsl(var(--text-primary));
        }
        .modal-body-gourmet {
          padding: 1.5rem;
          overflow-y: auto;
          font-size: 0.85rem;
          color: hsl(var(--text-secondary));
          line-height: 1.7;
        }
        .modal-body-gourmet h4 {
          color: hsl(var(--text-primary));
          font-size: 0.95rem;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        .modal-body-gourmet p {
          margin-bottom: 0.75rem;
        }
        .modal-body-gourmet ul {
          margin-left: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .modal-body-gourmet li {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </footer>
  );
};
