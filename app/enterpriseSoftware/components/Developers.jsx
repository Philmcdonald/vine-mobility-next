import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import d1 from '../../../public/assets/d1.svg'
import { FaCheck } from 'react-icons/fa6'
// import { CustomButton } from '../../../components/CustomButton'
import { CustomButton } from '@/app/components/CustomButton'

const Developers = () => {
  return (
    <Box
      p={['20px 30px', '20px 30px', '20px 30px', '20px 150px']}
      //   bg={"#f7f7f7"}
      justifyContent={'center'}
      bg={'#2a4352'}
      // h={"100vh"}
    >
      <Flex align={'center'} justifyContent={'space-between'} mt="50px">
        <Box maxW={'600px'}>
          <Text fontSize={'23px'} color={'green.300'}>
            ChargeLab APIs
          </Text>
          <Text fontSize={'50px'} color={'#fff'} fontWeight={'bold'}>
            Built for developers
          </Text>
          <Text
            fontSize={'18px'}
            color={'#f7f7f7'}
            fontWeight={'medium'}
            py="20px"
          >
            ChargeLab's front-end is designed to delight EV drivers and building
            managers. Our back-end is built for third-party developers to
            extend.
          </Text>
        </Box>

        <Box>
          <Image src={d1} width={'300px'} alt=''  />
        </Box>
      </Flex>
      <Box my="30px" color={'#fff'}>
        <Text fontWeight={'bold'} color={'#fff'} fontSize={'25px'}>
          ChargeLab developer program
        </Text>
        <Flex align={'center'} gap={'10px'} pt="10px">
          <FaCheck color="#00a300" />
          <Text fontSize={'18px'} fontWeight={'medium'}>
            Connect your test EV chargers for free
          </Text>
        </Flex>
        <Flex align={'center'} gap={'10px'} py="10px">
          <FaCheck color="#00a300" />
          <Text fontSize={'18px'} fontWeight={'medium'}>
            Language-agnostic APIs
          </Text>
        </Flex>
        <Flex align={'center'} gap={'10px'}>
          <FaCheck color="#00a300" />
          <Text fontSize={'18px'} fontWeight={'medium'}>
            Add EV charging to your smart building or smart grid product
          </Text>
        </Flex>
        <Flex align={'center'} gap={'10px'} pt="10px">
          <FaCheck color="#00a300" />
          <Text fontSize={'18px'} fontWeight={'medium'}>
            Designed for start-ups, enterprises, and everyone in between
          </Text>
        </Flex>
      </Box>

      <Box mb="30px" color={'#fff'}>
        <Text fontWeight={'bold'} color={'#fff'} fontSize={'25px'}>
          OCPP Bootcamp for EV charger manufacturers
        </Text>
        <Flex align={'center'} gap={'10px'} pt="10px">
          <FaCheck color="#00a300" />
          <Text fontSize={'18px'} fontWeight={'medium'}>
            Develop OCPP-compliant firmware in record time
          </Text>
        </Flex>
        <Flex align={'center'} gap={'10px'} py="10px">
          <FaCheck color="#00a300" />
          <Text fontSize={'18px'} fontWeight={'medium'}>
            Unlimited test cycles with ChargeLab's CSMS
          </Text>
        </Flex>
        <Flex align={'center'} gap={'10px'}>
          <FaCheck color="#00a300" />
          <Text fontSize={'18px'} fontWeight={'medium'}>
            OCPP certification pre-testing
          </Text>
        </Flex>

        <Flex pt="50px">
          <CustomButton
            btnText={'Get in touch'}
            bg={'green.300'}
            borderRadius={'50px'}
            color={'#fff'}
          />
        </Flex>
      </Box>
    </Box>
  )
}

export default Developers
