import { Box, Flex, Text } from '@chakra-ui/react'
import Wrapper from '@/app/components/Wrapper'
import CustomText from '@/app/components/CustomText'
import { card } from '@/app/data/landing-page.data'


const Service = () => {
  return (
    <Box bg={'#f7f7f7'} mt={{ base: '-0.5', xl: '' }}>
      <Wrapper
        py={{
          base: '45px',
          xl: '100px',
        }}
      >
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          justifyContent={'center'}
          h={'fit-content'}
          gap={5}
        >
          {card.map(({ title, content }) => {
            return (
              <Box
                bg={{ base: 'none', md: '#f7f7f7' }}
                borderRadius={{ base: '0px', md: '10px' }}
                p={{ base: '0px', md: '20px' }}
                flex={1}
                textAlign={{ base: 'left' }}
                maxW={{ base: '100%', xl: '' }}
                key={title}
              >
                <Text fontSize="25px" fontWeight={'bold'} py={'10px'}>
                  {title}
                </Text>
                <CustomText>
                  {content.map((item, index) => {
                    if (item.text && item.style) {
                      return (
                        <Text as="span" key={index} style={item.style}>
                          {item.text}
                        </Text>
                      )
                    }
                    return <span key={index}>{item}</span>
                  })}
                </CustomText>
              </Box>
            )
          })}
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Service
