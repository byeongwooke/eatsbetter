import React from 'react';
import { Header } from './components/Header';
import { MainBanner } from './components/MainBanner';
import { SystemValueChain } from './components/SystemValueChain';
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
    <div style={{ position: 'relative', overflowX: 'hidden', background: '#FAF8F5' }}>
      {/* 1. Sticky Gourmet Navigation Header */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* 2. Main Hero Banner with Steaming Pasta Visual */}
      <MainBanner onScrollToContact={() => handleScrollToSection('contact')} />

      {/* 2.5. 이츠베럴 시스템 밸류체인 Infographics */}
      <SystemValueChain />

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
          background: '#FAF8F5',
          overflow: 'hidden',
          borderTop: '1px solid #1E1C1A',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="tag-gourmet" style={{ borderColor: '#1E1C1A', color: '#1E1C1A' }}>
                <MessageCircle size={13} style={{ color: '#1E1C1A' }} /> Franchise Guide
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
              color: '#1E1C1A',
            }}>
              이츠베럴과 함께하는 <span style={{ color: '#E25B3C' }}>성공 창업의 시작</span>
            </h2>
            <p style={{
              color: '#2C2825',
              fontSize: '1rem',
              fontWeight: 700,
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: '1.5',
            }}>
              독보적인 맛과 5분 원팩 시스템, 그리고 1:1 슈퍼바이징으로 성공을 보장합니다.
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
