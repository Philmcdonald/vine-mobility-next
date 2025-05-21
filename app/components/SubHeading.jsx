import { Text } from '@chakra-ui/react'

const SubHeading = ({ children, ...props }) => {
  return (
    <Text
      lineHeight={{ base: '3rem', md: '4rem' }}
      fontSize={{ base: '25px', xl: '35px' }}
      fontWeight={'bold'}
      mt={{ base: '10px' }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default SubHeading
