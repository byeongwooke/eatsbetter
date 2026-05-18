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
    <div style={{ position: 'relative', overflowX: 'hidden', background: 'hsl(var(--bg-base))' }}>
      {/* 1. Sticky Gourmet Navigation Header */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* 2. Main Hero Banner with Steaming Pasta Visual */}
      <MainBanner onScrollToContact={() => handleScrollToSection('contact')} />

      {/* 3. Core Competency Highlights Grid */}
      <CoreHighlights />

      {/* 4. Storytelling Brand Timeline */}
      <HistoryTimeline />

      {/* 5. Franchise Startup Inquiry Form Section */}
      <section
        id="contact"
        className="section-padding"
        style={{
          position: 'relative',
          background: 'hsl(var(--bg-base))',
          overflow: 'hidden',
          borderTop: '1px solid hsl(var(--border-color))',
        }}
      >
        {/* Background ambient terracotta lighting */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(226, 91, 60, 0.04) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            filter: 'blur(100px)',
            zIndex: 0,
          }} 
        />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="tag-gourmet" style={{ marginBottom: '1rem' }}>
              <MessageCircle size={13} style={{ color: 'hsl(var(--accent-terracotta))' }} /> Franchise Guide
            </span>
            <h2 className="font-serif" style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 800,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}>
              이츠베럴과 함께하는 <span className="text-gradient-terracotta">성공 창업의 시작</span>
            </h2>
            <p style={{
              color: 'hsl(var(--text-secondary))',
              fontSize: '1.05rem',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: '1.65',
            }}>
              타협하지 않는 독보적인 맛과 5분 원팩 시스템의 초간편 조리 레시피,<br />
              그리고 점포별 1:1 슈퍼바이징 밀착 케어로 가맹점의 지속가능한 성공을 보장해 드립니다.
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
