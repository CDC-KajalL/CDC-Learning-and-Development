import React from 'react'
import {ButtonType, ButtonSize} from './Btn_theme'

function Btn({ size, type, onClick, children }) {
  // const { children } = props
  const classNames = ButtonType[type] + " " + ButtonSize[size];
  return (
    <div>
      <button onClick = {onClick} className={classNames}>{children}</button>
    </div>
  )
}

export default Btn