import { CustomButton } from '@/components/CustomButton'
import Navigation from '@/components/Nav'
import { CustomText, MainHeading, Wrapper } from '@/components/pager'
import { Box, Checkbox, Flex, Radio, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
     <Box bg={'#eee'} justifyContent={'center'} h={'fit-content'}>
          <Navigation />
          <Wrapper
            py={{
              base: '10px',
              xl: '30px',
            }}
          >
            <Box mt={{ base: '40px', xl: '40px' }} >
             <Box textAlign={"center"}>
              <MainHeading>
                Vine Mobility’s mission is to power Africa’s shift to electric
                mobility.
              </MainHeading>
              </Box>

             <Flex flexDir={"column"} px="20px" py="20px" borderRadius="10px" bg="white" boxShadow={"lg"} maxW={"500px"} mx="auto">
                <Text mt="10px" fontWeight="bold" fontSize="30px">Close account</Text>
                <Text my="10px" fontWeight="semibold">Thank you for using VineMobility.</Text>
                <Text mb="10px">Why are you closing your account?</Text>
                <Flex align="center" gap="10px">
                    <Checkbox />
                    <Text>I am not enjoying VineMobility</Text>
                </Flex>
                <Flex align="center" gap="10px" my="10px">
                    <Checkbox />
                    <Text>I find it difficult to access the app</Text>
                </Flex>
                <Flex align="center" gap="10px">
                    <Checkbox />
                    <Text>Their services are not good enough </Text>
                </Flex>
                <Flex align="center" gap="10px" my="10px">
                    <Checkbox />
                    <Text>Others</Text>
                </Flex>
                <Text py="10px">Send us a messge below to share your reasons</Text>
                <Textarea h={"200px"}/>
                <Flex mt="20px">
                    <CustomButton btnText="Submit" />
                </Flex>
            </Flex>
            </Box>
          </Wrapper>
          
        </Box>
  )
}

export default page