document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.qualifications': 'Qualifications',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Hello, I\'m',
    'hero.subtitle': 'Born in South Korea, grew up in New Jersey, and currently living in South Korea.',
    'hero.btnProjects': 'View Projects',
    'hero.btnContact': 'Contact Me',
    'about.title': 'About',
    'about.body':
      'I am a sophomore interested in physical AI and control systems, with experience building practical projects through hackathons and problem-solving programs.',
    'projects.title': 'Projects',
    'projects.subtitle': 'Selected work that shows my technical and product thinking.',
    'projects.lg.desc':
      'Participated in the LG Aimers program focused on solving real-world AI challenges and model optimization tasks.',
    'projects.lg.tech': 'Tech: Python, LLM, Quantization',
    'projects.aie.desc': 'Built and presented a hackathon project under time constraints, from idea to working prototype.',
    'projects.aie.tech': 'Tech: Python, Team Collaboration',
    'skills.title': 'Skills',
    'education.title': 'Education',
    'education.yonsei.degree': 'Bachelor of Engineering in Applied Information Engineering',
    'education.yonsei.meta': 'Seoul, South Korea · Expected Graduation: 2029',
    'education.fort.degree': 'High School Diploma',
    'education.fort.meta': 'Fort Lee, New Jersey · Graduation: 2021',
    'experience.title': 'Experience',
    'experience.rok.role': 'Role: English Interpreter',
    'experience.rok.duration': 'Duration: 2024.01 ~ 2025.07',
    'experience.read.role': 'Role: English Teacher',
    'experience.read.duration': 'Duration: 2025.08 ~ 2025.12',
    'qualifications.title': 'Qualifications',
    'qualifications.adsp.issuer': 'Issued by Korea Data Agency (K-DATA)',
    'qualifications.adsp.received': 'Received: 2026.03.06',
    'qualifications.sqld.issuer': 'Issued by Korea Data Agency (K-DATA)',
    'qualifications.sqld.received': 'Received: 2025.12.12',
    'qualifications.interpreter.title': 'Second Grade Professional Interpreter (Korean → English)',
    'qualifications.interpreter.issuer':
      'ITT (Interpretation & Translation Test), ITT Test Committee / International Interpretation & Translation Association (IITA)',
    'qualifications.interpreter.received': 'Received: 2025.09.27',
    'contact.title': 'Contact',
    'contact.lead': 'Reach me at',
    'contact.orConnect': 'or connect on',
    'contact.github': 'GitHub',
    'footer.rights': 'Joonho Kim. All rights reserved.',
    'footer.top': 'Back to top ↑',
    pageTitle: 'Joonho Kim | Portfolio',
    toggleLabel: '한국어',
  },
  ko: {
    'nav.about': '소개',
    'nav.projects': '프로젝트',
    'nav.skills': '기술',
    'nav.education': '학력',
    'nav.experience': '경력',
    'nav.qualifications': '자격',
    'nav.contact': '연락처',
    'hero.eyebrow': '안녕하세요, 저는',
    'hero.subtitle': '대한민국에서 태어나 뉴저지에서 성장했으며, 현재는 대한민국에 거주하고 있습니다.',
    'hero.btnProjects': '프로젝트 보기',
    'hero.btnContact': '연락하기',
    'about.title': '소개',
    'about.body':
      '저는 Physical AI와 제어 시스템에 관심이 있는 2학년 학생으로, 해커톤과 문제 해결 프로그램을 통해 실용적인 프로젝트를 수행한 경험이 있습니다.',
    'projects.title': '프로젝트',
    'projects.subtitle': '기술 역량과 문제 해결 과정을 보여주는 주요 프로젝트입니다.',
    'projects.lg.desc': '실무형 AI 문제 해결 및 모델 최적화 과제를 중심으로 한 LG Aimers 프로그램에 참여했습니다.',
    'projects.lg.tech': '기술: Python, LLM, Quantization',
    'projects.aie.desc': '제한된 시간 안에 아이디어 기획부터 프로토타입 구현까지 해커톤 프로젝트를 수행했습니다.',
    'projects.aie.tech': '기술: Python, 팀 협업',
    'skills.title': '기술',
    'education.title': '학력',
    'education.yonsei.degree': '응용정보공학과 공학사',
    'education.yonsei.meta': '대한민국 서울 · 졸업예정: 2029',
    'education.fort.degree': '고등학교 졸업',
    'education.fort.meta': '미국 뉴저지 포트리 · 졸업: 2021',
    'experience.title': '경력',
    'experience.rok.role': '역할: 영어 통역',
    'experience.rok.duration': '기간: 2024.01 ~ 2025.07',
    'experience.read.role': '역할: 영어 강사',
    'experience.read.duration': '기간: 2025.08 ~ 2025.12',
    'qualifications.title': '자격',
    'qualifications.adsp.issuer': '발급기관: 한국데이터산업진흥원 (K-DATA)',
    'qualifications.adsp.received': '취득일: 2026.03.06',
    'qualifications.sqld.issuer': '발급기관: 한국데이터산업진흥원 (K-DATA)',
    'qualifications.sqld.received': '취득일: 2025.12.12',
    'qualifications.interpreter.title': '전문통역사 2급 (한국어 → 영어)',
    'qualifications.interpreter.issuer':
      'ITT(국제통역번역시험), ITT시험위원회 / 국제통역번역협회(IITA)',
    'qualifications.interpreter.received': '취득일: 2025.09.27',
    'contact.title': '연락처',
    'contact.lead': '이메일',
    'contact.orConnect': '또는',
    'contact.github': '깃허브',
    'footer.rights': 'Joonho Kim. 모든 권리 보유.',
    'footer.top': '맨 위로 ↑',
    pageTitle: 'Joonho Kim | 포트폴리오',
    toggleLabel: 'English',
  },
};

const languageToggle = document.getElementById('languageToggle');

function applyLanguage(language) {
  const selected = translations[language] ? language : 'en';
  const entries = translations[selected];
  document.documentElement.lang = selected;
  document.title = entries.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (entries[key]) {
      element.textContent = entries[key];
    }
  });

  languageToggle.textContent = entries.toggleLabel;
}

const initialLanguage = localStorage.getItem('portfolioLanguage') || 'en';
applyLanguage(initialLanguage);

languageToggle.addEventListener('click', () => {
  const currentLanguage = document.documentElement.lang === 'ko' ? 'ko' : 'en';
  const nextLanguage = currentLanguage === 'en' ? 'ko' : 'en';
  localStorage.setItem('portfolioLanguage', nextLanguage);
  applyLanguage(nextLanguage);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
