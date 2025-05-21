import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import UserInterface from './components/UserInterface'
// import Integration from './components/Integration'
// import Developers from './components/Developers'
import GetStarted from './components/GetStarted'
// import { Helmet } from 'react-helmet-async'

const EnterpriseSofware = () => {
  return (
    <Box>
      {/* <Helmet>
              <title>Enterprise Software | Vine Mobility</title>
              <meta
                name="Enterprise Software"
                content="Vine Mobility is transforming urban transport with smart solutions."
              />
            </Helmet> */}
      <Hero />
      <HowItWorks />
      <Features />
      <UserInterface />
      {/* <Integration />
      <Developers /> */}
      <GetStarted />
    </Box>
  )
}

export default EnterpriseSofware
