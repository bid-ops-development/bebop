/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Bebop from 'bebop';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { Jumbotron } from '../templates/Jumbotron';
import MainFrame from '../templates/MainFrame';

const { Layout, Card, Button } = Bebop;

export function Welcome() {
  return <Layout>
    <Jumbotron style={{ background: 'radial-gradient(#eee, #c9e4eb)' }}>
      <h3>
        Bebop<span style={{ color: 'darkturquoise' }}>.</span>
      </h3>
      <p style={{ fontSize: '12pt', fontWeight: 'lighter' }}>
        A design system for Bid Ops products.
        Empower an efficient development experience.
        ⚡
      </p>
      <div style={{ flexFlow: 'row' }}>
        <Link to='/user-guide'>
          <Button.Primary>Get Started</Button.Primary>
        </Link>
        <Button.Ghost>Learn More</Button.Ghost>
      </div>
    </Jumbotron>
    <Card style={{ margin: '1rem' }}>
      <Row gutter={18} style={{ justifyContent: 'space-around' }}>
        <Col span={6}>
          <Card type='inner'>
            <h1>Build on Solid Foundations</h1>
            <p>Well-tested components provide a uniform and flexible framework for large-scale production applications.</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h1>Accelerate Development Workflow</h1>
            <p>Rapidly construct new pages and workflows with Bebop.</p>
            <p>Fit-for-purpose components support fast iteration speed and accelerate the development of new interactions.</p>

          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <h1>Simplify Application Code</h1>
            <p>By helping to factor out presentational concerns, Bebop lets you focus on building business logic and testing.</p>
          </Card>
        </Col>
      </Row >
      <br />
      <Card>
        <h1>Build Interactions Quickly</h1>
        <p>
          You can use Bebop to rapidly construct new pages and workflows.
        </p>

        <Card type='inner' title='Empty Application Frame'>
          <MainFrame menu={<></>}>
            <Card>Content goes here</Card>
          </MainFrame>
        </Card>
      </Card>
    </Card >
  </Layout >
}
