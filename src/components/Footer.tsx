import React, { useState } from 'react';
import { ArrowUp, Shield, FileText, X } from 'lucide-react';

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
        background: '#020617',
        borderTop: '1px solid rgba(255, 255, 255, 0.04)',
        padding: '4rem 0 3rem 0',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="container">
        {/* TOP PANEL: Logo + Go to Top */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', borderBottom: '1px solid rgba(255, 255, 255, 0.04)', paddingBottom: '2rem' }}>
          <div>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>
              주식회사 이츠베럴
            </span>
            <p style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', marginTop: '0.25rem' }}>
              지속 가능한 푸드테크 기술의 혁신적인 B2B 파트너십
            </p>
          </div>
          <button
            onClick={scrollToTop}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#f8fafc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition-fast)',
            }}
            className="top-scroll-btn"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        {/* MIDDLE PANEL: Corporate disclosures */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'hsl(var(--text-muted))', fontSize: '0.8rem', lineHeight: '1.8' }}>
          <div>
            <span>주식회사 이츠베럴</span>
            <span className="divider" />
            <span>대표자: 이츠베</span>
            <span className="divider" />
            <span>사업자등록번호: 120-88-00000</span>
            <span className="divider" />
            <span>통신판매업신고번호: 제 2026-서울서초-0000호</span>
          </div>
          <div>
            <span>본사 주소: 서울시 서초구 서초대로 397, 부띠크모나코 빌딩 18층</span>
            <span className="divider" />
            <span>대표번호: 1544-0000</span>
            <span className="divider" />
            <span>이메일: contact@itsbetter.com</span>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            {/* Legal Links */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                style={{ background: 'none', border: 'none', color: '#f8fafc', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                className="footer-link"
              >
                <Shield size={12} /> 개인정보처리방침
              </button>
              <button 
                onClick={() => setIsTermsOpen(true)}
                style={{ background: 'none', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                className="footer-link"
              >
                <FileText size={12} /> 서비스이용약관
              </button>
            </div>
            
            <span>© 2026 ItsBetter Co., Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* PRIVACY POLICY MODAL */}
      {isPrivacyOpen && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel">
            <div className="modal-header">
              <h3>개인정보처리방침</h3>
              <button onClick={() => setIsPrivacyOpen(false)}><X size={20} /></button>
            </div>
            <div className="modal-body">
              <p>주식회사 이츠베럴(이하 "회사")은 고객님의 개인정보를 매우 소중하게 생각하며, "개인정보 보호법" 등 관련 법령을 철저히 준수하고 있습니다.</p>
              <h4>1. 수집하는 개인정보 항목</h4>
              <p>회사는 창업 상담 및 상담 문의 접수를 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
              <ul>
                <li>필수항목: 이름, 연락처, 희망 창업 지역, 예상 창업 비용</li>
                <li>선택항목: 구체적인 문의 사항 및 메시지</li>
              </ul>
              <h4>2. 개인정보 수집 및 이용 목적</h4>
              <p>수집된 개인정보는 가맹점 개설 조건 파악, 상권 분석, 1:1 유선 및 메일 상담 리포팅 외 다른 목적으로 이용되지 않습니다.</p>
              <h4>3. 개인정보 보유 및 이용기간</h4>
              <p>원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 관련 법령이 정한 일정 기간 동안 보존합니다. (보유 기간: 1년)</p>
            </div>
          </div>
        </div>
      )}

      {/* TERMS MODAL */}
      {isTermsOpen && (
        <div className="modal-overlay">
          <div className="modal-content glass-panel">
            <div className="modal-header">
              <h3>서비스이용약관</h3>
              <button onClick={() => setIsTermsOpen(false)}><X size={20} /></button>
            </div>
            <div className="modal-body">
              <p>주식회사 이츠베럴 기업형 웹사이트 및 창업 서비스 이용에 관한 일반 규정입니다.</p>
              <h4>제 1 조 (목적)</h4>
              <p>본 약관은 주식회사 이츠베럴이 제공하는 인터넷 서비스 및 맞춤형 가맹 신청 서비스의 이용 조건 및 절차를 규정함을 목적으로 합니다.</p>
              <h4>제 2 조 (신청 및 거절)</h4>
              <p>이용자가 제공하는 모든 창업 신청 데이터는 신뢰성 확보를 기반으로 성실히 작성되어야 하며, 허위 기재나 비방 목적의 도배 신청 건은 관리자에 의해 임의 파기될 수 있습니다.</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .divider {
          display: inline-block;
          width: 1px;
          height: 10px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0 0.6rem;
        }
        .top-scroll-btn:hover {
          background: rgba(0, 242, 254, 0.1) !important;
          border-color: hsl(var(--accent-cyan)) !important;
          color: hsl(var(--accent-cyan)) !important;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
          transform: translateY(-3px);
        }
        .footer-link:hover {
          color: hsl(var(--accent-cyan)) !important;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(3, 7, 18, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }
        .modal-content {
          width: 100%;
          max-width: 600px;
          max-height: 80vh;
          background: #0b132b !important;
          border: 1px solid rgba(0, 242, 254, 0.2) !important;
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8), 0 0 40px rgba(0, 242, 254, 0.05);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .modal-header h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #f8fafc;
        }
        .modal-header button {
          background: none;
          border: none;
          color: hsl(var(--text-secondary));
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .modal-header button:hover {
          color: #f8fafc;
        }
        .modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          font-size: 0.85rem;
          color: hsl(var(--text-secondary));
          line-height: 1.6;
        }
        .modal-body h4 {
          color: #f8fafc;
          font-size: 0.95rem;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        .modal-body p {
          margin-bottom: 0.75rem;
        }
        .modal-body ul {
          margin-left: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .modal-body li {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </footer>
  );
};
