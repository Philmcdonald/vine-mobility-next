import { Box, Flex, Grid} from '@chakra-ui/react'
import Image from 'next/image'
import Navigation from '@/app/components/Nav'
import { CustomButton } from '@/app/components/CustomButton'
import p1 from '../../../public/assets/p1.jpg'
import pic from "../../../public/assets/public.jpeg"
// import { CustomText, MainHeading, Wrapper } from '../../../components'
import CustomText from '@/app/components/CustomText'
import MainHeading from '@/app/components/MainHeader'
import Wrapper from '@/app/components/Wrapper'

const Hero = () => {
  return (
    <Box bg={'#f7f7f7'} justifyContent={'center'} h={'fit-content'}>
      <Navigation />
      <Wrapper
        py={{
          base: '10px',
          xl: '30px',
        }}
      >
        <Grid
          gridTemplateColumns={{ xl: '52% 1fr' }}
          my={{ base: '45px', xl: '50px' }}
          gap={{ base: '40px', xl: '50px' }}
          justify={'space-between'}
        >
          <Box>
            <MainHeading>Public EV charging solutions</MainHeading>
            <CustomText py={{ base: '20px', xl: '30px' }}>
              As Nigeria goes electric, places like malls, restaurants, and
              community hubs will power the future. Vine Mobility makes public
              EV charging smooth for both site owners and drivers.
            </CustomText>
            <Flex align={'center'} gap={'30px'}>
              <CustomButton btnText={'Contact us'} bg={'#8fc03f'} />
            </Flex>
          </Box>
          <Box  >
            <Image src={pic} alt='' height={400}  borderRadius="20px"   />
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Hero
