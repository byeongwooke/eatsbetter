import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, MapPin, Coins, MessageSquare } from 'lucide-react';

export const StartupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    budget: '5000', // default 5000 = 5000만원
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const formatBudget = (value: string) => {
    const num = parseInt(value, 10);
    if (num >= 30000) return '3억원 이상';
    if (num >= 10000) {
      const eok = Math.floor(num / 10000);
      const remainder = num % 10000;
      return remainder > 0 ? `${eok}억 ${remainder.toLocaleString()}만원` : `${eok}억원`;
    }
    return `${num.toLocaleString()}만원`;
  };

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

    if (!formData.region.trim()) newErrors.region = '희망 창업 지역을 입력해 주세요.';
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
        budget: '5000',
        message: ''
      });
    }, 2000);
  };

  return (
    <div 
      className="gourmet-panel" 
      style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '3rem',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid hsl(var(--border-color))',
      }}
    >
      {/* Background soft plaster circle */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(226, 91, 60, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)',
        }} 
      />

      {isSuccess ? (
        <div style={{
          textAlign: 'center',
          padding: '2rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          animation: 'slideUp 0.5s ease-out forwards',
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(226, 91, 60, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(226, 91, 60, 0.2)',
            border: '2.5px solid hsl(var(--accent-terracotta))'
          }}>
            <CheckCircle2 size={44} style={{ color: 'hsl(var(--accent-terracotta))' }} />
          </div>
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 800, color: 'hsl(var(--text-primary))', marginBottom: '0.75rem' }}>
              창업 가이드북 및 상담 신청 완료
            </h3>
            <p style={{ color: 'hsl(var(--text-secondary))', lineHeight: '1.7', maxWidth: '450px', fontSize: '0.95rem' }}>
              eatsbetter에 관심을 가져주셔서 진심으로 감사드립니다.<br />
              무료 창업 가이드북 전송이 시작되었으며, 기재해주신 번호로 **24시간 이내**에 상권 전문 가맹 본부장이 직접 전화를 드리겠습니다.
            </p>
          </div>
          <button 
            onClick={() => setIsSuccess(false)}
            className="btn btn-outline"
            style={{ marginTop: '1rem', padding: '0.75rem 2rem', fontSize: '0.9rem' }}
          >
            확인
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          
          {/* Header instructions */}
          <div style={{ borderBottom: '1px solid hsl(var(--border-color))', paddingBottom: '1.5rem' }}>
            <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'hsl(var(--text-primary))', marginBottom: '0.4rem' }}>
              무료 가이드북 및 가맹 상담 접수
            </h3>
            <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.85rem', fontWeight: 600 }}>
              성공을 준비하는 예비 파트너를 위한 상세 개설 정보 및 혜택 보고서를 무상 송부해 드립니다.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid-2">
            {/* NAME */}
            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <User size={14} style={{ color: 'hsl(var(--accent-terracotta))' }} /> 성함 *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="홍길동"
                style={{ borderColor: errors.name ? '#ef4444' : 'hsl(var(--border-color))' }}
              />
              {errors.name && <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>{errors.name}</span>}
            </div>

            {/* CONTACT */}
            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={14} style={{ color: 'hsl(var(--accent-terracotta))' }} /> 연락처 *
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="010-1234-5678"
                style={{ borderColor: errors.phone ? '#ef4444' : 'hsl(var(--border-color))' }}
              />
              {errors.phone && <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>{errors.phone}</span>}
            </div>
          </div>

          {/* HOPE REGION */}
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} style={{ color: 'hsl(var(--accent-terracotta))' }} /> 희망 창업 지역 *
            </label>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="form-input"
              placeholder="예: 서울 마포구, 경기 성남시"
              style={{ borderColor: errors.region ? '#ef4444' : 'hsl(var(--border-color))' }}
            />
            {errors.region && <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>{errors.region}</span>}
          </div>

          {/* BUDGET SLIDER */}
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Coins size={14} style={{ color: 'hsl(var(--accent-terracotta))' }} /> 예상 창업 비용
              </label>
              <span className="font-mono" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'hsl(var(--accent-terracotta))' }}>
                {formatBudget(formData.budget)}
              </span>
            </div>
            <input
              type="range"
              name="budget"
              min="3000"
              max="30000"
              step="1000"
              value={formData.budget}
              onChange={handleInputChange}
              style={{ margin: '0.8rem 0' }}
            />
            <div className="font-mono" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', fontWeight: 700 }}>
              <span>최소 3,000만원</span>
              <span>1억 5천만원</span>
              <span>3억원+</span>
            </div>
          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MessageSquare size={14} style={{ color: 'hsl(var(--accent-terracotta))' }} /> 문의 사항 *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-input form-textarea"
              placeholder="상담 문의 사항을 상세히 남겨주시면 더욱 정교한 1:1 리포트가 가능합니다."
              style={{ borderColor: errors.message ? '#ef4444' : 'hsl(var(--border-color))' }}
            />
            {errors.message && <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 600 }}>{errors.message}</span>}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{
              padding: '1.1rem',
              fontSize: '1.05rem',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginTop: '0.5rem',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.85 : 1,
            }}
          >
            {isSubmitting ? (
              <>
                <div className="spinner-terracotta" /> 신청서 제출 중...
              </>
            ) : (
              <>
                무료 창업 가이드북 및 상담 신청하기 <Send size={18} />
              </>
            )}
          </button>
        </form>
      )}

      <style>{`
        .spinner-terracotta {
          width: 20px;
          height: 20px;
          border: 2.5px solid rgba(255, 255, 255, 0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 576px) {
          .form-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .gourmet-panel {
            padding: 1.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};
