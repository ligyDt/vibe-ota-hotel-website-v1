# vibe coding Bolt OTA Hotel Website

一个基于 React + TypeScript + Vite 构建的OTA酒店代运营官网项目，模拟类似 OTA（代运营服务）平台的核心功能。
> 全程基于 Bolt coding 纯前端项目
## 页面预览

### 首页
<img src="./assets/images/examples/home.png" alt="首页" width="100%">

### 服务介绍
<img src="./assets/images/examples/services.png" alt="服务介绍" width="100%">

### 成功案例
<img src="./assets/images/examples/cases.png" alt="成功案例" width="100%">

### 关于我们

<img src="./assets/images/examples/about.png" alt="关于我们" width="100%">

## 项目亮点

- 酒店信息浏览与筛选
- 酒店房型展示与预订流程
- 个人中心与订单管理
- 现代响应式布局，支持主流浏览器与移动端访问
- 代码结构清晰，便于二次开发

## 技术栈

- **React 19** - 前端框架
- **TypeScript** - 类型安全
- **Vite 8** - 构建工具，支持热重载
- **Material UI v7** - UI 组件库
- **Emotion** - CSS-in-JS 样式方案

## 目录结构

```
boltnew-ota-hotel-website1/
├── src/               # 源码目录
│   ├── App.tsx        # React 应用主组件
│   ├── main.tsx       # 应用入口
│   ├── theme.ts       # Material UI 主题配置
│   └── vite-env.d.ts  # Vite 类型声明
├── assets/            # 静态资源
│   ├── css/           # 样式文件
│   ├── images/        # 图片资源
│   └── js/            # JavaScript 脚本
├── components/        # HTML 组件
│   ├── footer.html
│   └── header.html
├── public/            # 公共文件
│   ├── favicon.svg
│   └── icons.svg
├── index.html         # 入口 HTML 文件
├── package.json       # 项目依赖配置
├── vite.config.ts     # Vite 配置文件
├── tsconfig.json      # TypeScript 配置
└── README.md          # 项目说明文档
```

## 快速启动

### 环境要求

- Node.js 18+ 
- npm 9+

### 安装步骤

1. **克隆代码仓库**
   ```bash
   git clone https://github.com/ligyDt/vibe-ota-hotel-website-v1.git
   cd vibe-ota-hotel-website-v1
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问项目**
  
   服务启动后，在浏览器中访问：
   
   - **本地访问**：http://localhost:5173/
   - **局域网访问**：http://<你的IP地址>:5173/

   > 默认端口为 **5173**，如需修改可在 `vite.config.ts` 中配置

## 可用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（带热重载） |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |
| `npm run lint` | 运行 ESLint 代码检查 |

## 本地开发调试指南

### 热重载（HMR）
项目使用 Vite 开发服务器，修改代码后页面会自动刷新，无需手动重启。

### 端口配置
默认端口为 5173，如需更改：

**方式一：修改配置文件**（永久生效）
编辑 `vite.config.ts`：
```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // 修改为你需要的端口
    host: '0.0.0.0',
  },
})
```

**方式二：命令行参数**（临时生效）
```bash
npm run dev -- --port 3000
```

### 局域网访问
如需在手机或其他设备上预览，确保 `vite.config.ts` 中配置了 `host: '0.0.0.0'`，然后使用局域网 IP 访问。

### 调试注意事项
1. 项目同时包含静态 HTML 页面和 React 应用
2. 开发模式下，Vite 会自动处理 TypeScript 编译
3. 如遇端口冲突，会自动尝试下一个可用端口

## 构建部署

```bash
# 构建生产版本
npm run build

# 构建输出在 dist/ 目录
# 可将 dist/ 目录内容部署到任意静态服务器
```

## 贡献指南

欢迎 issue 提交和 PR！

1. Fork 本仓库
2. 新建分支进行修改
3. 提交 PR 描述变更内容

## License

MIT License

---

## 联系方式

- 作者：ligyDt
- 仓库地址：https://github.com/ligyDt/vibe-ota-hotel-website-v1
