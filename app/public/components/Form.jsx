"use client"

import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { CustomButton } from '@/components/CustomButton'
import o1 from '../../../public/assets/o1.svg'
import o2 from '../../../public/assets/o2.svg'
import o3 from '../../../public/assets/o3.svg'
import o4 from '../../../public/assets/o4.svg'
import pump from '../../../public/assets/pump.svg'
import CustomText from '@/components/CustomText'
import SubHeading from '@/components/SubHeading'
import Wrapper from '@/components/Wrapper'
import ReusableForm from '@/components/Form'
import Link from 'next/link'

const Form = () => {
  return (
    <Box bg={'#f7f7f7'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Grid
          gridTemplateColumns={{ base: '', xl: '1fr 1fr' }}
          justify={'center'}
          gap={{ base: '50px', xl: '100px' }}
        >
          <ReusableForm />

          <Box flex={1}>
            <SubHeading>
              Find out more about public charging with Vine Mobility
            </SubHeading>
            <CustomText maxW={'400px'} py={{ base: '20px', xl: '30px' }}>
              Fill out the form to get in touch with one of our EV
              infrastructure experts.
            </CustomText>
            <Grid
              gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
              gap={{ base: '25px', xl: '30px' }}
              my={{ base: '20px', xl: '30px' }}
            >
              <Box>
                <Image src={o1} alt='' height={40} />
                <Text fontWeight={'bold'} py="10px">
                  EV charger management
                </Text>
                <Text fontWeight={'medium'}>
                  Connect & control any OCPP EV charger that has been approved
                  by Vine Mobility.
                </Text>
              </Box>

              <Box>
                <Image src={o3} alt='' height={{ base: '35px', md: '40px' }} />
                <Text fontWeight={'bold'} py="10px">
                  Collect Revenue
                </Text>
                <Text fontWeight={'medium'}>
                  Connect & control any OCPP EV charger that has been approved
                  by Vine Mobility.
                </Text>
              </Box>

              <Box>
                <Image src={o2} alt='' height={{ base: '35px', md: '40px' }} />
                <Text fontWeight={'bold'} py="10px">
                  Turnkey install services
                </Text>
                <Text fontWeight={'medium'}>
                  Hardware, software, and install services all in one place.
                </Text>
              </Box>

              <Box>
                <Image src={o4} alt='' height={{ base: '35px', md: '40px' }} />
                <Text fontWeight={'bold'} py="10px">
                  Be discovered
                </Text>
                <Text fontWeight={'medium'}>
                  Put your site on every major Ev changing map.
                </Text>
                <Link href={'/enterpriseSoftware'}>
                  <CustomButton
                    btnText={'All software features'}
                    bg={'transparent'}
                    p={{ base: '0px', xl: '0px' }}
                    color={'#8fc03f'}
                  />
                </Link>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Wrapper>

      <Flex bg={'#000'} justifyContent={'center'} py="30px">
       
          <Image alt='' src={pump} height={350} />

      </Flex>
    </Box>
  )
}

export default Form
