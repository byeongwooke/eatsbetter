import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

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
    { label: '회사소개', id: 'about' },
    { label: '사업영역', id: 'highlights' },
    { label: '브랜드 연혁', id: 'timeline' },
    { label: '창업안내', id: 'contact' },
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
        width: 100 + '%',
        height: '80px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        transition: 'var(--transition-smooth)',
        background: isScrolled ? 'rgba(3, 7, 18, 0.75)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 242, 254, 0.15)' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 1px 15px rgba(0, 242, 254, 0.05)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* LOGO */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Glowing outer circle */}
            <div style={{
              position: 'absolute',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              border: '2px solid rgba(0, 242, 254, 0.5)',
              boxShadow: '0 0 10px rgba(0, 242, 254, 0.3)',
              transform: 'rotate(45deg)',
            }} />
            {/* Inner SVG representing bio-molecular sustainable plant */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ zIndex: 1 }}>
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#00f2fe" style={{ display: 'none' }} />
              {/* Dynamic modern leafy tech helix */}
              <path d="M12 3C8.5 6.5 8.5 12 12 15C15.5 12 15.5 6.5 12 3Z" fill="url(#leafGrad)" />
              <path d="M12 15C10.5 16.5 10.5 19 12 21C13.5 19 13.5 16.5 12 15Z" fill="#f59e0b" />
              <circle cx="12" cy="12" r="2.5" fill="#020617" stroke="#00f2fe" strokeWidth="2" />
              <defs>
                <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '4px' }}>
              ITSBETTER <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(0, 242, 254, 0.8)', border: '1px solid rgba(0, 242, 254, 0.3)', padding: '1px 5px', borderRadius: '4px', marginLeft: '4px' }}>B2B</span>
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'hsl(var(--text-muted))', letterSpacing: '0.15em', marginTop: '-3px' }}>주식회사 이츠베럴</span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-only">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'hsl(var(--text-secondary))',
                    fontSize: '0.95rem',
                    fontWeight: 500,
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
            className="btn btn-outline"
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem',
              borderRadius: '8px',
            }}
          >
            창업상담 <ArrowUpRight size={14} />
          </button>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#f8fafc',
            cursor: 'pointer',
            zIndex: 1001,
          }}
          className="mobile-only-btn"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
              background: 'rgba(3, 7, 18, 0.98)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 999,
              animation: 'slideUp 0.3s ease-out forwards',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'center' }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#f8fafc',
                      fontSize: '1.5rem',
                      fontWeight: 600,
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
                    padding: '0.8rem 2rem',
                    fontSize: '1rem',
                  }}
                >
                  무료 창업 상담 신청하기 <ArrowUpRight size={18} />
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
          color: hsl(var(--accent-cyan)) !important;
        }
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: hsl(var(--accent-cyan));
          transition: var(--transition-fast);
          box-shadow: 0 0 8px hsl(var(--accent-cyan));
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
