"use client'"

import { Box, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Wrapper from '@/components/Wrapper'
import { Benefits } from '../data'
import CustomText from '@/components/CustomText'
import InfoHeading from '@/components/InfoHeading'
import SubHeading from '@/components/SubHeading'

const Benefit = () => {
  return (
    <Box bg={'#000'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Box maxW={'600px'} color={'#fff'}>
          <InfoHeading>Key benefits</InfoHeading>
          <SubHeading py={{ base: '10px', xl: '20px' }}>
            Help power the future
          </SubHeading>
          <CustomText>
            Depending on your location, workplace charging is quickly turning
            from a perk to an expectation. In either case, installing EV
            chargers at your office building is a convenient way to attract
            tenants, retain employees, meet sustainability goals, and more.
          </CustomText>
        </Box>
        <Grid
          templateColumns={{ base: '1fr', xl: 'repeat(4, 1fr)' }}
          gap={10}
          my={{ base: '20px', xl: '50px' }}
        >
          {Benefits.map(({ title, img, content }) => {
            return (
              <Box color={'#fff'} key={title}>
                <Image
                 alt=''
                  src={img}
                  height={40}
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
