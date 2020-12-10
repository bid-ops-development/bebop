import React, { useState } from 'react'
import bebop from 'bebop';
import { Affix } from 'antd';
import { PlainLayout } from './PlainLayout'
import Logo from '../atoms/Logo';
import { BasicProps } from 'antd/lib/layout/layout';

const { Sider, Header, Icons } = bebop;
type MenuBuilder = ({ wideMenu }: { wideMenu: boolean }) => React.ReactNode
interface MainFrameProps extends BasicProps {
  menu: MenuBuilder
  // wideMenu?: boolean
}

const Aside = ({ menu, wideMenu }: { menu: MenuBuilder, wideMenu: boolean }) => <Sider width={wideMenu ? 220 : 50}>
  <Affix offsetTop={0}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
      { !!wideMenu 
       ? <Logo.Wide /> 
       : <Logo.Narrow /> 
      }
      {menu({ wideMenu })}
    </div>
  </Affix>
</Sider>

interface MainHeaderProps { setWideMenu: Function }
const MainHeader = ({ setWideMenu }: MainHeaderProps) => <Header style={{ padding: '2rem' }}>
  <Icons.Hamburger style={{ color: '#b9c2d0' }} width='1rem' onClick={() => setWideMenu()} />
  <Icons.Person style={{ color: '#b9c2d0' }} />
</Header>

const MainFrame = ({ children, menu }: MainFrameProps) => {
  const [wideMenu, setWideMenu] = useState(false);
  return <PlainLayout
    sider={<Aside wideMenu={!!wideMenu} menu={menu} />}
    header={<MainHeader setWideMenu={()=>setWideMenu(!wideMenu)} />}
    style={{ flexDirection: 'column' }}
  >
    {children}
  </PlainLayout>
}

export default MainFrame;