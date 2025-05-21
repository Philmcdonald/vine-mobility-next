import { Box, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'

import u3 from '../../../public/assets/u3.svg'

import { CustomButton } from '@/app/components/CustomButton'
import CustomText from '@/app/components/CustomText'
import SubHeading from '@/app/components/SubHeading'
import Wrapper from '@/app/components/Wrapper'
import { userInterface } from '../data'
import Link from 'next/link'

const UserInterface = () => {
  return (
    <Box bg={'#fff'} justifyContent={'center'}>
      <Wrapper>
        <Box maxW={'600px'}>
          <SubHeading>End-User Interfaces</SubHeading>
          <CustomText mt={{ base: '10px', xl: '20px' }}>
            We’re big on user experience because EV charging should be simple,
            smooth, and stress-free.
          </CustomText>
        </Box>

        <Grid
          templateColumns={{ base: '1fr', xl: 'repeat(3, 1fr)' }}
          gap={10}
          my={{ base: '30px', xl: '50px' }}
        >
          {userInterface.map(({ title, src, content }) => {
            return (
              <Box color={'#000'} key={title}>
                <Image
                  src={src}
                  alt=""
                  height={{ base: '35px', md: '40px' }}
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

          <Box color={'#000'}>
            <Image
              src={u3}
              alt=''
              height={{ base: '38px', md: '40px' }}
              mb={{ base: '10px', md: '' }}
            />
            <Text
              py="10px"
              fontSize={{ base: '16px', md: '15px' }}
              fontWeight={'bold'}
            >
              iOS & Android apps
            </Text>
            <Text fontSize={{ base: '14px', md: '14px' }}>
              Drive brand loyalty with a mobile application.
            </Text>
            <Link href={'/vine-volts-app'}>
              <CustomButton
                btnText={'Get the VineVolts app'}
                color={'#8fc03f'}
                bg={'none'}
                px={'0px'}
              />
            </Link>
          </Box>

          {/* <Box color={'#000'}>
            <Image
              src={u4}
              h={{ base: '38px', md: '40px' }}
              mb={{ base: '10px', md: '' }}
            />
            <Text
              py="10px"
              fontSize={{ base: '16px', md: '15px' }}
              fontWeight={'bold'}
            >
              RFID cards
            </Text>
            <Text fontSize={{ base: '14px', md: '14px' }}>
              A tried & true method for end-user authentication.
            </Text>
            <CustomButton
              btnText={'View network cards'}
              color={'#8fc03f'}
              bg={'none'}
              px={'0px'}
            />
          </Box> */}
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default UserInterface
