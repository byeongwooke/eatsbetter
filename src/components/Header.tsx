import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
}

const CustomB: React.FC = () => (
  <svg 
    width="16" 
    height="20" 
    viewBox="0 0 22 26" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ 
      display: 'inline-block', 
      verticalAlign: 'middle',
      margin: '0 0.5px 0 0.5px',
      color: 'hsl(var(--text-primary))',
      transform: 'translateY(-1px)'
    }}
  >
    {/* b stem */}
    <path d="M4 2V24" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" />
    {/* b belly (outer plate ring representing a gourmet dish) */}
    <circle cx="12.5" cy="15.5" r="7.5" stroke="currentColor" strokeWidth="3" />
    {/* Smile representing dining pleasure inside the belly loop */}
    <path d="M9 15C9 17.5 16 17.5 16 15" stroke="hsl(var(--accent-terracotta))" strokeWidth="2.2" strokeLinecap="round" />
    {/* Chef's garnish spice dot inside the plate */}
    <circle cx="12.5" cy="11.5" r="1.5" fill="hsl(var(--accent-terracotta))" />
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
    { label: 'eatsbetter 소개', id: 'about' },
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
        transition: 'var(--transition-smooth)',
        background: isScrolled ? 'rgba(250, 247, 242, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid hsl(var(--border-color))' : '1px solid transparent',
        boxShadow: isScrolled ? '0 10px 30px -15px rgba(94, 87, 80, 0.08)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* LOGO - eatsbetter Gourmet Typeface with custom SVG 'b' plate-smile */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span 
              className="font-serif"
              style={{ 
                fontSize: '1.65rem', 
                fontWeight: 800, 
                letterSpacing: '-0.01em', 
                color: 'hsl(var(--text-primary))', 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '0px'
              }}
            >
              eats
              <CustomB />
              etter
            </span>
            <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'hsl(var(--text-muted))', letterSpacing: '0.2em', marginTop: '-4px' }}>
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
                    color: 'hsl(var(--text-secondary))',
                    fontSize: '0.95rem',
                    fontWeight: 600,
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
              padding: '0.55rem 1.25rem',
              fontSize: '0.85rem',
              borderRadius: '10px',
            }}
          >
            창업 상담 <ArrowUpRight size={14} />
          </button>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'hsl(var(--text-primary))',
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
              background: 'hsl(var(--bg-base))',
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
                      color: 'hsl(var(--text-primary))',
                      fontSize: '1.5rem',
                      fontWeight: 700,
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
                  무료 창업 가이드북 신청 <ArrowUpRight size={18} />
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
          color: hsl(var(--accent-terracotta)) !important;
        }
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background: hsl(var(--accent-terracotta));
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
