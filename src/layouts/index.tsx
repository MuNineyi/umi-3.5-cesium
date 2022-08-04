import React from 'react';
import { Link } from 'umi';
import {Layout, Menu} from 'antd';
import styles from './index.less';

const {Header, Content, Footer} = Layout;
const menuItems = [
  { name: '英雄', key: '1', route: 'hero'},
  { name: '局内道具', key: '2', route: 'item'},
  { name: '召唤师技能', key: '3', route: 'summoner'}
]

function BasicLayout(props: any) {
    const {
      location: { pathname },
      children,
    } = props;
    return (
        <Layout>
            <Header>
                <div className={styles.logo}>王者荣耀资料库</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[pathname]}
                    style={{ lineHeight: '64px'}}
                >
                  {menuItems.map(menu => (
                    <Menu.Item key={`/${menu.route}`}>
                      <Link to={menu.route}>{menu.name}</Link>
                    </Menu.Item>
                  ))}
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                  {children}
                </div>
            </Content>
            <Footer className={styles.footer}>测试</Footer>
        </Layout>

    );
}
export default BasicLayout;
