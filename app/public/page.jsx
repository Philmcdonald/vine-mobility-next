import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import Benefit from './components/Benefit'
import Form from './components/Form'
import Recommendation from './components/Recommendation'

const Index = () => {
  return (
    <Box>
      <Hero />
      <Benefit />
      <Recommendation />
      <Form />
    </Box>
  )
}

export default Index
