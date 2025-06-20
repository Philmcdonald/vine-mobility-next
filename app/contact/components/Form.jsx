"use client"

import { Box, Flex, Grid } from '@chakra-ui/react'
import Navigation from '@/components/Nav'
// import {
//   CustomText,
//   ReusableForm,
//   SubHeading,
//   Wrapper,
// } from '../../../components'
import CustomText from '@/components/CustomText'
import ReusableForm from '@/components/Form'
import Wrapper from '@/components/Wrapper'
import SubHeading from '@/components/SubHeading'

const Form = () => {
  return (
    <Box bg={'#f7f7f7'} h={'fit-content'}>
      <Navigation />
      <Wrapper
        py={{
          base: '10px',
          xl: '10px',
        }}
        pb={{
          base: '10px',
          xl: '100px',
        }}
      >
        <Grid
          gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
          mt={{ base: '30px', xl: '100px' }}
          gap={'50px'}
        >
          <ReusableForm />
          <Box flex={1}>
            <SubHeading>Contact our team</SubHeading>
            <CustomText my="20px">
              Reach out through this form if you are a business looking for EV
              charger management software or if you have feedback or product
              requests.
            </CustomText>
            <CustomText>
              If you are a user who needs support, you have the following
              options:
            </CustomText>
            <Flex
              align={'start'}
              gap={'10px'}
              my="20px"
              fontWeight={'medium'}
              fontSize={'20px'}
            >
              <CustomText>1.</CustomText>
              <CustomText>
                24/7 Phone Support: Call us anytime at +234-813-610-739 for
                immediate assistance.
              </CustomText>
            </Flex>

            <Flex
              align={'start'}
              gap={'10px'}
              my="20px"
              fontWeight={'medium'}
              fontSize={'20px'}
            >
              <CustomText>2.</CustomText>
              <CustomText>
                Submit a Ticket: Visit our Vine Mobility customer support page
                to submit a ticket for non-urgent inquiries or specific
                requests. This option ensures your issue is tracked and
                addressed promptly by our team.
              </CustomText>
            </Flex>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Form
