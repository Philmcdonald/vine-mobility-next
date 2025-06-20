"use client"


import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import { CustomButton } from '@/components/CustomButton'

import charger1 from "../../../public/assets/chager1.svg"
// import charger2 from '../../../assets/charger2.svg'
// import charger3 from '../../../assets/charger3.svg'
// import charger4 from '../../../assets/charger4.svg'

const Action = () => {
  return (
    <Box
      p={['20px 30px', '20px 30px', '20px 30px', '20px 150px']}
      bgGradient="linear(to-r, teal.500, green.500)"
      h={'fit-content'}
    >
      <Box textAlign={'center'} my="30px">
        <Text fontSize={'40px'} fontWeight={'bold'}>
          Get in on the action
        </Text>
        <Text fontSize={'20px'} fontWeight={'medium'} py="20px">
          By 2040, the EV charging market is projected to exceed $100B* in the
          US alone. What are you waiting for?
        </Text>
        <Flex justify={'center'} mt="20px">
          <CustomButton
            btnText={'Become a reseller'}
            bg={'#8fc03f'}
            color={'#fff'}
            fontSize={'20px'}
            borderRadius={'50px'}
          />
        </Flex>
        <Flex justify={'center'} mt="30px">
          <Box>
            <Image src={charger1} />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Action
