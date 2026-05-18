import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

const CustomO: React.FC = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ 
      display: 'inline-block', 
      verticalAlign: 'middle',
      marginRight: '2px',
      color: '#1E1C1A',
      transform: 'translateY(-2px)'
    }}
  >
    {/* Clean single-stroke outline plate symbol decorating consonant 'ㅇ' */}
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="12" cy="12" r="5" stroke="#E25B3C" strokeWidth="1.5" strokeDasharray="2,2" />
  </svg>
);

export const Header: React.FC<HeaderProps> = ({ onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '이츠베럴 소개', id: 'about' },
    { label: '브랜드 연혁', id: 'timeline' },
    { label: '메뉴 소개', id: 'highlights' },
    { label: '창업 안내', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        transition: 'var(--transition-fast)',
        background: isScrolled ? 'rgba(250, 248, 245, 0.95)' : 'transparent',
        borderBottom: isScrolled ? '1px solid #1E1C1A' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* LOGO - 이츠베럴 Gourmet Wordmark with minimal plate 'ㅇ' */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span 
              style={{ 
                fontSize: '1.45rem', 
                fontWeight: 900, 
                letterSpacing: '-0.04em', 
                color: '#1E1C1A', 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '1px'
              }}
            >
              <CustomO />
              ㅣ츠베럴
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#5A5450', letterSpacing: '0.15em', marginTop: '-3px' }}>
              주식회사 이츠베럴
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-only">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2.2rem' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2C2825',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: '0.5rem 0',
                    position: 'relative',
                    transition: 'var(--transition-fast)',
                  }}
                  className="nav-link-btn"
                >
                  {item.label}
                  <span className="nav-underline" />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNavClick('contact')}
            className="btn btn-primary"
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.8rem',
              borderRadius: '6px',
            }}
          >
            창업 상담 <ArrowUpRight size={13} />
          </button>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#1E1C1A',
            cursor: 'pointer',
            zIndex: 1001,
          }}
          className="mobile-only-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE DRAWER */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: '#FAF8F5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999,
              animation: 'slideUp 0.2s ease-out forwards',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#1E1C1A',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li style={{ marginTop: '1rem' }}>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="btn btn-primary"
                  style={{
                    padding: '0.75rem 1.75rem',
                    fontSize: '0.9rem',
                    borderRadius: '6px',
                  }}
                >
                  무료 창업 가이드북 신청 <ArrowUpRight size={16} />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <style>{`
        .desktop-only {
          display: flex;
        }
        .mobile-only-btn {
          display: none;
        }
        .nav-link-btn:hover {
          color: #E25B3C !important;
        }
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 1.5px;
          background: #E25B3C;
          transition: var(--transition-fast);
        }
        .nav-link-btn:hover .nav-underline {
          width: 100%;
        }
        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          .mobile-only-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
