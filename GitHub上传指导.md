# GitHub 上传指导

## 方法一：通过网页界面上传（推荐新手）

### 1. 创建 GitHub 仓库
1. 登录 GitHub (https://github.com)
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - Repository name: `structured-workflow-builder`
   - Description: `基于React和Flask的智能工作流构建平台`
   - 选择 Public 或 Private
   - 勾选 "Add a README file"
   - 选择 License: MIT
4. 点击 "Create repository"

### 2. 上传文件
1. 在仓库页面点击 "uploading an existing file"
2. 将项目文件夹中的所有文件拖拽到上传区域
3. 或者点击 "choose your files" 选择文件
4. 填写提交信息："Initial commit"
5. 点击 "Commit changes"

## 方法二：通过命令行上传（推荐有经验用户）

### 1. 安装 Git
- Windows: 下载 Git for Windows (https://git-scm.com/download/win)
- 安装完成后重启命令行

### 2. 配置 Git（首次使用）
```bash
git config --global user.name "你的用户名"
git config --global user.email "你的邮箱"
```

### 3. 初始化并上传项目
```bash
# 进入项目目录
cd "F:\M+\AI项目\结构化流程构建"

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: 结构化工作流构建平台"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/structured-workflow-builder.git

# 推送到 GitHub
git push -u origin main
```

## 项目结构说明

```
结构化流程构建/
├── README.md                 # 项目说明文档
├── requirements.txt          # Python依赖
├── config.py                # 配置文件
├── run.py                   # 启动脚本
├── .gitignore              # Git忽略文件
├── LICENSE                 # 开源协议
├── app/                    # 后端应用
│   ├── __init__.py
│   ├── models/            # 数据模型
│   ├── api/              # API路由
│   ├── services/         # 业务逻辑
│   └── utils/            # 工具函数
├── frontend/              # 前端应用
│   ├── package.json      # 前端依赖
│   ├── public/           # 静态资源
│   └── src/             # 源代码
│       ├── components/   # React组件
│       ├── stores/      # 状态管理
│       ├── services/    # API服务
│       └── utils/       # 工具函数
└── docs/                 # 文档
```

## 后续操作

### 1. 设置仓库描述和标签
- 在 GitHub 仓库页面点击设置图标
- 添加描述："基于React和Flask的智能工作流构建平台"
- 添加标签：`react`, `flask`, `workflow`, `typescript`, `python`

### 2. 创建分支保护规则（可选）
- 进入 Settings > Branches
- 添加规则保护 main 分支
- 要求 Pull Request 审查

### 3. 设置 GitHub Pages（可选）
- 进入 Settings > Pages
- 选择源分支为 main
- 选择文件夹为 /docs 或 root

## 注意事项

### 安全提醒
- ✅ 已移除敏感信息（API密钥等）
- ✅ 已添加 .gitignore 文件
- ✅ 配置文件使用环境变量

### 文件大小限制
- GitHub 单个文件限制：100MB
- 仓库总大小建议：< 1GB
- 如有大文件，考虑使用 Git LFS

## 常见问题

### Q: 上传失败怎么办？
A: 检查网络连接，确保文件大小符合限制，重试上传

### Q: 如何更新代码？
A: 使用 `git add .` -> `git commit -m "更新说明"` -> `git push`

### Q: 如何邀请协作者？
A: 进入仓库 Settings > Manage access > Invite a collaborator

### Q: 如何创建发布版本？
A: 进入仓库 Releases > Create a new release

---

📝 **提示**: 首次上传建议使用网页界面，熟悉后可使用命令行提高效率。