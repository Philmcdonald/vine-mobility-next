/* eslint-disable react/prop-types */
'use client'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Link from 'next/link'

function NavigationOptions({ title, color, iconColor }) {
  const [show, setShow] = useState(false)
  let interval = ''

  return (
    <Flex position="relative" zIndex={'999'}>
      <Flex
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => {
          interval = setTimeout(() => {
            setShow(false)
          }, 100)
        }}
        gap="10px"
        alignItems={'center'}
        cursor="pointer"
      >
        <Text color={color} fontSize={'13px'} fontWeight={'bold'} _hover={{ color: '#ccc' }}>
          {title}
        </Text>
        {!show ? <IoIosArrowDown color={iconColor} /> : <IoIosArrowUp color={iconColor} />}
      </Flex>

      {show && (
        <Flex
          bg="#fff"
          onMouseEnter={() => {
            clearTimeout(interval)
            console.log('in', interval)
          }}
          onMouseLeave={() => {
            clearTimeout(interval)

            setShow(false)
          }}
          position={'absolute'}
          p={'10px'}
          top="20px"
          w={title.toLowerCase() === 'products' ? '300px' : '300px'}
          // boxShadow={'1px 1px 1px gray'}
          boxShadow={'sm'}
          borderRadius="8px"
          justifyContent={'space-between'}
          zIndex={999}
        >
          {title.toLowerCase() === 'products' ? (
            <Flex
              justifyContent={'space-between'}
              display={['none', 'none', 'none', 'flex']}
              w={'100%'}
            >
              <Box w={'100%'} flex={1.5} py="10px" borderRadius={'10px'}>
                <Text fontSize={'12px'} pb={'20px'} fontWeight={'bold'} color={'#ccc'}>
                  OVERVIEW
                </Text>
                <Flex color={'#000'} flexDir={'column'} gap={'20px'}>
                  {/* <Link href={'/software'}>
                    <Text _hover={{ color: `#8fc03f` }} transition="all 0.3s ease">
                      Enterprise software - VineCharge
                    </Text>
                  </Link> */}
                  <Text _hover={{ color: `#8fc03f` }} transition="all 0.3s ease">
                    Enterprise software - VineCharge
                  </Text>

                  <Text fontSize={'12px'} fontWeight={'bold'} color={'#ccc'}>
                    FOR EV DRIVERS
                  </Text>
                  {/* <Link href={'/app'}>
                    <Text _hover={{ color: '#8fc03f' }} transition="all 0.3s ease">
                      Driver&apos;s App - VineVolt App
                    </Text>
                  </Link> */}
                  <Text _hover={{ color: '#8fc03f' }} transition="all 0.3s ease">
                    Driver&apos;s App - VineVolt App
                  </Text>
                </Flex>
              </Box>
            </Flex>
          ) : // </Flex>
          title.toLowerCase() === 'use cases' ? (
            <Box display={['none', 'none', 'none', 'block']} w="100%" py={'10px'} h={'fit-content'}>
              <Flex color={'#000'} flexDir={'column'} gap={'20px'}>
                <Link href={'/public'}>
                  <Text _hover={{ color: '#8fc03f' }} transition="all 0.3s ease">
                    Public{' '}
                  </Text>
                </Link>
                <Link href={'/workplace'}>
                  <Text _hover={{ color: '#8fc03f' }} transition="all 0.3s ease">
                    WorkPlace
                  </Text>
                </Link>
              </Flex>
            </Box>
          ) : title.toLowerCase() === 'resources' ? (
            <Box display={['none', 'none', 'none', 'block']} w="100%" py={'10px'} h={'fit-content'}>
              <Flex color={'#000'} flexDir={'column'} gap={'20px'}>
                <Link href={'/about'}>
                  <Text _hover={{ color: '#8fc03f' }} transition="all 0.3s ease">
                    About{' '}
                  </Text>
                </Link>

                <Link href="/blog">
                  <Text _hover={{ color: '#8fc03f' }} transition="all 0.3s ease">
                    Blog
                  </Text>
                </Link>

                <Link href={'/privacy'}>
                  <Text _hover={{ color: '#8fc03f' }} transition="all 0.3s ease">
                    Privacy & terms
                  </Text>
                </Link>
              </Flex>
            </Box>
          ) : (
            <Box display={['none', 'none', 'none', 'block']} w="100%" py={'10px'} h={'fit-content'}>
              <Flex color={'#000'} flexDir={'column'} gap={'20px'}>
                <Link href={'/contact'}>
                  <Text _hover={{ color: '#8fc03f' }} transition="all 0.3s ease">
                    Contact us
                  </Text>
                </Link>
              </Flex>
            </Box>
          )}
        </Flex>
      )}
    </Flex>
  )
}

export default NavigationOptions
