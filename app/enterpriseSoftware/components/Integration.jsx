"use client"


import { Box, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import i1 from '../../../public/assets/i1.svg'
import i2 from '../../../public/assets/i2.svg'
import i3 from '../../../public/assets/i3.svg'
import i4 from '../../../public/assets/i4.svg'
import { CustomButton } from '@/components/CustomButton'

const Integration = () => {
  return (
    <Box
      p={['20px 30px', '20px 30px', '20px 30px', '20px 150px']}
      bg={'#f7f7f7'}
      justifyContent={'center'}
      // h={"100vh"}
    >
      <Box mt={'70px'} maxW={'600px'}>
        <Text fontSize={'40px'} fontWeight={'bold'}>
          Integrations
        </Text>
        <Text fontSize={'18px'} fontWeight={'medium'} py="20px">
          Our platform is just the start. Expand your ChargeLab experience with
          deep integrations across the board.
        </Text>
      </Box>

      <Grid
        templateColumns={{ base: '1fr', xl: 'repeat(4, 1fr)' }}
        gap={10}
        my="50px"
      >
        <Box maxW={'300px'} color={'#000'}>
          <Image src={i1} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Charging station aggregators
          </Text>
          <Text>Find ChargeLab chargers on PlugShare and ChargeHub.</Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={i2} height={'50px'} width={""} alt='' />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Smart building & smart grid
          </Text>
          <Text>
            We speak the same language as your building. And the grid.
          </Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={i3} height={'50px'} width={""} alt=''/>
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Solar & energy storage
          </Text>
          <Text>
            Supercharge your EV charging site with solar or energy storage.
          </Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={i4} height={'50px'} width={""} alt='' />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Other integrations
          </Text>
          <Text>
            From credit card readers to roaming with other EV networks
          </Text>
          <CustomButton
            btnText={'Learn more'}
            color={'#8fc03f'}
            bg={'none'}
            px={'0px'}
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default Integration
