/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Code } from "../atoms/Code";

const codeString = `<Layout style={{ height: '100vh'}}>
    <Content style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Hero>
        Bebop is a design system for Bid Ops.
      </Hero>
      <div style={{ flexFlow: 'row', alignSelf: 'center' }}>
        <Button.Primary>Get Started</Button.Primary>
        <Button.Ghost>Learn More</Button.Ghost>
      </div>
    </Content>
  </Layout>`;

export function userGuideContent() {
  return <>
    <p>
      Let's get started with Bebop!
    </p>

    <h4>🧘🏻‍♂️ What is a Design System?</h4>
    <p>
      A design system is a set of foundational components that can be used to create pages and content quickly and efficiently          The idea is to encapsulate the most common design patterns for user interactions.
      Ideally we want to <i>thoughtfully extend</i> AntD in the direction of our domain.
    </p>

    <h4>👍 Introducing Bebop Elements</h4>
    <p>
      The first layer to explore is bebop's atomic design elements, the set of base components.
      The idea behind these elements are to wrap around our design elements and present them in a uniform way.
      Essentially bebop acts as a flexible and lightweight wrapper around antd components... for the moment.
      First you need to import bebop:
    </p>
    <Code snippet="import bebop from 'bebop'" />

    <p>
      Then extract the components you want to use:
    </p>
    <Code snippet={`const {Layout, Content, Header, Sider, Hero, Button, Icons } = bebop;`} />

    <p>
      Use them to build something! A splash page might look like this:
    </p>
    <Code snippet={codeString} />

    <h4>Next Steps</h4>
    Let's build a more complex component with bebop...
    You could also look at our component catalog...

    <h4>Goals</h4>
    <p>
      We want to organize Bebop according to atomic design principles, with full-page templates and other large-scale components available.
      We want it to be easy to build entire pages and workflows...
    </p>
  </>;
}
