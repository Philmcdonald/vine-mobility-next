"use client"

import { Box, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import CustomText from '@/components/CustomText'
import InfoHeading from '@/components/InfoHeading'
import SubHeading from '@/components/SubHeading'
import Wrapper from '@/components/Wrapper'
import { benefits } from '../data'

const Benefit = () => {
  return (
    <Box bg={'#000'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Box maxW={'600px'} color={'#fff'}>
          <InfoHeading>Key benefits</InfoHeading>
          <SubHeading>
            Support your community & attract the best kind of customers
          </SubHeading>
          <CustomText mt={{ base: '15px', xl: '' }}>
            EV drivers spend time and money where they charge. Install public EV
            chargers to attract customers or visitors to your location.
          </CustomText>
        </Box>
        <Grid
          templateColumns={{ base: '1fr', xl: 'repeat(4, 1fr)' }}
          gap={10}
          my={{ base: '20px', xl: '50px' }}
        >
          {benefits.map(({ title, img, content }) => {
            return (
              <Box color={'#fff'} key={title}>
                <Image
                  src={img}
                  height={45}
                  alt=''
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

export default Benefit
