import React, { useState, useEffect } from 'react';

// قاموس الترجمة للغات العالم (يتغير تلقائياً حسب متصفح الزائر)
const translations = {
  ar: {
    title: "AI Resume Lab 🧪⚡",
    subtitle: "مختبرك الذكي لتحليل وتطوير السيرة الذاتية واجتياز فلاتر الـ ATS ومحاكاة المقابلات بـ $1.99 فقط.",
    uploadLabel: "1. ارفع سيرتك الذاتية (PDF / Word):",
    jobLabel: "2. انسخ الوصف الوظيفي المستهدف بأي لغة في العالم:",
    placeholder: "ضع نص الوصف الوظيفي هنا...",
    button: "بدء التحليل بالمختبر الذكي الآن",
    analyzing: "جاري الفحص والتحليل بالذكاء الاصطناعي...",
    matchScore: "نسبة المطابقة للوظيفة:",
    missing: "الكلمات المفتاحية الناقصة (ATS Keywords):",
    suggestions: "التوصيات الجوهرية للقبول:",
    questions: "أسئلة المقابلة المتوقعة وإرشادات الحل:",
    unlock: "فتح التقرير الكامل وتحميل السيرة الذاتية المعدلة بـ $1.99",
    chatHeader: "مساعد AI Resume Lab الذكي (24/7)",
    chatPlaceholder: "اسألني أي سؤال حول الخدمة..."
  },
  en: {
    title: "AI Resume Lab 🧪⚡",
    subtitle: "Your AI Lab to optimize resumes, pass ATS filters, and simulate interviews globally for just $1.99.",
    uploadLabel: "1. Upload your Resume (PDF / Word):",
    jobLabel: "2. Paste the Target Job Description in any language:",
    placeholder: "Paste job description here...",
    button: "Start AI Lab Analysis Now",
    analyzing: "AI Analyzing & Processing...",
    matchScore: "ATS Match Score:",
    missing: "Missing Keywords:",
    suggestions: "Key Recommendations:",
    questions: "Expected Interview Questions:",
    unlock: "Unlock Full Report & Optimized Resume for $1.99",
    chatHeader: "AI Resume Lab Support (24/7)",
    chatPlaceholder: "Ask me anything about the service..."
  }
};

export default function AIResumeLabApp() {
  const [lang, setLang] = useState('en');
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  
  // ودجت شات بوت الدعم الفني الآلي
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userMsg, setUserMsg] = useState('');

  // اكتشاف لغة زائر الموقع تلقائياً عند الدخول
  useEffect(() => {
    const userLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    setLang(userLang);
    setChatMessages([
      { sender: 'bot', text: userLang === 'ar' ? 'أهلاً بك في AI Resume Lab! كيف يمكنني مساعدتك اليوم؟' : 'Welcome to AI Resume Lab! How can I help you today?' }
    ]);
  }, []);

  const t = translations[lang] || translations.en;

  const handleAnalyze = async () => {
    if (!jobDescription) return alert(lang === 'ar' ? 'يرجى إدخال الوصف الوظيفي' : 'Please paste job description');
    setLoading(true);
    
    // محاكاة معالجة البيانات عبر AI Engine
    setTimeout(() => {
      setResult({
        matchScore: 88,
        missingKeywords: ['Agile Leadership', 'Stakeholder Management', 'KPI Tracking'],
        suggestions: lang === 'ar' 
          ? 'إضافة أرقام ونتائج قياسية في خبرتك السابقة لرفع نسبة القبول في أنظمة الـ ATS إلى 95%.' 
          : 'Include quantifiable metrics in your past achievements to reach a 95% ATS match.',
        interviewQuestions: lang === 'ar'
          ? ['كيف تدير الأولويات الحساسة عند تزاحم المواعيد النهائية؟', 'صف موقفاً قمت فيه بإعادة هيكلة مشروع بنجاح.']
          : ['How do you prioritize deliverables under tight deadlines?', 'Describe a time you successfully managed conflicting project priorities.']
      });
      setLoading(false);
    }, 2000);
  };

  const handleSendMessage = () => {
    if (!userMsg.trim()) return;
    const newMsgs = [...chatMessages, { sender: 'user', text: userMsg }];
    setChatMessages(newMsgs);
    setUserMsg('');

    // الرد الآلي من وكيل خدمة العملاء الذكي
    setTimeout(() => {
      const botResponse = lang === 'ar'
        ? 'منصة AI Resume Lab تعمل مع جميع القطاعات عالمياً. مقابل $1.99 فقط تحصل على تقرير شامل وتعديل مباشر لسيرتك الذاتية!'
        : 'AI Resume Lab works globally for all industries. For just $1.99, you get a full ATS report & customized CV!';
      setChatMessages([...newMsgs, { sender: 'bot', text: botResponse }]);
    }, 800);
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', maxWidth: '850px', margin: '0 auto', padding: '20px', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      
      {/* أزرار تحويل اللغة */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '15px' }}>
        <button onClick={() => setLang('ar')} style={{ padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: lang === 'ar' ? 'bold' : 'normal' }}>العربية</button>
        <button onClick={() => setLang('en')} style={{ padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: lang === 'en' ? 'bold' : 'normal' }}>English</button>
      </div>

      {/* واجهة الهيدر والعنوان الرئيسي */}
      <header style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h1 style={{ color: '#2563eb', fontSize: '2.4rem', marginBottom: '10px' }}>{t.title}</h1>
        <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: '1.6' }}>{t.subtitle}</p>
      </header>

      {/* النموذج الرئيسي لرفع السيرة الذاتية والوصف الوظيفي */}
      <main style={{ background: '#f8fafc', padding: '28px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: '#1e293b' }}>{t.uploadLabel}</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ width: '100%', padding: '8px', border: '1px dashed #cbd5e1', borderRadius: '8px', background: '#fff' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px', color: '#1e293b' }}>{t.jobLabel}</label>
          <textarea 
            rows="5" 
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', boxSizing: 'border-box' }}
            placeholder={t.placeholder}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>

        <button 
          onClick={handleAnalyze} 
          disabled={loading}
          style={{ width: '100%', padding: '16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '17px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {loading ? t.analyzing : t.button}
        </button>

        {/* عرض النتائج المبدئية */}
        {result && (
          <div style={{ marginTop: '25px', background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #cbd5e1' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#0f172a' }}>{t.matchScore} <span style={{ color: '#16a34a' }}>{result.matchScore}%</span></h3>
            <p style={{ marginTop: '8px' }}><strong>{t.missing}</strong> {result.missingKeywords.join(', ')}</p>
            <p style={{ marginTop: '8px' }}><strong>{t.suggestions}</strong> {result.suggestions}</p>
            <h4 style={{ marginTop: '15px' }}>{t.questions}</h4>
            <ul style={{ paddingRight: lang === 'ar' ? '20px' : '0', paddingLeft: lang === 'en' ? '20px' : '0' }}>
              {result.interviewQuestions.map((q, i) => <li key={i} style={{ marginBottom: '6px' }}>{q}</li>)}
            </ul>
            <button style={{ width: '100%', marginTop: '15px', background: '#16a34a', color: '#fff', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.unlock}
            </button>
          </div>
        )}
      </main>

      {/* ودجت الدعم الفني الذكي 24/7 */}
      <div style={{ position: 'fixed', bottom: '20px', right: lang === 'ar' ? 'auto' : '20px', left: lang === 'ar' ? '20px' : 'auto', zIndex: 1000 }}>
        {!chatOpen ? (
          <button onClick={() => setChatOpen(true)} style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: '50px', padding: '12px 20px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontWeight: 'bold' }}>
            💬 {t.chatHeader}
          </button>
        ) : (
          <div style={{ width: '310px', height: '380px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '12px', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
            <div style={{ background: '#2563eb', color: '#fff', padding: '10px 14px', borderRadius: '12px 12px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', fontSize: '13px' }}>{t.chatHeader}</span>
              <button onClick={() => setChatOpen(false)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '15px' }}>✕</button>
            </div>
            <div style={{ flex: 1, padding: '12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {chatMessages.map((m, i) => (
                <div key={i} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', background: m.sender === 'user' ? '#2563eb' : '#f1f5f9', color: m.sender === 'user' ? '#fff' : '#0f172a', padding: '8px 12px', borderRadius: '8px', fontSize: '12px', maxWidth: '85%' }}>
                  {m.text}
                </div>
              ))}
            </div>
            <div style={{ padding: '8px', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '6px' }}>
              <input 
                type="text" 
                style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '12px' }}
                placeholder={t.chatPlaceholder}
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage} style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}>Send</button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
 
