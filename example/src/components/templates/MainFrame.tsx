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

const Aside = ({ menu, wideMenu }: { menu: MenuBuilder, wideMenu: boolean }) =>
<Sider
  style={{ background: '#242528' }}
  width={wideMenu ? 220 : 50}
  >
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

interface MainHeaderProps { toggleMenu: Function }
const MainHeader = ({ toggleMenu }: MainHeaderProps) => <Header style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.5)' }}>
  <Icons.Hamburger style={{ color: '#b9c2d0' }} width='1rem' onClick={() => toggleMenu()} />
  <Icons.Person style={{ color: '#b9c2d0' }} />
</Header>

const MainFrame = ({ children, menu }: MainFrameProps) => {
  const [wideMenu, setWideMenu] = useState(false);
  const toggleMenu = () => setWideMenu(!wideMenu);
  return <PlainLayout
    sider={<Aside wideMenu={!!wideMenu} menu={menu} />}
    header={<MainHeader toggleMenu={toggleMenu} />}
    style={{ flexDirection: 'column' }}
  >
    {children}
  </PlainLayout>
}

export default MainFrame;