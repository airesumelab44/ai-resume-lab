import React, { useState } from 'react';

export default function Home() {
  const [job, setJob] = useState('');
  const [result, setResult] colspan(false);

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '40px auto', padding: '20px', direction: 'rtl' }}>
      <h1 style={{ color: '#2563eb', textAlign: 'center' }}>AI Resume Lab 🧪⚡</h1>
      <p style={{ textAlign: 'center', color: '#64748b' }}>مختبرك الذكي لتعديل السيرة الذاتية واجتياز فلاتر الـ ATS</p>
      
      <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #cbd5e1', marginTop: '20px' }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>1. ارفع سيرتك الذاتية:</label>
        <input type="file" style={{ marginBottom: '15px', display: 'block' }} />
        
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>2. ضع الوصف الوظيفي:</label>
        <textarea 
          rows="4" 
          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '15px' }}
          placeholder="الصق الوصف الوظيفي هنا..."
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        
        <button 
          onClick={() => alert('جاري تحليل السيرة الذاتية واجتياز نظام ATS بنجاح!')}
          style={{ width: '100%', padding: '14px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          تحليل وتعديل السيرة الذاتية الآن ($1.99)
        </button>
      </div>
    </div>
  );
}
