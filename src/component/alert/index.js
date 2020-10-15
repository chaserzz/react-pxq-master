import React from 'react'

import { AlertWrapper , AlertBox , AlertContent , ConfirmDiv } from './style'

const Alert = (props) => {
  const { showAlert , alertContent , closeAlert} = props
  return (
      <AlertWrapper className={showAlert ? '' : 'hidden'}  height={window.innerHeight + 'px'}>
        <AlertBox>
          <AlertContent>{alertContent}</AlertContent>
          <ConfirmDiv onClick={closeAlert} />
        </AlertBox>
      </AlertWrapper>
  )
}

export default Alert