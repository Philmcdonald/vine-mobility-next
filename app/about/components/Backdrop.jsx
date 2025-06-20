"use client"

import { Box, Flex } from '@chakra-ui/react'
import CustomText from '@/components/CustomText'
import SubHeading from '@/components/SubHeading'
import Wrapper from '@/components/Wrapper'
import { CustomButton } from '@/components/CustomButton'

const Backdrop = () => {
  return (
    <Box
      bgGradient="linear(to-r, teal.500, green.500)"
      height={{ base: '', xl: '500px' }}
      clipPath={{ xl: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}
      position={'relative'}
      zIndex={0}
    >
      <Wrapper>
        <Flex gap={'50px'} ml={{ xl: '500px' }} mt={{ xl: '100px' }}>
          <Box color={'#fff'}>
            <SubHeading>Want to reach us directly?</SubHeading>
            <CustomText py={{ base: '10px', xl: '20px' }}>
              Call or Email Vine Mobility today:
            </CustomText>
            <CustomButton btnText={'Contact us'} />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Backdrop
