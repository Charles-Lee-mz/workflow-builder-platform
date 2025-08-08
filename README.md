# 结构化工作流构建平台

一个基于React和Flask的现代化结构化工作流构建平台，支持可视化节点编辑、自然语言工作流生成和实时执行监控。

## 🎯 项目概述

本项目是一个全栈工作流管理系统，结合了前端可视化编辑器和后端智能处理引擎，为用户提供直观、高效的工作流设计和执行体验。

## 🚀 功能特性

### 核心功能
- **意图识别引擎**: 基于大模型的中文自然语言意图识别
- **可视化工作流设计**: 拖拽式工作流编辑器
- **自动化执行**: 支持多种节点类型的工作流执行
- **用户管理**: JWT认证和用户权限管理
- **模型配置**: 支持多种AI模型提供商

### 支持的节点类型
- 开始/结束节点
- 任务节点
- 条件判断节点
- 查询订单节点
- 转人工服务节点
- 加入群聊节点
- 获取兑换码节点
- 升级服务节点

### 支持的AI模型
- 通义千问 (Qwen)
- DeepSeek
- 豆包 (Doubao)
- OpenAI GPT

## 🏗️ 技术架构

### 后端技术栈
- **框架**: Flask + SQLAlchemy
- **数据库**: MySQL / SQLite
- **缓存**: Redis
- **任务队列**: Celery
- **WebSocket**: Flask-SocketIO
- **API文档**: Swagger

### 前端技术栈
- **框架**: React 18 + TypeScript
- **状态管理**: Zustand
- **可视化**: React Flow
- **UI组件**: Ant Design
- **构建工具**: Vite
- **代码规范**: ESLint + Prettier

## 📋 系统要求

- Python 3.8+
- Node.js 16+
- MySQL 5.7+ 或 SQLite
- Redis (可选，用于缓存)

## 🛠️ 安装部署

### 1. 克隆项目
```bash
git clone https://github.com/Charles-Lee-mz/workflow-builder-platform.git
cd workflow-builder-platform
```

### 2. 创建虚拟环境
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

### 3. 安装依赖
```bash
# 后端依赖
pip install -r requirements.txt

# 前端依赖
cd frontend
npm install
```

### 4. 配置数据库
```bash
# 初始化数据库
python init_db.py

# 运行数据库迁移
flask db upgrade
```

### 5. 启动服务
```bash
# 启动后端服务
python run.py

# 启动前端服务（新终端）
cd frontend
npm start
```

访问 http://localhost:3000 查看应用

## 📊 API文档

启动后端服务后，访问 http://localhost:5000/api/docs 查看完整的API文档

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

如有问题或建议，请提交 Issue 或联系项目维护者。