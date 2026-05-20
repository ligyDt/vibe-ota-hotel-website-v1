/* =====================================================
   CASES.JS — Case data + render logic
   ===================================================== */

const cases = [
  {
    id: 1,
    name: '西湖悦居民宿',
    category: '民宿',
    platform: '美团 · 携程',
    location: '杭州西湖',
    img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    desc: '西湖悦居是一家拥有12间客房的精品民宿，入驻我们平台后，通过深度优化主图、价格策略调整和评价管理，在短短90天内入住率从42%跃升至78%，美团评分提升至4.9分。',
    before: { occ: '42%', revenue: '¥ 28,000' },
    after: { occ: '78%', revenue: '¥ 68,000' },
    metrics: [
      { label: '入住率提升', after: '36%', up: true },
      { label: '月均收入增长', after: '143%', up: true },
      { label: '平台评分', after: '4.9分', up: true },
      { label: '订单转化率', after: '3.2x', up: true },
    ],
    chartData: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      values: [42, 48, 55, 63, 71, 78],
    }
  },
  {
    id: 2,
    name: '观澜精品酒店',
    category: '精品酒店',
    platform: '携程 · Booking',
    location: '三亚亚龙湾',
    img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
    desc: '观澜精品酒店共22间客房，主打高端滨海体验。通过我们的全渠道价格管理及付费推广策略，RevPAR提升显著，旺季溢价能力大幅增强。',
    before: { occ: '55%', revenue: '¥ 86,000' },
    after: { occ: '84%', revenue: '¥ 198,000' },
    metrics: [
      { label: '入住率提升', after: '29%', up: true },
      { label: '月均收入增长', after: '130%', up: true },
      { label: 'RevPAR增长', after: '82%', up: true },
      { label: '国际订单', after: '45%', up: true },
    ],
    chartData: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      values: [55, 61, 68, 74, 80, 84],
    }
  },
  {
    id: 3,
    name: '枫林客栈',
    category: '民宿',
    platform: '美团 · 飞猪',
    location: '成都宽窄巷子',
    img: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800&q=80',
    desc: '枫林客栈坐落于成都最热门景区附近，因内容不够吸引人导致流量低迷。通过我们重新拍摄主图、优化文案及短视频营销，三个月内月订单量增长220%。',
    before: { occ: '38%', revenue: '¥ 19,000' },
    after: { occ: '82%', revenue: '¥ 63,000' },
    metrics: [
      { label: '入住率提升', after: '44%', up: true },
      { label: '月订单增长', after: '220%', up: true },
      { label: '平台排名', after: 'TOP 5', up: true },
      { label: '好评率', after: '98%', up: true },
    ],
    chartData: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      values: [38, 46, 57, 68, 76, 82],
    }
  },
  {
    id: 4,
    name: '丽都连锁酒店（北京店）',
    category: '连锁酒店',
    platform: '携程 · 美团 · Booking',
    location: '北京朝阳',
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    desc: '丽都连锁是我们服务的第一家连锁品牌。通过统一全渠道价格体系、建立会员转化漏斗以及标准化评价管理SOP，整体OTA GMV在半年内增长165%。',
    before: { occ: '61%', revenue: '¥ 142,000' },
    after: { occ: '88%', revenue: '¥ 376,000' },
    metrics: [
      { label: '入住率提升', after: '27%', up: true },
      { label: 'GMV增长', after: '165%', up: true },
      { label: '直连比例提升', after: '38%', up: true },
      { label: '差评率下降', after: '67%', up: false },
    ],
    chartData: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      values: [61, 68, 75, 80, 85, 88],
    }
  },
  {
    id: 5,
    name: '清风山野民宿',
    category: '民宿',
    platform: '美团',
    location: '黄山脚下',
    img: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=800&q=80',
    desc: '清风山野是一家以徒步和亲子活动为主题的特色民宿，拥有8间客房。通过主题化内容输出和节假日收益管理策略，旺季收入提升超过300%。',
    before: { occ: '35%', revenue: '¥ 16,000' },
    after: { occ: '72%', revenue: '¥ 52,000' },
    metrics: [
      { label: '入住率提升', after: '37%', up: true },
      { label: '旺季收入增长', after: '300%+', up: true },
      { label: '复购率', after: '42%', up: true },
      { label: '搜索排名', after: 'TOP 3', up: true },
    ],
    chartData: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      values: [35, 40, 50, 60, 66, 72],
    }
  },
  {
    id: 6,
    name: '铂悦精品酒店',
    category: '精品酒店',
    platform: '携程 · 飞猪 · Booking',
    location: '上海徐汇',
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    desc: '铂悦是一家面向商旅客群的精品酒店，31间客房。通过商旅品牌搭建、企业协议价格体系以及高效的携程黄金会员专属服务，商旅订单占比从12%提升至45%。',
    before: { occ: '48%', revenue: '¥ 98,000' },
    after: { occ: '79%', revenue: '¥ 234,000' },
    metrics: [
      { label: '入住率提升', after: '31%', up: true },
      { label: '月均收入增长', after: '139%', up: true },
      { label: '商旅订单占比', after: '45%', up: true },
      { label: 'ADR增长', after: '28%', up: true },
    ],
    chartData: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      values: [48, 54, 61, 68, 74, 79],
    }
  },
];

// ── Render ──────────────────────────────────────────
function renderCases(filter = 'all') {
  const grid = document.getElementById('cases-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? cases : cases.filter(c => c.category === filter);

  grid.innerHTML = filtered.map(c => `
    <article class="case-card" data-anim data-case-id="${c.id}" tabindex="0" role="button" aria-label="查看${c.name}案例详情">
      <picture>
        <img
          src="${c.img}"
          alt="${c.name}酒店照片"
          class="case-card-img"
          loading="lazy"
          width="400" height="200"
        >
      </picture>
      <div class="case-card-body">
        <span class="case-tag">${c.category}</span>
        <h3>${c.name}</h3>
        <p class="case-platform">📍 ${c.location} &nbsp;|&nbsp; ${c.platform}</p>
        <div class="metrics-row">
          <div class="metric-badge">
            <span class="m-val">${c.before.occ}</span>
            <span class="m-label">优化前入住率</span>
          </div>
          <div class="metric-badge" style="background:rgba(34,197,94,0.08);">
            <span class="m-val up">▲ ${c.after.occ}</span>
            <span class="m-label">优化后入住率</span>
          </div>
          <div class="metric-badge" style="background:rgba(34,197,94,0.08);">
            <span class="m-val up">+${c.metrics[1].after}</span>
            <span class="m-label">${c.metrics[1].label}</span>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Re-trigger scroll animations
  if (window.initScrollAnimations) initScrollAnimations();

  // Bind click
  grid.querySelectorAll('.case-card').forEach(card => {
    const id = parseInt(card.dataset.caseId);
    const data = cases.find(c => c.id === id);
    const open = () => { if (data) openModal(data); };
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });

  // Re-animate
  requestAnimationFrame(() => {
    document.querySelectorAll('[data-anim]:not(.visible)').forEach(el => {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
      }, { threshold: 0.1 });
      io.observe(el);
    });
  });
}

// ── Filter ──────────────────────────────────────────
function initCaseFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCases(btn.dataset.filter);
    });
  });
  renderCases('all');
}

document.addEventListener('DOMContentLoaded', initCaseFilter);
