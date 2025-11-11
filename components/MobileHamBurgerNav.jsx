'use client'

import { Box, Flex, Text, Collapse, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { FaPlus, FaMinus } from 'react-icons/fa' // Ensure proper imports

function MobileHamBugerNav({ ...props }) {
  const [show, setShow] = useState(false)
  const [openSection, setOpenSection] = useState('')

  // Handle toggle of the section
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section)
  }

  return (
    <Box {...props}>
      <GiHamburgerMenu
        cursor={'pointer'}
        onClick={() => setShow((prev) => !prev)}
        fontSize={'2em'}
        color="black"
      />
      {show && (
        <Box
          position="fixed"
          bottom={'0'}
          right="0"
          top="0"
          w="90%"
          bg={'#fff'}
          zIndex={1022}
          padding="20px"
        >
          <Flex
            flexDir={'column'}
            justifyContent="flex-start"
            alignItems={'flex-start'}
            color={'black'}
            fontWeight="600"
            w="100%"
          >
            <FaTimes
              style={{ alignSelf: 'flex-end' }}
              fontSize="1.5em"
              cursor={'pointer'}
              onClick={() => setShow(false)}
              color="black"
            />
            <Flex
              mt={'3rem'}
              gap="20px"
              flexDir={'column'}
              alignItems="flex-start"
              justifyContent="flex-start"
              fontSize={'1.2em'}
              w="100%"
            >
              {/* Product Section */}
              <Box pb="10px" w="100%">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  onClick={() => toggleSection('product')}
                  w="100%"
                  color="#95979b"
                >
                  <Text textTransform={'uppercase'} fontSize="12px" fontWeight="bold">
                    Product
                  </Text>
                  <Icon as={openSection === 'product' ? FaPlus : FaMinus} fontSize="12px" />
                </Flex>
                <Collapse in={openSection === 'product'}>
                  <Flex
                    direction="column"
                    gap="15px"
                    alignItems="flex-start"
                    mt="20px"
                    ml="5px"
                    fontSize="15px"
                  >
                    <Link href="/software" onClick={() => setShow(false)}>
                      <Text>Enterprise Software - VineCharge</Text>
                    </Link>
                    <Link href="/app" onClick={() => setShow(false)}>
                      <Text>Driver's app - VineVolts</Text>
                    </Link>
                  </Flex>
                </Collapse>
              </Box>

              {/* Use Cases Section */}
              <Box pb="10px" w="100%">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  onClick={() => toggleSection('usecases')}
                  w="100%"
                  color="#95979b"
                >
                  <Text textTransform={'uppercase'} fontSize="12px" fontWeight="bold">
                    Use Cases
                  </Text>
                  <Icon as={openSection === 'usecases' ? FaPlus : FaMinus} fontSize="13px" />
                </Flex>
                <Collapse in={openSection === 'usecases'}>
                  <Flex
                    direction="column"
                    alignItems="flex-start"
                    gap="15px"
                    mt="20px"
                    ml="5px"
                    fontSize="15px"
                  >
                    <Link href="/public" onClick={() => setShow(false)}>
                      <Text>Public</Text>
                    </Link>
                    <Link href="/workplace" onClick={() => setShow(false)}>
                      <Text>Workplace</Text>
                    </Link>
                  </Flex>
                </Collapse>
              </Box>

              {/* Resources Section */}
              <Box pb="10px" w="100%">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  onClick={() => toggleSection('resources')}
                  w="100%"
                  color="#95979b"
                  fontSize="12px"
                >
                  <Text textTransform={'uppercase'} fontWeight="bold">
                    Resource
                  </Text>
                  <Icon as={openSection === 'resources' ? FaPlus : FaMinus} />
                </Flex>
                <Collapse in={openSection === 'resources'}>
                  <Flex
                    direction="column"
                    alignItems="flex-start"
                    mt="20px"
                    fontSize="15px"
                    gap="15px"
                    ml="5px"
                  >
                    <Link href="/about" onClick={() => setShow(false)}>
                      <Text>About</Text>
                    </Link>
                    <Link href="/blog" onClick={() => setShow(false)}>
                      <Text>Blog</Text>
                    </Link>
                    <Link href="/privacy" onClick={() => setShow(false)}>
                      <Text>Privace and terms</Text>
                    </Link>
                  </Flex>
                </Collapse>
              </Box>

              {/* Connect Section */}
              <Box pb="10px" w="100%">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  onClick={() => toggleSection('connect')}
                  w="100%"
                  color="#95979b"
                  fontSize="12px"
                >
                  <Text textTransform={'uppercase'} fontWeight="bold">
                    Connect
                  </Text>
                  <Icon as={openSection === 'connect' ? FaPlus : FaMinus} />
                </Flex>
                <Collapse in={openSection === 'connect'}>
                  <Flex
                    mt="20px"
                    ml="5px"
                    fontSize="15px"
                    direction="column"
                    alignItems="flex-start"
                    gap="15px"
                  >
                    <Link href="/contact" onClick={() => setShow(false)}>
                      <Text>Contact Us</Text>
                    </Link>
                  </Flex>
                </Collapse>

               
               
              </Box>


              {/* <Box pb="10px" w="100%">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  onClick={() => toggleSection('delete')}
                  w="100%"
                  color="#95979b"
                  fontSize="12px"
                >
                  <Text textTransform={'uppercase'} fontWeight="bold">
                    Delete
                  </Text>
                  <Icon as={openSection === 'delete' ? FaPlus : FaMinus} />
                </Flex>
                <Collapse in={openSection === 'delete'}>
                  <Flex
                    mt="20px"
                    ml="5px"
                    fontSize="15px"
                    direction="column"
                    alignItems="flex-start"
                    gap="15px"
                  >
                    <Link href="/delete" onClick={() => setShow(false)}>
                      <Text>Delete Account</Text>
                    </Link>
                  </Flex>
                </Collapse>

               
               
              </Box> */}

            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  )
}

export default MobileHamBugerNav
