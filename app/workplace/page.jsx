"use client"

import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import Benefit from './components/Benefit'
import Recommendation from './components/Recommendation'
import ChargeImg from './components/ChargeImg'
import FormWrapper from '../../components/FormWrapper'


// const Form = dynamic(() => import('./components/Form'), { ssr: false });

const WorkPlace = () => {
  return (
    <Box>
      <Hero />
      <Benefit />
      <Recommendation />
      <FormWrapper />
      <ChargeImg />
    </Box>
  )
}

export default WorkPlace
