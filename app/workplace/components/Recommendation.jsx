"use client"

import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import charger1 from '../../../public/assets/charger1.webp'
import charger2 from '../../../public/assets/charger2.webp'
import charger3 from '../../../public/assets/charger3.webp'
import charger4 from '../../../public/assets/charger4.webp'
import Wrapper from '@/components/Wrapper'
import CustomText from '@/components/CustomText'
import SubHeading from '@/components/SubHeading'
import InfoHeading from '@/components/InfoHeading'

const Recommendation = () => {
  return (
    <Box bg={'#fff'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Box maxW={'600px'}>
          <InfoHeading>Recommended hardware</InfoHeading>
          <SubHeading my={{ base: '10px', xl: '' }}>
            Top EV Chargers for Workplaces
          </SubHeading>
          <CustomText>
            VineCharge supports all OCPP-compliant chargers. Here are some great
            options for keeping your team or visitors charged at work.
          </CustomText>
        </Box>
        <Grid
          gridTemplateColumns={{ base: '1fr', xl: 'repeat(4,1fr)' }}
          justify={'center'}
          gap={{ base: '30px', xl: '40px' }}
          mt="50px"
        >
          <Box
            bg={'#fff'}
            borderRadius={'20px'}
            boxShadow={'2xl'}
            p="20px"
            transition="transform 0.5s ease" // Smooth transition for the rotation
            _hover={{ transform: 'scale(1.1)' }} // Rotate by 90 degrees on hover
          >
            <Image mx={'auto'} alt='' src={charger1} height={200} />
            <Text fontSize={'20px'} fontWeight={'bold'} py="10px">
              Wallbox Supernova
            </Text>
            <Flex
              justify={'space-between'}
              fontSize={'17px'}
              color={'#ccc'}
              fontWeight={'medium'}
            >
              <Text>HPC</Text>
              <Text>60-220KW</Text>
            </Flex>
          </Box>
          <Box
            bg={'#fff'}
            borderRadius={'20px'}
            boxShadow={'2xl'}
            p="20px"
            transition="transform 0.5s ease" // Smooth transition for the rotation
            _hover={{ transform: 'scale(1.1)' }} // Rotate by 90 degrees on hover
          >
            <Image mx={'auto'} src={charger2} alt='' height={200} />
            <Text fontSize={'20px'} fontWeight={'bold'} py="10px">
              Wallbox Supernova
            </Text>
            <Flex
              justify={'space-between'}
              fontSize={'17px'}
              color={'#ccc'}
              fontWeight={'medium'}
            >
              <Text>HPC</Text>
              <Text>60-220KW</Text>
            </Flex>
          </Box>
          <Box
            bg={'#fff'}
            borderRadius={'20px'}
            boxShadow={'2xl'}
            p="20px"
            transition="transform 0.5s ease" // Smooth transition for the rotation
            _hover={{ transform: 'scale(1.1)' }} // Rotate by 90 degrees on hover
          >
            <Image mx={'auto'} alt='' src={charger3} height={200} />
            <Text fontSize={'20px'} fontWeight={'bold'} py="10px">
              Wallbox Supernova
            </Text>
            <Flex
              justify={'space-between'}
              fontSize={'17px'}
              color={'#ccc'}
              fontWeight={'medium'}
            >
              <Text>HPC</Text>
              <Text>60-220KW</Text>
            </Flex>
          </Box>
          <Box
            bg={'#fff'}
            borderRadius={'20px'}
            boxShadow={'2xl'}
            p="20px"
            transition="transform 0.5s ease" // Smooth transition for the rotation
            _hover={{ transform: 'scale(1.1)' }} // Rotate by 90 degrees on hover
          >
            <Image mx={'auto'} alt='' src={charger4} height={200} />
            <Text fontSize={'20px'} fontWeight={'bold'} py="10px">
              Wallbox Supernova
            </Text>
            <Flex
              justify={'space-between'}
              fontSize={'17px'}
              color={'#ccc'}
              fontWeight={'medium'}
            >
              <Text>HPC</Text>
              <Text>60-220KW</Text>
            </Flex>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Recommendation
