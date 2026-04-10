# 防伪外贸独立站 - 快速使用指南

## 🎯 项目概述

这是一个专业的防伪外贸独立站前端项目,已完整实现以下功能:

✅ **多语言支持** (中文/英文)  
✅ **首页** - 品牌展示  
✅ **防伪查询** - 核心功能  
✅ **产品展示** - 产品列表和详情  
✅ **联系我们** - 在线留言  
✅ **响应式设计** - 适配所有设备  

## 🚀 立即开始

### 1. 启动开发服务器

```bash
npm run dev
```

服务器将在 http://localhost:3000 启动

### 2. 访问网站

- **中文**: http://localhost:3000/zh
- **英文**: http://localhost:3000/en

### 3. 浏览页面

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/zh` 或 `/en` | 品牌介绍和特色 |
| 防伪查询 | `/zh/verify` 或 `/en/verify` | 输入防伪码验证 |
| 产品列表 | `/zh/products` 或 `/en/products` | 查看所有产品 |
| 产品详情 | `/zh/products/1` 或 `/en/products/1` | 查看产品详细信息 |
| 联系我们 | `/zh/contact` 或 `/en/contact` | 在线留言 |

## 📋 核心功能演示

### 防伪查询功能

1. 进入防伪查询页面
2. 输入任意防伪码(例如: `ABC123456789`)
3. 点击"验证"按钮
4. 查看验证结果

> **注意**: 当前使用模拟数据,实际使用时需要连接 SpringBoot 后端

### 语言切换

1. 点击右上角的语言按钮(ZH/EN)
2. 选择目标语言
3. 页面自动刷新并切换语言

### 浏览产品

1. 进入产品中心
2. 查看产品卡片
3. 点击"查看详情"查看完整信息

## 🔧 配置后端 API

### 1. 创建环境变量文件

在项目根目录创建 `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

将 `http://localhost:8080` 替换为你的 SpringBoot 后端地址。

### 2. 后端 API 要求

确保你的 SpringBoot 后端提供以下接口:

#### 防伪验证
```
POST /api/anti-counterfeit/verify
Body: { "code": "ABC123456789" }
Response: {
  "code": 200,
  "message": "success",
  "data": {
    "isValid": true,
    "productName": "防伪标签 A型",
    "verifyTime": "2026-04-10 12:00:00",
    "message": "验证成功",
    "messageEn": "Verification Successful"
  }
}
```

#### 产品列表
```
GET /api/products
Response: {
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": "1",
      "name": "防伪标签 A型",
      "nameEn": "Anti-counterfeiting Label Type A",
      "description": "...",
      "descriptionEn": "...",
      "image": "/products/label-a.jpg",
      "category": "labels",
      "features": ["全息图案", "二维码", "唯一编码"],
      "featuresEn": ["Holographic pattern", "QR code", "Unique code"]
    }
  ]
}
```

#### 产品详情
```
GET /api/products/{id}
Response: {
  "code": 200,
  "message": "success",
  "data": {
    "id": "1",
    "name": "防伪标签 A型",
    "nameEn": "...",
    "description": "...",
    "descriptionEn": "...",
    "image": "...",
    "category": "labels",
    "price": 0.5,
    "features": ["..."],
    "featuresEn": ["..."]
  }
}
```

## 🎨 自定义内容

### 修改公司信息

编辑以下文件:

1. **Header 组件** (`components/Header.tsx`)
   - Logo
   - 公司名称

2. **Footer 组件** (`components/Footer.tsx`)
   - 公司地址
   - 邮箱
   - 电话
   - 社交媒体链接

3. **翻译文件** (`locales/zh.ts` 和 `locales/en.ts`)
   - 所有文本内容

### 添加真实产品图片

1. 将图片放入 `public/products/` 目录
2. 更新产品数据中的 `image` 字段

例如:
```typescript
image: '/products/your-product.jpg'
```

## 📱 移动端适配

网站已完全适配移动端:

- ✅ 响应式导航菜单
- ✅ 触摸友好的按钮
- ✅ 优化的字体大小
- ✅ 自适应布局

在浏览器中使用开发者工具的移动设备模式测试。

## 🌐 部署到生产环境

### 方案一: Vercel (最简单)

```bash
npm install -g vercel
vercel
```

按照提示操作即可。

### 方案二: Docker

```bash
docker build -t antifake-web .
docker run -p 3000:3000 antifake-web
```

### 方案三: 传统服务器

```bash
npm run build
npm start
```

使用 Nginx 反向代理到 3000 端口。

## ⚠️ 重要提示

1. **生产环境前必须**:
   - 配置正确的后端 API 地址
   - 启用 HTTPS
   - 设置环境变量
   - 移除所有模拟数据

2. **SEO 优化**:
   - 已配置基本的 meta 标签
   - 建议添加 sitemap.xml
   - 建议添加 Google Analytics

3. **性能优化**:
   - Next.js 自动进行代码分割
   - 图片建议使用 next/image 组件
   - 启用 gzip 压缩

## 🐛 常见问题

### Q: 页面显示空白?
A: 检查浏览器控制台是否有错误,确保开发服务器正常运行。

### Q: 语言切换不生效?
A: 清除浏览器缓存和 Cookie,然后重试。

### Q: API 请求失败?
A: 检查 `.env.local` 中的 API 地址是否正确,确保后端服务正在运行。

### Q: 样式显示异常?
A: 确保 Tailwind CSS 正确安装,尝试重启开发服务器。

## 📞 技术支持

如有问题,请查看:
- [Next.js 官方文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- 项目 README: `PROJECT_README.md`

---

**祝你使用愉快!** 🎉
