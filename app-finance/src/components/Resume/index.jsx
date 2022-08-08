import React from 'react'
import * as C from './styles'
import ResumeItem from '../ResumeItem'
// import {
//   FaRegArrowAltCircleUp,
//   FaRegArrowAltCircleDown,
//   FaDollarSign,
// } from 'react-icon/fa'
const Resume = () => {
  return (
      <>
        <C.Container>
            <ResumeItem title="Entradas" value="1000"/>
            <ResumeItem title="Saída" value="1000"/>
            <ResumeItem title="Total" value="1000"/>
        </C.Container>
      </>
  )
}

export default Resume