import React, { useState } from 'react';
import { CheckCircle2, User, Phone, MapPin, MessageSquare } from 'lucide-react';

export const StartupForm: React.FC = () => {
  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = '성함을 입력해 주세요.';
    
    const phoneRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    const rawPhoneRegex = /^[0-9]{9,11}$/;
    
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해 주세요.';
    } else if (!phoneRegex.test(formData.phone) && !rawPhoneRegex.test(formData.phone)) {
      newErrors.phone = '올바른 연락처 형식(예: 010-1234-5678)으로 입력해 주세요.';
    }

    if (!formData.region.trim()) newErrors.region = '희망 지역을 입력해 주세요.';
    if (!formData.message.trim()) newErrors.message = '문의 사항을 적어주세요.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        region: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%' }}>
      
      {/* 3-STEP STARTUP ROADMAP (간소화 인포그래픽) */}
      <div 
        style={{
          padding: '1.5rem',
          background: '#FAF8F5',
          border: '1px solid #1E1C1A',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }} className="roadmap-flow">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 800, color: '#1E1C1A' }}>
            <span style={{ color: '#E25B3C' }}>01</span> 상담 신청
          </div>
          <span style={{ color: '#1E1C1A', fontWeight: 800 }}>➔</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 800, color: '#1E1C1A' }}>
            <span style={{ color: '#E25B3C' }}>02</span> 상권 분석
          </div>
          <span style={{ color: '#1E1C1A', fontWeight: 800 }}>➔</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 800, color: '#1E1C1A' }}>
            <span style={{ color: '#E25B3C' }}>03</span> 매장 오픈
          </div>
        </div>
      </div>

      {/* ACTION INQUIRY FORM */}
      <div 
        className="gourmet-panel" 
        style={{
          maxWidth: '650px',
          margin: '0 auto',
          padding: '2.5rem',
          border: '1px solid #1E1C1A',
          background: '#FAF8F5',
          borderRadius: '12px',
          width: '100%',
        }}
      >
        {isSuccess ? (
          <div style={{
            textAlign: 'center',
            padding: '1.5rem 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'transparent',
              border: '2px solid #E25B3C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <CheckCircle2 size={36} style={{ color: '#E25B3C' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1E1C1A', marginBottom: '0.5rem' }}>
                가맹 상담 신청 완료
              </h3>
              <p style={{ color: '#2C2825', lineHeight: '1.6', maxWidth: '420px', fontSize: '0.85rem', fontWeight: 700 }}>
                이츠베럴 가맹 개설 본부에 접수되었습니다.<br />
                기재해 주신 연락처로 **24시간 이내**에 상권 전문 가맹 본부장이 직접 전화를 드리겠습니다.
              </p>
            </div>
            <button 
              onClick={() => setIsSuccess(false)}
              className="btn btn-outline"
              style={{ marginTop: '0.5rem', padding: '0.65rem 1.75rem', fontSize: '0.85rem', border: '1px solid #1E1C1A', color: '#1E1C1A' }}
            >
              확인
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Header instructions */}
            <div style={{ borderBottom: '1px solid #1E1C1A', paddingBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#1E1C1A', marginBottom: '0.25rem' }}>
                창업 가이드북 및 무료 상담 신청
              </h3>
              <p style={{ color: '#5A5450', fontSize: '0.8rem', fontWeight: 800 }}>
                성공적인 예비 창업을 위한 핵심 개설 매뉴얼을 무상 송부해 드립니다.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-grid-2">
              {/* NAME */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <User size={13} style={{ color: '#E25B3C' }} /> 성함 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="성함을 입력하세요"
                  style={{ borderColor: errors.name ? '#ef4444' : '#1E1C1A' }}
                />
                {errors.name && <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 800 }}>{errors.name}</span>}
              </div>

              {/* CONTACT */}
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Phone size={13} style={{ color: '#E25B3C' }} /> 연락처 *
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="예: 010-1234-5678"
                  style={{ borderColor: errors.phone ? '#ef4444' : '#1E1C1A' }}
                />
                {errors.phone && <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 800 }}>{errors.phone}</span>}
              </div>
            </div>

            {/* HOPE REGION */}
            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={13} style={{ color: '#E25B3C' }} /> 희망 지역 *
              </label>
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                className="form-input"
                placeholder="예: 서울 강남구, 경기 수원시"
                style={{ borderColor: errors.region ? '#ef4444' : '#1E1C1A' }}
              />
              {errors.region && <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 800 }}>{errors.region}</span>}
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MessageSquare size={13} style={{ color: '#E25B3C' }} /> 문의 사항 *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-input form-textarea"
                placeholder="창업 예산, 가맹점 운영 등 문의하실 내용을 적어주세요."
                style={{ borderColor: errors.message ? '#ef4444' : '#1E1C1A' }}
              />
              {errors.message && <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 800 }}>{errors.message}</span>}
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{
                padding: '1rem',
                fontSize: '1rem',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                marginTop: '0.4rem',
                background: '#E25B3C',
                color: '#FAF8F5',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.85 : 1,
                borderRadius: '8px',
              }}
            >
              {isSubmitting ? '신청서 제출 중...' : '무료 상담 신청하기'}
            </button>
          </form>
        )}
      </div>

      {/* SUPPORT DISCLOSURES BELOW FORM */}
      <div 
        style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          fontWeight: 700,
          color: '#5A5450',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
        }}
      >
        <div>주식회사 이츠베럴 본사: 서울시 서초구 서초대로 397, 부띠크모나코 빌딩 18층</div>
        <div style={{ color: '#E25B3C', fontWeight: 800 }}>가맹문의 대표번호: 1544-0000 (상시 상담 가능)</div>
      </div>

      <style>{`
        @media (max-width: 576px) {
          .form-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .roadmap-flow {
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
          .roadmap-flow span {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
