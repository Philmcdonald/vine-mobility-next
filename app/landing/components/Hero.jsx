'use client'

import { Box, Flex, Grid } from '@chakra-ui/react'
import { Text } from '@/components/pager'
import Image from 'next/image'
import Navigation from '@/components/Nav'
import { CustomButton } from '@/components/CustomButton'
import Wrapper from '@/components/Wrapper'
import { MainHeading } from '@/components/pager'
import graphic1 from '../../../public/assets/graphic1.svg'

import logoB from '../../../public/assets/logoB.png'

const Hero = () => {
  return (
    <Box
      bgGradient="linear(to-r,  #3eaa39, #8fc03f)"
      height={'fit-content'}
      clipPath={{
        base: '',
        md: 'polygon(0 0, 100% 0, 100% 70%, 0 99%)',
      }}
      overflow={'hidden'}
    >
      <Navigation
        // logo={logoB}
        logoB={logoB}
        bg="#fff"
        color="#000"
        loginTextColor="#fff"
        loginColor="#fff"
        iconColor="#fff"
      />
      <Wrapper
        py={{
          base: '10px',
          xl: '30px',
        }}
      >
        <Grid
          mt={{ lg: '45px', xl: '20px' }}
          templateColumns={{ base: '1fr', lg: '58% 40%' }}
          textAlign={{ base: 'left' }}
          mb={{ base: '50px', lg: '150px' }}
          gap={'50px'}
        >
          <Flex
            flexDir={'column'}
            alignItems={'flex-start'}
            justifyContent={{ lg: 'center', xl: 'flex-start' }}
            color="#fff"
            flex={1}
            mt={{ base: '40px', lg: '60px', xl: '50px' }}
            w={{ base: '98%', md: '100%' }}
          >
            <MainHeading>Monetize and Manage EV Charging All From One Platform.</MainHeading>

            <Text
              fontFamily={'Inter, sans-serif'}
              my={{ base: '30px', lg: '20px', xl: '25px' }}
              mb={{ base: '35px' }}
            >
              Vine Mobility&apos;s software helps you turn EV chargers into revenue-generating
              stations, whether you are running one or one hundred
            </Text>

            <CustomButton btnText="Book a Demo" color="#fff" />
          </Flex>

          <Box w={{ lg: '500px' }}>
            <Image src={graphic1} alt="" />
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Hero
