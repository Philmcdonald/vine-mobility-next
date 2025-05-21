import { Box, Flex} from '@chakra-ui/react'
import Image from 'next/image'
import Navigation from '@/app/components/Nav'
import { CustomButton } from '@/app/components/CustomButton'
// import enterprise1 from '../../../assets/enterprise1.webp'
// import enterprise2 from '../../../assets/enterprise2.webp'
import vineCharge from '../../../public/assets/vineCharge.png'
import logoB from '../../../public/assets/logoB.png'
import CustomText from '@/app/components/CustomText'
// import { Wrapper, MainHeading } from '../../../components'
import Wrapper from '@/app/components/Wrapper'
import MainHeading from '@/app/components/MainHeader'

const Hero = () => {
  return (
    <Box bg={'#f7f7f7'} justifyContent={'center'}>
      <Navigation color={'#000'} logo={logoB} />
      <Wrapper
        py={{
          base: '10px',
          xl: '40px',
        }}
      >
        <Flex
          flexDirection={["column","column","column","row"]}
          mt={['28px','40px'] }
          mb={[ '20px', '30px' ]}
          align={'center'}
          justifyContent={"center"}
          // position={'relative'}
        >
          <Box flex={1}>
            <MainHeading >
              A Smart Solution to EV Charging
            </MainHeading>
            <CustomText mt={{ base: '20px', xl: '30px' }} >
              Our enterprise solution makes managing EV charging simple and
              flexible. VineCharge works with all OCPP chargers, supports every
              electric vehicle, and accepts all common payment methods. Easy to
              use, powerful to deploy.
            </CustomText>
            <Box mt="30px">
              <CustomButton btnText="Contact us" />
            </Box>
          </Box>

          <Box mt={{ base: '40px', xl: '-30px' }} flex={1}>
            <Box>
              <Image
                src={vineCharge}
                alt=""
                height={"500px"}
                width={"300px"}                
              />
            </Box>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Hero
