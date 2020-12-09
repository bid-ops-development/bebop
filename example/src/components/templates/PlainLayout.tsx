import React from 'react';
import bebop from 'bebop';
import { BasicProps } from 'antd/lib/layout/layout';
import { Affix } from 'antd';
const { Layout, Content } = bebop;

type PageTemplateProps = {
  sider?: React.ReactNode,
  header?: React.ReactNode,
  children: React.ReactNode
}

export function PlainLayout(props: BasicProps & PageTemplateProps) {
  const {
    sider,
    header,
    children
  } = props;
  return <Layout>
    {sider && sider}
    <Layout>
      <Affix offsetTop={0}>{header && header}</Affix>
      <Content {...props}>
        {children}
      </Content>
    </Layout>
  </Layout>;
}
