import React from 'react'
import bebop from 'bebop';
import { Affix } from 'antd';
import { PlainLayout } from './PlainLayout'
import Logo from '../atoms/Logo';
import { BasicProps } from 'antd/lib/layout/layout';

const { Sider, Header, Icons } = bebop;

interface MainFrameProps extends BasicProps {
  menu: React.ReactNode
  wideMenu?: boolean
}

const Aside = ({ menu, wideMenu }: { menu: React.ReactNode, wideMenu: boolean }) => <Sider>
  <Affix offsetTop={0}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      { !!wideMenu 
       ? <Logo.Wide /> 
       : <Logo.Narrow /> 
      }
      {menu}
    </div>
  </Affix>
</Sider>

const MainHeader = () => <Header style={{ padding: '2rem' }}>
  <Icons.Hamburger style={{ color: '#b9c2d0' }} width='1rem' />
  <Icons.Person style={{ color: '#b9c2d0' }} />
</Header>

const MainFrame = ({ children, menu, wideMenu }: MainFrameProps) => <PlainLayout
  sider={<Aside wideMenu={!!wideMenu} menu={menu} />}
  header={<MainHeader />}
  style={{ flexDirection: 'column' }}
>
  {children}
</PlainLayout>

export default MainFrame;