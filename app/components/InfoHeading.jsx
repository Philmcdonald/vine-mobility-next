import { Text } from '@chakra-ui/react'

const InfoHeading = ({ children, ...props }) => {
  return (
    <Text
      fontSize={{ base: '15px', xl: '22px' }}
      fontWeight={{ base: 'bold' }}
      color={'#8fc03f'}
      {...props}
    >
      {children}
    </Text>
  )
}

export default InfoHeading
