import { Box, Grid, Text } from '@chakra-ui/react'
import Wrapper from '@/app/components/Wrapper'
import CustomText from '@/app/components/CustomText'
import { testimony } from '@/app/data/landing-page.data'
import SubHeading from '@/app/components/SubHeading'

const Testimony = () => {
  return (
    <Box bg={'#f7f7f7'}>
      <Wrapper>
        <Box mt={'-20px'} px={{ base: '0px', md: '50px' }}>
          <SubHeading textColor={'#8fc03f'} textAlign={'center'}>
            What Our Partners Say
          </SubHeading>

          <Text
            textAlign={'center'}
            fontSize={'18px'}
            fontWeight={{ base: 'normal', xl: 'medium' }}
            mt={{ base: '10px', xl: '20px' }}
          >
            We make money when you make money.
          </Text>
          <Text
          className=''
            textAlign={'center'}
            fontSize={'18px'}
            fontWeight={{ base: 'normal', xl: 'medium' }}
          >
            Our team is here to support you every step of the way.{' '}
          </Text>

          <Grid
          className=''
            templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
            mt="30px"
            justifyContent={'center'}
            gap={'30px'}
          >
            {testimony.map(({ name, title, content }) => {
              return (
                <Box
                  boxShadow={'lg'}
                  key={title}
                  bg={'#fff'}
                  borderRadius={'10px'}
                  px={{ base: '18px', xl: '20px' }}
                  py={{ base: '30px', xl: '40px' }}
                  maxW={{ base: '100%', xl: '300px' }}
                  transition="transform 0.3s ease"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                  cursor={'pointer'}
                >
                  <Text fontSize={'25px'} fontWeight={'medium'}>
                    {name}
                  </Text>
                  <Text fontWeight={'medium'}>{title}</Text>
                  <CustomText fontSize={{ base: '14px', xl: '16px' }} pt="20px">
                    {content}
                  </CustomText>
                </Box>
              )
            })}
          </Grid>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Testimony
