/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import bebop from 'bebop'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import pkg from '../../../package.json'
import MainFrame from '../templates/MainFrame';
import { userGuideContent } from './userGuideContent';
const { Icons, Card, Button, Menu, MenuItem } = bebop;

function MainMenu() {
  return <Menu theme='dark' style={{background: '#151b1e'}}>
    <MenuItem>
      <Icons.Trophy />
      {/* Getting Started */}
    </MenuItem>
    <MenuItem>
      <Icons.Rocket />
      {/* Component Catalog */}
    </MenuItem>
  </Menu>
}

const content = userGuideContent();
export function UserGuide() {
  let match = useRouteMatch();

  return <MainFrame menu={<MainMenu />}>
    <Switch>
      <Route path={match.path}>
        <Card title='Bebop User Guide' size='small'>
          <small style={{ color: 'gray' }}>
            This document contains the Bebop v{pkg.version} User Manual.
       </small>
        </Card>
        <br />
        <Card title='First Steps'>
          {content}
          <Link to='/'>
            <Button.Ghost>Head on Home</Button.Ghost>
          </Link>
        </Card>
      </Route>
    </Switch>
  </MainFrame>
}