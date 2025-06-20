"use client"



import { Box, Flex,  Text } from '@chakra-ui/react'
import Image from 'next/image'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { CustomButton } from '@/components/CustomButton'
import graphics2 from '../../../public/assets/graphic2.svg'
import InfoHeading from '@/components/InfoHeading'

const Reseller = () => {
  return (
    <Box bg={'black'}>
      <Wrapper>
        <Flex justify={'center'} h={'fit-content'} gap={5}>
          <Box
            borderRadius={'20px'}
            p={'20px'}
            py={{ base: '50px' }}
            bg={'white'}
            maxW={'600px'}
          >
            <InfoHeading color={'black'} pb="10px">
              Limited Time Offer{' '}
            </InfoHeading>
            <Text
              fontSize={'30px'}
              color={'#000'}
              fontWeight={'bold'}
              lineHeight={{ base: '3rem' }}
            >
              Earn $1,000 in bonuses when you become a ChargeLab reseller.{' '}
            </Text>
            <Text fontSize={'17px'} fontWeight={'medium'} py={{ base: '20px' }}>
              We cut you a check for $500 when you deploy your first two ports.
              Refer your friends to this program, and get $500 more for each one
              that deploys two or more ports.
            </Text>
            <CustomButton
              btnText={'Become a reseller'}
              borderRadius={'50px'}
              bg={'black'}
              color={'#fff'}
            />
          </Box>
          <Box display={{ base: 'none', lg: 'block' }}>
            <Image src={graphics2} />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Reseller
