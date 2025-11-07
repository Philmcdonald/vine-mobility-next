import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import logoB from '../public/assets/logoB.png'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <Box bg="#fff" h={'fit-content'}>
      <Wrapper>
        <Grid
          my="20px"
          justifyContent={{ base: 'space-between', xl: 'space-between' }}
          gap={{ base: '30px', xl: '20px' }}
          templateColumns={{ base: '1fr', xl: 'repeat(3, 1fr)' }}
        >
          <Box>
            <Image src={logoB} alt="Vine Mobility Logo" height={40} width={150} />
            <Flex my="30px" align={'center'} gap={'20px'}>
              <FaFacebook size={25} />
              <BsTwitter size={25} />
              <LiaLinkedin size={25} />
              <BsInstagram size={25} />
            </Flex>
            <Text>© Vine Mobility Ltd.</Text>
          </Box>

          <Box>
            <Box>
              <Text fontWeight={'bold'} pb="10px">
                Products
              </Text>
              <Flex flexDir={'column'} gap={2}>
                <Link href={'/software'}>
                  <Text>Enterprise Software - VineCharge</Text>
                </Link>
                <Link href={'/app'}>
                  <Text>Driver&apos;s App - VineVolts</Text>
                </Link>
              </Flex>
            </Box>

            <Box marginTop={5}>
              <Text fontWeight={'bold'} pb="10px">
                Use Cases
              </Text>
              <Flex flexDir={'column'} gap={2}>
                <Link href={'/public'}>
                  <Text>Public</Text>
                </Link>
                <Link href={'/workplace'}>
                  <Text>Workplace</Text>
                </Link>
              </Flex>
            </Box>
          </Box>

          <Box>
            <Box>
              <Text fontWeight={'bold'} pb="10px">
                Company
              </Text>

              <Flex flexDir={'column'} gap={2}>
                <Link href={'/about'}>
                  <Text>About</Text>
                </Link>

                <Link href={'/contact'}>
                  <Text>Contact</Text>
                </Link>

                <Text>Blog</Text>

                <Link href={'/privacy'}>
                  <Text>Privacy & terms</Text>
                </Link>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Footer
