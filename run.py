#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
应用启动脚本
用于启动Flask应用服务器
"""

import os
import sys
from flask import Flask
from flask_migrate import upgrade

# 添加项目根目录到Python路径
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app import create_app, db
from config import Config

def create_tables():
    """创建数据库表"""
    try:
        db.create_all()
        print("✓ 数据库表创建/更新完成")
    except Exception as e:
        print(f"✗ 数据库表创建失败: {e}")

def main():
    """主函数"""
    # 创建Flask应用
    app = create_app()
    
    # 获取配置
    host = os.getenv('FLASK_HOST', '127.0.0.1')
    port = int(os.getenv('FLASK_PORT', 5000))
    debug = os.getenv('FLASK_DEBUG', 'True').lower() == 'true'
    
    print("="*50)
    print("🚀 结构化流程构建系统")
    print("="*50)
    print(f"📍 服务地址: http://{host}:{port}")
    print(f"🔧 调试模式: {'开启' if debug else '关闭'}")
    print(f"💾 数据库: {app.config.get('SQLALCHEMY_DATABASE_URI', 'SQLite')}")
    print("="*50)
    
    # 在应用上下文中创建表
    with app.app_context():
        create_tables()
    
    print("\n🎯 可用的API端点:")
    print("  - GET  /              - 系统信息")
    print("  - GET  /health        - 健康检查")
    print("  - POST /init          - 初始化数据")
    print("  - GET  /demo          - 演示页面")
    print("  - POST /api/auth/login - 用户登录")
    print("  - GET  /api/intent/list - 意图列表")
    print("  - POST /api/intent/detect - 意图检测")
    print("  - GET  /api/workflow/list - 工作流列表")
    print("  - POST /api/workflow/{id}/execute - 执行工作流")
    print("\n💡 提示:")
    print("  - 访问 /demo 查看演示页面")
    print("  - 访问 /init 初始化系统数据")
    print("  - 使用 Ctrl+C 停止服务")
    print("\n🔄 启动中...\n")
    
    try:
        # 启动Flask开发服务器
        app.run(
            host=host,
            port=port,
            debug=debug,
            threaded=True,
            use_reloader=debug
        )
    except KeyboardInterrupt:
        print("\n\n👋 服务已停止")
    except Exception as e:
        print(f"\n\n❌ 启动失败: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()