import React from 'react';
import { Header } from './components/Header';
import { MainBanner } from './components/MainBanner';
import { CoreHighlights } from './components/CoreHighlights';
import { HistoryTimeline } from './components/HistoryTimeline';
import { StartupForm } from './components/StartupForm';
import { LocationMap } from './components/LocationMap';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* 1. Sticky Navigation Header */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* 2. Main Hero Banner */}
      <MainBanner onScrollToContact={() => handleScrollToSection('contact')} />

      {/* 3. Core Competency Highlights */}
      <CoreHighlights />

      {/* 4. Scrollable History Timeline */}
      <HistoryTimeline />

      {/* 5. Franchise Startup Inquiry Form Section */}
      <section
        id="contact"
        className="section-padding"
        style={{
          position: 'relative',
          background: 'hsl(var(--bg-base))',
          overflow: 'hidden',
          borderTop: '1px solid rgba(255, 255, 255, 0.03)',
        }}
      >
        {/* Background ambient lighting */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.04) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            filter: 'blur(100px)',
            zIndex: 0,
          }} 
        />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="tag-premium" style={{ marginBottom: '1rem' }}>
              <MessageCircle size={13} style={{ color: 'hsl(var(--accent-cyan))' }} /> Partnership Guide
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 800,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}>
              상생을 향한 첫걸음, <span className="text-gradient-amber">지금 상담받으세요</span>
            </h2>
            <p style={{
              color: 'hsl(var(--text-secondary))',
              fontSize: '1.05rem',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              이츠베럴의 혁신 푸드테크 경쟁력과 가맹 본부 전담 밀착 지원을 경험해 보세요.<br />
              정보 제공을 바탕으로 신뢰를 다지며, 성공적인 가치 파트너십을 무상으로 제시해 드립니다.
            </p>
          </div>

          {/* Interactive Startup Consultation Form */}
          <StartupForm />
        </div>
      </section>

      {/* 6. Headquarters Location Info & vector blueprint HUD Map */}
      <LocationMap />

      {/* 7. Corporate Disclosures Footer */}
      <Footer />
    </div>
  );
};

export default App;
