# 驿途运营 — 酒店民宿 OTA 代运营服务展示网站

专业酒店民宿 OTA 代运营服务展示网站，纯静态前端实现，自适应 PC 与移动端浏览器。网站旨在说服酒店/民宿老板信任代运营能力，获取客户线索。

## 页面预览

### 首页
<img src="./assets/images/examples/home.png" alt="首页" width="100%">

### 服务介绍
<img src="./assets/images/examples/services.png" alt="服务介绍" width="100%">

### 成功案例
<img src="./assets/images/examples/case.png" alt="成功案例" width="100%">

### 关于我们
<img src="./assets/images/examples/about.png" alt="关于我们" width="100%">

---

## 项目亮点

- **纯静态站点**：HTML5 + CSS3 + 原生 JavaScript，零后端依赖，可部署至任意静态托管
- **移动端优先**：三断点响应式布局（手机 / 平板 / 桌面），底部固定 TabBar + 汉堡菜单
- **动态组件加载**：头部和页脚通过 JS 异步加载，统一维护
- **数字滚动动画**：统计数字从 0 滚动到目标值，配合 Intersection Observer 触发
- **案例筛选弹窗**：支持按类别筛选（全部 / 民宿 / 精品酒店 / 连锁酒店），点击卡片展开详情弹窗含 Chart.js 折线图
- **表单异步提交**：前端验证 + Formspree 无后端提交，成功后内联感谢提示
- **访问统计**：集成不蒜子计数器，页脚展示总访问量与访客数
- **ICP 备案**：页脚预留备案号占位符，方便替换
- **SEO 基础**：每页独立 title / description / canonical，语义化标签，sitemap.xml

## 技术栈

| 类别 | 技术 |
|------|------|
| 结构 | HTML5（语义化标签） |
| 样式 | CSS3（自定义属性 + Flexbox + Grid + clamp 响应式字体） |
| 交互 | 原生 JavaScript ES6+（IntersectionObserver / fetch / DOM API） |
| 图表 | Chart.js 4.x（CDN 引入，仅案例详情页使用） |
| 统计 | 不蒜子 2.3（CDN 引入，页脚访问量统计） |
| 表单 | Formspree（无后端表单提交服务） |
| 图片 | Unsplash（占位图，生产环境需替换） |
| 构建 | Vite 8（开发服务器 + 生产构建） |

## 目录结构

```
/
├── index.html                 # 首页（Hero + 统计 + 服务 + 案例 + 证言 + CTA）
├── services.html              # 服务介绍（流程步骤 + 服务详情 + 差异亮点）
├── cases.html                 # 成功案例（筛选 + 卡片网格 + 弹窗 + 图表）
├── about.html                 # 关于我们（品牌故事 + 团队 + 理念）
├── contact.html               # 联系诊断（表单 + 验证 + 微信号复制）
├── faq.html                   # 常见问题（手风琴组件，9 个 FAQ）
├── 404.html                   # 自定义 404 页面
├── sitemap.xml                # SEO 站点地图
│
├── components/
│   ├── header.html            # 全局头部（桌面导航 + 汉堡菜单 + TabBar）
│   └── footer.html            # 全局页脚（导航 + 联系 + ICP + 不蒜子统计）
│
├── assets/
│   ├── css/
│   │   └── style.css          # 完整样式（CSS 变量 + 响应式 + 组件样式）
│   ├── js/
│   │   ├── main.js            # 全局逻辑（组件加载 / 导航 / 动画 / 弹窗 / 手风琴）
│   │   ├── cases.js           # 案例数据定义 + 渲染 + 筛选逻辑
│   │   └── contact.js         # 表单验证 + Formspree 异步提交 + 微信复制
│   └── images/
│       └── logo.svg           # 品牌 Logo（SVG 矢量）
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/                       # Vite React 入口（构建系统保留）
│   ├── App.tsx
│   ├── main.tsx
│   ├── theme.ts
│   └── vite-env.d.ts
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 页面功能说明

### 首页 `index.html`
| 区域 | 内容 |
|------|------|
| Hero | 大标题「让您的酒店民宿 OTA 订单增长 50%+」+ 副标题 + 双 CTA 按钮 |
| 统计栏 | 4 项核心数据（200+ 合作酒店 / +38.6% 入住率提升 / 1.2亿+ GMV / 98% 满意度），带数字滚动动画 |
| 服务卡片 | 4 张卡片（平台优化 / 价格策略 / 评价管理 / 付费推广），链接到服务详情锚点 |
| 精选案例 | 3 个案例卡片，展示优化前后入住率对比 |
| 客户证言 | 3 条客户好评卡片 |
| 品牌墙 | 6 大 OTA 平台名称（美团 / 携程 / 飞猪 / Booking / Airbnb / 去哪儿） |
| CTA | 深蓝背景行动号召区，引导免费咨询 |

### 服务介绍 `services.html`
| 区域 | 内容 |
|------|------|
| 流程步骤 | 4 步时间轴（诊断 → 策略 → 执行 → 优化），带序号圆点和连接线 |
| 服务详情 | 4 项服务各列 5 条具体交付物清单 |
| 差异亮点 | 4 张数据卡片（7+ 年经验 / 1:1 专属顾问 / 90 天见效 / 24h 响应） |

### 成功案例 `cases.html`
| 区域 | 内容 |
|------|------|
| 筛选按钮 | 全部 / 民宿 / 精品酒店 / 连锁酒店，实时筛选 |
| 案例网格 | 6 个案例卡片，含照片、标签、入住率对比、增长数据 |
| 详情弹窗 | 点击卡片弹出模态框，含前后对比卡片 + 详细指标 + Chart.js 入住率折线图 |

案例数据定义在 `assets/js/cases.js` 的 `cases` 常量数组中。

### 关于我们 `about.html`
| 区域 | 内容 |
|------|------|
| 品牌故事 | 左文右图双栏布局，讲述团队背景与创立初衷 |
| 核心团队 | 4 人团队卡片（头像 + 姓名 + 职位 + 简介） |
| 服务理念 | 3 张原则卡片（数据说话 / 长期主义 / 全程透明） |
| 品牌墙 | 复用 OTA 平台展示条 |

### 联系诊断 `contact.html`
| 字段 | 类型 | 验证规则 |
|------|------|----------|
| 姓名 | text | 至少 2 字 |
| 手机号 | tel | 1[3-9] 开头 11 位 |
| 酒店/民宿名称 | text | 至少 2 字 |
| 主做平台 | select | 必选 |
| 需求简述 | textarea | 至少 10 字 |

- 提交目标：Formspree（异步 POST，无需后端）
- 成功反馈：表单隐藏，显示感谢信息
- 附加功能：微信号一键复制按钮

### 常见问题 `faq.html`
9 个手风琴 FAQ，分 3 个类别：
1. **收费与合同**（收费模式 / 合同周期 / 退款政策）
2. **数据与安全**（账号安全 / 数据隐私）
3. **配合与执行**（配合事项 / 小体量酒店 / 服务承载量）

### 自定义 404 `404.html`
- 大号描边 404 数字
- 友好提示文案
- 返回首页 + 免费诊断双按钮

## 设计规范

### 色彩系统
| 用途 | 色值 | 说明 |
|------|------|------|
| 主色 | `#0A2540` | 深蓝，用于文字、深色背景 |
| 强调色 / CTA | `#FF6B35` | 亮橙，用于按钮、关键数据 |
| 背景色 | `#F8F9FA` | 浅灰背景 |
| 卡片色 | `#FFFFFF` | 白色 |
| 成功 / 增长 | `#22C55E` | 绿色，用于正向数据 |
| 危险 / 下降 | `#EF4444` | 红色，用于负向数据 |

### 字体
```
font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
```
标题使用 `clamp()` 实现视口自适应缩放，如 `clamp(2rem, 5vw, 3.2rem)`。

### 响应式断点
| 断点 | 宽度 | 布局特征 |
|------|------|----------|
| 手机 | < 768px | 单列 / 汉堡菜单 / 底部 TabBar |
| 平板 | 768px – 1023px | 双列 / 隐藏 Hero 图 |
| 桌面 | ≥ 1024px | 3–4 列 / 水平导航 |

### 交互规范
- 卡片悬停：`transform: translateY(-4px)` + 阴影增强
- 按钮 `:focus-visible`：3px 橙色外描边
- 移动端点击目标：≥ 44 × 44 px
- 平滑滚动：`scroll-behavior: smooth`

## 全局组件说明

### 头部 `components/header.html`
- **桌面端**：Logo + 5 个导航链接 + CTA 按钮，水平排列
- **移动端**：Logo + 汉堡按钮（`aria-expanded` 控制展开），展开后垂直导航
- **底部 TabBar**：4 个图标+文字（首页 / 服务 / 案例 / 联系），移动端固定底部

### 页脚 `components/footer.html`
- **四列布局**：品牌简介 / 快速导航 / 服务链接 / 联系方式
- **底部栏**：版权年份（JS 自动更新）+ ICP 备案号链接 + 不蒜子访问统计
- **不蒜子**：`busuanzi_container_site_pv`（总访问量）+ `busuanzi_container_site_uv`（访客数），默认隐藏，脚本加载后自动显示

## 快速启动

### 环境要求
- Node.js 18+
- npm 9+

### 安装与运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:5173/
```

> 静态 HTML 页面直接由 Vite 开发服务器提供，无需额外配置。

### 可用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（热重载） |
| `npm run build` | 构建生产版本（输出到 dist/） |
| `npm run preview` | 预览生产构建 |
| `npm run lint` | 运行 ESLint 代码检查 |

### 端口配置

默认端口 5173，如需修改可在 `vite.config.ts` 中设置：

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
})
```

或临时指定：
```bash
npm run dev -- --port 3000
```

## 上线前必须配置

### 1. Formspree 表单 ID
编辑 `assets/js/contact.js`，替换表单 ID：
```javascript
const FORMSPREE_ID = 'xdkgbyqn';  // 改为您的 Formspree Form ID
```

获取方式：访问 [formspree.io](https://formspree.io/)，创建表单后获得 ID。

### 2. ICP 备案号
编辑 `components/footer.html`，替换占位符：
```html
<a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow noopener">京ICP备XXXXXXXXX号-X</a>
```

### 3. 联系信息
在 `components/footer.html` 和 `contact.html` 中更新：
- 邮箱地址
- 电话号码
- 微信号（`contact.html` 中 `data-wechat` 属性值）

### 4. 图片资源
当前使用 Unsplash 占位图，上线前需替换为真实素材：
- 团队成员照片（`about.html`）
- 酒店案例照片（`cases.html` 及 `cases.js` 中的 `img` 字段）
- Hero 大图（`index.html`）

### 5. 域名
`sitemap.xml` 和各页 `<link rel="canonical">` 中的域名需替换：
```
https://yituops.com/ → 您的实际域名
```

## 部署

项目为纯静态站点，可部署至任意静态托管服务：

```bash
# 构建
npm run build

# dist/ 目录即为可部署产物
```

支持的部署平台：
- **Vercel** / **Netlify**：直接关联 Git 仓库，自动构建
- **GitHub Pages**：将 dist/ 推至 gh-pages 分支
- **阿里云 OSS** / **腾讯云 COS**：上传 dist/ 目录
- **Nginx / Apache**：将 dist/ 作为网站根目录

> 注意：`components/` 和 `assets/` 目录需与 HTML 文件保持相对路径关系。Vite 构建仅打包 React 入口，静态页面由服务器直接提供。

## 案例数据维护

案例数据集中定义在 `assets/js/cases.js` 的 `cases` 数组中，每个案例包含以下字段：

```javascript
{
  id: 1,                           // 唯一 ID
  name: '西湖悦居民宿',             // 酒店名称
  category: '民宿',                 // 类别（民宿 / 精品酒店 / 连锁酒店）
  platform: '美团 · 携程',          // 主做平台
  location: '杭州西湖',             // 位置
  img: 'https://...',              // 图片 URL
  desc: '...',                      // 详细描述
  before: { occ: '42%', revenue: '¥ 28,000' },   // 优化前数据
  after: { occ: '78%', revenue: '¥ 68,000' },    // 优化后数据
  metrics: [                        // 详细指标
    { label: '入住率提升', after: '36%', up: true },
    ...
  ],
  chartData: {                      // Chart.js 图表数据
    labels: ['1月', '2月', ...],
    values: [42, 48, 55, 63, 71, 78],
  }
}
```

新增案例只需在数组中追加对象，页面自动渲染。

## 无障碍与 SEO

### 无障碍
- 所有按钮和链接具备 `:focus-visible` 样式
- 汉堡菜单使用 `aria-expanded` + `aria-controls`
- 弹窗使用 `role="dialog"` + `aria-modal="true"`
- 表单字段绑定 `type` / `autocomplete` / `aria-required`
- 图片添加有意义的 `alt` 属性
- 移动端点击目标 ≥ 44 × 44 px
- 页面平滑滚动 `scroll-behavior: smooth`

### SEO
- 每页独立 `<title>` + `<meta name="description">`
- 每页 `<link rel="canonical">`
- 语义化标签（`<header>` / `<main>` / `<section>` / `<article>` / `<footer>`）
- `sitemap.xml` 涵盖全部页面 URL

## License

MIT License
