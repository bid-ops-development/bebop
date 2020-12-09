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

type IconProps = AntdIconProps & React.RefAttributes<HTMLSpanElement>

const Icons = {
  Bell: (props: IconProps) => <BellOutlined {...props} />,
  Book: (props: IconProps) => <BookOutlined {...props} />,
  Coffee: (props: IconProps) => <CoffeeOutlined {...props} />,
  Dashboard: (props: IconProps) => <DashboardOutlined {...props} />,
  Hamburger: (props: IconProps) => <MenuOutlined {...props} />,
  Inbox: (props: IconProps) => <InboxOutlined {...props} />,
  Mail: (props: IconProps) => <MailOutlined {...props} />,
  Message: (props: IconProps) => <MessageOutlined {...props} />,
  More: (props: IconProps) => <MoreOutlined {...props} />,
  Person: (props: IconProps) => <UserOutlined {...props} />,
  Rocket: (props: IconProps) => <RocketOutlined {...props} />,
  Smile: (props: IconProps) => <SmileOutlined {...props} />,
  Tool: (props: IconProps) => <ToolOutlined {...props} />,
  Trophy: (props: IconProps) => <TrophyOutlined {...props} />
}

export { Icons }
