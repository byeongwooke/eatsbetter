import React, { useState } from 'react';
import { Warehouse, Truck, ShieldCheck, ArrowRight, Sparkles, Award, MapPin } from 'lucide-react';

interface ChainItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  desc: string;
  metrics: { label: string; value: string }[];
  details: string[];
  color: string;
}

export const SystemValueChain: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('rd');

  const chainData: ChainItem[] = [
    {
      id: 'rd',
      icon: <Warehouse size={28} />,
      title: 'R&D 제조 센터',
      subtitle: '자체 핵심 레시피 소스 완제품 제조 시설',
      desc: '이츠베럴 자체 핵심 연구진이 다년간 축적한 조리 데이터를 기반으로 완성한 프리미엄 원팩 소스를 직영 HACCP 인증 제조소에서 위생적이고 정밀하게 일괄 생산합니다.',
      metrics: [
        { label: '연간 총 생산량', value: '1,200,000 팩' },
        { label: '품질 위생 등급', value: 'HACCP 인증 최상위' },
      ],
      details: [
        '자체 R&D 센터를 통한 전용 특제 소스 정기 개발',
        '원가 절감을 극대화한 원료 직수입 가공 라인 가동',
        '조리가 간편하도록 냉동/냉장 레토르트 완제품 배송'
      ],
      color: 'var(--accent-terracotta)',
    },
    {
      id: 'logistics',
      icon: <Truck size={28} />,
      title: '전국 원팩 물류 시스템',
      subtitle: '콜드체인 전국 주 6회 직배송',
      desc: '신선 원부재료를 이중 실링 원팩 패키징하여, 온도 이탈 없는 콜드체인 주 6회 직배송 체계를 구축하였습니다. 전국 어디서나 당일 생산 물량을 신선하게 매장 대문 앞까지 안심 공급합니다.',
      metrics: [
        { label: '전국 물류 거점', value: '6대 광역 허브망' },
        { label: '배송 이탈률', value: '0.01% 미만 철저 통제' },
      ],
      details: [
        'GPS 연동 냉동·냉장 차량 실시간 온습도 모니터링',
        '매일 신속 입출고를 돕는 바코드 전산 입출력 라인',
        '전국 균일 공급 단가 보장을 통한 프랜차이즈 상생 구현'
      ],
      color: 'var(--accent-sage)',
    },
    {
      id: 'support',
      icon: <ShieldCheck size={28} />,
      title: '1:1 밀착 가맹점 상생',
      subtitle: '전담 오퍼레이션 슈퍼바이저 집중 관리',
      desc: '오픈 준비 시점의 완벽한 상권 정보 진단부터 오픈 후의 가맹점 밀착 케어까지 전담 운영 관리자가 동행합니다. 단순 점검이 아닌 파트너로서 함께 실질 매출 극대화를 돕습니다.',
      metrics: [
        { label: '전담 관리 비율', value: '슈퍼바이저 1:3 집중 케어' },
        { label: '가맹 점주 만족도', value: '98.5% 최우수 파트너쉽' },
      ],
      details: [
        '오픈 7일간 전담 마스터 쉐프 파견 및 현장 현지 밀착 코칭',
        '지역별 데이터 기반의 본사 분담 정기 로컬 마케팅 수립',
        '이츠베럴 상생 소통 위원회 운영을 통한 정기 원가 절감 협의'
      ],
      color: 'var(--accent-burgundy)',
    }
  ];

  const activeData = chainData.find(item => item.id === activeTab) || chainData[0];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        background: '#FAF8F5',
        borderTop: '1px solid hsl(var(--border-color))',
        borderBottom: '1px solid hsl(var(--border-color))',
      }}
      className="section-padding"
    >
      {/* Dynamic Plaster Glow */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 5% 50%, rgba(226, 91, 60, 0.02) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="tag-sage" style={{ marginBottom: '1.25rem' }}>
            <Award size={13} style={{ color: 'hsl(var(--accent-sage))' }} /> Core Franchise Infrastructure
          </span>
          <h2 className="font-serif" style={{
            fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
            fontWeight: 800,
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            본사의 압도적인 <span className="text-gradient-terracotta">3대 시스템 밸류체인</span>
          </h2>
          <p style={{
            color: 'hsl(var(--text-secondary))',
            fontSize: '1.05rem',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: '1.65',
          }}>
            이츠베럴은 일시적인 유행에 흔들리지 않습니다. 제조에서 물류, 상생 관리까지<br />
            현대적이고 체계적인 F&B 시스템 인프라를 입증하며 성공 확률을 비약적으로 끌어올립니다.
          </p>
        </div>

        {/* 3-COLUMN INTERACTIVE CHAIN INFOGRAPHIC */}
        <div className="chain-selector-grid" style={{ marginBottom: '3rem' }}>
          {chainData.map((item, index) => {
            const isActive = item.id === activeTab;
            return (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`gourmet-panel chain-card ${isActive ? 'active' : ''}`}
                  style={{
                    flexGrow: 1,
                    textAlign: 'left',
                    padding: '2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    border: '1.5px solid',
                    borderColor: isActive ? `hsl(var(--accent-terracotta))` : 'hsl(var(--border-color))',
                    background: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                    boxShadow: isActive ? '0 15px 40px -10px rgba(226, 91, 60, 0.12)' : 'none',
                    transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'var(--transition-smooth)',
                  }}
                >
                  {/* Step label & Icon bubble */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <span className="font-mono" style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: isActive ? 'hsl(var(--accent-terracotta))' : 'hsl(var(--text-muted))',
                      letterSpacing: '0.15em',
                    }}>
                      SYSTEM CHAIN 0{index + 1}
                    </span>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: isActive ? `rgba(226, 91, 60, 0.08)` : 'rgba(94, 87, 80, 0.05)',
                      color: isActive ? 'hsl(var(--accent-terracotta))' : 'hsl(var(--text-secondary))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'var(--transition-fast)',
                    }}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Title text */}
                  <div>
                    <h4 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'hsl(var(--text-primary))', marginBottom: '0.25rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', fontWeight: 600 }}>
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Tiny arrow hint */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: isActive ? 'hsl(var(--accent-terracotta))' : 'hsl(var(--text-muted))',
                  }}>
                    자세히 보기 <ArrowRight size={12} style={{
                      transform: isActive ? 'translateX(3px)' : 'translateX(0)',
                      transition: 'var(--transition-fast)',
                    }} />
                  </div>
                </button>

                {/* Connecting arrow graphic in between columns */}
                {index < 2 && (
                  <div className="chain-connector-arrow font-mono" style={{
                    position: 'absolute',
                    right: '-2rem',
                    zIndex: 10,
                    color: 'hsl(var(--border-color))',
                    fontSize: '1.5rem',
                  }}>
                    ➜
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ACTIVE INFO DISPLAY PANEL */}
        <div 
          className="gourmet-panel active-detail-panel animate-slide-up"
          key={activeTab} // triggers re-render animation
          style={{
            padding: '3rem',
            background: '#ffffff',
            border: '1px solid hsl(var(--border-color))',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '4rem',
            boxShadow: '0 20px 50px -15px rgba(94, 87, 80, 0.06)',
          }}
        >
          {/* Left: General Desc and Bullet Lists */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span className="tag-sage" style={{ background: 'rgba(226, 91, 60, 0.08)', color: 'hsl(var(--accent-terracotta))', marginBottom: '0.75rem' }}>
                <Sparkles size={11} /> {activeData.title} 상세안내
              </span>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 800, color: 'hsl(var(--text-primary))', marginTop: '0.4rem' }}>
                {activeData.subtitle}
              </h3>
            </div>
            
            <p style={{ color: 'hsl(var(--text-secondary))', lineHeight: '1.75', fontSize: '0.95rem' }}>
              {activeData.desc}
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {activeData.details.map((detail, dIdx) => (
                <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.85rem', color: 'hsl(var(--text-secondary))', fontWeight: 600 }}>
                  <span style={{ color: 'hsl(var(--accent-terracotta))', fontSize: '1rem', lineHeight: '1' }}>✔</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Modern Infographic Stats Box */}
          <div 
            style={{
              background: '#FAF8F5',
              border: '1px solid hsl(var(--border-color))',
              borderRadius: '20px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '2rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background design accents */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(226, 91, 60, 0.04) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }} />

            <div style={{ borderBottom: '1px solid hsl(var(--border-color))', paddingBottom: '1rem' }}>
              <span className="font-mono" style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', fontWeight: 800, letterSpacing: '0.15em' }}>
                OPERATIONAL INFOGRAPHIC KEY METRICS
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {activeData.metrics.map((metric, mIdx) => (
                <div key={mIdx}>
                  <div style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', marginBottom: '0.25rem', fontWeight: 700 }}>
                    {metric.label}
                  </div>
                  <div className="font-mono text-gradient-terracotta" style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', fontWeight: 600 }}>
              <MapPin size={12} style={{ color: 'hsl(var(--accent-terracotta))' }} />
              이츠베럴 본사 공급 및 물류 검증 표준 준수
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .chain-selector-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 3.5rem;
        }
        .chain-card:hover {
          border-color: rgba(var(--accent-terracotta-rgb), 0.5) !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 10px 25px -5px rgba(94, 87, 80, 0.08) !important;
        }
        @media (max-width: 968px) {
          .chain-selector-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .chain-connector-arrow {
            display: none !important;
          }
          .active-detail-panel {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
