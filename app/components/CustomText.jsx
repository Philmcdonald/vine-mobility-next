import { Text } from '@chakra-ui/react'

const CustomText = ({ children, ...props }) => {
  return (
    <Text
      fontWeight={{ base: 'normal' }}
      lineHeight={{ base: '1.5' }}
      fontSize={{ base: '15px', xl: '18px' }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default CustomText
