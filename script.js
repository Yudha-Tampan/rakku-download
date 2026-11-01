const ICONS = {
  'clapperboard': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>',
  'book-open': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  'message-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>',
  'coins': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>',
  'shopping-bag': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  'sparkles': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.9 2.6 12 8l5.4 2.1L12 12.2 9.9 17.6 7.8 12.2 2.4 10.1 7.8 8Z"/><path d="M18 14v4"/><path d="M20 16h-4"/></svg>',
  'message-square-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M7 8h10"/><path d="M7 12h6"/></svg>',
  'user-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M6.2 18.5a6 6 0 0 1 11.6 0"/></svg>',
  'shield-check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  'check': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  'chevron': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  'whatsapp': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.3-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.6 2.5 4 3.5.5.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.3C8.4 21.6 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3C3.9 15 3.3 13.5 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7Z"/></svg>',
  'telegram': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 4.5 19.4 19.8c-.2 1-.8 1.2-1.7.8l-4.6-3.4-2.2 2.2c-.2.2-.5.4-.9.4l.3-4.7 8.6-7.8c.4-.3-.1-.5-.5-.2L7.5 13.1l-4.6-1.4c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.6.2 1 1.2Z"/></svg>',
  'link': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5"/></svg>'
};

const MONTHS_ID = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

function formatTanggalIndo(isoDate) {
  const d = new Date(isoDate + 'T00:00:00');
  if (isNaN(d)) return isoDate;
  return `${d.getDate()} ${MONTHS_ID[d.getMonth()]} ${d.getFullYear()}`;
}

function compareVersions(a, b) {
  const numericPart = (v) => String(v).split('-')[0];
  const pa = numericPart(a).split('.').map(Number);
  const pb = numericPart(b).split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const na = pa[i] || 0, nb = pb[i] || 0;
    if (na !== nb) return nb - na;
  }
  return 0;
}

function sortDownloads(list) {
  return [...list].sort((a, b) => (b.latest === true) - (a.latest === true) || compareVersions(a.version, b.version));
}

function escapeHTML(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function escapeAttr(str) { return escapeHTML(str); }

function showFatalError(container, message) {
  if (!container) return;
  container.innerHTML = `<div class="data-error"><strong>Gagal memuat data</strong>${escapeHTML(message)}</div>`;
}

/* ===== RENDER FUNCTIONS ===== */

function renderHero(app) {
  const desc = document.getElementById('heroDesc');
  if (desc) desc.textContent = app.description || '';
}

function renderAbout(app, stats) {
  const aboutDesc = document.getElementById('aboutDesc');
  if (aboutDesc) aboutDesc.textContent = app.description || 'Rakku adalah aplikasi untuk menikmati anime dan manga.';

  const grid = document.getElementById('statsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  (stats || []).forEach(stat => {
    const card = document.createElement('div');
    card.className = 'stat-card reveal';
    card.innerHTML = `
      <div class="stat-value" data-target="${stat.value}" data-suffix="${stat.suffix || ''}">0</div>
      <div class="stat-label">${escapeHTML(stat.label)}</div>
    `;
    grid.appendChild(card);
  });
  observeElements(grid.querySelectorAll('.stat-card'));
  animateCounters(grid.querySelectorAll('.stat-value'));
}



function renderServerStatus(status) {
  const el = document.getElementById('serverStatus');
  if (!el) return;
  const isOnline = !status || status.online !== false;
  const textEl = el.querySelector('.server-status-text');
  el.classList.remove('online', 'offline');
  el.classList.add(isOnline ? 'online' : 'offline');
  textEl.textContent = isOnline
    ? (status && status.note ? status.note : 'Server Online — Semua Sistem Normal')
    : (status && status.note ? status.note : 'Server Sedang Gangguan');
}

function renderDownloads(downloads, appName, appLogo) {
  const list = document.getElementById('downloadsList');
  if (!list) return;
  list.innerHTML = '';

  if (!downloads || downloads.length === 0) {
    list.innerHTML = `<div class="data-error"><strong>Belum ada file tersedia</strong>Silakan cek kembali nanti.</div>`;
    return;
  }

  const sorted = sortDownloads(downloads);
  sorted.forEach((dl, index) => {
    const card = document.createElement('div');
    card.className = 'download-card reveal' + (index === 0 ? ' latest' : '');
    const initials = (dl.name || appName || 'R').slice(0, 1).toUpperCase();
    const logoHTML = appLogo
      ? `<img src="${escapeAttr(appLogo)}" alt="${escapeAttr(dl.name || appName || 'Rakku')}" onerror="this.replaceWith(Object.assign(document.createElement('span'), {textContent: '${initials}'}))">`
      : initials;
    card.innerHTML = `
      <div class="dl-logo">${logoHTML}</div>
      <div class="dl-info">
        <div class="dl-name-row">
          <span class="dl-name">${escapeHTML(dl.name)} — v${escapeHTML(dl.version)}</span>
          ${index === 0 ? '<span class="dl-badge">Terbaru</span>' : ''}
        </div>
        <div class="dl-meta">${escapeHTML(dl.type)} • ${escapeHTML(dl.size)} • ${formatTanggalIndo(dl.date)}</div>
        <div class="dl-verified">${ICONS['shield-check']}<span>Verified by Rakku Team</span></div>
      </div>
      <a class="btn btn-primary dl-btn" href="${escapeAttr(dl.url)}" target="_blank" rel="noopener noreferrer">Download</a>
    `;
    list.appendChild(card);
  });
  observeElements(list.querySelectorAll('.download-card'));
}

function renderShareButtons(appName) {
  const wrap = document.getElementById('shareButtons');
  if (!wrap) return;
  const shareUrl = window.location.href.split('#')[0];
  const shareText = `🎬 Anime, 📖 Manga, 💬 Chat & banyak fitur seru lainnya ada di ${appName || 'Rakku'}! Yuk coba sekarang! 🔥`;
  wrap.innerHTML = `
    <a class="share-btn whatsapp" href="https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}" target="_blank" rel="noopener noreferrer">
      ${ICONS['whatsapp']}<span>WhatsApp</span>
    </a>
    <a class="share-btn telegram" href="https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}" target="_blank" rel="noopener noreferrer">
      ${ICONS['telegram']}<span>Telegram</span>
    </a>
    <button class="share-btn copy" id="shareCopyBtn" type="button">
      ${ICONS['link']}<span>Salin Link</span>
    </button>
  `;
  const copyBtn = document.getElementById('shareCopyBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const label = copyBtn.querySelector('span');
      try {
        await navigator.clipboard.writeText(shareUrl);
        copyBtn.classList.add('copied');
        label.textContent = 'Tersalin!';
      } catch {
        label.textContent = 'Gagal menyalin';
      }
      setTimeout(() => { copyBtn.classList.remove('copied'); label.textContent = 'Salin Link'; }, 2000);
    });
  }
}

function renderUpdates(updates) {
  const list = document.getElementById('updatesList');
  if (!list) return;
  list.innerHTML = '';
  if (!updates || updates.length === 0) {
    list.innerHTML = `<div class="data-error"><strong>Belum ada riwayat update</strong>Update akan muncul di sini.</div>`;
    return;
  }
  const sorted = [...updates].sort((a, b) => compareVersions(a.version, b.version));
  sorted.forEach((u, idx) => {
    const card = document.createElement('div');
    card.className = 'update-card reveal';
    const changesHTML = (u.changes || []).map(c => `<li>${ICONS['check']}<span>${escapeHTML(c)}</span></li>`).join('');
    const panelId = `update-panel-${idx}`;
    card.innerHTML = `
      <button class="update-toggle" aria-expanded="false" aria-controls="${panelId}">
        <div class="update-toggle-left">
          <span class="update-version">v${escapeHTML(u.version)}</span>
          <span class="update-title">${escapeHTML(u.title)}</span>
          <span class="update-date">${formatTanggalIndo(u.date)}</span>
        </div>
        <span class="update-chevron">${ICONS['chevron']}</span>
      </button>
      <div class="update-panel" id="${panelId}">
        <div class="update-panel-inner"><ul class="update-changes">${changesHTML}</ul></div>
      </div>
    `;
    list.appendChild(card);
  });
  observeElements(list.querySelectorAll('.update-card'));
  initAccordions('.update-toggle');
}

function renderFAQ(faqs) {
  const list = document.getElementById('faqList');
  if (!list) return;
  list.innerHTML = '';
  if (!faqs || faqs.length === 0) {
    list.innerHTML = `<div class="data-error"><strong>Belum ada FAQ</strong>Pertanyaan akan muncul di sini.</div>`;
    return;
  }
  faqs.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'faq-item reveal';
    const panelId = `faq-panel-${idx}`;
    el.innerHTML = `
      <button class="faq-toggle" aria-expanded="false" aria-controls="${panelId}">
        <span class="faq-question">${escapeHTML(item.question)}</span>
        <span class="faq-chevron">${ICONS['chevron']}</span>
      </button>
      <div class="faq-panel" id="${panelId}">
        <div class="faq-panel-inner">${escapeHTML(item.answer)}</div>
      </div>
    `;
    list.appendChild(el);
  });
  observeElements(list.querySelectorAll('.faq-item'));
  initAccordions('.faq-toggle');
}

/* ===== UTILS ===== */

function initAccordions(selector) {
  document.querySelectorAll(selector).forEach(btn => {
    if (btn.dataset.accordionBound) return;
    btn.dataset.accordionBound = 'true';
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.style.maxHeight = !expanded ? panel.scrollHeight + 'px' : '0px';
    });
  });
}

function observeElements(elements) {
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('in-view')); return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sib = [...entry.target.parentElement.children].filter(c => c.classList.contains('reveal'));
        entry.target.style.transitionDelay = (Math.max(0, sib.indexOf(entry.target)) % 6) * 70 + 'ms';
        entry.target.classList.add('in-view'); observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  elements.forEach(el => observer.observe(el));
}

function animateCounters(elements) {
  elements.forEach(el => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('id-ID') + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ===== NAVBAR ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navClose = document.getElementById('navClose');
  const navBackdrop = document.getElementById('navBackdrop');

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function openMenu() {
    navLinks.classList.add('open'); hamburger.classList.add('open');
    navBackdrop.classList.add('open'); document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    navLinks.classList.remove('open'); hamburger.classList.remove('open');
    navBackdrop.classList.remove('open'); document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', () => navLinks.classList.contains('open') ? closeMenu() : openMenu());
  if (navClose) navClose.addEventListener('click', closeMenu);
  if (navBackdrop) navBackdrop.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  navLinks && navLinks.querySelectorAll('.nav-link, .nav-cta').forEach(link => link.addEventListener('click', closeMenu));
}


/* ===== SCROLL PROGRESS ===== */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ===== BACK TO TOP ===== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  function update() { btn.classList.toggle('visible', window.scrollY > 600); }
  window.addEventListener('scroll', update, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  update();
}


/* ===== INIT ===== */
async function initRakku() {
  initNavbar();
  initScrollProgress();
  initBackToTop();
  initEasedScroll();
  initPreloader();
  initParallax();
  initSpotlight();
  initScrollSpy();
  initButtons();
  initCarousel('contact');

  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    el.style.transitionDelay = i * 110 + 'ms';
    document.addEventListener('rakku:ready', () => el.classList.add('in-view'), { once: true });
  });

  observeElements(document.querySelectorAll('.section .reveal'));

  try {
    const res = await fetch('rakku.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    const app = data.app || {};
    const latest = sortDownloads(data.downloads || [])[0];
    const hv = document.getElementById('heroVer');
    if (hv && latest) hv.textContent = 'v' + latest.version;

    renderHero(app);
    renderAbout(app, data.stats);
    renderFeatures(data.features);
    renderScreens(data.screenshots, app.name);
    renderServerStatus(data.server_status);
    renderDownloads(data.downloads, app.name, app.logo);
    renderShareButtons(app.name);
    renderUpdates(data.updates);
    renderFAQ(data.faq);

  } catch (err) {
    console.error('Gagal memuat rakku.json:', err);
    const heroDesc = document.getElementById('heroDesc');
    if (heroDesc) heroDesc.textContent = 'Rakku adalah aplikasi untuk menonton anime dan membaca manga.';
    showFatalError(document.getElementById('statsGrid'), 'Statistik tidak dapat dimuat.');
    showFatalError(document.getElementById('featuresGrid'), 'Daftar fitur tidak dapat dimuat.');
    showFatalError(document.getElementById('downloadsList'), 'Data download tidak dapat dimuat.');
    showFatalError(document.getElementById('updatesList'), 'Riwayat update tidak dapat dimuat.');
    showFatalError(document.getElementById('faqList'), 'FAQ tidak dapat dimuat.');
    const statusEl = document.getElementById('serverStatus');
    if (statusEl) {
      statusEl.classList.add('offline');
      const textEl = statusEl.querySelector('.server-status-text');
      if (textEl) textEl.textContent = 'Status server tidak dapat dimuat';
    }
    renderShareButtons('Rakku');
  }
}

document.addEventListener('DOMContentLoaded', initRakku);

/* ===== FITUR: SHOWCASE ===== */
function renderFeatures(features) {
  const list = document.getElementById('scList');
  if (!list || !features || !features.length) return;
  const $ = (id) => document.getElementById(id);
  const root = $('showcase'), media = $('scMedia'), tags = $('scTags'), info = $('scInfo'), num = $('scNum');
  const pad = (n) => String(n + 1).padStart(2, '0');
  let current = -1, timer = null, userPicked = false;

  list.innerHTML = features.map((f, i) => `
    <button class="sc-item" role="tab" aria-selected="false" data-i="${i}">
      <span class="sc-item-ico">${ICONS[f.icon] || ICONS.sparkles}</span><span class="sc-item-name">${escapeHTML(f.title)}</span><em>${pad(i)}</em>
    </button>`).join('');

  function select(i) {
    if (i === current) return;
    const first = current === -1;
    current = i;
    const f = features[i];
    root.style.setProperty('--h', f.hue || 265);
    root.dataset.shape = f.shape || 'phone';
    list.querySelectorAll('.sc-item').forEach((b, k) => {
      b.classList.toggle('active', k === i); b.setAttribute('aria-selected', String(k === i));
    });
    const active = list.children[i];
    if (list.scrollWidth > list.clientWidth) list.scrollTo({ left: active.offsetLeft - 16, behavior: 'smooth' });
    root.classList.add('swap');
    setTimeout(() => {
      num.textContent = pad(i);
      const wide = f.shape === 'wide';
      media.innerHTML = `<div class="${wide ? 'wide-frame' : 'phone'}"><img src="${escapeAttr(f.image)}" alt="Tampilan fitur ${escapeAttr(f.title)} di Rakku" ${wide ? 'width="668" height="320"' : 'width="720" height="1496"'} decoding="async"></div>`;
      tags.innerHTML = (f.tags || []).map(t => `<span>${escapeHTML(t)}</span>`).join('');
      info.innerHTML = `<h3>${escapeHTML(f.title)}</h3><p>${escapeHTML(f.description)}</p>`;
      root.classList.remove('swap');
    }, first ? 0 : 220);
  }
  list.addEventListener('click', (e) => {
    const b = e.target.closest('.sc-item'); if (!b) return;
    userPicked = true; clearInterval(timer); select(Number(b.dataset.i));
  });
  select(0);
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    new IntersectionObserver(([en]) => {
      clearInterval(timer);
      if (en.isIntersecting && !userPicked) timer = setInterval(() => select((current + 1) % features.length), 6500);
    }, { threshold: 0.4 }).observe(root);
  }
  const stage = $('scStage');
  stage.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = stage.getBoundingClientRect();
    stage.style.setProperty('--rx', ((e.clientY - r.top) / r.height - .5) * -8 + 'deg');
    stage.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 10 + 'deg');
  });
  stage.addEventListener('pointerleave', () => { stage.style.setProperty('--rx', '0deg'); stage.style.setProperty('--ry', '0deg'); });
}

/* ===== CAROUSEL (dipakai Tampilan & Kontak) ===== */
function initCarousel(key) {
  const ids = key === 'contact'
    ? { wrap: 'contactTrackWrap', track: 'contactTrack', dots: 'contactDots', prev: 'contactPrev', next: 'contactNext', item: '.contact-card' }
    : { wrap: 'carouselTrackWrap', track: 'carouselTrack', dots: 'carouselDots', prev: 'carouselPrev', next: 'carouselNext', item: '.carousel-slide' };
  const $ = (k) => document.getElementById(ids[k]);
  const wrap = $('wrap'), track = $('track'), dotsWrap = $('dots'), prev = $('prev'), next = $('next');
  if (!wrap || !track) return;
  const items = [...track.querySelectorAll(ids.item)];
  const step = () => {
    const s = items.find(i => i.offsetParent !== null);
    return s ? s.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).columnGap) || 20) : 0;
  };
  dotsWrap.innerHTML = '';
  items.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => wrap.scrollTo({ left: i * step(), behavior: 'smooth' }));
    dotsWrap.appendChild(d);
  });
  const update = () => {
    const w = step(); if (!w) return;
    const idx = Math.round(wrap.scrollLeft / w);
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    if (prev) prev.disabled = wrap.scrollLeft <= 4;
    if (next) next.disabled = wrap.scrollLeft >= wrap.scrollWidth - wrap.clientWidth - 4;
  };
  let t; wrap.addEventListener('scroll', () => { clearTimeout(t); t = setTimeout(update, 80); }, { passive: true });
  prev && prev.addEventListener('click', () => wrap.scrollBy({ left: -step(), behavior: 'smooth' }));
  next && next.addEventListener('click', () => wrap.scrollBy({ left: step(), behavior: 'smooth' }));
  let down = false, sx = 0, sl = 0, moved = false;
  wrap.addEventListener('mousedown', (e) => { down = true; moved = false; wrap.classList.add('dragging'); sx = e.pageX; sl = wrap.scrollLeft; });
  window.addEventListener('mouseup', () => { down = false; wrap.classList.remove('dragging'); });
  window.addEventListener('mousemove', (e) => { if (!down) return; e.preventDefault(); moved = true; wrap.scrollLeft = sl - (e.pageX - sx); });
  track.querySelectorAll('a').forEach(a => a.addEventListener('click', (e) => { if (moved) e.preventDefault(); }));
  setTimeout(update, 300);
}

function renderScreens(shots, appName) {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  if (!shots || !shots.length) { const sec = document.getElementById('tampilan'); if (sec) sec.style.display = 'none'; return; }
  track.innerHTML = shots.map((shot, i) => {
    const src = typeof shot === 'string' ? shot : shot.image;
    const cap = typeof shot === 'string' ? '' : (shot.caption || '');
    return `<figure class="carousel-slide reveal"><div class="phone"><img src="${escapeAttr(src)}" alt="${escapeAttr(cap || (appName || 'Rakku') + ' screenshot ' + (i + 1))}" width="720" height="1496" loading="lazy" onerror="this.closest('.carousel-slide').style.display='none'"></div>${cap ? `<figcaption class="carousel-slide-caption">${escapeHTML(cap)}</figcaption>` : ''}</figure>`;
  }).join('');
  observeElements(track.querySelectorAll('.carousel-slide'));
  initCarousel('screens');
}

/* ===== MOTION & INTERAKSI ===== */
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function initPreloader() {
  const loader = document.getElementById('loader');
  const done = () => {
    document.body.classList.add('is-ready');
    if (loader) { loader.classList.add('hide'); setTimeout(() => loader.remove(), 700); }
    document.dispatchEvent(new Event('rakku:ready'));
  };
  const start = performance.now();
  const finish = () => setTimeout(done, Math.max(0, (reduceMotion ? 0 : 900) - (performance.now() - start)));
  document.readyState === 'complete' ? finish() : window.addEventListener('load', finish, { once: true });
  setTimeout(done, 4000);
}

function initParallax() {
  const visual = document.querySelector('.hero-visual');
  if (!visual || reduceMotion) return;
  const layers = [...visual.querySelectorAll('[data-depth]')];
  let mx = 0, my = 0, sy = 0, raf = 0;
  const paint = () => {
    raf = 0;
    layers.forEach(l => {
      const d = Number(l.dataset.depth);
      l.style.setProperty('--px', (mx * d).toFixed(1) + 'px');
      l.style.setProperty('--py', (my * d - sy * d * 0.12).toFixed(1) + 'px');
    });
  };
  const queue = () => { if (!raf) raf = requestAnimationFrame(paint); };
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    mx = (e.clientX / innerWidth - .5) * .6; my = (e.clientY / innerHeight - .5) * .6; queue();
  }, { passive: true });
  window.addEventListener('scroll', () => { sy = Math.min(scrollY, innerHeight); queue(); }, { passive: true });
}

function initSpotlight() {
  document.addEventListener('pointermove', (e) => {
    const el = e.target.closest && e.target.closest('.security-card, .download-card, .update-card, .faq-item, .contact-card, .step-card, .stat-card');
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', e.clientX - r.left + 'px'); el.style.setProperty('--my', e.clientY - r.top + 'px');
  }, { passive: true });
}

function initScrollSpy() {
  const links = [...document.querySelectorAll('.nav-links .nav-link')];
  const map = new Map(links.map(l => [l.getAttribute('href').slice(1), l]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      links.forEach(l => l.classList.remove('active'));
      const l = map.get(en.target.id); if (l) l.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
}

function initButtons() {
  document.addEventListener('pointerdown', (e) => {
    const b = e.target.closest('.btn, .share-btn'); if (!b) return;
    const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height);
    const rip = document.createElement('span');
    rip.className = 'ripple';
    rip.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
    b.appendChild(rip); setTimeout(() => rip.remove(), 600);
  });
}

function initEasedScroll() {
  const ease = (t) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = id === '#top' ? document.body : document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
    const to = id === '#top' ? 0 : target.getBoundingClientRect().top + scrollY - navH - 8;
    if (reduceMotion) return window.scrollTo(0, to);
    const from = scrollY, dist = to - from, dur = Math.min(1300, 500 + Math.abs(dist) * .25), t0 = performance.now();
    document.documentElement.style.scrollBehavior = 'auto';
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      window.scrollTo(0, from + dist * ease(p));
      p < 1 ? requestAnimationFrame(step) : (document.documentElement.style.scrollBehavior = '');
    };
    requestAnimationFrame(step);
  }));
}
