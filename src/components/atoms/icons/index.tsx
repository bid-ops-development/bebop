import React from 'react'
import {
  UserOutlined,
  MenuOutlined,
  DashboardOutlined,
  CoffeeOutlined,
  InboxOutlined,
  MessageOutlined,
  BookOutlined,
  BellOutlined,
  RocketOutlined,
  TrophyOutlined,
  ToolOutlined,
  SmileOutlined,
  MailOutlined,
  MoreOutlined
} from '@ant-design/icons'
// eslint-disable-next-line no-unused-vars
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon'
import styles from './icons.module.css'

type IconProps = AntdIconProps & React.RefAttributes<HTMLSpanElement>

const addClass = (props: IconProps) => {
  const className = `${props.className} ${styles.icon}`
  return { ...props, className }
}

const Icons = {
  Bell: (props: IconProps) => <BellOutlined {...addClass(props)} />,
  Book: (props: IconProps) => <BookOutlined {...addClass(props)} />,
  Coffee: (props: IconProps) => <CoffeeOutlined {...addClass(props)} />,
  Dashboard: (props: IconProps) => <DashboardOutlined {...addClass(props)} />,
  Hamburger: (props: IconProps) => <MenuOutlined {...addClass(props)} />,
  Inbox: (props: IconProps) => <InboxOutlined {...addClass(props)} />,
  Mail: (props: IconProps) => <MailOutlined {...addClass(props)} />,
  Message: (props: IconProps) => <MessageOutlined {...addClass(props)} />,
  More: (props: IconProps) => <MoreOutlined {...props} />,
  Person: (props: IconProps) => <UserOutlined {...props} />,
  Rocket: (props: IconProps) => <RocketOutlined {...props} />,
  Smile: (props: IconProps) => <SmileOutlined {...props} />,
  Tool: (props: IconProps) => <ToolOutlined {...props} />,
  Trophy: (props: IconProps) => <TrophyOutlined {...props} />
}

export { Icons }
