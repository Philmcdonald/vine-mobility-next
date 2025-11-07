"use client"

import { Box, Text, Grid } from '@chakra-ui/react'
import Image from 'next/image'
import { features } from '../data'

// import {
//   InfoHeading,
//   CustomText,
//   Wrapper,
//   SubHeading,
// } from '../../../components'
import InfoHeading from '@/components/InfoHeading'
import CustomText from '@/components/CustomText'
import Wrapper from '@/components/Wrapper'
import SubHeading from '@/components/SubHeading'

const Features = () => {
  return (
    <Box bg={'#000'} justifyContent={'center'}>
      <Wrapper>
        <Box maxW={'600px'}>
          <InfoHeading>Features</InfoHeading>
          <SubHeading color={'#fff'}>
            Everything you want in a CSMS, and more
          </SubHeading>
          <CustomText color={'#fff'} py="20px">
            VineCharge is more than just software. It’s your all-in-one control
            center for managing EV chargers, tracking performance, and powering
            a seamless charging experience across multiple locations.
          </CustomText>
        </Box>
        <Grid
          templateColumns={{ base: '1fr', xl: 'repeat(4, 1fr)' }}
          gap={10}
          mt={{ base: '', xl: '50px' }}
        >
          {features.map(({ title, img, content }) => {
            return (
              <Box color={'#fff'} key={title}>
                <Image
                  src={img}
                  alt=''
                  height={{ base: '35px', md: '40px' }}
                  mb={{ base: '10px', md: '' }}
                />
                <Text
                  py="10px"
                  fontSize={{ base: '16px', md: '15px' }}
                  fontWeight={'bold'}
                >
                  {title}
                </Text>
                <Text fontSize={{ base: '14px', md: '14px' }}>{content}</Text>
              </Box>
            )
          })}
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Features
