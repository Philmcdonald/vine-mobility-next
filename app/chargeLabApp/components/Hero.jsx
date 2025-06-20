"use client"

import { Box, Button, Flex, Grid} from '@chakra-ui/react'
import Image from 'next/image'
import Navigation from '@/components/Nav'
import { CustomButton } from '@/components/CustomButton'
import logoB from '../../../public/assets/logoB.png'
import google from '../../../public/assets/playStore.svg'
import mobile from '../../../public/assets/mobile.png'
import Wrapper from '@/components/Wrapper'
import MainHeading from '@/components/MainHeader'
import CustomText from '@/components/CustomText'

const Hero = () => {
  return (
    <Box bg={'#f7f7f7'}>
      <Navigation logo={logoB} />
      <Wrapper
        py={{
          base: '20px',
          xl: '20px',
        }}
        mb={{ xl: '-15rem' }}
      >
        <Grid
          gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
          mt={{ base: '30px', xl: '70px' }}
          mb={{ base: '30px' }}
        >
          <Box maxW={'600px'}>
            <MainHeading>Download the VineVolt Driver&apos;s App</MainHeading>
            <CustomText py={{ base: '20px', xl: '20px' }} maxW={'400px'}>
              Click the button below to get the VineVolt Driver&apos;s app for iOS
              or Android.
            </CustomText>
            <Flex mt="20px" align={'center'} gap={'20px'}>
             
              <Button
                p={'0px'}
                bg="transparent"
                _hover={{ bg: 'transparent', border: 'none' }}
                onClick={()=>{
                  alert("coming soon")
                }}
              >
                <Image height={{ base: '4rem', xl: '5rem' }} src={google} alt='' />
              </Button>
            </Flex>
          </Box>
          <Box mt={{ base: '30px', xl: '-20px' }}>
           
            
<Box
  mt={{ xl: '-100px' }}
  transform={{ base: 'none', xl: 'rotate(30deg)' }}
  height={{ base: 'auto', xl: '60rem' }}
  position="relative"
  width="fit-content"
>
  <Image
    src={mobile}
    alt="mobile"
    width={400}
    height={400}
    // style={{ objectFit: 'contain' }}
  />
</Box>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Hero
