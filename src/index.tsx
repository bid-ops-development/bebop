/* eslint-disable no-unused-vars */
import React from 'react'
import { Menu as AntMenu, Table as AntTable, Layout, Card } from 'antd'
import styles from './styles.module.css'
import layout from './layout.module.css'

import './typography.css' // load fonts

import { BasicProps } from 'antd/lib/layout/layout'
import { TableProps } from 'antd/lib/table'
import { CardProps } from 'antd/lib/card'
import { MenuProps } from 'antd/lib/menu'
import { MenuItemProps } from 'antd/lib/menu/MenuItem'
import { SiderProps } from 'antd/lib/layout'

import { CommonProps } from './types'

import { Buttons } from './components/atoms/buttons'
import { Icons } from './components/atoms/icons'

function Table<T extends object>(props: TableProps<T>) {
  return <AntTable<T> {...props} />
}

const Bebop = {
  Button: Buttons,
  Card: (props: CardProps) => <Card className={layout.card} {...props} />,
  Content: (props: BasicProps) => (
    <Layout.Content className={layout.content} {...props} />
  ),
  Footer: (props: BasicProps) => (
    <Layout.Footer className={layout.footer} {...props} />
  ),
  Header: (props: BasicProps) => (
    <Layout.Header className={layout.header} {...props} />
  ),
  Hero: (props: CommonProps) => <div className={styles.hero} {...props} />,
  Icons,
  Layout: (props: BasicProps) => (
    <Layout className={layout.simple} {...props} />
  ),
  Menu: (props: MenuProps) => <AntMenu className={layout.menu} {...props} />,
  MenuItem: (props: MenuItemProps) => (
    <AntMenu.Item className={layout['menu-item']} {...props} />
  ),
  Sider: (props: SiderProps) => (
    <Layout.Sider width={64} className={layout.sider} {...props} />
  ),
  Table
}

export default Bebop
