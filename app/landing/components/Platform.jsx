"use client"



import { Box, Text, Grid } from '@chakra-ui/react'
import graphic2 from '../../../public/assets/platform.svg'
import Image from 'next/image'
import Wrapper from '@/components/Wrapper'
import SubHeading from '@/components/SubHeading'
import CustomText from '@/components/CustomText'
import InfoHeading from '@/components/InfoHeading'
import { platform } from '@/app/data/landing-page.data'

const Platform = () => {
  return (
    <Box bg={'#000'}>
      <Wrapper>
        <Grid templateColumns={{ base: '1fr', md: '57% 1fr' }} gap={'50px'}>
          <Box color={'white'}>
            <InfoHeading> Enterprise Software - VineCharge</InfoHeading>

            <SubHeading maxW={{ base: '', xl: '90%' }} color={'white'}>
              A Smart Solution to EV Charging
            </SubHeading>

            <CustomText mt={{ base: '20px' }}>
              Through software, we bring the industry&apos;s most flexible EV
              infrastructure solutions. Manage any OCPP charger, charge any
              electric car, and accept every major payment method.
            </CustomText>
          </Box>

          <Box
            mt={{ base: '-30px', xl: '-30px' }}
            display={{ base: 'none', lg: 'block' }}
          >
            <Image src={graphic2} alt=''/>
          </Box>
        </Grid>

      
        <Grid
          // gap={{ base: '45px', md: '50px' }}
          gap={["45px", "100px"]}
          templateColumns={{ base: '1fr', md: '1fr 1fr 1fr 1fr' }}
          mt={["30px", "50px"]}
        >
          {platform.map(({ src, title, content }) => {
            return (
              <Box color={'#fff'} key={title}>
                <Image
                  src={src}
                  alt=''
                  // height={"30px"}
                  style={{height:"40px"}}
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

export default Platform
