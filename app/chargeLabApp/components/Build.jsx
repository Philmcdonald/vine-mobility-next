import { Box, Flex,Text } from '@chakra-ui/react'
import Image from 'next/image'
import { CustomButton } from '@/app/components/CustomButton'
import c9 from '../../../public/assets/c9.svg'
import c10 from '../../../public/assets/c10.svg'
import CustomText from '@/app/components/CustomText'
import SubHeading from '@/app/components/SubHeading'
import Wrapper from '@/app/components/Wrapper'

const Build = () => {
  return (
    <Box bg={'#f7f7f7'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          align={'center'}
          gap={'50px'}
        >
          <Box flex={1.5}>
            <SubHeading>Want to build your own EV charging app?</SubHeading>
            <CustomText py="20px" maxW={'400px'}>
              Check out Vine Mobility&apos;s contact our team today to learn
              about building your own network of EV chargers
            </CustomText>
            <CustomButton
              btnText={'Contact us'}
              bg={'#8fc03f'}
              borderRadius={'50px'}
            />
          </Box>

          <Box flex={1}>
            <Image src={c9} height={'50px'} alt='' />
            <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
              White-label apps
            </Text>
            <Text>
              Add your organization&apos;s logo & colors to a white-labeled
              version of ChargeLab&apos;s app.
            </Text>
            <CustomButton
              btnText={'Learn more'}
              bg={'none'}
              color={'#8fc03f'}
              px={'0px'}
            />
          </Box>

          <Box flex={1}>
            <Image src={c10} height={'50px'} alt='' />
            <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
              Roaming
            </Text>
            <Text>
              We&apos;re always working to give ChargeLab users easier access to
              more chargers.
            </Text>
            <CustomButton
              btnText={'Contact us'}
              bg={'none'}
              color={'#8fc03f'}
              px={'0px'}
            />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Build
