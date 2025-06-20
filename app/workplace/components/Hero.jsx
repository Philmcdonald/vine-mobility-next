"use client"

import { Box, Flex, Grid} from '@chakra-ui/react'
import Image from 'next/image'
// import Navigation from '../../../components/Nav'
import Navigation from '@/components/Nav'
import work1 from '../../../public/assets/work1.webp'
// import Wrapper from '../../../components/Wrapper'
import Wrapper from '@/components/Wrapper'
// import { CustomButton } from '../../../components/CustomButton'
import { CustomButton } from '@/components/CustomButton'
// import { CustomText, MainHeading } from '../../../components'
import CustomText from '@/components/CustomText'
import MainHeading from '@/components/MainHeader'

const Hero = () => {
  return (
    <Box bg={'#f7f7f7'} justifyContent={'center'} h={'fit-content'}>
      <Navigation />
      <Wrapper
        py={{
          base: '10px',
          xl: '30px',
        }}
        pb={{
          base: '10px',
          xl: '100px',
        }}
      >
        <Grid
          mt={{ base: '45px', xl: '50px' }}
          gap={{ base: '40px', xl: '50px' }}
          justify={'space-between'}
          gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
        >
          <Box maxW={'600px'}>
            <MainHeading>EV charging for workplaces</MainHeading>
            <CustomText py="30px">
              Thousands of electric vehicle drivers rely on workplace EV
              chargers to stay fully charged. Join the EV revolution by offering
              workplace charging at your office building.
            </CustomText>
            <Flex align={'center'} gap={'30px'}>
              <CustomButton btnText={'Contact us'} bg={'#8fc03f'} />
            </Flex>
          </Box>
          <Box>
            <Image src={work1} alt='' height={'400px'} />
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Hero
