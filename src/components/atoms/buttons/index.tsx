/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import { CommonProps } from '../../../types'

import button from './button.module.css'

const Buttons = {
  Primary: (props: CommonProps & ButtonProps) => (
    <Button
      shape='round'
      type='primary'
      className={button.primary}
      {...props}
    />
  ),
  Ghost: (props: CommonProps & ButtonProps) => (
    <Button shape='round' type='ghost' className={button.ghost} {...props} />
  )
}

export { Buttons }
