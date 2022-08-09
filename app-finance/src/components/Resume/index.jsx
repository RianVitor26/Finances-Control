import React from 'react'
import * as C from './styles'
import ResumeItem from '../ResumeItem'

const Resume = ({ income, expense, total }) => {
  return (
      <>
        <C.Container>
            <ResumeItem title="Entradas" value={income}  />
            <ResumeItem title="Saída" value={expense} />
            <ResumeItem title="Total" value={total} />
        </C.Container>
      </>
  )
}

export default Resume