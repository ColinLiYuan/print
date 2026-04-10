# 防伪外贸独立站 - 前端项目

这是一个基于 Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 构建的防伪外贸独立站前端项目。

## 功能特性

### ✅ 已实现功能

1. **多语言支持** (中文/英文)
   - 自动语言检测
   - 一键切换语言
   - URL 语言前缀 (/zh, /en)

2. **首页** (`/zh` 或 `/en`)
   - 品牌介绍和 Hero Section
   - 核心优势展示(安全可靠、品质保证、全球服务)
   - CTA 行动号召

3. **防伪查询页面** (`/zh/verify` 或 `/en/verify`)
   - 防伪码输入验证
   - 实时验证结果展示
   - 产品信息显示
   - 友好的用户提示

4. **产品展示页面** (`/zh/products` 或 `/en/products`)
   - 产品列表网格展示
   - 产品卡片(图片、名称、描述、特点)
   - 点击查看详情

5. **产品详情页面** (`/zh/products/[id]` 或 `/en/products/[id]`)
   - 详细产品信息
   - 产品特点列表
   - 面包屑导航
   - 快速操作按钮

6. **联系我们页面** (`/zh/contact` 或 `/en/contact`)
   - 联系信息展示
   - 在线留言表单
   - 营业时间说明

7. **响应式设计**
   - 移动端友好
   - 桌面端优化
   - 自适应布局

8. **组件化架构**
   - Header 导航栏(含语言切换)
   - Footer 页脚(含联系信息和社交媒体)
   - 可复用 UI 组件

## 技术栈

- **框架**: Next.js 16.2.3
- **UI 库**: React 19.2.4
- **样式**: Tailwind CSS 4
- **语言**: TypeScript 5
- **HTTP 客户端**: Axios
- **国际化**: 自定义 i18n 方案

## 项目结构

```
print-web/
├── app/                      # Next.js App Router
│   ├── [locale]/            # 国际化路由
│   │   ├── layout.tsx       # 语言布局(包含 Header 和 Footer)
│   │   ├── page.tsx         # 首页
│   │   ├── verify/          # 防伪查询页面
│   │   ├── products/        # 产品页面
│   │   │   ├── page.tsx     # 产品列表
│   │   │   └── [id]/        # 产品详情
│   │   └── contact/         # 联系我们
│   ├── layout.tsx           # 根布局
│   └── globals.css          # 全局样式
├── components/              # React 组件
│   ├── Header.tsx          # 导航栏组件
│   └── Footer.tsx          # 页脚组件
├── lib/                     # 工具库
│   ├── api-config.ts       # API 配置
│   ├── api-client.ts       # Axios 实例
│   └── i18n.ts             # 国际化配置
├── locales/                 # 多语言文件
│   ├── zh.ts               # 中文翻译
│   └── en.ts               # 英文翻译
├── services/                # API 服务层
│   └── index.ts            # 服务方法
├── types/                   # TypeScript 类型定义
│   └── index.ts            # 类型声明
├── middleware.ts            # 中间件(语言路由)
└── package.json
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

访问 http://localhost:3000，会自动重定向到 http://localhost:3000/zh

### 生产环境构建

```bash
npm run build
npm start
```

## 后端 API 对接

项目已配置好与 SpringBoot 后端的接口对接:

### API 配置

在 `lib/api-config.ts` 中配置后端地址:

```typescript
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';
```

可以通过环境变量设置:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://your-backend-server.com/api
```

### 主要 API 端点

1. **防伪验证**: `POST /api/anti-counterfeit/verify`
2. **产品列表**: `GET /api/products`
3. **产品详情**: `GET /api/products/:id`
4. **联系表单**: `POST /api/contact`

### 模拟数据

当前项目使用模拟数据进行演示,实际使用时需要:

1. 启动 SpringBoot 后端服务
2. 配置正确的 API 地址
3. 取消注释服务层的真实 API 调用代码

## 主要功能说明

### 1. 防伪查询流程

```
用户输入防伪码 → 调用后端 API → 显示验证结果
                                ↓
                    有效: 显示产品信息 ✓
                    无效: 显示错误提示 ✗
```

### 2. 多语言切换

- 通过中间件自动检测并重定向
- 用户可手动切换语言
- 语言偏好保存在 Cookie 中

### 3. 响应式设计

- 移动端: 单列布局,汉堡菜单
- 平板端: 双列布局
- 桌面端: 三列布局,完整导航

## 自定义配置

### 修改品牌信息

编辑 `components/Header.tsx` 和 `components/Footer.tsx`:
- Logo
- 公司名称
- 联系信息
- 社交媒体链接

### 添加新产品

编辑 `app/[locale]/products/page.tsx` 中的模拟数据,或连接后端 API。

### 修改翻译

编辑 `locales/zh.ts` 和 `locales/en.ts` 文件。

## 部署建议

### Vercel (推荐)

```bash
npm install -g vercel
vercel
```

### Docker

创建 `Dockerfile`:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Nginx

构建后将 `.next` 和 `public` 目录部署到服务器。

## 注意事项

1. **环境变量**: 生产环境务必配置 `NEXT_PUBLIC_API_URL`
2. **SEO 优化**: 已在 `layout.tsx` 中配置 meta 标签
3. **性能优化**: Next.js 自动进行代码分割和优化
4. **安全性**: 生产环境启用 HTTPS,CSP 等安全头

## 后续优化建议

1. 添加用户认证系统
2. 实现产品搜索和筛选
3. 添加购物车功能
4. 集成支付网关
5. 添加订单管理
6. 实现后台管理系统
7. 添加数据分析(Google Analytics)
8. SEO 优化(sitemap, robots.txt)
9. PWA 支持
10. 性能监控

## 许可证

MIT License

## 联系方式

- Email: info@antifakepro.com
- Phone: +86 755 1234 5678
- Address: Shenzhen, Guangdong, China

---

**注意**: 这是一个演示项目,实际部署前请根据业务需求进行调整和完善。
