import React, { useState } from 'react';

export default function Home() {
  const [job, setJob] = useState('');

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '40px auto', padding: '20px', direction: 'rtl' }}>
      <h1 style={{ color: '#2563eb', textAlign: 'center' }}>AI Resume Lab 🧪⚡</h1>
      <p style={{ textAlign: 'center', color: '#64748b' }}>مختبرك الذكي لتطوير السيرة الذاتية واجتياز فلاتر الـ ATS عالمياً</p>
      
      <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #cbd5e1', marginTop: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>1. ارفع سيرتك الذاتية (PDF / Word):</label>
        <input type="file" style={{ marginBottom: '20px', display: 'block', width: '100%', padding: '10px', background: '#fff', border: '1px dashed #cbd5e1', borderRadius: '8px' }} />
        
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>2. ضع الوصف الوظيفي:</label>
        <textarea 
          rows="5" 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '20px', boxSizing: 'border-box' }}
          placeholder="الصق الوصف الوظيفي هنا بأي لغة في العالم..."
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        
        <button 
          onClick={() => alert('مرحباً بك في AI Resume Lab! سيتم فتح التقرير الكامل وتحميل السيرة الذاتية بعد اتمام الدفع بقيمة $1.99')}
          style={{ width: '100%', padding: '16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '17px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          تحليل وتعديل السيرة الذاتية الآن ($1.99)
        </button>
      </div>
    </div>
  );
}
