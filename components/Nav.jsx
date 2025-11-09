'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import MobileHamBugerNav from './MobileHamBurgerNav'
import { CustomButton } from './CustomButton'
import NavigationOptions from './NavigationOptions'
import { IoLockClosedOutline } from 'react-icons/io5'
import logoB from '../public/assets/logoB.png'

import { CustomContainer } from './Container'
import Wrapper from './Wrapper'

const Navigation = ({
  bg,
  color,
  iconColor,
  loginColor,
  loginTextColor,
  // logo,
  // logoB,
}) => {
  return (
    <Box
      fontFamily={'Inter, sans-serif'}
      fontWeight={'500'}
      fontSize={['.9em', '1.1em']}
      bg={bg}
      dropShadow={'dark-lg'}
    >
      <Wrapper
        py={{
          base: '10px',
          xl: '15px',
        }}
      >
        <Box
          flexDir={'row'}
          alignItems={'center'}
          display={'flex'}
          justifyContent={{ base: 'space-between', lg: 'flex-start' }}
        >
          <Link href={'/'}>
            <Flex gap={'2'} alignItems={'center'}>
              <Image
                loading="lazy"
                // height={"10px"}
                // width={"10px"}
                height={70}
                width={70}
                src={logoB}
                alt="logo"
                // h={{ base: '45px', lg: '50px' }}
              />
            </Flex>
          </Link>

          <MobileHamBugerNav display={['block', 'block', 'block', 'none']} />

          <>
            <Flex
              marginLeft={{ lg: '12rem' }}
              display={['none', 'none', 'none', 'flex']}
              alignItems={'center'}
              gap={['20px', '50px']}
              color={color}
            >
              <NavigationOptions
                title="PRODUCTS"
                color={color}
                iconColor={iconColor}
              />
              <NavigationOptions
                title="USE CASES"
                color={color}
                iconColor={iconColor}
              />
              <NavigationOptions
                title="RESOURCES"
                color={color}
                iconColor={iconColor}
              />
              <NavigationOptions
                title="CONNECT"
                color={color}
                iconColor={iconColor}
              />
              <NavigationOptions
                title="DELETE ACCOUNT"
                color={color}
                iconColor={iconColor}
              />
            </Flex>
          </>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Navigation
