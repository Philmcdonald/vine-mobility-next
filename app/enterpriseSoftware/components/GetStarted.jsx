import { Box } from '@chakra-ui/react'
import { CustomButton } from '@/app/components/CustomButton'
import CustomText from '@/app/components/CustomText'
import SubHeading from '@/app/components/SubHeading'
import Wrapper from '@/app/components/Wrapper'

const GetStarted = () => {
  return (
    <Box
      justifyContent={'center'}
      bg={'#000'}
      // h={"100vh"}
    >
      <Wrapper>
        <Box textColor={'white'}>
          <SubHeading>Let&apos;s Get You Started</SubHeading>
          <CustomText maxW={'700px'} pt={{ base: '15px', xl: '20px' }}>
            Thinking of starting an EV charging business or already have
            chargers and not sure how to make money from them? With VineCharge,
            getting set up is simple. From powerful software to hands-on
            support, we’ll help you launch, manage, and monetize your chargers
            with ease.
          </CustomText>
          <Box mt="30px">
            <CustomButton
              btnText={'Contact us'}
              bg={'#8fc03f'}
              borderRadius={'50px'}
              color={'#fff'}
            />
          </Box>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default GetStarted
