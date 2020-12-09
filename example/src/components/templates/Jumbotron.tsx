import React from 'react';
import bebop from 'bebop';

const { Content, Hero } = bebop;

interface JumbotronProps extends React.HTMLAttributes<HTMLDivElement> {
  // message?: string
  // callToAction?: React.ReactNode
  children?: React.ReactNode
}

export function Jumbotron(props: JumbotronProps) {
  return <Content {...props} style={{ ...props.style, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <Hero style={{ padding: '3em' }}>
      {props.children}
    </Hero>
  </Content>
}