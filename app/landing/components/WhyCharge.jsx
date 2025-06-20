"use client"


import { Box, Grid } from '@chakra-ui/react'
import Image from 'next/image'
import chargeMobile from '../../../public/assets/mobile.png'
// import chargeDashboard from '../../../public/assets/vineCharge.png'
import chargeDashboard from "../../../public/assets/vineCharge.png"
import Wrapper from '@/components/Wrapper'
import CustomText from '@/components/CustomText'
import SubHeading from '@/components/SubHeading'
import InfoHeading from '@/components/InfoHeading'
import Link from 'next/link'

const WhyCharge = () => {
  return (
    <Box>
      <Wrapper pb={{ base: '20px', xl: '30px' }}>
        <Box>
          <Box>
            <InfoHeading>Why Vine Mobility ?</InfoHeading>
            <SubHeading maxW={{ base: '', xl: '50%' }}>
              Your comprehensive solution for smart EV charging
            </SubHeading>

            <Grid
              templateColumns={{ base: '1fr', md: '1fr 1fr' }}
              justify={'space-between'}
              align={'center'}
              mt={{ base: '20px' }}
              gap={{ base: '30px', md: '30px' }}
            >
              <CustomText textAlign={{ base: 'left' }}>
                We deliver complete ecosystem of tools designed for fleet
                managers, charging network operators, EV infrastructure
                developers, Energy companies, oil and gas companies, malls,
                recreational centers and so on. Our{' '}
                <Link href={'/enterprise-software'}>
                  <span style={{ fontWeight: 'bolder' }}>
                    Enterprise Software{' '}
                  </span>
                </Link>
                provides everything needed to deploy, manage, and scale
                intelligent charging solutions.
              </CustomText>

              <CustomText textAlign={{ base: 'left' }}>
                With our robust management system, you can seamlessly integrate
                and control your entire charging network, regardless of size or
                complexity. Vine Mobility offers the most reliable framework for
                expanding your EV charging operations.
              </CustomText>
              <CustomText textAlign={{ base: 'left' }}>
                We&apos;re equally passionate about creating exceptional
                experiences for drivers through our Driver App. Our user-centric
                design ensures that charging is not just efficient but also
                intuitive and enjoyable for everyone.
              </CustomText>
            </Grid>
          </Box>
        </Box>
      </Wrapper>
      <Grid
        mx="auto"
        width={{ base: '90%' }}
        gridTemplateColumns={{ base: '1fr', xl: '1fr 70%' }}
        pb={{ base: '30px', xl: '50px' }}
      >
        <Box>
          <Image src={chargeMobile}  alt=''/>
        </Box>

        <Box>
         <Image src={chargeDashboard} alt="alt" height={500} width={1000}/>
        </Box>
      </Grid>
    </Box>
  )
}

export default WhyCharge
