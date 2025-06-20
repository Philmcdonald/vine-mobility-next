"use client"

import { Box, Text } from '@chakra-ui/react'
// import Navigation from '../../components/Nav'
import MainHeading from '../../components/MainHeader'
import Wrapper from '../../components/Wrapper'
import { Cookie, Driver, Privacy, Site } from './term'
// import { Helmet } from 'react-helmet-async'

const Index = () => {
  return (
    <Box>
      {/* <Helmet>
              <title>Privacy Policy | Vine Mobility</title>
              <mgea
                name="Our Privacy Policy"
                content="Vine Mobility is transforming urban transport with smart solutions."
              />
            </Helmet> */}

            <Box bg={'#f7f7f7'} h={'fit-content'}>
      <Wrapper py={'20px'}>
        <Box>
          <Text
            fontSize={'35px'}
            fontWeight={'semibold'}
            color={'#8fc03f'}
            textAlign={'center'}
          >
            Terms & policies
          </Text>
          <MainHeading
            fontWeight={'semibold'}
            fontSize={{ base: '25px', xl: '50px' }}
            lineHeight={{ xl: '5rem' }}
            mt={{ base: '20px', xl: '10px' }}
            mb={{ base: '30px', xl: '50px' }}
            mx={'auto'}
            maxW={'800px'}
            textAlign={'center'}
          >
            Explore our terms & conditions, cookies, and privacy policies
          </MainHeading>
          <Box width={{ xl: '90%' }} mx={'auto'}>
            <Driver />
            <Site />
            <Privacy />
            <Cookie />
          </Box>
        </Box>
      </Wrapper>
    </Box>
    </Box>
    
  )
}

export default Index
