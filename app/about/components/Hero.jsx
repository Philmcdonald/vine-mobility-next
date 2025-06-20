"use client"

import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Navigation from '@/components/Nav'
import AboutImage from '../../../public/assets/aboutImg.webp'
import CustomText from '@/components/CustomText'
import MainHeading from '@/components/MainHeader'
import Wrapper from '@/components/Wrapper'

const Hero = () => {
  return (
    <Box bg={'#f7f7f7'} justifyContent={'center'} h={'fit-content'}>
      <Navigation />
      <Wrapper
        py={{
          base: '10px',
          xl: '30px',
        }}
      >
        <Box mt={{ base: '40px', xl: '40px' }} textAlign={'center'}>
          <MainHeading>
            Vine Mobility’s mission is to power Africa’s shift to electric
            mobility.
          </MainHeading>
          <CustomText py={'20px'} maxW={'700px'} margin={'0px auto'}>
            This means making EV charging accessible, efficient, and built for
            growth.
          </CustomText>
        </Box>
        <Flex justify={'center'} my={{ base: '', xl: '50px' }}>
          <Image src={AboutImage} alt='' height={500}  />
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Hero
