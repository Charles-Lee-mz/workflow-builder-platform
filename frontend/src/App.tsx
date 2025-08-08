import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MessageOutlined, ApiOutlined, PartitionOutlined } from '@ant-design/icons';
import WorkflowPanel from './components/WorkflowPanel';
import ChatPanel from './components/ChatPanel';
import ModelConfig from './components/ModelConfig';
import InspectionPanel from './components/InspectionPanel';
import WorkflowEditor from './components/WorkflowEditor';
import './App.css';

const { Header, Content, Sider } = Layout;

function App() {
  const [workflowResult, setWorkflowResult] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState('chat');

  const handleWorkflowResult = (result: any) => {
    setWorkflowResult(result);
  };

  const menuItems = [
    {
      key: 'chat',
      icon: <MessageOutlined />,
      label: '对话测试',
    },
    {
      key: 'models',
      icon: <ApiOutlined />,
      label: '模型配置',
    },
    {
      key: 'workflow',
      icon: <PartitionOutlined />,
      label: '工作流',
    },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'models':
        return <ModelConfig />;
      case 'workflow':
        return <div style={{ height: '100%' }}><WorkflowEditor /></div>;
      case 'chat':
      default:
        return (
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ width: '30%', borderRight: '1px solid #f0f0f0' }}>
              <ChatPanel onWorkflowResult={handleWorkflowResult} />
            </div>
            <div style={{ width: '70%', display: 'flex' }}>
              <div style={{ width: '60%', borderRight: '1px solid #f0f0f0' }}>
                <WorkflowPanel workflowResult={workflowResult} />
              </div>
              <div style={{ width: '40%' }}>
                <InspectionPanel workflowResult={workflowResult} />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        中文自然语言工作流匹配系统
      </Header>
      <Layout style={{ height: 'calc(100vh - 64px)' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[currentPage]}
            style={{ height: '100%', borderRight: 0 }}
            items={menuItems}
            onClick={({ key }) => setCurrentPage(key)}
          />
        </Sider>
        <Content style={{ padding: '0', background: '#fff', height: '100%', overflow: 'hidden' }}>
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;