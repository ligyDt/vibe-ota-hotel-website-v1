/* =====================================================
   MAIN.JS — Global logic, component loading, nav, animations
   ===================================================== */

// ── Component Loader ──────────────────────────────────
async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to fetch ${path}`);
    el.innerHTML = await res.text();
    if (id === 'global-header') initNav();
    if (id === 'global-footer') initFooter();
  } catch (e) {
    console.warn('Component load error:', e);
  }
}

Promise.all([
  loadComponent('global-header', '/components/header.html'),
  loadComponent('global-footer', '/components/footer.html'),
]);

// ── Navigation ────────────────────────────────────────
function initNav() {
  // Mark active link
  const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.desktop-nav a, .mobile-nav a, .mobile-tabbar a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const aPath = href.replace(/\/$/, '') || '/index.html';
    if (path.endsWith(aPath) || (path === '/' && aPath === '/index.html')) {
      a.classList.add('active');
    }
  });

  // Burger menu
  const burger = document.querySelector('.burger-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!burger || !mobileNav) return;

  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    mobileNav.classList.toggle('open', !expanded);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
      burger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
    }
  });

  // Close on nav link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
    });
  });
}

// ── Footer year ───────────────────────────────────────
function initFooter() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ── Number Counter Animation ──────────────────────────
function animateCounter(el) {
  const target = parseFloat(el.dataset.target || el.textContent);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const start = performance.now();
  const isFloat = String(target).includes('.');

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = target * ease;
    el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.round(current)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(el => observer.observe(el));
}

// ── Scroll Animations ─────────────────────────────────
function initScrollAnimations() {
  const els = document.querySelectorAll('[data-anim]');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

// ── Accordion (FAQ) ───────────────────────────────────
function initAccordion() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── Case Modal ────────────────────────────────────────
function initModal() {
  const overlay = document.getElementById('case-modal');
  if (!overlay) return;

  const closeBtn = overlay.querySelector('.modal-close');
  closeBtn?.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(data) {
  const overlay = document.getElementById('case-modal');
  if (!overlay) return;

  const box = overlay.querySelector('.modal-box');
  const imgEl = box.querySelector('.modal-img');
  const contentEl = box.querySelector('.modal-content');

  imgEl.src = data.img;
  imgEl.alt = data.name;

  const lifts = data.metrics.map(m => `
    <div class="metric-badge">
      <span class="m-val ${m.up ? 'up' : 'down'}">${m.up ? '▲' : '▼'} ${m.after}</span>
      <span class="m-label">${m.label}</span>
    </div>
  `).join('');

  contentEl.innerHTML = `
    <div class="case-tag">${data.category}</div>
    <h2 style="color:var(--color-primary);margin-bottom:0.4rem;">${data.name}</h2>
    <p style="color:var(--color-text-secondary);font-size:0.9rem;margin-bottom:1rem;">📍 ${data.location} &nbsp;|&nbsp; 🏨 ${data.platform}</p>
    <p style="color:var(--color-text-secondary);">${data.desc}</p>

    <div class="before-after">
      <div class="ba-card before">
        <h4>优化前</h4>
        <div class="val">${data.before.occ}</div>
        <div class="sub">入住率</div>
        <div class="val" style="font-size:1.1rem;margin-top:0.5rem;">${data.before.revenue}</div>
        <div class="sub">月均收入</div>
      </div>
      <div class="ba-card after">
        <h4>优化后</h4>
        <div class="val">${data.after.occ}</div>
        <div class="sub">入住率</div>
        <div class="val" style="font-size:1.1rem;margin-top:0.5rem;">${data.after.revenue}</div>
        <div class="sub">月均收入</div>
      </div>
    </div>

    <div class="metrics-row" style="margin-bottom:1.25rem;">${lifts}</div>

    <div class="chart-wrap"><canvas id="modal-chart"></canvas></div>

    <a href="/contact.html" class="btn btn-primary" style="margin-top:1.25rem;width:100%;display:flex;">我也要这样的效果 →</a>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Chart
  if (window.Chart && data.chartData) {
    const ctx = document.getElementById('modal-chart')?.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.chartData.labels,
          datasets: [{
            label: '入住率',
            data: data.chartData.values,
            borderColor: '#FF6B35',
            backgroundColor: 'rgba(255,107,53,0.08)',
            borderWidth: 2.5,
            pointBackgroundColor: '#FF6B35',
            pointRadius: 4,
            tension: 0.4,
            fill: true,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: false, min: 20, max: 100, ticks: { callback: v => v + '%' } }
          }
        }
      });
    }
  }
}

function closeModal() {
  const overlay = document.getElementById('case-modal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Smooth scroll for hash links ──────────────────────
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// ── Init ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCounters();
  initScrollAnimations();
  initAccordion();
  initModal();
  initSmoothScroll();
});
